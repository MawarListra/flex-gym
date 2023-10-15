import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import clsx from "clsx";
import Select from "react-select";
import iconEyeOpen from "../../assets/icon/visibility.svg";
import iconEyeClose from "../../assets/icon/visibility_off.svg";
import calendar from "../../assets/icon/date_range.svg";
import "./style.css";

function TextInput({
  name,
  ref,
  type = "text",
  placeholder,
  label,
  labelClassName = "font-weight-bold pb-2 text-white d-block",
  labelClassAdditional,
  labelStyle = { color: "#F83245" },
  value,
  selectOption,
  handleChange,
  handleDateChange,
  handleDateTimeChange,
  startDate,
  endDate,
  minDate,
  search,
  className,
  disabled,
  isRequired,
  startTextAddOn,
  endTextAddOn,
  errorMessage,
  isError,
  customOptionLabel,
  customOptionValue,
  innerRef,
  rows = "1",
  ...props
}) {
  const textArea = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const [customHeight, setCustomHeight] = useState("auto");
  const countHeight = async () => {
    await setCustomHeight("auto");
    setCustomHeight(textArea?.current?.scrollHeight);
  };
  useEffect(() => {
    if (value?.length >= 0 && (type === "addressAuto" || type === "area")) {
      countHeight();
    }
  }, [type, value]);

  return (
    <>
      {label && (
        <small className={clsx(labelClassName, labelClassAdditional)}>
          {label} {isRequired && <span style={labelStyle}> *</span>}
        </small>
      )}
      {(type === "text" || type === "number") && (
        <InputGroup>
          {startTextAddOn && (
            // <InputGroupAddon addonType="prepend">
            <InputGroupText>{startTextAddOn}</InputGroupText>
            // </InputGroupAddon>
          )}
          <Input
            type={type}
            className={"form-input-control placeholder:placeholder-input" || ""}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            innerRef={innerRef}
            {...props}
          />
          {endTextAddOn && (
            // <InputGroupAddon addonType="append">
            <InputGroupText>{endTextAddOn}</InputGroupText>
            // </InputGroupAddon>
          )}
        </InputGroup>
      )}
      {type === "date" && (
        <InputGroup>
          <DatePicker
            className="form-input-control"
            onChange={(date) => handleDateChange(date)}
            dateFormat="yyyy-MM-dd"
            selected={value ? moment(value).toDate() : null}
            placeholderText={placeholder}
            popperPlacement="bottom-end"
            startDate={startDate}
            endDate={endDate}
            minDate={minDate ? startDate : null}
            disabled={disabled}
            {...props}
          />
        </InputGroup>
      )}
      {type === "dateWithPrepend" && (
        <input
          placeholder={placeholder}
          className="form-input-control"
          type={"date"}
        />
      )}
      {type === "datetime" && (
        <InputGroup>
          <DatePicker
            className="form-input-control placeholder:placeholder-input"
            onChange={(date) => handleDateTimeChange(date)}
            dateFormat="yyyy-MM-dd hh:mm"
            selected={value ? moment(value).toDate() : null}
            showTimeSelect
            popperPlacement="bottom-end"
            placeholderText={placeholder}
            {...props}
          />
        </InputGroup>
      )}
      {type === "select" && (
        <>
          <Select
            styles={{
              // Fixes the overlapping problem of the component
              menu: (provided) => ({ ...provided, zIndex: 9999 }),
            }}
            height={48}
            isDisabled={disabled}
            placeholder={placeholder}
            isSearchable={search}
            options={selectOption}
            value={
              value
                ? selectOption.find((e) =>
                    customOptionValue
                      ? e[customOptionValue] === value
                      : e.id === value
                  )
                : ""
            }
            onChange={handleChange}
            getOptionLabel={(option) =>
              customOptionLabel ? option[customOptionLabel] : option.name
            }
            getOptionValue={(option) =>
              customOptionValue ? option[customOptionValue] : option.id
            }
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
            {...props}
          />
        </>
      )}
      {type === "password" && (
        <div style={{ position: "relative" }}>
          <img
            src={showPassword ? iconEyeOpen : iconEyeClose}
            style={{ position: "absolute", right: 15, top: 10 }}
            onClick={() => setShowPassword(!showPassword)}
          />
          <Input
            className="form-input-control placeholder:placeholder-input"
            type={showPassword ? "text" : "password"}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            style={{ paddingRight: 35 }}
            {...props}
          />
        </div>
      )}
      {isError && (
        <small className="text-danger font-weight-lighter">
          {errorMessage}
        </small>
      )}
      {type === "addressAuto" && (
        <textarea
          rows="1"
          cols="30"
          ref={textArea}
          className="form-input-control noScrollCustom"
          placeholder=""
          type="text"
          value={value}
          name="address"
          onChange={handleChange}
          style={{ height: customHeight }}
          disabled={disabled}
        />
      )}
      {type === "area" && (
        <textarea
          ref={textArea}
          rows={rows}
          cols="30"
          className="form-input-control noScrollCustom"
          placeholder={placeholder}
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          style={{ height: customHeight }}
          disabled={disabled}
          {...props}
        />
      )}
    </>
  );
}

export default TextInput;
