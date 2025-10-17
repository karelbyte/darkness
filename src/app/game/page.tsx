'use client';

import { useState, useEffect } from 'react';
import { GameEngine } from '../../lib/game/GameEngine';
import { gameLocations } from '../../lib/game/locations';
import { Location, CommandResponse } from '../../lib/types/game';
import LocationDisplay from '../../components/organisms/LocationDisplay';
import CommandsSection from '../../components/organisms/CommandsSection';
import HistoryModal from '../../components/organisms/HistoryModal';
import MapModal from '../../components/organisms/MapModal';
import Button from '../../components/atoms/Button';

export default function GameInterface() {
  const [gameEngine] = useState(() => new GameEngine());
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [command, setCommand] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    gameEngine.initializeGame(gameLocations);
    gameEngine.loadGameState();
    updateCurrentLocation();
    addMessage('Bienvenido al Bosque Oscuro. Tu aventura comienza aquí...');
  }, [gameEngine]);

  const updateCurrentLocation = () => {
    const location = gameEngine.getCurrentLocation();
    setCurrentLocation(location || null);
  };

  const addMessage = (message: string) => {
    setMessages(prev => [...prev, message]);
  };

  const handleCommandSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim() || isLoading) return;

    setIsLoading(true);
    const userCommand = command.trim();
    setCommand('');

    addMessage(`> ${userCommand}`);

    try {
      const response: CommandResponse = gameEngine.processCommand(userCommand);
      
      addMessage(response.message);

      if (response.newLocation) {
        updateCurrentLocation();
        gameEngine.saveGameState();
      }

      if (response.itemsAdded || response.itemsRemoved) {
        updateCurrentLocation(); // Actualizar para reflejar cambios en items
        gameEngine.saveGameState();
      }

      if (response.itemsAdded) {
        response.itemsAdded.forEach((item: string) => {
          addMessage(`Has obtenido: ${item}`);
        });
      }

      if (response.itemsRemoved) {
        response.itemsRemoved.forEach((item: string) => {
          addMessage(`Has perdido: ${item}`);
        });
      }

    } catch (error) {
      addMessage('Ha ocurrido un error procesando tu comando.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewGame = () => {
    localStorage.removeItem('darkness-game-state');
    window.location.reload();
  };

  if (!currentLocation) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Cargando juego...</div>
      </div>
    );
  }

  return (
    <div className="h-screen text-white flex flex-col">
      <div className="flex-1 overflow-hidden">
        <LocationDisplay 
          location={currentLocation} 
          onCommandClick={setCommand}
          currentCommand={command}
        />
      </div>
      
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto mt-2">
          <CommandsSection
            command={command}
            onCommandChange={setCommand}
            onSubmit={handleCommandSubmit}
            isLoading={isLoading}
            onShowHistory={() => setShowHistory(!showHistory)}
            onShowMap={() => setShowMap(!showMap)}
            lastMessage={messages[messages.length - 1]}
          />
        </div>
      </div>

      <HistoryModal
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        messages={messages}
      />

      <MapModal
        isOpen={showMap}
        onClose={() => setShowMap(false)}
        gameEngine={gameEngine}
      />
    </div>
  );
}