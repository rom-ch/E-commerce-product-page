import { useEffect } from "react";
import { createPortal } from "react-dom";

export function CustomModal({ children, onClose }) {
  useEffect(() => {
    function handle(e) {
      if (e.key === "Escape") return onClose();
    }

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose]);

  return createPortal(
    <div className="absolute inset-0 flex items-center justify-center bg-black/80">
      <div className="relative">
        <button
          onClick={onClose}
          className="group absolute -top-12 right-0 flex size-10 cursor-pointer items-center justify-center"
        >
          <svg
            className="size-6"
            fill="currentColor"
            viewBox="0 0 14 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-secondary-100 group-hover:fill-primary-400"
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.querySelector("#modal-container"),
  );
}
