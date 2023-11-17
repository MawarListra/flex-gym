import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";
import { TextInput } from "../../components";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "react-feather";
import axios from "axios";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const ModalPaymentType = ({
  open,
  toggle,
  setDataAccount,
  dataAccount,
  bankOption,
  walletOption,
}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [checkedType, setCheckedType] = useState(null);
  const [currentData, setCurrentData] = useState({});
  const [currIdx, setCurrIdx] = useState(-1);
  const [dataAccountPayment, setDataAccountPayment] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };

  const getListAccountPayment = async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/payment_method/getall`,
        config
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setDataAccountPayment(resp?.data?.data);
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      toast.error("Gagal mendapatkan data. Silahkan reload page");
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    getListAccountPayment();
  }, []);

  return (
    <Modal zIndex={2000} centered isOpen={open} toggle={toggle} size="sm">
      <ModalBody
        className="d-flex flex-column p-3 gap-3"
        style={{
          backgroundColor: "#18181C",
        }}
      >
        <div className="d-flex flex-row justify-content-between align-items-end">
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
            Akun Bank
          </span>{" "}
          <span
            style={{
              color: "#53F60F",
              fontFamily: "Nunito Sans",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.5px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/account-payment")}
          >
            Kelola Akun
          </span>
        </div>
        <div className="d-flex flex-column gap-3">
          {dataAccountPayment.map((e, i) => {
            return (
              <div
                className="d-flex flex-row justify-content-between align-items-center px-2 py-3"
                style={{
                  borderRadius: "5px",
                  border: `0.5px solid ${currIdx === i ? `#53F60F` : `#999`}`,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCurrentData({ ...e });
                  setCurrIdx(i);
                }}
              >
                <div className="d-flex flex-column">
                  <span
                    style={{
                      color: "#999",
                      fontFamily: "Nunito Sans",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "16px",
                    }}
                  >
                    {e?.payment_type_id === 1
                      ? bankOption.find(
                          (el) => el?.id === parseInt(e?.bank_name)
                        )?.name
                      : walletOption.find(
                          (el) => el?.id === parseInt(e?.ewallet)
                        )?.name || "-"}
                  </span>
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "Nunito Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "18px",
                    }}
                  >
                    {e?.payment_type_id === 1
                      ? e?.bank_number + " a/n " + e?.bank_account_name
                      : e?.phone || "-"}
                  </span>
                </div>
              </div>
            );
          })}
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
            disabled={!currentData}
            onClick={() => {
              setDataAccount({
                ...dataAccount,
                paymentType: currentData,
              });
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
        </div>
      </ModalBody>
    </Modal>
  );
};
export default ModalPaymentType;
