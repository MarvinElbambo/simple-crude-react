import Typography from "../typography/typography";
import styles from "./select.module.scss";

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  items?: string[];
  placeholder?: string;
}

const Select = ({
  label,
  errorMessage,
  items,
  placeholder,
  ...props
}: SelectProps) => {
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

      <select className={styles.select}>
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
          text="Error message"
        />
      )}
    </div>
  );
};

Select.displayName = "Select";

export default Select;
