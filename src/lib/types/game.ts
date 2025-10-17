export interface Location {
  id: string;
  name: string;
  description: string;
  image: string;
  exits: Exit[];
  items: Item[];
  npcs: NPC[];
}

export interface Exit {
  direction: string;
  targetLocationId: string;
  description: string;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  takeable: boolean;
  usable?: boolean;
  effects?: {
    combat?: {
      attackBonus?: number;
      defenseBonus?: number;
    };
    healing?: number;
    unlock?: string[];
    protection?: string[];
    special?: string;
  };
  requirements?: {
    location?: string;
    condition?: string;
  };
}

export interface NPC {
  id: string;
  name: string;
  description: string;
  dialogue: string[];
  canFight?: boolean;
  health?: number;
  attack?: number;
  drops?: string[];
  puzzle?: {
    question: string;
    answer: string;
    reward: string;
    hint?: string;
  };
}

export interface GameState {
  currentLocation: string;
  inventory: string[];
  visitedLocations: string[];
  gameProgress: Record<string, any>;
  playerStats: {
    health: number;
    maxHealth: number;
    attack: number;
    defense: number;
  };
}

export interface Command {
  verb: string;
  object?: string;
  direction?: string;
}

export interface CommandResponse {
  success: boolean;
  message: string;
  newLocation?: string;
  itemsAdded?: string[];
  itemsRemoved?: string[];
  combat?: boolean;
  puzzle?: boolean;
  enemyDefeated?: boolean;
}
