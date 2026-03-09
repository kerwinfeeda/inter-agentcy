import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? $gap : "5px")};
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 15px;
  line-height: 19px;
  font-weight: 400;
  width: 100%;
  max-width: ${({ $width }) => $width && $width};
  background: linear-gradient(135deg, #5a6b7a 0%, #7b8794 50%, #9aaab8 100%);
  color: var(--white);
  transition: 0.5s all ease-in-out;
  overflow: hidden;

  ${({ $loader, disabled }) =>
    $loader ||
    (disabled &&
      css`
        cursor: not-allowed;
      `)}

  ${({ $lg }) =>
    $lg &&
    css`
      padding: 16px 20px;
      font-size: 22px;
      line-height: 26px;
      font-weight: 700;
      width: ${({ $width }) => ($width ? $width : "283px")};
    `}

  /* Background-Variants-Start */
  ${({ $variant }) =>
    $variant === "white" &&
    css`
      background: var(--white);
      color: var(--primary);
      box-shadow: 0px 3px 10px 0px #0000001a;
      .loader {
        border-top: 3px solid var(--link-color) !important;
      }
    `}
  
  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background: var(--primary);
      color: var(--white);
    `}
    ${({ $variant }) =>
    $variant === "light" &&
    css`
      background: rgba(53, 91, 133, 0.05);
      color: var(--text-color);
    `}
    ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      background: #efefef;
      color: var(--text-color);
    `}
    ${({ $variant }) =>
    $variant === "secondary-outline" &&
    css`
      background: #efefef;
      color: var(--text-color);
      border: 0.5px solid rgba(157, 157, 157, 0.2);
    `}
    ${({ $variant }) =>
    $variant === "cross" &&
    css`
      background: transparent;
      color: var(--text-color);
      border: none;
      padding: 0;
    `}
    ${({ $variant }) =>
    $variant === "outline" &&
    css`
      background: var(--white);
      border: 0.5px solid rgba(157, 157, 157, 0.6);

      .loader {
        border-top: 3px solid var(--primary) !important;
      }
    `}
  ${({ $variant }) =>
    $variant === "danger" &&
    css`
      background: var(--danger);
      color: var(--white);
    `}
    ${({ $variant }) =>
    $variant === "dark" &&
    css`
      background: var(--primary);
      color: var(--white);
    `}
  /*****************Background Variants End*********************/


  /*****************Border Variants Start*********************/

  ${({ $outline }) =>
    $outline &&
    css`
      border: 1px solid #0000001a;
      background: transparent;
      color: var(--text-color);
    `}
  /*****************Border Variants End*********************/

    .loader {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    ${({ $lg }) =>
      $lg &&
      css`
        width: 27px;
        height: 27px;
      `}
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 70px;
    height: 300px;
    background: rgba(255, 255, 255, 0.7);
    transform: rotate(-35deg);
    top: -100px;
    left: -100%;
    transition: all 1500ms cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0;
  }
  &:hover {
    box-shadow:
      0px 4px 3px 0px #ffffff45 inset,
      0px -3px 5px 0px #ffffff40 inset;

    box-shadow: 0px 1px 14px 0px #1fabd300;
    &:before {
      left: 150%;
      opacity: 0.4;
    }
  }
`;
