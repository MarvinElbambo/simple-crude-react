import { useEffect, useState } from "react";
import app from "./firebase-config";
import {
  getDatabase,
  ref,
  set,
  push,
  remove,
  onValue,
} from "firebase/database";

export interface Item {
  category: string;
  name: string;
  variant?: string;
  price: number;
  cost: number;
  stock: number;
}

export interface ItemData extends Item {
  id: string;
}

export const createData = async (item: Item) => {
  const db = getDatabase(app);
  const newDocRef = push(ref(db, "menu/items"));

  set(newDocRef, item)
    .then(() => alert("data save successfully"))
    .catch((error) => alert(`error message: ${error.message}`));
};

export const useReadData = (): ItemData[] => {
  const [menuItems, setMenuItems] = useState<ItemData[]>([]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "menu/items");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const dataValues = snapshot.val();
        const items = Object.keys(snapshot.val()).map(
          (itemId): ItemData => ({ ...dataValues[itemId], id: itemId })
        );

        setMenuItems(items);
      } else {
        setMenuItems([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return menuItems;
};

export const updateData = async (item: Item, itemId?: string) => {
  if (!itemId) return;

  const db = getDatabase(app);
  const dbDataRef = ref(db, `menu/items/${itemId}`);

  set(dbDataRef, item)
    .then(() => alert("data updated successfully"))
    .catch((error) => alert(`error message: ${error.message}`));
};

export const deleteData = async (itemId: string) => {
  const db = getDatabase(app);
  const dbDataRef = ref(db, `menu/items/${itemId}`);

  await remove(dbDataRef)
    .then(() => alert("data deleted successfully"))
    .catch((error) => alert(`error message: ${error.message}`));
};
