import Badge from '../atoms/Badge';

interface LocationInfoProps {
  exits: Array<{ direction: string }>;
  items: Array<{ name: string }>;
  npcs: Array<{ name: string }>;
  onCommandClick?: (command: string) => void;
  currentCommand?: string;
}

export default function LocationInfo({ exits, items, npcs, onCommandClick, currentCommand }: LocationInfoProps) {
  const getItemCommand = (itemName: string) => {
    if (currentCommand && currentCommand.trim() !== '') {
      // Limpiar espacios extra y concatenar correctamente
      const cleanCommand = currentCommand.trim();
      return `${cleanCommand} ${itemName}`;
    } else {
      return `mirar ${itemName}`;
    }
  };

  const getNpcCommand = (npcName: string) => {
    if (currentCommand && currentCommand.trim() !== '') {
      // Limpiar espacios extra y concatenar correctamente
      const cleanCommand = currentCommand.trim();
      return `${cleanCommand} ${npcName}`;
    } else {
      return `hablar ${npcName}`;
    }
  };

  return (
    <div className="space-y-3">
      {exits.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">Rutas disponibles</h3>
          <div className="flex flex-wrap gap-2">
            {exits.map((exit, index) => (
              <button
                key={index}
                onClick={() => onCommandClick?.(`ir ${exit.direction}`)}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm transition-colors cursor-pointer"
              >
                {exit.direction}
              </button>
            ))}
          </div>
        </div>
      )}

      {items.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">Objetos visibles</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => onCommandClick?.(getItemCommand(item.name))}
                className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded-full text-sm transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {npcs.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">Personajes presentes </h3>
          <div className="flex flex-wrap gap-2">
            {npcs.map((npc, index) => (
              <button
                key={index}
                onClick={() => onCommandClick?.(getNpcCommand(npc.name))}
                className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm transition-colors cursor-pointer"
              >
                {npc.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
