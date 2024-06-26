import { ReactNode, useState } from "react";
import styles from "./modal.module.scss";
import classNames from "classnames";
import Typography from "../typography/typography";
import Icon from "../icon-svg/icon-svg";

interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal = ({ isOpen, children, className, title, onClose }: ModalProps) => {
  return (
    <>
      <div
        className={classNames(
          styles.component,
          isOpen && styles.isOpen,
          className
        )}
      >
        <header className={styles.modalHeader}>
          <Typography
            tag="h2"
            tagStyle="headlineMedium"
            variant="medium"
            text={title}
          />

          <button
            title="Close button"
            className={styles.closeButton}
            onClick={onClose}
          >
            <Icon name="Close" />
          </button>
        </header>

        <div className={styles.modalBody}>{children}</div>
      </div>

      {isOpen && <div className={styles.curtain} onClick={onClose} />}
    </>
  );
};

Modal.displayName = "Modal";

export default Modal;
