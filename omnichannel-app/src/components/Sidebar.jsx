import { useState } from 'react';

export default function Sidebar({ scenarios, activeId, onSelect }) {
  const [search, setSearch] = useState('');

  const filtered = scenarios.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  const sentimentColor = {
    positive: '#22c55e',
    neutral: '#eab308',
    negative: '#f97316',
    'very-negative': '#ef4444',
  };

  const priorityColor = {
    Low: '#94a3b8',
    Medium: '#eab308',
    High: '#f97316',
    Urgent: '#ef4444',
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <div>
            <h1>OmniChannel</h1>
            <span className="logo-sub">Success Agent</span>
          </div>
        </div>
        <div className="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search scenarios..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="scenario-list">
        {filtered.map((scenario) => (
          <button
            key={scenario.id}
            className={`scenario-card ${activeId === scenario.id ? 'active' : ''}`}
            onClick={() => onSelect(scenario.id)}
          >
            <div className="scenario-card-header">
              <span className="scenario-icon">{scenario.icon}</span>
              <div className="scenario-meta">
                <span
                  className="priority-badge"
                  style={{ background: priorityColor[scenario.priority] }}
                >
                  {scenario.priority}
                </span>
                <span
                  className="sentiment-dot"
                  style={{ background: sentimentColor[scenario.sentiment] }}
                  title={scenario.sentiment}
                />
              </div>
            </div>
            <h3>{scenario.title}</h3>
            <p>{scenario.description}</p>
            <div className="scenario-tags">
              {scenario.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="scenario-channel">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {scenario.channel}
            </div>
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{scenarios.length}</span>
            <span className="stat-label">Scenarios</span>
          </div>
          <div className="stat">
            <span className="stat-value">4</span>
            <span className="stat-label">Channels</span>
          </div>
          <div className="stat">
            <span className="stat-value">98%</span>
            <span className="stat-label">CSAT</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
