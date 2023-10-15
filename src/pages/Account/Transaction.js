import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ChevronLeft } from "react-feather";
import infoAlert from "../../assets/icon/info_outline.svg";
import bcaIc from "../../assets/bca-removebg-preview 1.png";
import buktiTransfer from "../../assets/Text Field.png";
import { Button } from "reactstrap";

const Transaction = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("cek id", id);

  const dataTransaksi = [
    {
      id: 0,
      status: "success",
      pembelian: "Paket 1 bulan - Rp150.000 (Umum)",
      tanggal: "17 Desember 2023",
    },
    {
      id: 1,
      status: "gagal",
      pembelian: "Paket 1 bulan - Rp150.000 (Umum)",
      tanggal: "17 Desember 2023",
    },
  ];
  let data = dataTransaksi.find((e) => e?.id === parseInt(id));
  console.log("cek data", data);
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
        {data?.status === "gagal" ? (
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
              Teks ini inputan dari admin jika di tolak
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
                color: data?.status === "success" ? "#53F60F" : "#F15C59",
                fontFamily: "Nunito Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "18px",
              }}
            >
              Pembelian {data?.status === "success" ? "Berhasil" : "Gagal"}
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
              17 Desember 2023
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
                BCA
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
                0373416514 a/n Andrianto Rendragraha
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
            <div
              className="d-flex flex-row p-3 gap-2"
              style={{ borderRadius: "5px", border: "0.5px solid #999" }}
            >
              <div className="d-flex justify-content-center align-items-center">
                <img src={bcaIc} />
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
                  Bank Central Asia (BCA)
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
                  0373232121 a/n Naufal{" "}
                </span>
              </div>
            </div>
            <div
              className="d-flex flex-column justify-content-between p-3 gap-3"
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
                  1 Bulan 150.000
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
                  Rp50.000
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
                  Rp200.000
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
                <img src={buktiTransfer} />
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
                2029172_Buktitransfer.jpg{" "}
              </span>
            </div>
            {data?.status === "gagal" && (
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
