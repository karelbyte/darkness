import CommandForm from '../molecules/CommandForm';

interface CommandsSectionProps {
  command: string;
  onCommandChange: (command: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  onShowHistory: () => void;
  onShowMap: () => void;
}

export default function CommandsSection({
  command,
  onCommandChange,
  onSubmit,
  isLoading,
  onShowHistory,
  onShowMap
}: CommandsSectionProps) {
  return (
    <div className="space-y-4">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4">Comandos</h3>
        
        <CommandForm
          command={command}
          onCommandChange={onCommandChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
          onShowHistory={onShowHistory}
          onShowMap={onShowMap}
        />

        <div className="text-sm text-gray-400 mb-4">
          <p>Comandos básicos: ir [dirección], tomar [objeto], usar [objeto], hablar [personaje], mirar [objeto], inventario, ayuda</p>
        </div>
      </div>
    </div>
  );
}
