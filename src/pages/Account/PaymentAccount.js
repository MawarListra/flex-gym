import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components";
import Logo from "../../assets/Logo.png";
import ModalAccountPayment from "./ModalAccountPayment";

const PaymentAccount = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [actionModal, setActionModal] = useState("add");
  const [dataAccountPayment, setDataAccountPayment] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [currIdx, setCurrIdx] = useState(-1);
  console.log("cek currentData", currentData);

  useEffect(() => {
    if (currentData?.type) {
      setOpenModal(true);
    }
  }, [currentData]);

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      {openModal && (
        <ModalAccountPayment
          open={openModal}
          action={actionModal}
          toggle={() => {
            setOpenModal(!openModal);
          }}
          datas={currentData}
          setDatas={setCurrentData}
          dataAccount={dataAccountPayment}
          setDataAccount={setDataAccountPayment}
          currIdx={currIdx}
        />
      )}
      <div
        className="d-flex flex-column p-3 justify-content-between w-100 gap-2"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <div
              className="d-flex flex-row justify-content-start align-items-center gap-2"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
            >
              <ChevronLeft color="white" style={{ width: 24, height: 24 }} />
              <span
                className="text-white"
                style={{
                  fontSize: 14,
                  fontFamily: "Nunito Sans",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "18px",
                }}
              >
                Kelola Akun Pembayaran
              </span>
            </div>
            <div>
              <span
                style={{
                  fontSize: 14,
                  fontFamily: "Nunito Sans",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "0.5px",
                  color: "#53F60F",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpenModal(true);
                  setActionModal("add");
                }}
              >
                Tambah
              </span>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-between gap-3"
            style={{ marginTop: 44 }}
          >
            {dataAccountPayment.map((e, i) => {
              return (
                <div
                  className="d-flex flex-row justify-content-between align-items-center px-2 py-3"
                  style={{
                    borderRadius: "5px",
                    border: "0.5px solid #999",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setCurrentData({ ...e });
                    setCurrIdx(i);
                    setActionModal("edit");
                    // setOpenModal(true);
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
                      {e?.name}
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
                      {e?.accountNumber}
                    </span>
                  </div>
                  <div className="d-flex flex-row justify-content-center align-items-center ">
                    <ChevronRight
                      color="white"
                      style={{ width: 24, height: 24 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAccount;
