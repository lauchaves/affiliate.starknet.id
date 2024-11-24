import React, { FunctionComponent, ReactNode } from "react";
import styles from "../../styles/components/button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: string | ReactNode;
  disabled?: boolean;
  variation?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variation = "primary",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` ${styles["nq-button"]} ${styles[variation]}`}
    >
      {children}
    </button>
  );
};

export default Button;
