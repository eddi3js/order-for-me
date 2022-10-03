import { useEffect, useState } from 'preact/hooks';
import { useChooserStore } from '../stores/chooser';
import AddChooser from './addChooser';

export function WhoChooses() {
    const [status, setStatus] = useState<'idle' | 'choosing'>('idle');
    const [timer, setTimer] = useState<number>(3);

    const { setWinner, removeChooser, choosers } = useChooserStore();

    useEffect(() => {
        if (status === 'idle') return;
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    });

    const handleSetWinner = () => {
        const randomIndex = Math.floor(Math.random() * choosers.length);
        setWinner(choosers[randomIndex]);
        setStatus('idle');
        setTimer(3);
        console.log('WIN');
    };

    const handleChoosePerson = () => {
        setStatus('choosing');
        setTimeout(() => {
            handleSetWinner();
        }, 3000);
    };

    return (
        <div className="flex justify-center items-center w-full mt-10 flex-col">
            <div className="card w-96 bg-base-100 shadow-xl border border-gray-300">
                <div className="card-body">
                    <div className="card-title mb-2">Who Chooses The Place?</div>
                    <AddChooser />

                    {!!!choosers.length && (
                        <p className="text-neutral text-sm">No one has been added yet</p>
                    )}

                    {!!choosers.length && (
                        <ul className="w-full flex flex-row gap-3 flex-wrap">
                            {choosers.map((chooser: string, i: number) => (
                                <li
                                    key={`chooser-${i}`}
                                    className="rounded-2xl bg-base-300 text-neutral w-fit p-2 px-4 flex flex-row gap-2"
                                >
                                    <span className="text-black">{chooser}</span>
                                    <button
                                        className="hover:text-red-500"
                                        onClick={() => removeChooser(i)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    <button
                        onClick={handleChoosePerson}
                        className={`btn w-full mt-3 bg-primary ${
                            status === 'choosing' ? 'loading' : ''
                        }`}
                        disabled={choosers.length === 0}
                    >
                        {status === 'idle' ? 'Randomize!' : `Randomizing in ${timer}...`}
                    </button>
                </div>
            </div>
        </div>
    );
}
