import Numbro from "./Numbro";

export const currencyFormatter = (value = 0) => {
  if (isNaN(+value)) return `Rp0`;
  let formattedValue = `Rp${Numbro.formatCurrency(Math.abs(value))}`;
  if (value < 0) return "-" + formattedValue;
  return formattedValue;
};
