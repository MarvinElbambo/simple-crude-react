import Link from "next/link";
import styles from "./button.module.scss";
import classNames from "classnames";
import { toUpperCase } from "lib/functions/string-functions";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: String;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button = ({
  className,
  children,
  text,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        styles.component,
        variant && styles[`is${toUpperCase(variant, "first")}`],
        className
      )}
    >
      {text ? text : children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
