import styled from "styled-components";

export const Closer = styled.div``;

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  z-index: 1;
  padding: 20px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 70;
  color: var(--white);
`;

export const ContentHolder = styled.div`
  max-width: ${({ width }) => (width ? `${width}px` : "100%")};
  width: ${({ width }) => (width ? "100%" : "")};
  padding: ${({ padding }) => padding ?? "20px"}; // must prop
  border-radius: ${({ radius }) => radius ?? "20px"};
  animation: myAnim 0.3s ease;
  background: #131419;
  max-height: 100%;
  overflow-y: auto;
  border: 2px solid rgba(157, 157, 157, 0.6);

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Head = styled.div`
  width: 100%;
  min-height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
  padding: 0 0 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(157, 157, 157, 0.6);

  .title {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    color: var(--white);
  }
  .subtitle {
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
  }
  .closer {
    position: absolute;
    top: 0;
    right: 0;
    width: 33px;
    height: 33px;
    font-size: 20px;
    line-height: 1;
    border: 2px solid var(--light-gray);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--light-gray);
    padding: 0;
    background: none;
    outline: none;
    box-shadow: none;

    &:hover {
      color: var(--white);
    }
  }

  @media (max-width: 500px) {
    .closer {
      width: 30px;
      height: 30px;
    }

    .title {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
