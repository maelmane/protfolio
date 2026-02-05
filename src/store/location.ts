import { locations } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state: any) => {
        state.activeLocation = location;
      }),

    resetLocation: () =>
      set((state: any) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
