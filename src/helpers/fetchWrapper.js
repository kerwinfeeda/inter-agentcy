import { clearCookie, getCookie } from "./common";

let trigger = false;
const debounceInterval = 1000;
let debounceTimeout;

function debounceFetch(url, requestOptions) {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  return new Promise((resolve) => {
    debounceTimeout = setTimeout(() => {
      fetch(url, requestOptions).then((res) => {
        resolve(handleResponse(res));
      });
    }, debounceInterval);
  });
}

async function handleResponse(response) {
  if (response.status === 401 && !trigger) {
    trigger = true;
    clearCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE);
    clearCookie(process.env.NEXT_PUBLIC_PSP_ALLOWED_PAGES_COOKIE);
    clearCookie(process.env.NEXT_PUBLIC_USER_ID);
    // queryClient.clear();
    // window.location.href = '/';
  }

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json(); // safely parse
    return data;
  }
  const message = await response.json();
  throw message;
}
async function handleChatResponse(response) {
  if (
    response.status === 401 &&
    !trigger &&
    getCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE)
  ) {
    trigger = true;
    clearCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE);
    clearCookie(process.env.NEXT_PUBLIC_PSP_ALLOWED_PAGES_COOKIE);
    clearCookie(process.env.process.env.NEXT_PUBLIC_USER_ID);
    window.location.href = "/";
  }

  if (response.status >= 200 && response.status < 300) {
    const data = await response; // safely parse
    return data;
  }
  const message = await response;
  throw message;
}
function get(url, debounce = false) {
  const headers = {
    "X-path": window.location.pathname,
    "Content-Type": "application/json",
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE)}`,
  };
  const requestOptions = {
    method: "GET",
    headers,
  };
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function post(url, body, debounce = false, isChat = false) {
  const headers = {
    "X-path": window.location.pathname,
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE)}`,
  };

  let requestOptions;

  if (body instanceof FormData) {
    // Don't set Content-Type, browser will handle it
    requestOptions = {
      method: "POST",
      headers,
      body,
    };
  } else {
    // Default JSON
    requestOptions = {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }

  if (debounce) return debounceFetch(url, requestOptions);
  else
    return fetch(url, requestOptions).then((res) =>
      isChat ? handleChatResponse(res) : handleResponse(res),
    );
}

function upload(url, method, body, debounce = false) {
  const headers = {
    "X-path": window.location.pathname,
    // 'Content-Type': 'multipart/form-data',
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE)}`,
  };

  const requestOptions = {
    method: method === "POST" ? "POST" : "PUT",
    headers,
    // body: JSON.stringify(body),
    body,
  };
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function put(url, body, debounce = false) {
  console.log(body instanceof FormData, "body instanceof FormData");
  const headers = {
    "X-path": window.location.pathname,
    // 'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE)}`,
  };
  let requestOptions;
  if (body instanceof FormData) {
    // Don't set Content-Type, browser will handle it
    requestOptions = {
      method: "PUT",
      headers,
      body,
    };
  } else {
    // Default JSON
    requestOptions = {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function _delete(url, body, debounce = false) {
  const headers = {
    "X-path": window.location.pathname,
    "Content-Type": "application/json",
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE)}`,
  };
  const requestOptions = {
    method: "DELETE",
    headers,
    body: JSON.stringify(body),
  };
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

function patch(url, body, debounce = false) {
  const headers = {
    "X-path": window.location.pathname,
    "Content-Type": "application/json",
    authorization: `Bearer ${getCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE)}`,
  };
  const requestOptions = {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
  };
  if (debounce) return debounceFetch(url, requestOptions);
  else return fetch(url, requestOptions).then((res) => handleResponse(res));
}

export const Fetch = {
  get,
  post,
  put,
  delete: _delete,
  patch,
  upload,
};
