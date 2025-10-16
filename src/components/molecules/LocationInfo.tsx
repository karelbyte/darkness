import Badge from '../atoms/Badge';

interface LocationInfoProps {
  exits: Array<{ direction: string }>;
  items: Array<{ name: string }>;
  npcs: Array<{ name: string }>;
}

export default function LocationInfo({ exits, items, npcs }: LocationInfoProps) {
  return (
    <div className="space-y-3">
      {exits.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">Salidas disponibles:</h3>
          <div className="flex flex-wrap gap-2">
            {exits.map((exit, index) => (
              <Badge key={index} variant="blue">
                {exit.direction}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {items.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">Objetos visibles:</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <Badge key={index} variant="green">
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {npcs.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">Personajes presentes:</h3>
          <div className="flex flex-wrap gap-2">
            {npcs.map((npc, index) => (
              <Badge key={index} variant="purple">
                {npc.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
