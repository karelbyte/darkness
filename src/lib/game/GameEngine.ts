import { GameState, Location, CommandResponse } from '../types/game';

export class GameEngine {
  private state: GameState;
  private locations: Map<string, Location>;
  private allItems: Map<string, any>; // Mapa maestro de todos los objetos

  constructor() {
    this.state = {
      currentLocation: 'start',
      inventory: [],
      visitedLocations: ['start'],
      gameProgress: {},
      playerStats: {
        health: 100,
        maxHealth: 100,
        attack: 10,
        defense: 5
      }
    };
    this.locations = new Map();
    this.allItems = new Map();
  }

  initializeGame(locations: Location[]) {
    locations.forEach(location => {
      this.locations.set(location.id, location);
      // Poblar el mapa maestro de objetos
      location.items.forEach(item => {
        this.allItems.set(item.id, item);
      });
    });
  }

  getCurrentLocation(): Location | undefined {
    const location = this.locations.get(this.state.currentLocation);
    if (!location) return undefined;

    // Filtrar objetos que ya están en el inventario
    const availableItems = location.items.filter(item => 
      !this.state.inventory.includes(item.id)
    );

    return {
      ...location,
      items: availableItems
    };
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
      
      case 'luchar':
      case 'atacar':
      case 'pelear':
        return this.handleCombat(object);
      
      case 'responder':
      case 'respuesta':
        return this.handlePuzzle(object);
      
      case 'liberar':
        return this.handleFree(object);
      
      case 'estadisticas':
      case 'stats':
        return this.handleStats();
      
      case 'curar':
      case 'descansar':
        return this.handleRest();
      
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

    // Verificar si es una trampa de retroceso
    const trapResult = this.checkTrapEffects(exit.targetLocationId);
    if (trapResult) {
      return trapResult;
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
      itemsAdded: [item.name]
    };
  }

