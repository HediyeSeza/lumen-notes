import type { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center

        bg-black/40
        backdrop-blur-sm

        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-lg

          rounded-3xl

          border
          border-slate-200
          dark:border-slate-700

          bg-white
          dark:bg-slate-900

          p-8

          shadow-2xl

          transition-all
          duration-300
        "
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;