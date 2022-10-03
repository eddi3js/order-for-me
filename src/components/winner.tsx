import { useChooserStore } from '../stores/chooser';

export default function Winner() {
    const { winner, clearFields } = useChooserStore();

    if (!winner) return null;

    return (
        <div className="flex flex-col justify-center items-center flex-full">
            <p className="mt-8 text-4xl font-bold text-center mb-2">
                <span className="capitalize text-primary">{winner}</span> must choose!
            </p>
            <img src="https://media3.giphy.com/media/5VKbvrjxpVJCM/200.webp?cid=ecf05e47ek0855qn9jp6wfwpyl50zm8w96nguud0eit9h42d&rid=200.webp&ct=g" />
            <button onClick={clearFields} className="btn text-white btn-sm mt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                Clear
            </button>
        </div>
    );
}
