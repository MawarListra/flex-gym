import React, { forwardRef } from "react";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default forwardRef(
  ({ groupStyle, value, onClick, disabled, placeholder }, ref) => (
    <InputGroup onClick={onClick} style={groupStyle}>
      <div className="input-group-append" addonType="prepend">
        <InputGroupText>
          <FontAwesomeIcon icon={["far", "calendar-alt"]} />
        </InputGroupText>
      </div>
      <input
        ref={ref}
        className="form-control"
        placeholder={placeholder}
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => {}}
      />
    </InputGroup>
  )
);
