import { create } from "zustand";

interface SheetState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSheetStore = create<SheetState>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
