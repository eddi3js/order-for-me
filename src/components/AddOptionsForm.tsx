import { useState } from 'react';
import { addOption } from '../store';

export default function AddOptionsForm() {
    const [option, setOption] = useState('');

    const handleAddOption = () => {
        addOption(option);
        setOption('');
    };

    return (
        <div className="flex flex-row justify-between items-center gap-2 mb-4">
            <input
                onChange={e => setOption(e.target.value)}
                value={option}
                type="text"
                placeholder="Enter choice"
                className="input w-full input-bordered"
            />
            <button className="btn btn-primary" onClick={handleAddOption}>
                Add
            </button>
        </div>
    );
}
