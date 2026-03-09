/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-plusplus */
import { differenceInCalendarDays, format } from "date-fns";
import Compress from "react-image-file-resizer";

export const setCookie = (name, value, days, domain) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  const domainString = domain ? `; domain=${domain}` : "";

  document.cookie = `${name}=${value || ""}${expires}; path=/${domainString}`;

  return true;
};

export const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const ca = typeof document !== "undefined" && document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const clearCookie = (name) => {
  if (typeof document !== "undefined") {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  } else {
    console.warn("clearCookie function called in a non-browser environment");
  }
  return true;
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

export const getGreetingMessage = () => {
  const hours = new Date().getHours();

  if (hours >= 5 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening"; // Covers 5 PM to 4:59 AM
  }
};
export const calculatePercentage = (usedCr, totalCredits, decimals = 1) => {
  if (usedCr < 0 || totalCredits <= 0) {
    return "---";
  }
  if (usedCr > totalCredits) {
    return 100 + "%";
  }
  const obtainedPercentage = (usedCr / totalCredits) * 100;
  // const remainingPercentage = 100 - obtainedPercentage;
  return obtainedPercentage.toFixed(decimals) + "%";
};
export const convertPdfBase64 = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });

export const compressImage = (file, type = "JPEG") =>
  new Promise((resolve) => {
    Compress.imageFileResizer(
      file,
      Infinity,
      Infinity,
      type,
      70,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64",
    );
  });

export const capitalize = (str = "") => {
  const arr = str.toLowerCase().split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  return str2;
};

export const getStatusIconClass = (status = "") => {
  switch (status.trim().toLowerCase()) {
    case "pending":
      return "icon-clock";
    case "processing":
      return "icon-clock";
    case "approved":
      return "icon-check-circle";
    case "rejected":
      return "icon-error-circle";
    case "cancelled":
      return "icon-times-circle";
    default:
      return "icon-warning";
  }
};

function changeTimezone(date, ianatz) {
  // suppose the date is 12:00 UTC
  const invdate = new Date(
    date.toLocaleString("en-US", {
      timeZone: ianatz,
    }),
  );

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  const diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  return new Date(date.getTime() - diff); // needs to substract
}

export const getDateObject = (e) =>
  changeTimezone(new Date(e), "Canada/Eastern");

