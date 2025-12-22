import { createPortal } from "react-dom";

const ModalsContainer = ({ children, id, fullScreen = false, title, isOpen, onClose, onSave }) => {
  const container = document.getElementById("modals-root");
  if (!container) return null;

  return createPortal(
    <div
      id={id}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div className={`bg-white rounded-lg shadow-lg w-full ${fullScreen ? "h-full max-w-none" : "max-w-lg"}`}>
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-2">
          <h5 className="text-lg font-bold">{title}</h5>
          <button
            type="button"
            className="text-red-500 hover:text-red-600  cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4">{children}</div>

        {/* Footer */}
        <div className="flex justify-end gap-2 border-t px-4 py-2">
          <button
            type="button"
            className="px-4 py-2  bg-red-500 cursor-pointer text-white rounded-lg hover:bg-red-600 transition-colors"
            onClick={onClose}
          >
            انصراف
          </button>
        </div>
      </div>
    </div>,
    container
  );
};

export default ModalsContainer;
