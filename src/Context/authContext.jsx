"use client";

import React, { useState, useEffect } from "react";
import { clearCookie, getCookie, setCookie } from "../helpers/common";
import { createContextHook } from "use-context-hook";
import Toast from "../../src/components/Toast";
import authService from "../services/authService";
import { useCancellablePromise } from "../helpers/promiseHandler";
// import pages from '../nav.json';

const context = {};

export const AuthContext = createContextHook(context);

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE),
  );
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [loading_user, setLoadingUser] = useState(false);
  const [loading_user_google, setLoadingUserGoogle] = useState(false);
  const [fetch_user, setFetchUser] = useState(false);
  const { cancellablePromise } = useCancellablePromise();
  const [reFetch, setRefetch] = useState(false);
  const [allowedPages, setAllowedPages] = useState([]);
  const onLogout = async () => {
    clearCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE);
    localStorage.removeItem("agent");
    window.location.replace("/");
  };

  const getPermissions = () => {
    setLoadingUser(true);
    function handlePermissions(res) {
      setUser(res.user);
      // const newPages = pages.map(elem => elem.file);
      // setAllowedPages(newPages);
      setLoadingUser(false);
    }

    cancellablePromise(authService.getCurrentAdmin())
      .then((res) => {
        handlePermissions(res);
      })
      .catch((err) => {
        setLoadingUser(false);
        Toast({
          type: "error",
          message: err.message,
        });
      });
  };

  /**
   * @description - This function is used to fetch the user details from the server
   */
  useEffect(() => {
    if (isLoggedIn) {
      getPermissions();
    }
  }, [fetch_user, isLoggedIn]);

  const onLogin = async ({ email, password }) => {
    setLoadingUser(true);
    try {
      const res = await authService.login({
        email,
        password,
      });
      console.log(res);
      if (!res?.data?.token) {
        throw new Error(res?.message);
      }

      setCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE, res?.data?.token);
      setIsLoggedIn(true);

      if (res?.data?.isFirstLogin) {
        window.location.replace("/onboarding");
      } else {
        window.location.replace("/dashboard");
      }
    } catch (err) {
      setIsLoggedIn(false);
      setLoadingUser(false);
      Toast({
        type: "error",
        message: err.message || "Something went wrong!!",
      });
    } finally {
      setLoadingUser(false);
    }
  };
  const onGoogleLogin = async ({ access_token, type, sellerType, action }) => {
    setLoadingUserGoogle(true);
    setLoading(true);
    try {
      const res = await authService.googleLogin({
        access_token,
        action,
      });

      if (!res?.data?.token) {
        throw new Error(res?.message);
      }
      setCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE, res?.data?.token);
      setIsLoggedIn(true);
    } catch ({ message }) {
      setIsLoggedIn(false);
      setLoadingUserGoogle(false);
      Toast({ type: "error", message });
    }
  };

  const hasPermission = (perm) => user?.permissions?.includes(perm);

  return (
    <AuthContext.Provider
      value={{
        setIsLoggedIn,
        onLogout,
        onLogin,
        refetch: () => setRefetch((_) => !_),
        fetchUser: () => setFetchUser(() => !fetch_user),
        setLoading,
        hasPermission,
        loading,
        isLoggedIn,
        fetch: reFetch,
        user,
        loading_user,
        onGoogleLogin,
        loading_user_google,
        allowedPages,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
