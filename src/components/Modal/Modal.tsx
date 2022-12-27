import { ReactNode } from "react";
import "./Modal.style.css";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-contents">
        <header>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}
