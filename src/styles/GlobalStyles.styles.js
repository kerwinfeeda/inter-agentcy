import styled, { createGlobalStyle, css } from "styled-components";
import { ToastContainer } from "react-toastify";

export const Styling = css`
  :root {
    /* variables */
    --light-gray: #9d9d9d;
    --gray: #f9f9f9;
    --gray-50: #cfcfcf;
    --gray-100: #f1f1f1;
    --gray-150: #d9d9d9;
    --table-border: rgba(74, 85, 104, 0.1);
    --white: #fff;
    --off-white: #fffaf3;
    --text-color: #313131;
    --text-color-50: #8d8d8d;
    --black: #000;
    --dark: #505050;
    --primary: #313131;
    --primary-50: #6d91b9;
    --secondary: #222e44;
    --light: #f5faf9;
    --success: #419400;
    --danger: #d74120;
    --yellow: #fecf31;
    --body-bg: #f9fafb;
    --green: #3ea49d;
    --turquoise: #4ecdc4;
    --toastify-color-success: #408f8c;
    --toastify-icon-color-success: #408f8c;
    --toastify-color-error: rgba(215, 65, 32, 1);
    --toastify-icon-color-error: rgba(215, 65, 32, 1);
    --toastify-font-family: "DM Sans", sans-serif;

    --base-font-sans-serif: "DM Sans", sans-serif;
    --base-font-serif:
      "DM Sans", sans-serif, /* Body */ --base-text-color: var(--text-color);
    --base-background-color: var(--gray);
    --font-size-base: 16px;
    --line-height-base: 20px;
    --base-font-family: var(--base-font-sans-serif);
    --base-min-width: 375px;

    /*  Links */
    --link-color: var(--primary);

    /*  Forms */
    --form-element-padding: 0.75rem 0.9375rem;
    --form-element-padding-lg: 20px 30px;
    --form-element-border-color: var(--gray);
    --form-element-focus-border-color: var(--black);
    --placeholder-color: var(--gray);

    /* Headings */
    --h1-font-size: 3.125rem; /* 50px */
    --h2-font-size: 1.5625rem; /* 30px */
    --h3-font-size: 1.25rem; /* 20px */
    --h4-font-size: 1.125rem; /* 18px */
    --h5-font-size: 16px; /* 16px */
    --h6-font-size: 0.9375rem; /* 15px */

    --headings-font-family: var(--base-font-family);
    --headings-color: var(--text-color);

    --animation-speed: 0.3s;

    --sm: 576px;
    --md: 768px;
    --lg: 992px;
    --xl: 1200px;
    --xxl: 1440px;
  }

  html {
    font-size: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  .container {
    max-width: 1330px;
    margin: 0 auto;
    padding: 0 15px;
  }

  /*  ---------------- Helpers ---------------- */
  .success-bg {
    background: #419400;
  }
  .success-bg-50 {
    background: rgba(65, 148, 0, 0.1);
  }
  .danger-bg {
    background: rgba(215, 65, 32, 1);
  }
  .danger-bg-50 {
    background: rgba(215, 65, 32, 0.1);
  }
  .primary-bg {
    background: rgba(53, 91, 133, 1);
  }
  .primary-bg-50 {
    background: rgba(53, 91, 133, 0.1);
  }
  .secondary-bg {
    background: rgba(157, 157, 157, 1);
  }
  .secondary-bg-50 {
    background: rgba(157, 157, 157, 0.1);
  }

  .Toastify__toast-container {
    width: 320px;
  }
  .Toastify__toast-container--top-center {
    width: 480px;
  }
  .Toastify__toast {
    box-shadow: none;
  }

  /*  ---------------- Helpers ---------------- */
  .not-found {
    display: block;
    max-width: max-content;
    background: rgb(255, 235, 235);
    color: #d74120;
    padding: 15px 20px;
    border-radius: 10px;
    min-width: 200px;
    text-align: center;
    margin: 20px auto 0;
  }

  input {
    font-family: inherit;
  }

  .highcharts-range-selector-group,
  .highcharts-navigator {
    display: none;
  }

  .flex-block {
    display: flex;
    gap: 20px;
  }
  .mt-2 {
    margin-top: 30px;
  }
  .link {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: var(--success);
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
    font-family: var(--base-font-sans-serif);
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    /* color: #313131; */
    text-decoration: none;
    cursor: pointer;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }

  /* .align-middle {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  button {
    font-family: var(--base-font-sans-serif);
    padding: 0;
    border: none;
    background: none;
    outline: none;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 10px;
    color: var(--text-color);
    font-weight: 600;
  }

  h1,
  .h1 {
    font-size: 22px;
    line-height: 26px;
    text-transform: capitalize;

    @media (min-width: 576px) {
      font-size: 24px;
      line-height: 28px;
    }
    @media (min-width: 768px) {
      font-size: 28px;
      line-height: 32px;
    }
  }

  h2,
  .h2 {
    font-size: 18px;
    line-height: 20px;
    text-transform: capitalize;

    @media (min-width: 576px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  p {
    color: var(--base-text-color);
    margin: 0 0 10px;

    &:last-child {
      margin: 0;
    }
  }
  .notfound {
    max-width: max-content;
    margin: 0 auto;
    text-align: center;
    padding: 12px 15px;
    color: var(--white);
    border-radius: 8px;
    background: rgba(215, 65, 32, 1);
  }

  .domain-public-dkim{
    display: flex;
    gap: 5px;

    .text{
      -webkit-text-security: disc;
      text-security: disc;  
      font-family: 'password';   
      color: var(--light-gray);
    }
  }

  .react-datepicker-wrapper{
    width: 100%;
  }

  /************* custom scrollbar styles ************/

  /* This will work on Firefox */
  * {
    /* scrollbar-width: thin; */
    scrollbar-color: var(--text-color-50);
  }

  /* Targtes on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    color: var(--primary);
  }

  *::-webkit-scrollbar-track {
    border-radius: 30px;
    background: var(--gray-150);
  }

  *::-webkit-scrollbar-thumb {
    background: var(--text-color-50);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03);
    border-radius: 30px;
  }
  */

  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  .wrapper {
    overflow: hidden;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }

  .react-datepicker {
    font-family: var(--base-font-sans-serif);
    border: none;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
  }
  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: var(--primary);
    color: var(--white);
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: var(--primary);
    color: var(--white);
  }

  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: var(--primary);
    color: var(--white);
  }

  .react-datepicker__day--in-selecting-range:not(
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range
  ),
  .react-datepicker__month-text--in-selecting-range:not(
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range
  ),
  .react-datepicker__quarter-text--in-selecting-range:not(
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range
  ),
  .react-datepicker__year-text--in-selecting-range:not(
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range
  ) {
    background-color: var(--primary);
    color: var(--white) !important;
    opacity: 0.5;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    background-color: var(--primary);
    color: var(--white);
    opacity: 0.7;
  }
  .react-datepicker__close-icon {
    &:after {
      padding: 0 !important;
      line-height: 16px !important;
      display: block !important;
      background: var(--primary) !important;
    }
  }
  .react-datepicker__header {
    background: none;
    border: none;
    padding-bottom: 0;
    padding-top: 15px;
  }
  .react-datepicker__day-name {
    color: var(--light-gray);
    font-weight: bold;
  }
  .react-datepicker-popper {
    z-index: 9;
  }

  .date-btn {
    background: rgba(241, 241, 241, 1);
    color: var(--text-color);
    display: flex;
    justify-content: space-between;
    padding: 10px 14px;
    height: 45px;
  }
  .add-user-btn {
    padding: 10px 14px;
    height: 45px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  padding: 118px 50px 0 360px;
  min-height: 100vh;
`;
export const WithoutLayoutWrapper = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 100vh;
`;

const GlobalStyles = createGlobalStyle`
  ${Styling}
