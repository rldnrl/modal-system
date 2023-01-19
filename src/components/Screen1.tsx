import { MouseEventHandler } from "react";
import { useModals } from "../contexts/ModalContext";

export default function Screen1() {
  const { push } = useModals();

  const showModal3: MouseEventHandler<HTMLElement> = (e) => {
    push(
      <div>
        modal 3<br />
        <button tabIndex={0}>close all</button>
      </div>,
      e.currentTarget
    );
  };

  const showModal2: MouseEventHandler<HTMLElement> = (e) => {
    push(
      <div>
        modal 2<br />
        modal 2<br />
        modal 2<br />
        modal 2<br />
        <button onClick={showModal3} tabIndex={0}>
          show modal 3
        </button>
      </div>,
      e.currentTarget
    );
  };

  const showModal1: MouseEventHandler<HTMLElement> = (e) => {
    push(
      <div>
        modal 1<br />
        modal 1<br />
        modal 1<br />
        modal 1<br />
        modal 1<br />
        modal 1<br />
        modal 1<br />
        <button onClick={showModal2} tabIndex={0}>
          show modal 2
        </button>
      </div>,
      e.currentTarget
    );
  };

  return (
    <div>
      Screen 1 <button onClick={showModal1}>push a modal</button>
    </div>
  );
}
