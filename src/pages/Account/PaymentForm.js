import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Upload } from "react-feather";
import infoAlert from "../../assets/icon/info_outline.svg";
import bcaIc from "../../assets/bca-removebg-preview 1.png";
import buktiTransfer from "../../assets/Text Field.png";
import ProfPic from "../../assets/sporty girl workout.png";
import { TextInput } from "../../components";
import Edit from "../../assets/icon/edit.svg";
import ModalPaymentType from "./ModalPaymentType";
import { Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  const { id } = useParams();
  let isEditData = path.includes("edit-detail-transaction") ? true : false;
  const [dataPayment, setDataPayment] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const [ktp, setKtp] = useState({
    foto: useRef(null),
  });
  const [bukti, setBukti] = useState({
    foto: useRef(null),
  });
  const [imageKtp, setImageKtp] = useState({
    preview: null,
    raw: null,
    fileName: null,
  });

  const [imageBuktiTransfer, setImageBukiTransfer] = useState({
    preview: null,
    raw: null,
    fileName: null,
  });
  const packageOption = [
    {
      id: "1month",
      name: "Paket 1 Bulan - 150.000",
    },
    {
      id: "3month",
      name: "Paket 3 Bulan - 150.000",
    },
    {
      id: "6month",
      name: "Paket 6 Bulan - 150.000",
    },
    {
      id: "1year",
      name: "Paket 1 Tahun - 150.000",
    },
  ];

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

  const handleUpload = (type) => {
    let temp = null;
    if (type === "ktp") {
      temp = ktp.foto;
    } else {
      temp = bukti.foto;
    }
    temp.current.click();
  };

  const handleChangeImage = (e, type) => {
    console.log("cek here", type);
    let file = e.target.files[0];
    // if (file?.size > 2097152) {
    //   setOverSize(true);
    //   setImage({
    //     ...image,
    //     preview: null,
    //     raw: null,
    //     fileName: null,
    //   });
    // } else {
    //   setOverSize(false);
    // }

    // if (
    //   file?.type !== 'application/pdf' &&
    //   file?.type !== 'image/png' &&
    //   file?.type !== 'image/jpeg' &&
    //   file?.type !== 'image/jpg'
    // ) {
    //   setWrongFormat(true);
    //   setImage({
    //     ...image,
    //     preview: null,
    //     raw: null,
    //     fileName: null,
    //   });
    // } else {
    //   setWrongFormat(false);
    // }

    // if (
    //   file?.size <= 2097152 &&
    //   (file?.type === 'application/pdf' ||
    //     file?.type === 'image/png' ||
    //     file?.type === 'image/jpeg' ||
    //     file?.type === 'image/jpg')
    // ) {
    //   setOverSize(false);
    //   setWrongFormat(false);
    if (type === "ktp") {
      setImageKtp({
        ...imageKtp,
        preview: URL.createObjectURL(e.target.files[0]),
        raw: Object.assign(e.target.files[0]),
        fileName: e.target.files[0].name,
      });
    } else {
      setImageBukiTransfer({
        ...buktiTransfer,
        preview: URL.createObjectURL(e.target.files[0]),
        raw: Object.assign(e.target.files[0]),
        fileName: e.target.files[0].name,
      });
    }
    // uploadTransactionProof({
    //   filename: `${moment().format('X')}_${e.target.files[0].name}`,
    //   file: Object.assign(e.target.files[0], {
    //     preview: URL.createObjectURL(e.target.files[0]),
    //   }),
    // });
    // }

    e.target.value = "";
  };

  useEffect(() => {
    console.log("cek imageBuktiTransfer", imageBuktiTransfer);
    console.log("cek imageKtp", imageKtp);
  }, [imageBuktiTransfer, imageKtp]);

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      {openModal && (
        <ModalPaymentType
          open={openModal}
          toggle={() => {
            setOpenModal(!openModal);
          }}
          setDataAccount={setDataPayment}
          dataAccount={dataPayment}
        />
      )}
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
            {isEditData ? "Ubah Data" : "Perpanjang Membership"}
          </span>
        </div>
        {data?.status === "gagal" || isEditData ? (
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
        <div className="d-flex flex-column justify-content-between mt-2 pb-2 gap-2">
          {!isEditData && (
            <div className="d-flex flex-column">
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Nunito Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.5px",
                }}
              >
                Perpanjang Member
              </span>
              <span
                style={{
                  color: "#999",
                  fontFeatureSettings: "clig off liga off",
                  fontFamily: "Nunito Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: "0.5px",
                }}
              >
                Membership Kamu tersisa{" "}
                <span
                  style={{
                    color: "#F15C59",
                  }}
                >
                  5 hari lagi
                </span>
              </span>
            </div>
          )}
          <div
            className="d-flex flex-row align-items-center p-3 gap-3"
            style={{ borderRadius: "5px", border: "0.5px solid #999" }}
          >
            <div
              className="d-flex border "
              style={{
                width: 40,
                height: 40,
                borderColor: "#999",
                borderRadius: "50%",
              }}
            >
              <img
                className="d-flex contain w-100 h-100"
                src={ProfPic}
                alt="profile-picture"
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="d-flex flex-column">
              <span
                style={{
                  color: "#FFF",
                  fontfeatureSettings: "clig off liga off",
                  fontFamily: "Nunito Sans",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: 0.5,
                  marginBottom: 4,
                }}
              >
                Hi, Andrianto
              </span>

              <div
                className="d-flex flex-column"
                style={{
                  fontFamily: "Nunito Sans",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: 0.5,
                }}
              >
                <span style={{ color: "#999" }}>
                  Membership kamu hingga tanggal
                </span>
                <span style={{ color: "#F15C59" }}>8 September 2023</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <TextInput
              labelClassName="label-text-input"
              name="packageName"
              label="Pilih Paket"
              placeholder="Pilih Paket"
              isRequired={true}
              type="select"
              selectOption={packageOption}
              value={dataPayment?.packageId}
              onChange={(e) => {
                console.log("cek e>>", e);
                setDataPayment({
                  ...dataPayment,
                  packageName: e?.name,
                  packageId: e?.id,
                });
              }}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
            />
            <TextInput
              labelClassName="label-text-input"
              name="ktpNumber"
              label="Nomor KTP"
              placeholder="Nomor KTP"
              isRequired={true}
              type="text"
              value={dataPayment?.ktpNumber}
              onChange={({ target: { value } }) =>
                setDataPayment({
                  ...dataPayment,
                  ktpNumber: value,
                })
              }
            />
            {/* upload ktp */}

            <div style={{ marginBottom: "24px" }}>
              <input
                type="file"
                id="file"
                ref={ktp?.foto}
                onChange={(e) => handleChangeImage(e, "ktp")}
                style={{ display: "none" }}
                accept="image/jpg, image/jpeg, image/png, application/pdf"
              />
              <div className="d-flex flex-column justify-content-between">
                <div
                  className="upload-file-container"
                  onClick={() => handleUpload("ktp")}
                >
                  {imageKtp?.fileName ? (
                    <img
                      className="d-flex cover"
                      style={{ width: "191px", height: "93px" }}
                      src={imageKtp?.preview}
                    />
                  ) : (
                    <div className="d-flex flex-row gap-2 row-100 align-items-center">
                      <Upload width={"24px"} height={"24px"} color="white" />
                      <span
                        style={{
                          color: "#71747D",
                          fontFamily: "Nunito Sans",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "18px",
                        }}
                      >
                        Upload Foto Identitas
                      </span>
                    </div>
                  )}
                </div>
                {imageKtp?.fileName && imageKtp?.fileName !== "" && (
                  <div>
                    <span
                      style={{
                        color: "#999",
                        fontFamily: "Nunito Sans",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "0.5px",
                      }}
                    >
                      {imageKtp?.fileName}
                    </span>
                  </div>
                )}
              </div>
              {/* <div className="d-flex flex-column">
                    {wrongFormat && (
                      <span
                        className="font-size-sm mt-2"
                        style={{ color: '#F83245' }}>
                        Jenis File harus PDF, JPEG, JPG, Or PNG
                      </span>
                    )}
                    {overSize && (
                      <span
                        className="font-size-sm mt-2"
                        style={{ color: '#F83245' }}>
                        Maksimal ukuran file 2 MB
                      </span>
                    )}
                  </div> */}
            </div>

            {dataPayment?.paymentType?.accountId ? (
              <div className="d-flex flex-column gap-2 mt-2">
                <span
                  style={{
                    color: "#FFF",
                    fontFamily: "Nunito Sans",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "12px",
                  }}
                >
                  Jenis Pembayaran<span style={{ color: "#F15C59" }}>*</span>
                </span>
                <div
                  className="d-flex flex-row justify-content-between align-items-center px-2 py-3"
                  style={{
                    borderRadius: "5px",
                    border: "0.5px solid #999",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setOpenModal(!openModal);
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
                      {dataPayment?.paymentType.name}
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
                      {dataPayment?.paymentType?.accountNumber}
                    </span>
                  </div>
                  <div className="d-flex flex-row justify-content-center align-items-center ">
                    <ChevronRight
                      color="white"
                      style={{ width: 24, height: 24 }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <TextInput
                labelClassName="label-text-input"
                name="paymentType"
                label="Jenis Pembayaran"
                placeholder="Jenis Pembayaran"
                isRequired={true}
                disabled={true}
                type="text"
                endTextAddOn={
                  <img
                    onClick={() => setOpenModal(!openModal)}
                    src={Edit}
                    alt="edit"
                  />
                }
              />
            )}
            {/* upload bukti pembayaran */}

            <div style={{ marginBottom: "24px" }}>
              <input
                type="file"
                id="file"
                ref={bukti?.foto}
                onChange={(e) => handleChangeImage(e, "bukti")}
                style={{ display: "none" }}
                accept="image/jpg, image/jpeg, image/png, application/pdf"
              />
              <div className="d-flex flex-column justify-content-between">
                <div
                  className="upload-file-container"
                  onClick={() => handleUpload("bukti")}
                >
                  {imageBuktiTransfer?.fileName ? (
                    <img
                      className="d-flex cover"
                      style={{ width: "191px", height: "93px" }}
                      src={imageBuktiTransfer?.preview}
                    />
                  ) : (
                    <div className="d-flex flex-row gap-2 row-100 align-items-center">
                      <Upload width={"24px"} height={"24px"} color="white" />
                      <span
                        style={{
                          color: "#71747D",
                          fontFamily: "Nunito Sans",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "18px",
                        }}
                      >
                        Upload Files
                      </span>
                    </div>
                  )}
                </div>
                {imageBuktiTransfer?.fileName &&
                  imageBuktiTransfer?.fileName !== "" && (
                    <div>
                      <span
                        style={{
                          color: "#999",
                          fontFamily: "Nunito Sans",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "0.5px",
                        }}
                      >
                        {imageBuktiTransfer?.fileName}
                      </span>
                    </div>
                  )}
              </div>
              {/* <div className="d-flex flex-column">
                    {wrongFormat && (
                      <span
                        className="font-size-sm mt-2"
                        style={{ color: '#F83245' }}>
                        Jenis File harus PDF, JPEG, JPG, Or PNG
                      </span>
                    )}
                    {overSize && (
                      <span
                        className="font-size-sm mt-2"
                        style={{ color: '#F83245' }}>
                        Maksimal ukuran file 2 MB
                      </span>
                    )}
                  </div> */}
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <span
              style={{
                color: "#fff",
                fontFamily: "Nunito Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "22px",
              }}
            >
              Bank Transfer
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
          </div>
          <div className="d-flex flex-column gap-2 mt-2">
            <span
              style={{
                color: "#fff",
                fontFamily: "Nunito Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "22px",
              }}
            >
              Total Transfer
            </span>
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
          </div>
          <div className="d-flex flex-column h-100 justify-content-end gap-4 mt-4">
            <div className="d-flex w-100">
              <Button
                className="d-flex w-100 gap-8 justify-content-center align-items-center text-center"
                style={{
                  backgroundColor: isEditData ? "#53f60f" : "#F4EFE9",
                  borderTopLeftRadius: isEditData ? 0 : undefined,
                  borderBottomRightRadius: isEditData ? 0 : undefined,
                  height: 48,
                }}
                onClick={() => navigate(`/account`)}
              >
                <span
                  className="text-black"
                  style={{
                    color: isEditData ? "#030304" : "#71747D",
                    textAlign: "center",
                    fontFamily: "Nunito Sans",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontweight: 700,
                    lineheight: "18px" /* 128.571% */,
                  }}
                >
                  {isEditData ? "Simpan" : "Bayar Sekarang"}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
