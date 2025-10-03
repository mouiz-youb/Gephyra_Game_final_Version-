// src/store/gameStore.ts
import { create } from "zustand";

interface QRCode {
  id: number;
  code: string;
  currentValue: number;
}

interface GameState {
  qrCodes: QRCode[];
  setQRCodes: (codes: QRCode[]) => void;
}

const useGameStore = create<GameState>((set) => ({
  qrCodes: [],
  setQRCodes: (codes) => set({ qrCodes: codes }),
}));

export default useGameStore;
