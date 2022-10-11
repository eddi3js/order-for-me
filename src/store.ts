import { atom } from 'nanostores';

export const options = atom<string[]>([]);
export const winner = atom<string | null>(null);

export const addOption = (option: string) => {
    options.set([...options.get(), option]);
};

export const removeOption = (index: number) => {
    options.set(options.get().filter((_, i) => i !== index));
};

export const setWinner = (option: string) => {
    winner.set(option);
};

export const clearState = () => {
    options.set([]);
    winner.set(null);
};
