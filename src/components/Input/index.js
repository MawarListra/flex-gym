import React from "react";

export const Input = ({
  label,
  value,
  required,
  changeValue,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="d-flex flex-column gap-2" style={{ marginBottom: 16 }}>
      <span
        className="text-white"
        style={{
          fontFamily: "Nunito Sans",
          fontSize: 12,
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "12px",
          marginBottom: 8,
        }}
      >
        {label} {required && <span style={{ color: "#f15c59" }}>*</span>}
      </span>
      <input
        type={type}
        style={{
          fontSize: 14,
          display: "flex",
          height: "48px",
          padding: "12px 16px",
          alignItems: "center",
          alignSelf: "stretch",
          borderRadius: "4px",
          border: "0.5px solid  #999",
        }}
        placeholder={placeholder}
      />
    </div>
  );
};
