import React from "react";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  FormHelperText,
  IconButton
} from "@material-ui/core";

const InputTypeComponent = props => {
  const {fieldFullWidth,inputError,styles,inputDisabled,inputId,inputName,inputType,inputValue,handleInputChange,inputPlaceholder,endAdornment,endAdornmentIcon,handleEndAdornmentButtonClick,endAdornmentText,startAdornment,startAdornmentText,inputHelperText}=props
  return (
    <React.Fragment>
      <FormControl
        fullWidth={fieldFullWidth}
        error={inputError}
        style={styles}
        disabled={inputDisabled}
      >
        <InputLabel htmlFor={inputId}>{inputName}</InputLabel>
        <Input
        
        name={"endAdornment"}
          type={inputType}
          id={inputId}
          value={inputValue}
          onChange={event => handleInputChange(event)}
          placeholder={inputPlaceholder}
          endAdornment={
            endAdornment ? (
              <InputAdornment position="end">
                {" "}
                {endAdornmentIcon ? (
                  <IconButton onClick={handleEndAdornmentButtonClick}>
                    {endAdornmentIcon}
                  </IconButton>
                ) : (
                  endAdornmentText
                )}{" "}
              </InputAdornment>
            ) : (
              <React.Fragment />
            )
          }
          startAdornment={
            startAdornment ? (
              <InputAdornment position="start">
                {" "}
                {startAdornmentText}{" "}
              </InputAdornment>
            ) : (
              <React.Fragment />
            )
          }
        />
        <FormHelperText> {inputHelperText} </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default InputTypeComponent;
