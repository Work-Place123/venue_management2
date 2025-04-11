import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-4xl relative 
                      max-h-[90vh] overflow-y-auto scrollbar-hide"
           style={{ WebkitOverflowScrolling: "touch" }}> {/* ✅ Smooth Scrolling */}
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          ✖
        </button>
        {children} {/* ✅ This will render PackageDetail inside */}
      </div>
    </div>
  );
};

export default Modal;
