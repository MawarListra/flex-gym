export const statusMapper = (is_accepted) => {
  switch (is_accepted) {
    case null:
      return {
        status: "pending",
        text: "Sedang Diproses",
        color: "#FC9D05",
      };
    case true:
      return {
        status: "success",
        text: "Pembelian Berhasil",
        color: "#53F60F",
      };
    case false:
      return {
        status: "failed",
        text: "Pembelian Gagal",
        color: "#F15C59",
      };

    default:
      return {};
  }
};