export const convertToCurrencyFormat = (amount = "0") =>
  `$${Number(amount)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const shortenString = (str, len = 10) => {
  if (!str) return null;
  if (str.length > len) {
    return `${str.substring(0, len)}...`;
  }
  return str;
};

export const convertReadable = (amount = 0) =>
  `${
    Math.abs(amount) > 999
      ? `${Math.sign(amount) * (Math.abs(amount) / 1000).toFixed(1)}K`
      : Math.sign(amount) * Math.abs(amount)
  }`;

export const convertToBase64 = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });

export const getVisitNo = (visit) => {
  switch (visit) {
    case 1:
      return `${String(visit)}st`;
    case 2:
      return `${String(visit)}nd`;
    case 3:
      return `${String(visit)}rd`;
    default:
      return `${String(visit)}th`;
  }
};
export const generatePsscode = (length) => {
  let zero = "";
  for (let index = 1; index < length; index++) {
    zero += "0";
  }
  const firstVal = 1 + zero;
  const secondVal = 9 + zero;
  return Math.floor(Number(firstVal) + Math.random() * Number(secondVal));
};

const validateImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image(url);
    // eslint-disable-next-line no-multi-assign
    img.onerror = img.onabort = async function () {
      reject();
    };
    img.onload = function () {
      resolve();
    };
    img.src = url;
  });

const checkValidImageProtocol = (url) => {
  if (/(http(s?)):\/\//i.test(url)) {
    return true;
  }
  return false;
};

const checkValidImageExtension = (url) => {
  if (
    ["png", "PNG", "jpg", "JPG", "jpeg", "JPEG"].includes(
      url.split(/[#?]/)[0].split(".").pop().trim(),
    )
  ) {
    return true;
  }
  return false;
};

export const checkInValidImage = async (url) => {
  try {
    await validateImage(url);
    return !(checkValidImageExtension(url) && checkValidImageProtocol(url));
  } catch (ex) {
    return true;
  }
};

export const convertDateToISO = (dateStr) => {
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
};
// Format the date
const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
export const formatDateWithSuffix = (dateObj) => {
  const date = new Date(dateObj);

  const day = format(date, "d"); // get the day without leading zeros
  const monthYear = format(date, "MMMM, yyyy"); // get the month and year
  const ordinalSuffix = getOrdinalSuffix(parseInt(day)); // get the ordinal suffix
  return `${day}${ordinalSuffix} ${monthYear}`;
};

// Calculate the number of days left
export const daysLeft = (dateObj) => {
  const date = new Date(dateObj);
  const daysLeft = differenceInCalendarDays(date, new Date());

  return daysLeft < 10 ? `0${daysLeft} days` : `${daysLeft.toString()} days`;

  // return formatDistanceToNow(date, {addSuffix: false});
};

export const bas64toFile = async (dataUrl, fileName) => {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], fileName, { type: "image/jpg" });
};

export const removeSpaces = (str = "") => {
  return str.replace(/ /g, "");
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const getPlanDescription = (planName) => {
  if (!planName) return "N/A";

  switch (planName) {
    case "Basic Plan":
      return "Perfect for LinkedIn Automated Outreach";
    case "Pro plan":
      return "Perfect for Start-Ups, Small Teams, SmB and Omni Channel Outreach";
    default:
      return "Perfect for Teams and high volume Outreach";
  }
};

export const getPlanFeatures = (plan) => {
  const credits =
    plan.product?.metadata?.credits || plan.metadata?.credits || 100;
  const planName = plan.product?.name;

  const baseFeatures = [
    "Full Access To All AI Tools",
    "Supports 5 Languages",
    "1 Credit = 1 Lead / Contacts",
    "Bulk Upload",
  ];

  switch (planName) {
    case "Basic Plan":
      return [
        "Up to 3 Personalized Lines Per lead",
        `${credits} Credits Leads`,
        ...baseFeatures,
        "Basic Support",
        "asdfsdafsdfa",
      ];

    case "Pro Plan":
      return [
        "Up to 3 Personalized Messages Per lead",
        `${credits} Credits`,
        ...baseFeatures,
        "Premium Support",
      ];

    case "Enterprise Plan":
      return [
        "Up to 3 Personalized Messages Per lead",
        `${credits} Credits`,
        ...baseFeatures,
        "Premium Support",
        "Priority Enrichment",
      ];

    default:
      return [...baseFeatures];
  }
};

export const generatePricingData = ({
  planData,
  timeline,
  icon,
  currentIcon,
  activePlanId,
}) => {
  return planData.map((plan) => ({
    id: plan.id,
    title: plan.product?.name || "N/A",
    timeLine: timeline,
    description: getPlanDescription(plan.product?.name),
    price: `$${plan.unit_amount / 100}`,
    icon,
    currentIcon,
    current: activePlanId === plan.id,
    list: getPlanFeatures(plan),
  }));
};

export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = { month: "short", day: "numeric" };
  const time = date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
  return `${date.toLocaleDateString("en-US", options)} at ${time}`;
};
// --- Helpers to fix broken JSON strings ---
export const fixQuotes = (str) => {
  return str
    .replace(/'/g, '"') // Convert single to double quotes
    .replace(/,\s*}/g, "}") // Remove trailing commas
    .replace(/,\s*]/g, "]");
};

export const parsePossiblyBrokenJson = (str) => {
  try {
    const jsonString = str.replace(/'/g, '"');
    return JSON.parse(jsonString);
  } catch {
    try {
      const fixed = fixQuotes(str);
      return JSON.parse(fixed);
    } catch {
      console.warn("Could not parse JSON, returning raw:", str);
      return str;
    }
  }
};

export const deepEqualArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const isObject = (obj) => obj && typeof obj === "object";

  const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) return false;
      return obj1.every((el, i) => deepEqual(el, obj2[i]));
    }

    if (isObject(obj1) && isObject(obj2)) {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      if (keys1.length !== keys2.length) return false;
      return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
    }

    return false;
  };

  return arr1.every((item, index) => deepEqual(item, arr2[index]));
};

export const convertToFormData = (payload, excludeKeys = []) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (excludeKeys.includes(key)) return;

    if (Array.isArray(value) && value.length && value[0] instanceof File) {
      value.forEach((file) => {
        formData.append(key, file);
      });
    } else if (value instanceof File) {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        formData.append(`${key}[${index}]`, item);
      });
    } else if (typeof value === "object" && value !== null) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};
