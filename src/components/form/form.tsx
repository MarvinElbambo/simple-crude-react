import { Item, ItemData } from "@/firebase/firbase-method";
import Button, { ButtonProps } from "../button/button";
import Input from "../input/input";
import Select from "../select/select";
import styles from "./form.module.scss";
import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs extends Item {}

interface FormProps {
  className?: string;
  button?: ButtonProps;
  onFormSubmit: (item: Item, itemId?: string) => void;
  item?: ItemData;
}

const Form = ({ className, button, onFormSubmit, item }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    onFormSubmit(data, item?.id);

  return (
    <form
      className={classNames(styles.component, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.inputGroup}>
        <Input
          {...register("category", { required: true, value: item?.category })}
          type="text"
          label="Category"
          errorMessage={errors.category && "Category field is required"}
          placeholder="Enter Category"
        />

        <Input
          {...register("name", { required: true, value: item?.name })}
          type="text"
          label="Name"
          errorMessage={errors.name && "Name field is required"}
          placeholder="Enter Name"
        />

        <Select
          {...register("variant", { value: item?.variant })}
          label="Variant (optional)"
          items={["Small", "Medium", "Large"]}
          placeholder="Select variant"
        />

        <Input
          {...register("price", { required: true, value: item?.price })}
          type="number"
          label="Price"
          errorMessage={errors.price && "Price field is required"}
          placeholder="Enter Price"
          min={0}
        />

        <Input
          {...register("cost", { required: true, value: item?.cost })}
          type="number"
          label="Cost"
          errorMessage={errors.cost && "Cost field is required"}
          placeholder="Enter Cost"
          min={0}
        />

        <Input
          {...register("stock", { required: true, value: item?.stock })}
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
