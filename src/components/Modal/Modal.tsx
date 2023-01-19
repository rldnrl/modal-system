import { KeyboardEventHandler, ReactNode, useEffect, useRef } from "react";
import "./Modal.style.css";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  // 첫 번째와 마지막 Modal을 ref로 저징한다.
  const refOuter = useRef<HTMLDivElement | null>(null);
  const refFirstFocusable = useRef<HTMLElement | null>(null);
  const refLastFocusable = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const focusableElements = [
      ...(refOuter.current?.querySelectorAll("[tabindex]") ?? []),
    ] as HTMLElement[];

    refFirstFocusable.current = focusableElements[0];
    refLastFocusable.current = focusableElements[focusableElements.length - 1];

    refFirstFocusable.current.focus();
  }, []);

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    // tab key가 last modal에 있으면 first modal에 focus 한다.
    if (
      document.activeElement === refLastFocusable.current &&
      e.key === "Tab" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      refFirstFocusable.current?.focus();
    }

    if (
      document.activeElement === refFirstFocusable.current &&
      e.key === "Tab" &&
      e.shiftKey
    ) {
      e.preventDefault();
      refLastFocusable.current?.focus();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      onClose?.();
    }
  };

  return (
    <div className="modal" ref={refOuter} onKeyDown={handleKeyDown}>
      <div className="modal-contents">
        <header>
          <button className="close-button" onClick={onClose} tabIndex={0}>
            Close
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}
