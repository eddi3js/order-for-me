import { options, removeOption } from '@/store';
import { useStore } from '@nanostores/react';

export default function OptionsList() {
    const allOptions = useStore(options);

    if (!allOptions.length) {
        return <p className="text-neutral text-sm">Nothing has been added yet</p>;
    }

    return (
        <ul className="w-full flex flex-row gap-3 flex-wrap">
            {allOptions.map((option: string, i: number) => (
                <li
                    key={`option-${i}`}
                    className="rounded-2xl bg-base-300 text-neutral w-fit p-2 px-4 flex flex-row gap-2"
                >
                    <span className="text-black">{option}</span>
                    <button
                        className="hover:text-red-500"
                        onClick={() => removeOption(i)}
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
    );
}
