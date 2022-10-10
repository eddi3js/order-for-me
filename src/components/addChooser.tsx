import { useState } from 'preact/hooks';
import { useChooserStore } from '../stores/chooser';

export default function AddChooser() {
    const [newChooser, setNewChooser] = useState<string>('');
    const { addChooser, choosers, clearFields, winner } = useChooserStore();

    const handleAddChooser = () => {
        if (!!!newChooser.length || choosers.includes(newChooser)) return;

        if (winner) {
            clearFields();
        }

        addChooser(newChooser);
        setNewChooser('');
    };
    return (
        <>
            <div className="flex flex-row justify-between items-center gap-2 mb-4">
                <input
                    value={newChooser}
                    onChange={(e: any) => setNewChooser(e.target.value)}
                    type="text"
                    placeholder="Enter choice"
                    className="input w-full input-bordered"
                />
                <button className="btn btn-primary" onClick={handleAddChooser}>
                    Add
                </button>
            </div>
        </>
    );
}
