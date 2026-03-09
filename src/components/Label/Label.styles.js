import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 10px;

  pointer-events: ${({ $onlyRead }) => $onlyRead && 'none'};
  ${({ labelIcon }) =>
    labelIcon &&
    css`
      display: flex;
      align-items: center;
    `}
  ${({ $labelReverse }) =>
    $labelReverse &&
    css`
      position: relative;
      .label {
        flex-direction: row-reverse;
      }
    `};
  .label {
    display: flex;
    /* align-items: center; */
  }
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  font-size: 14px;
`;
