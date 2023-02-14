import { TextField } from "@mui/material";
import React from "react";

const TextFieldComponent = (props) => {
  const {type,label, id , variant, name, value, onChange, placeholder, InputProps,sx} = props
  return (
      <TextField
      type={type? type:""}
        fullWidth
        label={label}
        id={id}
        variant={variant}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={InputProps}
        sx={sx}
      />
  );
};

export default TextFieldComponent;
