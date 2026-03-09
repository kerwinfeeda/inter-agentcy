import styled, { css } from "styled-components";
import FakeInput from "../FakeInput";

export const styles = css`
  border: 1px solid
    ${({ $invalid }) =>
      $invalid ? "var(--danger)" : "rgba(157, 157, 157, 0.2)"};
  background: #131419;
  outline: none;
  height: ${({ lg }) => (lg ? "50px" : "50px")};
  padding: ${({ lg }) => (lg ? "12px 15px" : "12px 15px")};
  width: 100%;
  transition: border var(--animation-speed) ease-in-out;
  color: var(--white);
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  border-radius: ${({ $straight }) => ($straight ? "6px" : "10px")};
  padding-left: ${({ $prefix }) => $prefix && "50px"};
  padding-right: ${({ $suffix, $button }) => {
    if ($suffix) return "2.5rem";
    if ($button) return "3.6rem";
    return "";
  }};

  ${({ type }) =>
    type === "search" &&
    css`
      transition: all var(--animation-speed) ease-in-out;

      ${({ responsive }) =>
        responsive &&
        css`
          @media (max-width: 767px) {
            position: absolute;
            top: -22px;
            right: 7px;
            z-index: 9;
            box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.3);
            background: var(--white);
            border: 1px solid var(--light);
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            width: 0;
          }
          @media (max-width: 575px) {
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
          }
        `}

      ${({ openSearch }) =>
        openSearch &&
        css`
          @media (max-width: 767px) {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            width: 350px;
          }
          @media (max-width: 575px) {
            transform: translateY(0);
            width: 100%;
          }
        `}
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      color: var(--light-gray);
    `}


  ::-webkit-input-placeholder {
    color: var(--light-gray);
  }
  &::placeholder {
    color: var(--light-gray);
  }
  ::-moz-placeholder {
    color: var(--light-gray);
  }
  :-ms-input-placeholder {
    color: var(--light-gray);
  }
  :-moz-placeholder {
    color: var(--light-gray);
  }

  &[type="radio"] {
    + ${FakeInput} {
      border-radius: 100%;
      &:before {
        content: "";
        background: linear-gradient(116.03deg, #355b85 5.04%, #1b2e44 86.56%);
        border: 2px solid white;
        border-radius: 100%;
        width: 15px;
        height: 15px;
      }
    }
  }

  + ${FakeInput} {
    transition: background var(--animation-speed) ease-in-out;
    &:before,
    .icon-check {
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity var(--animation-speed) ease-in-out;
    }
  }

  &[type="checkbox"] {
    + ${FakeInput} {
      .icon-check {
        color: var(--white);
        font-size: var(--font-size-xs);
      }
    }
  }

  &[type="checkbox"],
  &[type="radio"] {
    display: none;
    &:checked {
      + ${FakeInput} {
        background: #ddfd1e;
        border-color: #ddfd1e;
        .icon-check,
        &:before {
          opacity: 1;
        }
      }
    }
    &:disabled {
      + ${FakeInput} {
        opacity: 0.5;
      }
    }
  }
`;

export const StyledTextarea = styled.textarea`
  ${styles}
  resize: vertical;
  min-height: 9.375rem;
  border-radius: 12px;

  ${({ $customHeight }) =>
    $customHeight &&
    css`
      height: 100%;
    `}
`;

export const StyledInput = styled.input`
  ${styles}
`;
