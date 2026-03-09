import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({
  children,
  gap,
  lg,
  outline,
  variant,
  width,
  loader,
  disabled,
  ...rest
}) => {
  return (
    <StyledButton
      $lg={lg}
      $outline={outline}
      $variant={variant}
      $gap={gap}
      $width={width}
      disabled={loader || disabled}
      {...rest}>
      {loader ? <span className="loader"></span> : children}
    </StyledButton>
  );
};

export default Button;
