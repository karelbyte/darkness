import Modal from '../molecules/Modal';
import { GameEngine } from '../../lib/game/GameEngine';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameEngine: GameEngine;
}

export default function MapModal({ isOpen, onClose, gameEngine }: MapModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Mapa del Bosque" className="w-96 h-96">
      <div className="p-4">
        <svg width="352" height="352" viewBox="0 0 352 352" className="w-full h-full">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
            </marker>
          </defs>
          
          {gameEngine.getGameState().visitedLocations.includes('start') && gameEngine.getGameState().visitedLocations.includes('deep-forest') && (
            <line x1="176" y1="50" x2="176" y2="100" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          )}
          {gameEngine.getGameState().visitedLocations.includes('deep-forest') && gameEngine.getGameState().visitedLocations.includes('moonlit-clearing') && (
            <line x1="176" y1="150" x2="176" y2="200" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          )}
          {gameEngine.getGameState().visitedLocations.includes('moonlit-clearing') && (
            <line x1="176" y1="250" x2="176" y2="300" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          )}
          {gameEngine.getGameState().visitedLocations.includes('start') && gameEngine.getGameState().visitedLocations.includes('abandoned-cabin') && (
            <line x1="100" y1="150" x2="150" y2="150" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          )}
          {gameEngine.getGameState().visitedLocations.includes('deep-forest') && gameEngine.getGameState().visitedLocations.includes('mysterious-cave') && (
            <line x1="200" y1="150" x2="250" y2="150" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          )}
          {gameEngine.getGameState().visitedLocations.includes('abandoned-cabin') && gameEngine.getGameState().visitedLocations.includes('cabin-attic') && (
            <line x1="100" y1="200" x2="150" y2="200" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          )}
          {gameEngine.getGameState().visitedLocations.includes('mysterious-cave') && gameEngine.getGameState().visitedLocations.includes('cave-chamber') && (
            <line x1="200" y1="200" x2="250" y2="200" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
          )}
          
          {gameEngine.getGameState().visitedLocations.includes('start') && (
            <>
              <circle cx="176" cy="50" r="20" fill="#4ade80" stroke="#fff" strokeWidth="2" />
              <text x="176" y="55" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Inicio</text>
            </>
          )}
          
          {gameEngine.getGameState().visitedLocations.includes('deep-forest') && (
            <>
              <circle cx="176" cy="150" r="20" fill="#4ade80" stroke="#fff" strokeWidth="2" />
              <text x="176" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Bosque</text>
            </>
          )}
          
          {gameEngine.getGameState().visitedLocations.includes('moonlit-clearing') && (
            <>
              <circle cx="176" cy="250" r="20" fill="#4ade80" stroke="#fff" strokeWidth="2" />
              <text x="176" y="255" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Claro</text>
            </>
          )}
          
          {gameEngine.getGameState().visitedLocations.includes('abandoned-cabin') && (
            <>
              <circle cx="100" cy="150" r="20" fill="#4ade80" stroke="#fff" strokeWidth="2" />
              <text x="100" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Cabaña</text>
            </>
          )}
          
          {gameEngine.getGameState().visitedLocations.includes('mysterious-cave') && (
            <>
              <circle cx="250" cy="150" r="20" fill="#4ade80" stroke="#fff" strokeWidth="2" />
              <text x="250" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Cueva</text>
            </>
          )}
          
          {gameEngine.getGameState().visitedLocations.includes('cabin-attic') && (
            <>
              <circle cx="100" cy="200" r="20" fill="#4ade80" stroke="#fff" strokeWidth="2" />
              <text x="100" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Ático</text>
            </>
          )}
          
          {gameEngine.getGameState().visitedLocations.includes('cave-chamber') && (
            <>
              <circle cx="250" cy="200" r="20" fill="#4ade80" stroke="#fff" strokeWidth="2" />
              <text x="250" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Cámara</text>
            </>
          )}
          
          {gameEngine.getGameState().currentLocation === 'start' && <circle cx="176" cy="50" r="25" fill="none" stroke="#fbbf24" strokeWidth="3" />}
          {gameEngine.getGameState().currentLocation === 'deep-forest' && <circle cx="176" cy="150" r="25" fill="none" stroke="#fbbf24" strokeWidth="3" />}
          {gameEngine.getGameState().currentLocation === 'moonlit-clearing' && <circle cx="176" cy="250" r="25" fill="none" stroke="#fbbf24" strokeWidth="3" />}
          {gameEngine.getGameState().currentLocation === 'abandoned-cabin' && <circle cx="100" cy="150" r="25" fill="none" stroke="#fbbf24" strokeWidth="3" />}
          {gameEngine.getGameState().currentLocation === 'mysterious-cave' && <circle cx="250" cy="150" r="25" fill="none" stroke="#fbbf24" strokeWidth="3" />}
          {gameEngine.getGameState().currentLocation === 'cabin-attic' && <circle cx="100" cy="200" r="25" fill="none" stroke="#fbbf24" strokeWidth="3" />}
          {gameEngine.getGameState().currentLocation === 'cave-chamber' && <circle cx="250" cy="200" r="25" fill="none" stroke="#fbbf24" strokeWidth="3" />}
        </svg>
        
        <div className="mt-4 flex justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-gray-300">Descubierto</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-yellow-400 rounded-full"></div>
            <span className="text-gray-300">Actual</span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
