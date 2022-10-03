import { useState } from 'preact/hooks';
import './app.css';
import Tabs from './components/tabs';
import { WhoChooses } from './components/whoChooses';
import Winner from './components/winner';

export function App() {
    const [tab, setTab] = useState<'choose' | 'randomizer'>('choose');

    return (
        <div>
            <div className="tabs tabs-boxed items-center justify-center gap-2">
                <Tabs tab={tab} setTab={setTab} />
            </div>

            {tab === 'choose' ? (
                <WhoChooses />
            ) : (
                <p className="mt-8 text-center">Coming Soon</p>
            )}

            {tab === 'choose' && <Winner />}
        </div>
    );
}