`;
export const HelperClasses = css`
  [class^="material-icons-"],
  [class*=" material-icons-"] {
    font-size: inherit;
  }
  [data-reach-menu-popover] {
    z-index: 50;
  }

  //rc picker style
  .rc-picker-dropdown {
    box-shadow: none;
  }
  .rc-picker-time-panel-cell {
    &.rc-picker-time-panel-cell-selected {
      background: var(--primary);
    }
  }
  .rc-picker-time-panel-column {
    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }
  }
  .rc-picker-panel-container {
    background: #fff;
    border-radius: 2px;
    box-shadow:
      0 3px 6px -4px #0000001f,
      0 6px 16px #00000014,
      0 9px 28px 8px #0000000d;
  }
  .rc-picker-panel {
    background: #fff;
    border: none;
  }
  .rc-picker-range-separator {
    padding-left: 15px;
    padding-right: 15px;
    font-size: var(--font-size-xl);
    line-height: 1;
  }

  .rc-picker-dropdown .rc-picker-range-arrow {
    box-shadow: 2px -2px 6px #0000000f;
  }

  .rc-picker-dropdown .rc-picker-range-arrow:after {
    display: none;
  }
  .rc-picker-dropdown .rc-picker-range-arrow:before {
    border: 5px solid var(--white);
    border-color: var(--white) var(--white) transparent transparent;
  }
  .rc-picker-body {
    padding: 10px;
  }
  .rc-picker-header {
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
    gap: 6px;
  }
  .rc-picker-footer {
    background: none !important;
    border-top: 1px solid #ccc;
    padding: 5px 10px;
  }

  .rc-picker-datetime-panel .rc-picker-time-panel {
    border-left-color: #ccc;
  }
  .rc-picker-ok {
    button {
      background: var(--primary);
      color: var(--white);
      padding: 5px 10px;
      border-radius: 3px;
      font-size: var(--font-size-sm);
    }
  }
  .rc-picker-range .rc-picker-active-bar {
    background: var(--primary);
  }

  .rc-picker-cell-in-range > .rc-picker-cell-inner {
    background: rgba(52, 219, 161, 0.4);
  }

  .rc-picker-cell-range-start > .rc-picker-cell-inner,
  .rc-picker-cell-range-end > .rc-picker-cell-inner,
  .rc-picker-cell-selected > .rc-picker-cell-inner {
    background: var(--primary);
  }
  .rc-picker-cell-today > .rc-picker-cell-inner {
    border: 1px solid var(--primary);
  }
  .rc-picker-content thead th {
    font-size: var(--font-size-xs);
  }
  .rc-picker-cell-inner:hover {
    background: rgba(171, 233, 101, 0.4);
  }
  .rc-picker-dropdown {
    z-index: var(--z-55);
  }
  .rc-picker-header-view {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    gap: 10px;
    button {
      &:hover {
        color: var(--primary);
      }
    }
  }

  .rc-picker-clear {
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    z-index: 2;
  }

  .star-rating {
    font-size: 24px !important;
  }

  .countrySelect {
    display: flex;
    align-items: center;
    gap: 10px;
    figure {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    img {
      display: block;
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
  }
`;
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
export default GlobalStyles;
