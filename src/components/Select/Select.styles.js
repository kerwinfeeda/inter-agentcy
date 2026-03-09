import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import styled, { css } from 'styled-components';
import { styles } from '../Input/Input.styles';

const Styles = css`
  .react-select__control {
    ${styles}
    color: var(--white);
    min-height: inherit;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
    border-color: ${({ error }) => error && 'var(--danger) !important'};
    box-shadow: none;
    ${({ $gray }) =>
      $gray &&
      css`
        background: #19191b;
      `}
    &:hover {
      border-color: rgba(157, 157, 157, 0.2);
    }
    &.react-select__control--is-focused,
    &.react-select__control--menu-is-open {
      border-color: rgba(157, 157, 157, 0.2);
      font-size: 14px;
      color: var(--white);
      background-color: #19191b;
    }
  }
  .react-select__placeholder {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(100% - 8px);
  }
  .react-select__value-container {
    padding-left: 0;
    padding-right: 0;
  }
  .react-select__menu {
    box-shadow: 3px 18px 30px rgba(176, 183, 195, 0.1);
    border-radius: 8px;
    border: 1px solid var(--light);
    z-index: 9;
    color: var(--white);
    background-color: #19191b;
  }

  .react-select__single-value {
    color: var(--white);
  }

  .react-select__option {
    font-size: 14px;
    cursor: pointer;

    &:active {
      color: var(--white);
      background: #19191b;
    }
  }
  .react-select__option--is-focused {
    color: var(--white);
    background: #19191b;
  }
  .react-select__option--is-selected {
    color: var(--white);
    background: #19191b;
  }

  .react-select__indicator,
  .react-select__dropdown-indicator,
  .css-1xc3v61-indicatorContainer {
    color: var(--white) !important;
    svg {
      width: 16px;
    }
  }

  ${({ isMulti }) =>
    isMulti &&
    css`
      .react-select__control {
        height: auto;
        min-height: 45px;
        font-size: 14px;
      }
      .react-select__option {
        position: relative;
        /* font-size: 14px; */
        padding-left: 42px;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 14px;
        text-transform: uppercase;

        &:before,
        &:after {
          content: '';
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          border: 1px solid var(--primary);
          border-radius: 5px;
          width: 16px;
          height: 16px;
        }
        &:hover {
          &:before,
          &:after {
            border: 1px solid var(--primary);
          }
        }
        &:after {
          content: '\\e876';
          font-family: 'Material Icons Round';
          background: var(--primary);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s linear;
          color: var(--white);
          /* font-size: 10px; */
          line-height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &.react-select__option--is-selected {
          background: none;
          color: #0f2546;
          &:after {
            opacity: 1;
            visibility: visible;
          }
          &.react-select__option--is-focused {
            background: var(--light-secondary);
          }
        }
      }
      .react-select__multi-value {
        background: rgba(157, 157, 157, 0.2);
        /* font-size: 12px; */
        line-height: 12px;
        border-radius: 60px;
        color: var(--white);
      }
      .react-select__multi-value__label {
        color: var(--white);
      }
    `}
`;

export const StyledSelect = styled(Select)`
  ${Styles}
`;

export const StyledSelectAsync = styled(AsyncSelect)`
  ${Styles}
`;
