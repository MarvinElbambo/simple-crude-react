import Button, { ButtonProps } from "../button/button";
import { Item } from "../forms/create-form";
import Input from "../input/input";
import Select from "../select/select";
import styles from "./form.module.scss";
import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs extends Item {}

interface FormProps {
  className?: string;
  button?: ButtonProps;
  onFormSubmit: (item: Item) => void;
}

const Form = ({ className, button, onFormSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => onFormSubmit(data);

  return (
    <form
      className={classNames(styles.component, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.inputGroup}>
        <Input
          {...register("category", { required: true })}
          type="text"
          label="Category"
          errorMessage={errors.category && "Category field is required"}
          placeholder="Enter Category"
        />

        <Input
          {...register("name", { required: true })}
          type="text"
          label="Name"
          errorMessage={errors.name && "Name field is required"}
          placeholder="Enter Name"
        />

        <Select
          {...register("variant")}
          label="Variant (optional)"
          items={["Small", "Medium", "Large"]}
          placeholder="Select variant"
        />

        <Input
          {...register("price", { required: true })}
          type="number"
          label="Price"
          errorMessage={errors.price && "Price field is required"}
          placeholder="Enter Price"
          min={0}
        />

        <Input
          {...register("cost", { required: true })}
          type="number"
          label="Cost"
          errorMessage={errors.cost && "Cost field is required"}
          placeholder="Enter Cost"
          min={0}
        />

        <Input
          {...register("stock", { required: true })}
          type="number"
          label="Stock"
          errorMessage={errors.stock && "Stock field is required"}
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
