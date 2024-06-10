import { ItemData } from "@/firebase/firbase-method";
import { create } from "zustand";

interface FormModal {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

export const useCreateFormModal = create<FormModal>((set) => ({
  isOpen: false,
  setIsOpen: (state) => {
    set({ isOpen: state });
  },
}));

interface EditFromModal extends FormModal {
  item?: ItemData;
  setItemData: (item: ItemData) => void;
}

export const useEditFormModal = create<EditFromModal>((set) => ({
  isOpen: false,
  setIsOpen: (state) => {
    set((prev) => ({ ...prev, isOpen: state }));
  },
  item: undefined,
  setItemData: (item) => set((prev) => ({ ...prev, item })),
}));
