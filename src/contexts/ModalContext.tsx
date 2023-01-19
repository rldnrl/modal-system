import { ReactNode, createContext, useContext } from "react";

export const ModalContext = createContext({
  push: (node: ReactNode, trigger: HTMLElement) => {},
});

export const useModals = () => useContext(ModalContext);
