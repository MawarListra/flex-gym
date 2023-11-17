import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";
import { TextInput } from "../../components";
import axios from "axios";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ModalAccountPayment = ({
  action,
  handleChange,
  open,
  toggle,
  datas,
  setDatas,
  dataAccount,
  setDataAccount,
  currIdx,
  bankOption,
  walletOption,
  loadData,
}) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
  const [isLoading, setIsLoading] = useState(false);
  const [checkedType, setCheckedType] = useState(null);
  const [dataAccountPayment, setDataAccountPayment] = useState(
    action === "edit"
      ? datas
      : {
          type: "",
          bank_name: "",
          ewallet: "",
          bank_acount: "",
          bank_number: "",
          phone: "",
          bank_account_name: "",
        }
  );

  const handleSavePaymentAccount = async () => {
    setIsLoading(true);
    const payload = checkedType
      ? {
          payment_type_id: 1,
          bank_name: dataAccountPayment?.bank_name,
          bank_account: dataAccountPayment?.bank_acount,
          bank_number: dataAccountPayment?.bank_number,
          bank_account_name: dataAccountPayment?.bank_account_name,
        }
      : {
          payment_type_id: 2,
          ewallet: dataAccountPayment?.ewallet,
          phone: dataAccountPayment?.phone,
        };
    const url =
      action === "add"
        ? "v1/payment_method/create"
        : `v1/payment_method/update/${currIdx}`;

    try {
      const resp = await (action === "add"
        ? axios.post(`${baseUrl}${url}`, payload, config)
        : axios.put(`${baseUrl}${url}`, payload, config));
      if (resp?.status === 200 && resp?.data?.status === "success") {
        toast.success("Berhasil menyimpan");
        setIsLoading(false);
        toggle();
        loadData();
      } else {
        toast.error("Gagal menyimpan. Silahkan coba lagi");
        setIsLoading(false);
        toggle();
        loadData();
      }
    } catch (e) {
      toast.error("Gagal menyimpan. Silahkan coba lagi");
      setIsLoading(false);
      toggle();
      loadData();
      console.log("cek err", e);
    }
  };

  const validateData = () => {
    if (checkedType) {
      if (
        !dataAccountPayment?.bank_name ||
        // !dataAccountPayment?.bank_acount ||
        !dataAccountPayment?.bank_number ||
        !dataAccountPayment?.bank_account_name
      ) {
        return false;
      }
    } else {
      if (!dataAccountPayment?.ewallet || !dataAccountPayment?.phone) {
        return false;
      }
    }

    return true;
  };

  const handleDeleteAccountPayment = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.delete(
        `${baseUrl}v1/payment_method/delete/${currIdx}`,
        config
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setIsLoading(false);
        toast.success("Berhasil menghapus data");
        toggle();
        loadData();
      } else {
        setIsLoading(false);
        toast.error("Gagal menghapus data. Silahkan coba lagi");
        toggle();
        loadData();
      }
    } catch (e) {
      setIsLoading(false);
      toast.error("Gagal menghapus data. Silahkan coba lagi");
      toggle();
      loadData();
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    if (action === "edit") {
      if (datas?.payment_type_id === 1) {
        setCheckedType(true);
      } else {
        setCheckedType(false);
      }
    } else {
      setCheckedType(true);
    }
  }, [datas]);

  return (
    <Modal zIndex={2000} centered isOpen={open} toggle={toggle} size="sm">
      <ModalBody
        className="d-flex flex-column p-3 gap-3"
        style={{
          backgroundColor: "#18181C",
        }}
      >
        <div>
          <span
            style={{
              color: "#FFF",
              fontFamily: "Nunito Sans",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "0.5px",
            }}
          >
            Jenis Pembayaran
          </span>
        </div>
        <div className="d-flex flex-column gap-3">
          <div
            className="d-flex flex-row gap-4"
            style={{
              color: "#FFF",
              fontFeatureSettings: "clig off liga off",
              fontFamily: "Nunito Sans",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "0.5px",
            }}
          >
            <div className="d-flex flex-row gap-1 justify-content-between align-items-center">
              <input
                name="radio1"
                type={"radio"}
                checked={checkedType === true}
                onChange={() => {
                  setCheckedType(true);
                }}
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                }}
                // disabled={action === "edit"}
              />
              <span>Bank</span>
            </div>
            <div className="d-flex flex-row gap-1 justify-content-between align-items-center">
              <input
                name="radio2"
                type={"radio"}
                checked={checkedType === false}
                onChange={() => {
                  setCheckedType(false);
                }}
                style={{
                  width: "24px",
                  height: "24px",
                  flexShrink: 0,
                }}
                // disabled={action === "edit"}
              />
              <span>Wallet</span>
            </div>
          </div>
          {checkedType ? (
            <div className="d-flex flex-column">
              <div className="d-flex flex-column mb-2">
                <small className="font-weight-bold pb-2 text-white d-block">
                  Nama Bank
                  <span style={{ color: "#F83245" }}> *</span>
                </small>
                <Select
                  styles={{
                    // Fixes the overlapping problem of the component
                    menu: (provided) => ({ ...provided, zIndex: 9999 }),
                  }}
                  height={48}
                  // isDisabled={disabled}
                  placeholder={"Nama Bank"}
                  // isSearchable={search}
                  options={bankOption}
                  value={bankOption.find(
                    (e) => e?.id === parseInt(dataAccountPayment?.bank_name)
                  )}
                  onChange={(e) =>
                    setDataAccountPayment({
                      ...dataAccountPayment,
                      bank_name: e?.id,
                    })
                  }
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  theme={(theme) => {
                    return {
                      ...theme,
                      borderRadius: "0.29rem",
                      borderWidth: 1,
                      colors: {
                        ...theme.colors,
                        primary25: "rgba(60,68,177,0.15)",
                        primary50: "rgba(60,68,177,0.15)",
                        primary: "#3c44b1",
                      },
                    };
                  }}
                />
              </div>
              <TextInput
                name="accountNumber"
                label="Nomor Rekening"
                placeholder="Nomor Rekening"
                isRequired={true}
                type="text"
                value={dataAccountPayment?.bank_number}
                onChange={({ target: { value } }) =>
                  setDataAccountPayment({
                    ...dataAccountPayment,
                    bank_number: value.replace(/\D/g, ""),
                  })
                }
              />
              <TextInput
                name="accountName"
                label="Nama Rekening"
                placeholder="Nama Rekening"
                isRequired={true}
                type="text"
                value={dataAccountPayment?.bank_account_name}
                onChange={({ target: { value } }) =>
                  setDataAccountPayment({
                    ...dataAccountPayment,
                    bank_account_name: value.replace(/[^a-zA-Z ]+/g, ""),
                  })
                }
              />
            </div>
          ) : (
            <div className="d-flex flex-column">
              <div className="d-flex flex-column">
                <small className="font-weight-bold pb-2 text-white d-block">
                  Jenis E-Wallet
                  <span style={{ color: "#F83245" }}> *</span>
                </small>
                <Select
                  styles={{
                    // Fixes the overlapping problem of the component
                    menu: (provided) => ({ ...provided, zIndex: 9999 }),
                  }}
                  height={48}
                  // isDisabled={disabled}
                  placeholder={"Jenis E-Wallet"}
                  // isSearchable={search}
                  options={walletOption}
                  value={walletOption.find(
                    (e) => e?.id === parseInt(dataAccountPayment?.ewallet)
                  )}
                  onChange={(e) =>
                    setDataAccountPayment({
                      ...dataAccountPayment,
                      ewallet: e?.id,
                    })
                  }
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  theme={(theme) => {
                    return {
                      ...theme,
                      borderRadius: "0.29rem",
                      borderWidth: 1,
                      colors: {
                        ...theme.colors,
                        primary25: "rgba(60,68,177,0.15)",
                        primary50: "rgba(60,68,177,0.15)",
                        primary: "#3c44b1",
                      },
                    };
                  }}
                />
              </div>
              <TextInput
                name="phoneNumber"
                label="Nomor Handphone"
                placeholder="Nomor Handphone"
                isRequired={true}
                type="text"
                value={dataAccountPayment?.phone}
                onChange={({ target: { value } }) =>
                  setDataAccountPayment({
                    ...dataAccountPayment,
                    phone: value.replace(/\D/g, ""),
                  })
                }
              />
            </div>
          )}
        </div>
        <div className="d-flex flex-column gap-3">
          <Button
            className="d-flex w-100 gap-8 justify-content-center align-items-center text-center"
            style={{
              backgroundColor: "#53f60f",
              borderTopLeftRadius: 0,
              borderBottomRightRadius: 0,
              height: 48,
            }}
            disabled={!validateData()}
            onClick={() => {
              handleSavePaymentAccount();
            }}
          >
            {isLoading ? (
              <ReactLoading
                type="spinningBubbles"
                width={"1.5rem"}
                height={"auto"}
                color="white"
              />
            ) : (
              <span
                className="text-black"
                style={{
                  color: "#030304",
                  textAlign: "center",
                  fontFamily: "Nunito Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontweight: 700,
                  lineheight: "18px" /* 128.571% */,
                }}
              >
                Simpan
              </span>
            )}
          </Button>
          {action === "edit" && (
            <Button
              className="d-flex w-100 gap-8 justify-content-center align-items-center text-center"
              style={{
                backgroundColor: "transparent",
                height: 48,
                border: "none",
              }}
              disabled={isLoading}
              onClick={() => {
                handleDeleteAccountPayment();
              }}
            >
              {isLoading ? (
                <ReactLoading
                  type="spinningBubbles"
                  width={"1.5rem"}
                  height={"auto"}
                  color="white"
                />
              ) : (
                <span
                  style={{
                    color: "#F15C59",
                    textAlign: "center",
                    fontFamily: "Nunito Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontweight: 700,
                    lineheight: "18px" /* 128.571% */,
                  }}
                >
                  Hapus
                </span>
              )}
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};
export default ModalAccountPayment;
