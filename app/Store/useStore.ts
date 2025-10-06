import { create } from "zustand";

type State = {
  myTheme: string;
  menuClose: boolean;
};

type Actions = {
  setTheme: () => void;
  setMenuClose: (value:boolean) => void;
};

const useStore = create<State & Actions>((set) => ({
  myTheme: "",
  menuClose: false,
  setMenuClose: (value) => set(()=>({menuClose : value })),
  setTheme: () => set(() => ({ myTheme: localStorage.getItem("theme") as string })),
}));

export const useDefaultTheme = () => useStore((state) => state.myTheme);
export const useMenuClose = ()=> useStore((state)=>state.menuClose)
export const useSetMenuClose = ()=> useStore((state)=>state.setMenuClose)
export const useSetDefaultTheme = () => useStore((state) => state.setTheme);
