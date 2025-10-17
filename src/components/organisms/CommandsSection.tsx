import CommandForm from '../molecules/CommandForm';

interface CommandsSectionProps {
  command: string;
  onCommandChange: (command: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  onShowHistory: () => void;
  onShowMap: () => void;
  lastMessage?: string;
}

export default function CommandsSection({
  command,
  onCommandChange,
  onSubmit,
  isLoading,
  onShowHistory,
  onShowMap,
  lastMessage
}: CommandsSectionProps) {
  return (
    <div className="">
      {lastMessage && (
        <div className="px-2 py-2 bg-gray-700 rounded-lg mx-2">
          <p className="text-white text-sm">{lastMessage}</p>
        </div>
      )}
      
      <div className="p-2">
        <h3 className="text-lg font-semibold ">Comandos</h3>
        
        <CommandForm
          command={command}
          onCommandChange={onCommandChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
          onShowHistory={onShowHistory}
          onShowMap={onShowMap}
        />

        <div className="text-sm text-gray-400 mb-2">
          <p className="mb-2">Comandos básicos:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCommandChange('ir ')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              ir [dirección]
            </button>
            <button
              onClick={() => onCommandChange('tomar ')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              tomar [objeto]
            </button>
            <button
              onClick={() => onCommandChange('usar ')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              usar [objeto]
            </button>
            <button
              onClick={() => onCommandChange('hablar ')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              hablar [personaje]
            </button>
            <button
              onClick={() => onCommandChange('mirar ')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              mirar [objeto]
            </button>
            <button
              onClick={() => onCommandChange('inventario')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              inventario
            </button>
            <button
              onClick={() => onCommandChange('luchar ')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              luchar [enemigo]
            </button>
            <button
              onClick={() => onCommandChange('responder ')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              responder [respuesta]
            </button>
            <button
              onClick={() => onCommandChange('liberar ')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              liberar [prisionero]
            </button>
            <button
              onClick={() => onCommandChange('curar')}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
            >
              curar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
