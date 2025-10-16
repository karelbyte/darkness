import Modal from '../molecules/Modal';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: string[];
}

export default function HistoryModal({ isOpen, onClose, messages }: HistoryModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Historial" className="w-80 h-96">
      <div className="h-80 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded text-sm ${
              message.startsWith('>') 
                ? 'bg-blue-900 text-blue-100' 
                : 'bg-gray-700 text-gray-200'
            }`}
          >
            {message}
          </div>
        ))}
      </div>
    </Modal>
  );
}
