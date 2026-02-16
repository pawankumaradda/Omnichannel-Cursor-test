import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import MetricsPanel from './components/MetricsPanel';
import scenarios from './data/scenarios';
import './App.css';

function App() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const activeScenario = scenarios.find((s) => s.id === activeId);

  return (
    <div className="app">
      <Sidebar
        scenarios={scenarios}
        activeId={activeId}
        onSelect={setActiveId}
      />
      <ChatWindow scenario={activeScenario} />
      <MetricsPanel scenario={activeScenario} />
    </div>
  );
}

export default App;
