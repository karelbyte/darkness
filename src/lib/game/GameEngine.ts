import { GameState, Location, CommandResponse } from '../types/game';

export class GameEngine {
  private state: GameState;
  private locations: Map<string, Location>;

  constructor() {
    this.state = {
      currentLocation: 'start',
      inventory: [],
      visitedLocations: ['start'],
      gameProgress: {}
    };
    this.locations = new Map();
  }

  initializeGame(locations: Location[]) {
    locations.forEach(location => {
      this.locations.set(location.id, location);
    });
  }

  getCurrentLocation(): Location | undefined {
    return this.locations.get(this.state.currentLocation);
  }

  getGameState(): GameState {
    return { ...this.state };
  }

  saveGameState(): void {
    localStorage.setItem('darkness-game-state', JSON.stringify(this.state));
  }

  loadGameState(): void {
    const saved = localStorage.getItem('darkness-game-state');
    if (saved) {
      this.state = JSON.parse(saved);
    }
  }

  processCommand(command: string): CommandResponse {
    const words = command.toLowerCase().trim().split(' ');
    const verb = words[0];
    const object = words.slice(1).join(' ');

    switch (verb) {
      case 'ir':
      case 'mover':
      case 'caminar':
        return this.handleMovement(object);
      
      case 'tomar':
      case 'agarrar':
      case 'recoger':
        return this.handleTake(object);
      
      case 'usar':
        return this.handleUse(object);
      
      case 'hablar':
      case 'conversar':
        return this.handleTalk(object);
      
      case 'mirar':
      case 'examinar':
        return this.handleLook(object);
      
      case 'inventario':
        return this.handleInventory();
      
      case 'ayuda':
        return this.handleHelp();
      
      default:
        return {
          success: false,
          message: 'No entiendo ese comando. Escribe "ayuda" para ver los comandos disponibles.'
        };
    }
  }

  private handleMovement(direction: string): CommandResponse {
    const currentLocation = this.getCurrentLocation();
    if (!currentLocation) {
      return { success: false, message: 'No hay ubicación actual.' };
    }

    const exit = currentLocation.exits.find(e => 
      e.direction.toLowerCase() === direction.toLowerCase()
    );

    if (!exit) {
      return {
        success: false,
        message: `No puedes ir hacia ${direction} desde aquí.`
      };
    }

    const targetLocation = this.locations.get(exit.targetLocationId);
    if (!targetLocation) {
      return { success: false, message: 'La ubicación de destino no existe.' };
    }

    this.state.currentLocation = exit.targetLocationId;
    if (!this.state.visitedLocations.includes(exit.targetLocationId)) {
      this.state.visitedLocations.push(exit.targetLocationId);
    }

    return {
      success: true,
      message: `Te mueves hacia ${direction}.`,
      newLocation: exit.targetLocationId
    };
  }

  private handleTake(itemName: string): CommandResponse {
    const currentLocation = this.getCurrentLocation();
    if (!currentLocation) {
      return { success: false, message: 'No hay ubicación actual.' };
    }

    const item = currentLocation.items.find(i => 
      i.name.toLowerCase() === itemName.toLowerCase()
    );

    if (!item) {
      return {
        success: false,
        message: `No hay ningún ${itemName} aquí.`
      };
    }

    if (!item.takeable) {
      return {
        success: false,
        message: `No puedes tomar ${item.name}.`
      };
    }

    this.state.inventory.push(item.id);
    currentLocation.items = currentLocation.items.filter(i => i.id !== item.id);

    return {
      success: true,
      message: `Has tomado ${item.name}.`,
      itemsRemoved: [item.id]
    };
  }

  private handleUse(itemName: string): CommandResponse {
    const hasItem = this.state.inventory.some(itemId => {
      const item = this.findItemById(itemId);
      return item && item.name.toLowerCase() === itemName.toLowerCase();
    });

    if (!hasItem) {
      return {
        success: false,
        message: `No tienes ${itemName} en tu inventario.`
      };
    }

    return {
      success: true,
      message: `Usas ${itemName}.`
    };
  }

  private handleTalk(target: string): CommandResponse {
    const currentLocation = this.getCurrentLocation();
    if (!currentLocation) {
      return { success: false, message: 'No hay ubicación actual.' };
    }

    const npc = currentLocation.npcs.find(n => 
      n.name.toLowerCase() === target.toLowerCase()
    );

    if (!npc) {
      return {
        success: false,
        message: `No hay nadie llamado ${target} aquí.`
      };
    }

    const dialogue = npc.dialogue[0] || 'No tengo nada que decirte.';

    return {
      success: true,
      message: `${npc.name}: "${dialogue}"`
    };
  }

  private handleLook(target: string): CommandResponse {
    const currentLocation = this.getCurrentLocation();
    if (!currentLocation) {
      return { success: false, message: 'No hay ubicación actual.' };
    }

    if (!target) {
      return {
        success: true,
        message: currentLocation.description
      };
    }

    const item = currentLocation.items.find(i => 
      i.name.toLowerCase() === target.toLowerCase()
    );

    if (item) {
      return {
        success: true,
        message: item.description
      };
    }

    const npc = currentLocation.npcs.find(n => 
      n.name.toLowerCase() === target.toLowerCase()
    );

    if (npc) {
      return {
        success: true,
        message: npc.description
      };
    }

    return {
      success: false,
      message: `No hay nada llamado ${target} aquí.`
    };
  }

  private handleInventory(): CommandResponse {
    if (this.state.inventory.length === 0) {
      return {
        success: true,
        message: 'Tu inventario está vacío.'
      };
    }

    const items = this.state.inventory.map(itemId => {
      const item = this.findItemById(itemId);
      return item ? item.name : 'Objeto desconocido';
    });

    return {
      success: true,
      message: `Inventario: ${items.join(', ')}`
    };
  }

  private handleHelp(): CommandResponse {
    const commands = [
      'ir [dirección] - Moverte hacia una dirección',
      'tomar [objeto] - Tomar un objeto',
      'usar [objeto] - Usar un objeto de tu inventario',
      'hablar [personaje] - Hablar con un personaje',
      'mirar [objeto/personaje] - Examinar algo',
      'inventario - Ver tu inventario',
      'ayuda - Mostrar esta ayuda'
    ];

    return {
      success: true,
      message: `Comandos disponibles:\n${commands.join('\n')}`
    };
  }

  private findItemById(itemId: string) {
    for (const location of this.locations.values()) {
      const item = location.items.find(i => i.id === itemId);
      if (item) return item;
    }
    return null;
  }
}
