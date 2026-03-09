"use client";

import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../Context/authContext";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "../../Router";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const StyledToastContainer = styled(ToastContainer)`
  z-index: 99999;

  .Toastify__toast {
    padding: 0;
    min-height: 0;
    border-radius: 8px;
    font-family: inherit;
  }
  .Toastify__toast--default {
    background: none;
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__close-button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;

export default function MainLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log(document.title);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          {children}
          <Router />
          <StyledToastContainer />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}
