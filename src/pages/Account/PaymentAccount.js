import React, { useEffect, useState } from "react";
import { Cast, ChevronLeft, ChevronRight } from "react-feather";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components";
import Logo from "../../assets/Logo.png";
import ModalAccountPayment from "./ModalAccountPayment";
import axios from "axios";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const PaymentAccount = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [openModal, setOpenModal] = useState(false);
  const [actionModal, setActionModal] = useState("add");
  const [dataAccountPayment, setDataAccountPayment] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [currIdx, setCurrIdx] = useState(-1);
  const [bankOption, setBankOption] = useState([]);
  const [walletOption, setWalletOption] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };

  const getBankList = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/bank_wallet/getall/1`, config);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setBankOption(resp?.data?.data);
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const getWalletList = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/bank_wallet/getall/2`, config);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setWalletOption(resp?.data?.data);
      }
    } catch (e) {
      console.log("cek err", e);
    }
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
    if (currentData?.id) {
      setOpenModal(true);
    }
  }, [currentData]);

  useEffect(() => {
    getBankList();
    getWalletList();
    getListAccountPayment();
  }, []);

  useEffect(() => {
    document.querySelector("body").classList.add("scroll");
    document.querySelector("html").classList.add("scroll");
    window.onscroll = function () {};
  }, []);

  useEffect(() => {
    if (!token || token === "") {
      toast.error("Session anda habis. Silahkan login kembali");
      navigate("/login");
    }
  }, [token]);

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Toaster />
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
          bankOption={bankOption}
          walletOption={walletOption}
          loadData={getListAccountPayment}
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
                    setCurrIdx(e?.id);
                    setActionModal("edit");
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
