import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";
import { TextInput } from "../../components";

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
}) => {
  console.log("cek action", action);
  const [checkedType, setCheckedType] = useState(null);
  const [dataAccountPayment, setDataAccountPayment] = useState(
    action === "edit"
      ? datas
      : {
          type: "",
          name: "",
          accountNumber: "",
        }
  );
  console.log("cek dataAccountPayment", dataAccountPayment);

  useEffect(() => {
    if (action === "edit") {
      if (datas?.type === "bank") {
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
              <TextInput
                name="bankName"
                label="Nama Bank"
                placeholder="Nama Bank"
                isRequired={true}
                type="select"
              />
              <TextInput
                name="accountNumber"
                label="Nomor Rekening"
                placeholder="Nomor Rekening"
                isRequired={true}
                type="text"
                value={dataAccountPayment?.accountNumber}
                onChange={({ target: { value } }) =>
                  setDataAccountPayment({
                    ...dataAccountPayment,
                    accountNumber: value,
                  })
                }
              />
              <TextInput
                name="accountName"
                label="Nama Rekening"
                placeholder="Nama Rekening"
                isRequired={true}
                type="text"
                value={dataAccountPayment?.accountName}
                onChange={({ target: { value } }) =>
                  setDataAccountPayment({
                    ...dataAccountPayment,
                    accountName: value,
                  })
                }
              />
            </div>
          ) : (
            <div className="d-flex flex-column">
              <TextInput
                name="walletName"
                label="Jenis E-Wallet"
                placeholder="Jenis E-Wallet"
                isRequired={true}
                type="select"
              />
              <TextInput
                name="phoneNumber"
                label="Nomor Handphone"
                placeholder="Nomor Handphone"
                isRequired={true}
                type="text"
                value={dataAccountPayment?.accountNumber}
                onChange={({ target: { value } }) =>
                  setDataAccountPayment({
                    ...dataAccountPayment,
                    accountNumber: value,
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
            onClick={() => {
              if (action === "add") {
                setDataAccount([
                  ...dataAccount,
                  {
                    ...dataAccountPayment,
                    type: checkedType ? "bank" : "wallet",
                  },
                ]);
              } else {
                let tempDataAccount = JSON.parse(JSON.stringify(dataAccount));
                tempDataAccount[currIdx] = {
                  ...dataAccountPayment,
                  type: checkedType ? "bank" : "wallet",
                };
                setDataAccount(tempDataAccount);
              }
              toggle();
            }}
          >
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
          </Button>
          {action === "edit" && (
            <Button
              className="d-flex w-100 gap-8 justify-content-center align-items-center text-center"
              style={{
                backgroundColor: "transparent",
                height: 48,
                border: "none",
              }}
            >
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
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};
export default ModalAccountPayment;
