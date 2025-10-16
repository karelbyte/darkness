'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GameEngine } from '../../lib/game/GameEngine';
import { gameLocations } from '../../lib/game/locations';
import { Location, CommandResponse } from '../../lib/types/game';

export default function GameInterface() {
  const [gameEngine] = useState(() => new GameEngine());
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [command, setCommand] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    gameEngine.initializeGame(gameLocations);
    gameEngine.loadGameState();
    updateCurrentLocation();
    addMessage('Bienvenido al Bosque Oscuro. Tu aventura comienza aquí...');
  }, []);

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
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center flex-1">Bosque Oscuro</h1>
          <button
            onClick={handleNewGame}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
          >
            Nuevo Juego
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">{currentLocation.name}</h2>
              
              <div className="mb-4">
                <Image
                  src={currentLocation.image}
                  alt={currentLocation.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {currentLocation.description}
              </p>

              {currentLocation.exits.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Salidas disponibles:</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentLocation.exits.map((exit: any, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {exit.direction}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {currentLocation.items.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Objetos visibles:</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentLocation.items.map((item: any, index: number) => (
                      <span
                        key={index}
                        className="bg-green-600 px-3 py-1 rounded-full text-sm"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {currentLocation.npcs.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personajes presentes:</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentLocation.npcs.map((npc: any, index: number) => (
                      <span
                        key={index}
                        className="bg-purple-600 px-3 py-1 rounded-full text-sm"
                      >
                        {npc.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Comandos</h3>
              
              <form onSubmit={handleCommandSubmit} className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="Escribe tu comando aquí..."
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !command.trim()}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-6 py-2 rounded-lg transition-colors"
                  >
                    {isLoading ? '...' : 'Enviar'}
                  </button>
                </div>
              </form>

              <div className="text-sm text-gray-400 mb-4">
                <p>Comandos básicos: ir [dirección], tomar [objeto], usar [objeto], hablar [personaje], mirar [objeto], inventario, ayuda</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Historial</h3>
              <div className="h-96 overflow-y-auto space-y-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded ${
                      message.startsWith('>') 
                        ? 'bg-blue-900 text-blue-100' 
                        : 'bg-gray-700 text-gray-200'
                    }`}
                  >
                    {message}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
