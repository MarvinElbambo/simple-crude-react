import { forwardRef } from "react";
import Typography from "../typography/typography";
import styles from "./select.module.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  items?: string[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, errorMessage, items, placeholder, ...props }, ref) => {
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

        <select ref={ref} className={styles.select} {...props}>
          <option className={styles.placeholder} value="">
            {placeholder}
          </option>

          {items &&
            items.map((item, index) => (
              <option key={`${item}-${index}`} value={item}>
                {item}
              </option>
            ))}
        </select>

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

Select.displayName = "Select";

export default Select;
