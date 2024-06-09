import React from "react";
import Form from "../form/form";

const EditForm = () => {
  return (
    <Form
      button={{
        type: "submit",
        variant: "success",
        text: "Update",
        title: "Update item",
      }}
    />
  );
};

EditForm.displayName = "EditForm";

export default EditForm;
