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
import { useCreateFormModal, useEditFormModal } from "@/state/store";
import toast from "react-hot-toast";

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
  const setIsOpenCreateFormModal = useCreateFormModal.getState().setIsOpen;

  set(newDocRef, item)
    .then(() => {
      setIsOpenCreateFormModal(false);
      toast.success("Item create successfully");
    })
    .catch((error) => toast.error(`error message: ${error.message}`));
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
  const setIsOpenEditFormmModal = useEditFormModal.getState().setIsOpen;

  set(dbDataRef, item)
    .then(() => {
      setIsOpenEditFormmModal(false);
      toast.success("Item updated successfully");
    })
    .catch((error) => toast.error(`error message: ${error.message}`));
};

export const deleteData = async (itemId: string) => {
  const db = getDatabase(app);
  const dbDataRef = ref(db, `menu/items/${itemId}`);

  await remove(dbDataRef)
    .then(() => toast.success("Item Deleted successfully"))
    .catch((error) => toast.error(`error message: ${error.message}`));
};
