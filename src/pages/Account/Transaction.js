import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ChevronLeft } from "react-feather";
import infoAlert from "../../assets/icon/info_outline.svg";
import { Button } from "reactstrap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { statusMapper } from "../../utils/statusMapper";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const Transaction = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [listAccountPayment, setListAccountPayment] = useState([]);
  const [dataAccountPayment, setDataAccountPayment] = useState({});
  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
  const data = JSON.parse(localStorage.getItem("currDataTransaction"));
  const [rekeningOption, setRekeningOption] = useState([]);

  const [bankOption, setBankOption] = useState([]);
  const [walletOption, setWalletOption] = useState([]);

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
        setListAccountPayment(resp?.data?.data);
      } else {
        toast.error("Gagal mendapatkan data. Silahkan reload page");
      }
    } catch (e) {
      toast.error("Gagal mendapatkan data. Silahkan reload page");
      console.log("cek err", e);
    }
  };

  const getDataRekeningAdmin = async () => {
    try {
      const resp = await axios.get(
        `${baseUrl}v1/rekeningadmin_type/getall`,
        config
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setRekeningOption(resp?.data?.data);
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const hitungTotal = () => {
    let val = 0;
    if (data) {
      val = Math.abs((data?.package?.price || 0) + (data?.admin_fee || 0));
    }

    return val;
  };

  useEffect(() => {
    getListAccountPayment();
    getBankList();
    getWalletList();
    getDataRekeningAdmin();
  }, []);

  useEffect(() => {
    console.log("cek listAccountPayment", listAccountPayment);
    console.log("cek data?.payment_method_id", data);
    if (listAccountPayment?.length) {
      let found = listAccountPayment.find(
        (el) => el?.id === data?.payment_method_id
      );
      if (found) {
        setDataAccountPayment({ ...found });
      }
    }
  }, [listAccountPayment]);

  useEffect(() => {
    if (!token || token === "") {
      toast.error("Session anda habis. Silahkan login kembali");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    document.querySelector("body").classList.add("scroll");
    document.querySelector("html").classList.add("scroll");
    window.onscroll = function () {};
  }, []);

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex flex-column p-3 w-100 gap-2"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="d-flex flex-row justify-content-start gap-2 align-items-center h-auto"
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
            Detail Transaksi
          </span>
        </div>
        {statusMapper(data?.is_accepted)?.status === "failed" ? (
          <div
            className="d-flex flex-row p-2  align-items-center"
            style={{ borderRadius: 5, background: "#FEE" }}
          >
            <img className="mr-2" src={infoAlert} />
            <span
              style={{
                color: "#F15C59",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              {data?.reason}
            </span>
          </div>
        ) : null}
        <div
          className="d-flex flex-column py-2 gap-2"
          style={{ borderBottom: "0.5px solid #999" }}
        >
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span
              style={{
                color: "#999",
                fontFamily: "Nunito Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "18px",
              }}
            >
              Status
            </span>
            <span
              style={{
                color: statusMapper(data?.is_accepted)?.color,
                fontFamily: "Nunito Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "18px",
              }}
            >
              {statusMapper(data?.is_accepted)?.text}
            </span>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span
              style={{
                color: "#999",
                fontFamily: "Nunito Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "18px",
              }}
            >
              Tanggal Pembelian
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
              {moment(data?.payment_date).format("DD MMMM YYYY")}
            </span>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between mt-2 pb-2 gap-2">
          <span
            style={{
              color: "#FFF",
              fontFamily: "Nunito Sans",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "22px",
            }}
          >
            Total dan Tujuan Pembayaran
          </span>
          <div className="d-flex flex-column gap-2">
            <span
              style={{
                color: "#999",
                fontFamily: "Nunito Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "18px",
              }}
            >
              Dari
            </span>
            <div
              className="d-flex flex-column p-3 gap-2"
              style={{ borderRadius: "5px", border: "0.5px solid #999" }}
            >
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
                {dataAccountPayment?.payment_type_id === 1
                  ? bankOption.find(
                      (v) => v?.id === parseInt(dataAccountPayment?.bank_name)
                    )?.name
                  : walletOption.find(
                      (v) => v?.id === parseInt(dataAccountPayment?.ewallet)
                    )?.name}
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
                {dataAccountPayment?.payment_type_id === 1
                  ? dataAccountPayment?.bank_number +
                    " a/n " +
                    dataAccountPayment?.bank_account_name
                  : dataAccountPayment?.phone}
              </span>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <span
              style={{
                color: "#999",
                fontFamily: "Nunito Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "18px",
              }}
            >
              Ke
            </span>
            {rekeningOption.map((el) => {
              return (
                <div
                  className="d-flex flex-row p-3 gap-2"
                  style={{ borderRadius: "5px", border: "0.5px solid #999" }}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={`${baseUrl}${el?.icon}`}
                      style={{ width: 24, height: 24 }}
                    />
                  </div>
                  <div className="d-flex flex-column gap-2 justify-content-between">
                    <span
                      style={{
                        color: "#fff",
                        fontFamily: "Nunito Sans",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "16px",
                      }}
                    >
                      {el?.bank_account || "-"}
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
                      {el?.bank_account_number || "-"} a/n{" "}
                      {el?.bank_account_name || "-"}{" "}
                    </span>
                  </div>
                </div>
              );
            })}
            <div
              className="d-flex flex-column justify-content-between p-3 gap-3 mt-2"
              style={{ borderRadius: "5px", border: "0.5px solid #C0C3CF" }}
            >
              <div className="d-flex flex-row justify-content-between">
                <span
                  style={{
                    color: "#999",
                    fontFamily: "Nunito Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "18px",
                  }}
                >
                  Jenis Paket
                </span>
                <span
                  style={{
                    color: "#fff",
                    fontFamily: "Nunito Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "18px",
                    textAlign: "right",
                  }}
                >
                  {data?.package?.name +
                    " " +
                    currencyFormatter(data?.package?.price)}
                </span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span
                  style={{
                    color: "#999",
                    fontFamily: "Nunito Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "18px",
                  }}
                >
                  Biaya Admin
                </span>
                <span
                  style={{
                    color: "#fff",
                    fontFamily: "Nunito Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "18px",
                    textAlign: "right",
                  }}
                >
                  {currencyFormatter(data?.admin_fee)}
                </span>
              </div>
              <div style={{ borderBottom: "0.5px solid #999" }}></div>
              <div className="d-flex flex-row justify-content-between">
                <span
                  style={{
                    color: "#fff",
                    fontFamily: "Nunito Sans",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "18px",
                  }}
                >
                  Total Pembayaran
                </span>
                <span
                  style={{
                    color: "#fff",
                    fontFamily: "Nunito Sans",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "18px",
                    textAlign: "right",
                  }}
                >
                  {currencyFormatter(hitungTotal())}
                </span>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mt-2">
              <span
                style={{
                  color: "#999",
                  fontFamily: "Nunito Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "18px",
                }}
              >
                Bukti Transfer
              </span>
              <div
                style={{
                  display: "flex",
                  width: "163px",
                  height: "93px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  className="d-flex"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={`${baseUrl}${data?.approval_photo}`}
                  alt="bukti-transfer"
                />
              </div>
              <span
                className="mt-2"
                style={{
                  color: "#999",
                  fontFamily: "Nunito Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "0.5px",
                }}
              >
                {data?.approval_image_name
                  ? data?.approval_image_name
                  : "Bukti transfer.png"}
              </span>
            </div>
            {statusMapper(data?.is_accepted)?.status === "failed" && (
              <div className="d-flex flex-column h-100 justify-content-end gap-4 mt-4">
                <div className="d-flex w-100">
                  <Button
                    className="d-flex w-100 gap-8 justify-content-center align-items-center text-center"
                    style={{
                      backgroundColor: "#53f60f",
                      borderTopLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      height: 48,
                    }}
                    onClick={() => {
                      localStorage.setItem("dataToEdit", JSON.stringify(data));
                      navigate(`/edit-detail-transaction/${id}`);
                    }}
                  >
                    <span
                      className="text-black"
                      style={{
                        color: "#030304",
                        textAlign: "center",
                        fontFamily: "Nunito Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontweight: 700,
                        lineheight: "18px" /* 128.571% */,
                      }}
                    >
                      Pergi ke Ubah Data
                    </span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
