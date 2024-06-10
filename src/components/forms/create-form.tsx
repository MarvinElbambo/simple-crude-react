import Form from "../form/form";
import app from "@/firebase-config";
import { getDatabase, ref, set, push } from "firebase/database";

export interface Item {
  category: string;
  name: string;
  variant?: string;
  price: number;
  cost: number;
  stock: number;
}

const CreateForm = () => {
  const saveData = async (item: Item) => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "menu/items"));
    set(newDocRef, { item })
      .then(() => alert("data save successfully"))
      .catch((error) => alert(`error message: ${error.message}`));
  };

  return (
    <Form
      onFormSubmit={saveData}
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
