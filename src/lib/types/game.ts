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
}

export interface NPC {
  id: string;
  name: string;
  description: string;
  dialogue: string[];
}

export interface GameState {
  currentLocation: string;
  inventory: string[];
  visitedLocations: string[];
  gameProgress: Record<string, any>;
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
}
