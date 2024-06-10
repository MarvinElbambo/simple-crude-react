import app from "./firebase-config";
import { getDatabase, ref, set, push, get } from "firebase/database";

export interface Item {
  category: string;
  name: string;
  variant?: string;
  price: number;
  cost: number;
  stock: number;
}

export const createData = async (item: Item) => {
  const db = getDatabase(app);
  const newDocRef = push(ref(db, "menu/items"));

  set(newDocRef, item)
    .then(() => alert("data save successfully"))
    .catch((error) => alert(`error message: ${error.message}`));
};

export const readData = async (): Promise<Item[]> => {
  const db = getDatabase(app);
  const dbRef = ref(db, "menu/items");
  const data = await get(dbRef);

  if (data.exists()) {
    return Object.values(data.val());
  } else {
    return [];
  }
};
