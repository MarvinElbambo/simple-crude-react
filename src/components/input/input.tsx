import Typography from "../typography/typography";
import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = ({ label, errorMessage, ...props }: InputProps) => {
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

      <input {...props} className={styles.input} />

      {errorMessage && (
        <Typography
          className={styles.errorMessage}
          tagStyle="bodySmall"
          text="Error message"
        />
      )}
    </div>
  );
};

Input.displayName = "Input";

export default Input;
