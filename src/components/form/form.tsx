import Button, { ButtonProps } from "../button/button";
import Input from "../input/input";
import Select from "../select/select";
import styles from "./form.module.scss";
import classNames from "classnames";

interface FormProps {
  className?: string;
  button?: ButtonProps;
}

const Form = ({ className, button }: FormProps) => {
  return (
    <form className={classNames(styles.component, className)}>
      <div className={styles.inputGroup}>
        <Input
          type="text"
          label="Category"
          errorMessage="Error message"
          placeholder="Enter Category"
        />

        <Input
          type="text"
          label="Name"
          errorMessage="Error message"
          placeholder="Enter Name"
        />

        <Select
          type="text"
          label="Variant (optional)"
          items={["Small", "Medium", "Large"]}
          errorMessage="Error message"
          placeholder="Select variant"
        />

        <Input
          type="number"
          label="Price"
          errorMessage="Error message"
          placeholder="Enter Price"
          min={0}
        />

        <Input
          type="number"
          label="Cost"
          errorMessage="Error message"
          placeholder="Enter Cost"
          min={0}
        />

        <Input
          type="number"
          label="Stock"
          errorMessage="Error message"
          placeholder="Enter Stock"
          min={0}
        />
      </div>

      <Button className={styles.submitButton} {...button} />
    </form>
  );
};

Form.displayName = "Form";

export default Form;
