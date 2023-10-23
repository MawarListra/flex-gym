import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Upload, X, Edit2 } from "react-feather";
import infoAlert from "../../assets/icon/info_outline.svg";
import bcaIc from "../../assets/bca-removebg-preview 1.png";
import buktiTransfer from "../../assets/Text Field.png";
import ProfPic from "../../assets/sporty girl workout.png";
import { TextInput } from "../../components";
import Edit from "../../assets/icon/edit.svg";
import ModalPaymentType from "./ModalPaymentType";
import { Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import Select from "react-select";
import { currencyFormatter } from "../../utils/currencyFormatter";

const baseUrl = process.env.REACT_APP_PUBLIC_URL;

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const dataUser = JSON.parse(localStorage.getItem("dataProfile"));
  const path = location.pathname.split("/");
  const { id } = useParams();
  let isEditData = path.includes("edit-detail-transaction") ? true : false;
  const [dataPayment, setDataPayment] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [packageOption, setPackageOption] = useState([false]);
  const [bankOption, setBankOption] = useState([]);
  const [walletOption, setWalletOption] = useState([]);
  const [dataProfileTransaction, setDataProfileTransaction] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  };
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

  let data = JSON.parse(localStorage.getItem("currDataTransaction"));
  console.log("cek currDataTransaction >>>>", data);

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
    let file = e?.target?.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    console.log("cek here file", file);

    // Validate file type (for example, allow only image files)
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      console.error("Invalid file type. Please select a valid image file.");
      return;
    }

    // Update state based on the type
    if (type === "ktp") {
      setImageKtp((prevState) => ({
        ...prevState,
        preview: URL.createObjectURL(file),
        raw: file,
        fileName: file.name,
      }));
    } else {
      setImageBukiTransfer((prevState) => ({
        ...prevState,
        preview: URL.createObjectURL(file),
        raw: file,
        fileName: file.name,
      }));
    }
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

  const getDataPackage = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/package_data/getall`, config);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setPackageOption(resp?.data?.data);
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const getProfileTransaction = async () => {
    try {
      const resp = await axios.get(`${baseUrl}v1/member/myprofile`, config);
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setDataProfileTransaction(resp?.data?.data);
      }
    } catch (e) {
      console.log("cek err", e);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const payload = new FormData();
    payload.append("identity_number", dataPayment?.ktpNumber);
    payload.append("admin_fee", 0);
    payload.append("payment_method_id", dataPayment?.paymentType?.id);
    payload.append("package_id", dataPayment?.packageId);
    payload.append("approval_photo", imageBuktiTransfer.raw);
    payload.append("identity", imageKtp.raw);
    payload.append("approval_image_nam", imageBuktiTransfer?.fileName);
    for (const pair of payload.entries()) {
      console.log("cek datas>>>", pair[0] + ", " + pair[1]);
    }
    try {
      const resp = await axios.post(
        `${baseUrl}v1/member/transactioncreate`,
        payload,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (resp?.status === 200 && resp?.data?.status === "success") {
        setIsLoading(false);
        toast.success("Pembayaran berhasil!");
        navigate(`/account`);
      }
    } catch (e) {
      toast.error("Pembayaran gagal!");
      console.log("cek err", e);
    }
  };

  useEffect(() => {
    getBankList();
    getWalletList();
    getDataPackage();
    getProfileTransaction();
  }, []);

  useEffect(() => {
    console.log("cek dataPayment", dataPayment);
  }, [dataPayment]);

  return (
    <div
      className="d-flex flex-column max-w-screen-sm bg-black mx-auto justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Toaster />
      {openModal && (
        <ModalPaymentType
          open={openModal}
          toggle={() => {
            setOpenModal(!openModal);
          }}
          setDataAccount={setDataPayment}
          dataAccount={dataPayment}
          bankOption={bankOption}
          walletOption={walletOption}
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
                Hi, {dataProfileTransaction?.name}
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
                <span style={{ color: "#F15C59" }}>
                  {moment(
                    new Date(dataProfileTransaction?.member_until)
                  ).format("DD MMMM YYYY")}
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column">
              <small className="font-weight-bold pb-2 text-white d-block">
                Pilih Paket
                <span style={{ color: "#F83245" }}> *</span>
              </small>
              <Select
                styles={{
                  // Fixes the overlapping problem of the component
                  menu: (provided) => ({ ...provided, zIndex: 9999 }),
                }}
                height={48}
                // isDisabled={disabled}
                placeholder={"Pilih Paket"}
                // isSearchable={search}
                options={packageOption}
                value={packageOption.find(
                  (e) => e?.id === dataPayment?.packageId
                )}
                onChange={(e) =>
                  setDataPayment({
                    ...dataPayment,
                    packageId: e?.id,
                    packageName: e?.name,
                    packagePrice: e?.price,
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
                {imageKtp?.fileName ? (
                  <div
                    className="upload-file-container"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="d-flex flex-row justify-content-between w-100 p-2"
                      style={{ position: "absolute", top: 0 }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#004FA7",
                          borderRadius: "50%",
                          width: "16px",
                          height: "16px",
                        }}
                        onClick={() => {
                          setImageKtp({
                            preview: null,
                            raw: null,
                            fileName: null,
                          });
                        }}
                      >
                        <X color="white" width={"10px"} height={"10px"} />
                      </div>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#004FA7",
                          borderRadius: "50%",
                          width: "16px",
                          height: "16px",
                        }}
                        onClick={() => handleUpload("ktp")}
                      >
                        <Edit2 color="white" width={"10px"} height={"10px"} />
                      </div>
                    </div>
                    <img
                      className="d-flex"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={imageKtp?.preview}
                    />
                  </div>
                ) : (
                  <div
                    className="upload-file-container"
                    onClick={() => handleUpload("ktp")}
                  >
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
                  </div>
                )}
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

            {dataPayment?.paymentType?.payment_type_id ? (
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
                      {dataPayment?.paymentType?.payment_type_id === 1
                        ? bankOption.find(
                            (el) =>
                              el?.id ===
                              parseInt(dataPayment?.paymentType?.bank_name)
                          )?.name
                        : walletOption.find(
                            (el) =>
                              el?.id ===
                              parseInt(dataPayment?.paymentType?.ewallet)
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
                      {dataPayment?.paymentType?.payment_type_id === 1
                        ? dataPayment?.paymentType?.bank_number
                        : dataPayment?.paymentType?.phone || "-"}
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

            <div className="mt-2" style={{ marginBottom: "24px" }}>
              <input
                type="file"
                id="file"
                ref={bukti?.foto}
                onChange={(e) => handleChangeImage(e, "bukti")}
                style={{ display: "none" }}
                accept="image/jpg, image/jpeg, image/png, application/pdf"
              />
              <div className="d-flex flex-column justify-content-between">
                {imageBuktiTransfer?.fileName ? (
                  <div
                    className="upload-file-container"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="d-flex flex-row justify-content-between w-100 p-2"
                      style={{ position: "absolute", top: 0 }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#004FA7",
                          borderRadius: "50%",
                          width: "16px",
                          height: "16px",
                        }}
                        onClick={() => {
                          setImageBukiTransfer({
                            preview: null,
                            raw: null,
                            fileName: null,
                          });
                        }}
                      >
                        <X color="white" width={"10px"} height={"10px"} />
                      </div>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#004FA7",
                          borderRadius: "50%",
                          width: "16px",
                          height: "16px",
                        }}
                        onClick={() => handleUpload("bukti")}
                      >
                        <Edit2 color="white" width={"10px"} height={"10px"} />
                      </div>
                    </div>
                    <img
                      className="d-flex"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={imageBuktiTransfer?.preview}
                    />
                  </div>
                ) : (
                  <div
                    className="upload-file-container"
                    onClick={() => handleUpload("bukti")}
                  >
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
                  </div>
                )}
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
                  {dataPayment?.packageName || "-"}
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
                  {currencyFormatter(dataProfileTransaction?.admin || 0)}
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
                  {currencyFormatter(
                    Math.abs(
                      (dataPayment?.packagePrice || 0) +
                        (dataProfileTransaction?.admin || 0)
                    )
                  )}
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
                disabled={isLoading}
                onClick={() => handleSubmit()}
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
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
