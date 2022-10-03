import { StateUpdater } from 'preact/hooks';

interface TabsProps {
    setTab: StateUpdater<'choose' | 'randomizer'>;
    tab: 'choose' | 'randomizer';
}

export default function Tabs({ setTab, tab }: TabsProps) {
    return (
        <>
            {['Who Chooses', 'Restaurant Randomizer'].map(name => {
                const key = name === 'Who Chooses' ? 'choose' : 'randomizer';
                return (
                    <button
                        onClick={() => setTab(key)}
                        key={`tab-${key}`}
                        className={`btn ${tab === key ? 'btn-primary' : ''}`}
                    >
                        {name}
                    </button>
                );
            })}
        </>
    );
}
