import { forwardRef } from "react";
import Typography from "../typography/typography";
import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...props }, ref) => {
    return (
      <div className={styles.component}>
        {label && (
          <Typography
            className={styles.label}
            tag="label"
            tagStyle="bodyMedium"
            text={label}
          />
        )}

        <input ref={ref} {...props} className={styles.input} />

        {errorMessage && (
          <Typography
            className={styles.errorMessage}
            tagStyle="bodySmall"
            text={errorMessage}
          />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
