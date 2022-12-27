import { useModals } from "../contexts/ModalContext";

export default function Screen1() {
  const { push } = useModals();

  const showModal3 = () => {
    push(
      <div>
        modal 3 <button>close all</button>
      </div>
    );
  };

  const showModal2 = () => {
    push(
      <div>
        modal 2<button onClick={showModal3}>show modal 3</button>
      </div>
    );
  };

  const showModal1 = () => {
    push(
      <div>
        modal 1<br />
        modal 1<br />
        modal 1<br />
        modal 1<br />
        modal 1<br />
        modal 1<br />
        modal 1<button onClick={showModal2}>show modal 2</button>
      </div>
    );
  };

  return (
    <div>
      Screen 1 <button onClick={showModal1}>push a modal</button>
    </div>
  );
}
