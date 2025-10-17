import Modal from '../molecules/Modal';
import { GameEngine } from '../../lib/game/GameEngine';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameEngine: GameEngine;
}

export default function MapModal({ isOpen, onClose, gameEngine }: MapModalProps) {
  const gameState = gameEngine.getGameState();
  const visitedLocations = gameState.visitedLocations;
  const currentLocation = gameState.currentLocation;

  // Definir todas las ubicaciones con sus posiciones en el mapa
  const locations = {
    // Zona inicial
    'start': { x: 176, y: 50, name: 'Inicio', color: '#374151' },
    'abandoned-cabin': { x: 100, y: 100, name: 'Cabaña', color: '#374151' },
    'cabin-attic': { x: 100, y: 150, name: 'Ático', color: '#374151' },
    'deep-forest': { x: 176, y: 100, name: 'Bosque', color: '#374151' },
    'fairy-grove': { x: 50, y: 50, name: 'Hadas', color: '#374151' },
    
    // Zona lunar
    'moonlit-clearing': { x: 176, y: 200, name: 'Claro', color: '#374151' },
    'ancient-ruins': { x: 176, y: 250, name: 'Ruinas', color: '#374151' },
    'ruins-chamber': { x: 226, y: 250, name: 'Cámara', color: '#374151' },
    'moonstone-garden': { x: 126, y: 200, name: 'Jardín', color: '#374151' },
    
    // Zona de cuevas
    'mysterious-cave': { x: 250, y: 100, name: 'Cueva', color: '#374151' },
    'cave-chamber': { x: 250, y: 150, name: 'Altar', color: '#374151' },
    'crystal-cavern': { x: 250, y: 200, name: 'Cristales', color: '#374151' },
    
    // Zona de duendes
    'goblin-camp': { x: 300, y: 100, name: 'Duendes', color: '#374151' },
    'prisoner-cage': { x: 350, y: 100, name: 'Jaula', color: '#374151' },
    'goblin-chief-tent': { x: 300, y: 150, name: 'Jefe', color: '#374151' },
    'treasure-chamber': { x: 350, y: 150, name: 'Tesoro', color: '#374151' },
    
    // Zona de hadas
    'fairy-queen-throne': { x: 50, y: 100, name: 'Reina', color: '#374151' },
    'waterfall-chamber': { x: 50, y: 150, name: 'Cascada', color: '#374151' },
    
    // Zona del troll
    'troll-bridge': { x: 100, y: 300, name: 'Troll', color: '#374151' },
    
    // Zona encantada
    'enchanted-forest': { x: 176, y: 300, name: 'Encantado', color: '#374151' },
    'dragon-lair': { x: 126, y: 350, name: 'Dragón', color: '#374151' },
    'serpent-nest': { x: 226, y: 350, name: 'Serpientes', color: '#374151' },
    'scorpion-den': { x: 176, y: 350, name: 'Escorpiones', color: '#374151' },
    
    // Zona final
    'rack-fortress': { x: 176, y: 400, name: 'Fortaleza', color: '#374151' },
    'princess-chamber': { x: 176, y: 450, name: 'Princesa', color: '#374151' },
    
    // Trampas
    'mist-labyrinth': { x: 300, y: 200, name: 'Niebla', color: '#374151' },
    'cursed-stone-circle': { x: 350, y: 200, name: 'Círculo', color: '#374151' },
    'stone-circle-center': { x: 350, y: 250, name: 'Centro', color: '#374151' },
    'stone-circle-exit': { x: 350, y: 150, name: 'Salida', color: '#374151' },
    'illusion-forest': { x: 300, y: 300, name: 'Ilusiones', color: '#374151' }
  };

  // Definir conexiones entre ubicaciones
  const connections = [
    // Conexiones principales
    { from: 'start', to: 'deep-forest' },
    { from: 'start', to: 'abandoned-cabin' },
    { from: 'start', to: 'fairy-grove' },
    { from: 'abandoned-cabin', to: 'cabin-attic' },
    { from: 'deep-forest', to: 'moonlit-clearing' },
    { from: 'deep-forest', to: 'mysterious-cave' },
    { from: 'deep-forest', to: 'goblin-camp' },
    { from: 'deep-forest', to: 'mist-labyrinth' },
    
    // Conexiones zona lunar
    { from: 'moonlit-clearing', to: 'ancient-ruins' },
    { from: 'moonlit-clearing', to: 'moonstone-garden' },
    { from: 'ancient-ruins', to: 'ruins-chamber' },
    
    // Conexiones zona cuevas
    { from: 'mysterious-cave', to: 'cave-chamber' },
    { from: 'mysterious-cave', to: 'crystal-cavern' },
    
    // Conexiones zona duendes
    { from: 'goblin-camp', to: 'prisoner-cage' },
    { from: 'goblin-camp', to: 'goblin-chief-tent' },
    { from: 'goblin-camp', to: 'cursed-stone-circle' },
    { from: 'goblin-chief-tent', to: 'treasure-chamber' },
    
    // Conexiones zona hadas
    { from: 'fairy-grove', to: 'fairy-queen-throne' },
    { from: 'fairy-queen-throne', to: 'waterfall-chamber' },
    { from: 'waterfall-chamber', to: 'troll-bridge' },
    
    // Conexiones zona encantada
    { from: 'troll-bridge', to: 'enchanted-forest' },
    { from: 'enchanted-forest', to: 'dragon-lair' },
    { from: 'enchanted-forest', to: 'serpent-nest' },
    { from: 'enchanted-forest', to: 'scorpion-den' },
    { from: 'enchanted-forest', to: 'illusion-forest' },
    
    // Conexiones zona final
    { from: 'enchanted-forest', to: 'rack-fortress' },
    { from: 'rack-fortress', to: 'princess-chamber' },
    
    // Conexiones trampas
    { from: 'cursed-stone-circle', to: 'stone-circle-center' },
    { from: 'cursed-stone-circle', to: 'stone-circle-exit' }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Mapa del Bosque Oscuro" className="w-[600px] h-[600px]">
      <div className="p-4">
        <svg width="552" height="552" viewBox="0 0 552 552" className="w-full h-full">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
            </marker>
          </defs>
          
          {/* Dibujar conexiones */}
          {connections.map((connection, index) => {
            const fromLoc = locations[connection.from as keyof typeof locations];
            const toLoc = locations[connection.to as keyof typeof locations];
            
            if (visitedLocations.includes(connection.from) && visitedLocations.includes(connection.to)) {
              return (
                <line
                  key={index}
                  x1={fromLoc.x}
                  y1={fromLoc.y}
                  x2={toLoc.x}
                  y2={toLoc.y}
                  stroke="#666"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              );
            }
            return null;
          })}
          
          {/* Dibujar ubicaciones */}
          {Object.entries(locations).map(([locationId, location]) => {
            if (visitedLocations.includes(locationId)) {
              return (
                <g key={locationId}>
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="20"
                    fill={location.color}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x={location.x}
                    y={location.y + 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    {location.name}
                  </text>
                </g>
              );
            }
            return null;
          })}
          
          {/* Resaltar ubicación actual */}
          {currentLocation && locations[currentLocation as keyof typeof locations] && (
            <circle
              cx={locations[currentLocation as keyof typeof locations].x}
              cy={locations[currentLocation as keyof typeof locations].y}
              r="25"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="3"
            />
          )}
        </svg>
        
        {/* Leyenda simplificada */}
        <div className="mt-8 flex justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
            <span className="text-gray-300">Ubicaciones descubiertas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-yellow-400 rounded-full"></div>
            <span className="text-gray-300">Ubicación actual</span>
          </div>
        </div>
        
        <div className="mt-5 text-center text-xs text-gray-400">
          Ubicaciones descubiertas: {visitedLocations.length} / 30
        </div>
      </div>
    </Modal>
  );
}
