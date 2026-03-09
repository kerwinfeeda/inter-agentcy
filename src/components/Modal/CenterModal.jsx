"use client";
import React, { useEffect, useRef } from "react";
import { ContentHolder, Head, StyledModal } from "./Modal.styles";
import { RxCross2 } from "react-icons/rx";
import ClientPortal from "@/components/ClientPortal";

const CenterModal = ({
  children,
  open,
  setOpen,
  bg,
  padding,
  width,
  radius,
  desktopRight,
  desktopTop,
  title,
  subtitle,
  headImage,
  isCloseAble = true,
  noHead,
  closeClick,
  onClose = () => {},
}) => {
  const modalRef = useRef(null);

  // Handle Body Scroll Lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleClose = () => {
    if (isCloseAble) {
      setOpen(false);
      onClose();
    }
    if (closeClick) {
      closeClick();
    }
  };

  // If the modal isn't supposed to be open, don't render anything
  if (!open) return null;

  return (
    <ClientPortal selector="#modal-root">
      <StyledModal
        ref={modalRef}
        open={open}
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleClose();
          }
        }}
      >
        <ContentHolder
          bg={bg}
          padding={padding}
          width={width}
          radius={radius}
          desktopRight={desktopRight}
          desktopTop={desktopTop}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          {!noHead && (
            <Head>
              {title && (
                <strong className="title">
                  {title} <span className="subtitle">{subtitle}</span>
                </strong>
              )}
              {headImage && <img src={headImage} alt="Icon" />}
              {isCloseAble && (
                <button
                  type="button"
                  className="closer"
                  onClick={handleClose}
                  aria-label="Close modal"
                >
                  <RxCross2 />
                </button>
              )}
            </Head>
          )}
          {children}
        </ContentHolder>
      </StyledModal>
    </ClientPortal>
  );
};

export default CenterModal;
