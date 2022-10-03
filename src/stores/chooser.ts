import create from 'zustand';

interface ChooserState {
    choosers: string[];
    winner: string | null;
    addChooser: (chooser: string) => void;
    removeChooser: (index: number) => void;
    setWinner: (winner: string | null) => void;
    clearFields: () => void;
}

export const useChooserStore = create<ChooserState>(set => ({
    choosers: [],
    winner: null,
    clearFields: () => set({ choosers: [], winner: null }),
    setWinner: (winner: string | null) => set({ winner }),
    addChooser: (chooser: string) =>
        set((state: any) => ({ choosers: [...state.choosers, chooser] })),
    removeChooser: (index: number) =>
        set((state: any) => ({
            choosers: state.choosers.filter((_: any, i: number) => i !== index),
        })),
}));
