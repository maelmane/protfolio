import type { locations, WINDOW_CONFIG } from ".";

export interface Window {
  isOpen: boolean;
  zIndex: number;
  data: any;
}

export interface DockApp {
  id: WindowKey;
  name?: string;
  icon?: string;
  canOpen: boolean;
}

export interface NavIcon {
  id: number;
  img: string;
}

export interface NavLink {
  id: number;
  name: string;
  type: WindowKey;
}

export interface WindowControlsProps {
  target: WindowKey;
}

export type WindowKey = keyof typeof WINDOW_CONFIG;

export type WindowsState = Record<WindowKey, Window>;

export interface WindowStore {
  windows: WindowsState;
  nextZIndex: number;

  openWindow: (key: WindowKey, data?: unknown) => void;
  closeWindow: (key: WindowKey) => void;
  focusWindow: (key: WindowKey) => void;
}

export type LocationKey = keyof typeof locations;

export type Location = (typeof locations)[LocationKey];

export interface LocationStore {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
  resetLocation: () => void;
}
