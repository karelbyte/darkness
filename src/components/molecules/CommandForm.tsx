import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface CommandFormProps {
  command: string;
  onCommandChange: (command: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  onShowHistory: () => void;
  onShowMap: () => void;
}

export default function CommandForm({
  command,
  onCommandChange,
  onSubmit,
  isLoading,
  onShowHistory,
  onShowMap
}: CommandFormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="flex gap-2">
        <Input
          value={command}
          onChange={onCommandChange}
          placeholder="Escribe tu comando aquí..."
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !command.trim()}
          variant="primary"
        >
          {isLoading ? '...' : 'Enviar'}
        </Button>
        <Button
          type="button"
          onClick={onShowHistory}
          variant="secondary"
        >
          Historial
        </Button>
        <Button
          type="button"
          onClick={onShowMap}
          variant="success"
        >
          Mapa
        </Button>
      </div>
    </form>
  );
}
