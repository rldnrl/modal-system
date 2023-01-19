import { ReactNode, useState, useMemo, useId, ReactElement } from "react";
import "./App.css";
import { ModalContext } from "./contexts/ModalContext";
import Modal from "./components/Modal";
import { uuid } from "./utils/uuid";
import Screen1 from "./components/Screen1";

function App() {
  const [modals, setModals] = useState<ReactElement[]>([]);

  const actions = useMemo(
    () => ({
      push: (node: ReactNode, trigger: HTMLElement) => {
        const key = uuid();

        const onClose = () => {
          trigger.focus();
          setModals((preModals) =>
            preModals.filter((modal) => modal.key !== key)
          );
        };

        const modal = (
          <Modal key={key} onClose={onClose}>
            {node}
          </Modal>
        );
        setModals((prevModals) => [...prevModals, modal]);
      },
    }),
    []
  );

  return (
    <ModalContext.Provider value={actions}>
      <div className="App">
        {modals}
        <Screen1 />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
