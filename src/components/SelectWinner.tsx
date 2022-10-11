import { options, setWinner } from '@/store';
import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';

export default function SelectWinner() {
    const optionsList = useStore(options);
    const [status, setStatus] = useState<'idle' | 'choosing'>('idle');
    const [timer, setTimer] = useState<number>(3);

    useEffect(() => {
        if (status === 'idle') return;
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    });

    const handleSetWinner = () => {
        const randomIndex = Math.floor(Math.random() * optionsList.length);
        const winner = optionsList[randomIndex] as string;
        setWinner(winner);

        setStatus('idle');
        setTimer(3);
    };

    const handleChoosePerson = () => {
        setStatus('choosing');
        setTimeout(() => {
            handleSetWinner();
        }, 3000);
    };

    return (
        <button
            onClick={handleChoosePerson}
            className={`btn w-full mt-3 bg-primary ${
                status === 'choosing' ? 'loading' : ''
            }`}
            disabled={optionsList.length < 2}
        >
            {status === 'idle' ? 'Randomize!' : `Randomizing in ${timer}...`}
        </button>
    );
}
