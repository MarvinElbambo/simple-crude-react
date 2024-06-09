import Form from "../form/form";

const CreateForm = () => {
  return (
    <Form
      button={{
        type: "submit",
        variant: "success",
        text: "Add",
        title: "Add item",
      }}
    />
  );
};

CreateForm.displayName = "CreateForm";

export default CreateForm;