  private handleUse(itemName: string): CommandResponse {
    const itemId = this.state.inventory.find(id => {
      const item = this.findItemById(id);
      return item && item.name.toLowerCase() === itemName.toLowerCase();
    });

    if (!itemId) {
      return {
        success: false,
        message: `No tienes ${itemName} en tu inventario.`
      };
    }

    const item = this.findItemById(itemId);
    if (!item || !item.usable) {
      return {
        success: false,
        message: `No puedes usar ${itemName}.`
      };
    }

    if (item.requirements?.location && item.requirements.location !== this.state.currentLocation) {
      return {
        success: false,
        message: `No puedes usar ${itemName} en esta ubicación.`
      };
    }

    let message = `Usas ${itemName}.`;
    let effects: string[] = [];

    if (item.effects?.healing) {
      const healing = item.effects.healing;
      this.state.playerStats.health = Math.min(
        this.state.playerStats.maxHealth,
        this.state.playerStats.health + healing
      );
      effects.push(`Restauras ${healing} puntos de salud.`);
    }

    if (item.effects?.combat?.attackBonus) {
      this.state.playerStats.attack += item.effects.combat.attackBonus;
      effects.push(`Tu ataque aumenta en ${item.effects.combat.attackBonus}.`);
    }

    if (item.effects?.combat?.defenseBonus) {
      this.state.playerStats.defense += item.effects.combat.defenseBonus;
      effects.push(`Tu defensa aumenta en ${item.effects.combat.defenseBonus}.`);
    }

    if (item.effects?.unlock) {
      item.effects.unlock.forEach((unlockId: string) => {
        this.state.gameProgress[`unlocked_${unlockId}`] = true;
      });
      effects.push(`Has desbloqueado nuevas áreas.`);
    }

    if (item.effects?.special) {
      const specialEffect = this.handleSpecialItemEffects(itemId);
      if (specialEffect.success) {
        effects.push(specialEffect.message);
        this.state.gameProgress[item.effects.special] = true;
      }
    }

    if (effects.length > 0) {
      message += ` ${effects.join(' ')}`;
    }

    this.state.inventory = this.state.inventory.filter(id => id !== itemId);

    return {
      success: true,
      message,
      itemsRemoved: [itemId]
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

    if (npc.puzzle && !this.state.gameProgress[`puzzle_${npc.id}_solved`]) {
      return {
        success: true,
        message: `${npc.name}: "${npc.puzzle.question}"`,
        puzzle: true
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

    // Buscar en la ubicación actual
    const item = currentLocation.items.find(i => 
      i.name.toLowerCase() === target.toLowerCase()
    );

    if (item) {
      return {
        success: true,
        message: item.description
      };
    }

    // Buscar en el inventario
    const inventoryItem = this.state.inventory.find(itemId => {
      const item = this.findItemById(itemId);
      return item && item.name.toLowerCase() === target.toLowerCase();
    });

    if (inventoryItem) {
      const item = this.findItemById(inventoryItem);
      return {
        success: true,
        message: item ? item.description : 'Objeto desconocido'
      };
    }

    // Buscar NPCs en la ubicación actual
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
      message: `No hay nada llamado ${target} aquí o en tu inventario.`
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
      'luchar [enemigo] - Combatir con un enemigo',
      'responder [respuesta] - Responder a un enigma',
      'liberar [prisionero] - Liberar a alguien de una jaula',
      'estadisticas - Ver tus estadísticas de combate',
      'curar - Descansar y recuperar salud lentamente',
      'ayuda - Mostrar esta ayuda'
    ];

    return {
      success: true,
      message: `Comandos disponibles:\n${commands.join('\n')}`
    };
  }

  private findItemById(itemId: string) {
    return this.allItems.get(itemId) || null;
  }

  private getAllItemsFromLocation(locationId: string) {
    const location = this.locations.get(locationId);
    if (!location) return [];
    
    const allItems = [...location.items];
    
    if (locationId === 'deep-forest') {
      allItems.push({ id: 'mysterious-herb', name: 'hierba misteriosa', description: 'Una planta brillante que emite un suave resplandor azulado.', takeable: true });
    }
    if (locationId === 'start') {
      allItems.push({ id: 'rusty-key', name: 'llave oxidada', description: 'Una llave de hierro oxidado que parece muy antigua.', takeable: true });
    }
    if (locationId === 'moonlit-clearing') {
      allItems.push({ id: 'moonstone', name: 'piedra lunar', description: 'Una piedra que brilla con la misma intensidad que la luna.', takeable: true });
    }
    if (locationId === 'mysterious-cave') {
      allItems.push({ id: 'glowing-crystal', name: 'cristal brillante', description: 'Un cristal que pulsa con una luz azul suave.', takeable: true });
    }
    if (locationId === 'abandoned-cabin') {
      allItems.push({ id: 'old-journal', name: 'diario antiguo', description: 'Un diario cubierto de polvo con páginas amarillentas.', takeable: true });
    }
    if (locationId === 'cabin-attic') {
      allItems.push({ id: 'dusty-scroll', name: 'pergamino polvoriento', description: 'Un pergamino con texto en una lengua antigua.', takeable: true });
    }
    if (locationId === 'cave-chamber') {
      allItems.push({ id: 'golden-key', name: 'llave dorada', description: 'Una llave de oro puro que brilla con luz propia.', takeable: true });
    }
    
    return allItems;
  }

  private handleCombat(target: string): CommandResponse {
    const currentLocation = this.getCurrentLocation();
    if (!currentLocation) {
      return { success: false, message: 'No hay ubicación actual.' };
    }

    const npc = currentLocation.npcs.find(n => 
      n.name.toLowerCase() === target.toLowerCase()
    );

    if (!npc || !npc.canFight) {
      return {
        success: false,
        message: `No puedes luchar contra ${target}.`
      };
    }

    if (this.state.gameProgress[`enemy_${npc.id}_defeated`]) {
      return {
        success: true,
        message: `${npc.name} ya ha sido derrotado.`
      };
    }

    const playerAttack = this.state.playerStats.attack;
    const playerDefense = this.state.playerStats.defense;
    const enemyHealth = npc.health || 20;
    const enemyAttack = npc.attack || 10;
    
    const playerDamage = Math.max(1, playerAttack - (enemyAttack * 0.3));
    const enemyDamage = Math.max(1, enemyAttack - playerDefense);
    
    if (playerDamage >= enemyHealth) {
      this.state.gameProgress[`enemy_${npc.id}_defeated`] = true;
      
      let message = `¡Has derrotado a ${npc.name}!`;
      
      if (npc.drops) {
        npc.drops.forEach(itemId => {
          this.state.inventory.push(itemId);
        });
        message += ` Has obtenido: ${npc.drops.join(', ')}.`;
      }
      
      return {
        success: true,
        message,
        enemyDefeated: true,
        itemsAdded: npc.drops
      };
    } else {
      this.state.playerStats.health -= enemyDamage;
      
      if (this.state.playerStats.health <= 0) {
        this.state.playerStats.health = Math.max(1, this.state.playerStats.maxHealth * 0.1);
        this.movePlayerBack(3);
        
        return {
          success: false,
          message: `¡Has sido derrotado por ${npc.name}! Has perdido ${enemyDamage} puntos de salud y has sido enviado 3 locaciones hacia atrás. Tu salud se ha reducido a ${this.state.playerStats.health}.`,
          newLocation: this.state.currentLocation
        };
      } else {
        return {
          success: false,
          message: `${npc.name} es demasiado fuerte. Has perdido ${enemyDamage} puntos de salud. Salud actual: ${this.state.playerStats.health}/${this.state.playerStats.maxHealth}. Necesitas más poder o curación para derrotarlo.`,
          combat: true
        };
      }
    }
  }

  private handlePuzzle(answer: string): CommandResponse {
    const currentLocation = this.getCurrentLocation();
    if (!currentLocation) {
      return { success: false, message: 'No hay ubicación actual.' };
    }

    const npcWithPuzzle = currentLocation.npcs.find(n => 
      n.puzzle && !this.state.gameProgress[`puzzle_${n.id}_solved`]
    );

    if (!npcWithPuzzle || !npcWithPuzzle.puzzle) {
      return {
        success: false,
        message: 'No hay ningún enigma pendiente de resolver aquí.'
      };
    }

    if (answer.toLowerCase() === npcWithPuzzle.puzzle.answer.toLowerCase()) {
      this.state.gameProgress[`puzzle_${npcWithPuzzle.id}_solved`] = true;
      
      let message = `¡Correcto! ${npcWithPuzzle.name} está impresionado.`;
      
      if (npcWithPuzzle.puzzle.reward) {
        this.state.inventory.push(npcWithPuzzle.puzzle.reward);
        message += ` Has obtenido: ${npcWithPuzzle.puzzle.reward}.`;
      }
      
      return {
        success: true,
        message,
        itemsAdded: npcWithPuzzle.puzzle.reward ? [npcWithPuzzle.puzzle.reward] : undefined
      };
    } else {
      return {
        success: false,
        message: `${npcWithPuzzle.name}: "Esa no es la respuesta correcta. Inténtalo de nuevo."`
      };
    }
  }

  private handleFree(target: string): CommandResponse {
    const currentLocation = this.getCurrentLocation();
    if (!currentLocation) {
      return { success: false, message: 'No hay ubicación actual.' };
    }

    if (target.toLowerCase() === 'elfo' || target.toLowerCase() === 'prisionero') {
      const hasKey = this.state.inventory.includes('cage-key');
      
      if (!hasKey) {
        return {
          success: false,
          message: 'Necesitas la llave de la jaula para liberar al prisionero.'
        };
      }

      this.state.gameProgress['elf_freed'] = true;
      this.state.inventory = this.state.inventory.filter(id => id !== 'cage-key');
      
      return {
        success: true,
        message: 'Has liberado al elfo prisionero. Te agradece y te da información valiosa sobre Rack.',
        itemsRemoved: ['cage-key']
      };
    }

    return {
      success: false,
      message: `No puedes liberar ${target}.`
    };
  }

  private handleStats(): CommandResponse {
    const stats = this.state.playerStats;
    return {
      success: true,
      message: `Estadísticas del jugador:\nSalud: ${stats.health}/${stats.maxHealth}\nAtaque: ${stats.attack}\nDefensa: ${stats.defense}`
    };
  }

  private movePlayerBack(steps: number): void {
    const currentLocation = this.getCurrentLocation();
    if (!currentLocation) return;

    const visitedLocations = this.state.visitedLocations;
    const currentIndex = visitedLocations.indexOf(this.state.currentLocation);
    
    if (currentIndex >= steps) {
      const newLocationId = visitedLocations[currentIndex - steps];
      this.state.currentLocation = newLocationId;
    } else {
      this.state.currentLocation = 'start';
    }
  }

  private handleRest(): CommandResponse {
    const healing = Math.floor(this.state.playerStats.maxHealth * 0.15);
    this.state.playerStats.health = Math.min(
      this.state.playerStats.maxHealth,
      this.state.playerStats.health + healing
    );
    
    return {
      success: true,
      message: `Descansas y recuperas ${healing} puntos de salud. Salud actual: ${this.state.playerStats.health}/${this.state.playerStats.maxHealth}.`
    };
  }

  // ===== LÓGICA DE TRAMPAS =====

  private checkTrapEffects(targetLocationId: string): CommandResponse | null {
    // Trampa del círculo de piedras malditas
    if (targetLocationId === 'stone-circle-center') {
      return this.handleStoneCircleTrap();
    }

    return null;
  }

  private handleStoneCircleTrap(): CommandResponse {
    // Verificar si el jugador tiene protección contra la maldición
    const hasProtection = this.state.inventory.some(itemId => {
      const item = this.findItemById(itemId);
      return item && item.effects?.special === 'curse_protection';
    });

    if (!hasProtection) {
      // Enviar al jugador 10 ubicaciones hacia atrás
      this.movePlayerBack(10);
      
      return {
        success: false,
        message: '¡Has sido maldecido por el círculo de piedras! La magia oscura te envía muy lejos de aquí. Te encuentras en una ubicación anterior.',
        newLocation: this.state.currentLocation
      };
    } else {
      // El jugador tiene protección, puede continuar normalmente
      this.state.currentLocation = 'stone-circle-center';
      if (!this.state.visitedLocations.includes('stone-circle-center')) {
        this.state.visitedLocations.push('stone-circle-center');
      }

      return {
        success: true,
        message: 'Tu protección contra la maldición te permite entrar al centro del círculo sin ser afectado.',
        newLocation: 'stone-circle-center'
      };
    }
  }

  private handleSpecialItemEffects(itemId: string): CommandResponse {
    const item = this.findItemById(itemId);
    if (!item || !item.effects?.special) {
      return { success: false, message: 'Este objeto no tiene efectos especiales.' };
    }

    const effect = item.effects.special;
    let message = '';

    switch (effect) {
      case 'mist_clearance':
        message = 'El cristal de niebla pulsa con energía. Sientes que tu percepción se aclara y puedes ver mejor a través de la niebla.';
        break;
      case 'curse_protection':
        message = 'La runa maldita emite un resplandor protector. Sientes que estás protegido contra las maldiciones del círculo de piedras.';
        break;
      case 'illusion_sight':
        message = 'El espejo de la verdad refleja la realidad tal como es. Ahora puedes ver a través de las ilusiones más complejas.';
        break;
      case 'dark_power':
        message = 'El vial de agua oscura pulsa con energía maligna. Sientes un poder oscuro fluyendo por tus venas.';
        break;
      case 'void_sight':
        message = 'La gema del vacío te permite ver más allá de las ilusiones del vacío. Tu percepción se expande.';
        break;
      default:
        message = 'El objeto pulsa con energía desconocida.';
    }

    return {
      success: true,
      message: message
    };
  }
}
