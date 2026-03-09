import React from "react";
import { toast } from "react-toastify";
import { StyledAlert, Message } from "./Toast.styles";

function Toast({ type, message, ...props }) {
  return toast(
    <>
      <StyledAlert $type={type} {...props}>
        <Message $type={type}>{message}</Message>
      </StyledAlert>
    </>,
    {
      hideProgressBar: true,
      autoClose: 2000,
    },
  );
}

export default Toast;
