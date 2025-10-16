import Button from '../atoms/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  className = ''
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-38 right-4 bg-gray-800 rounded-lg shadow-xl border border-gray-600 z-50 ${className}`}>
      <div className="p-4 border-b border-gray-600">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
