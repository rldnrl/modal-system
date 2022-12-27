import { ReactNode, createContext, useContext } from "react";

export const ModalContext = createContext({
  push: (node: ReactNode) => {},
});

export const useModals = () => useContext(ModalContext);
