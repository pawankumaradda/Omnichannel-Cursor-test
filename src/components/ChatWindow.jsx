import { useState, useEffect, useRef } from 'react';

const channels = [
  { id: 'web', label: 'Web', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  )},
  { id: 'whatsapp', label: 'WhatsApp', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
  )},
  { id: 'imessage', label: 'iMessage', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  )},
  { id: 'slack', label: 'Slack', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M14 20.5c0-.83.67-1.5 1.5-1.5H17c.83 0 1.5-.67 1.5-1.5S17.83 16 17 16h-1.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5z"/></svg>
  )},
  { id: 'teams', label: 'Teams', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  )},
];

export default function ChatWindow({ scenario }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [activeChannel, setActiveChannel] = useState('web');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setVisibleCount(0);
    setIsTyping(false);
  }, [scenario.id]);

  useEffect(() => {
    if (visibleCount < scenario.conversation.length) {
      const nextMsg = scenario.conversation[visibleCount];
      const delay = nextMsg.role === 'agent' ? 1400 : 600;

      if (nextMsg.role === 'agent') {
        setIsTyping(true);
        const typingTimer = setTimeout(() => {
          setIsTyping(false);
          setVisibleCount((c) => c + 1);
        }, delay);
        return () => clearTimeout(typingTimer);
      }

      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, scenario]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleCount, isTyping]);

  const handleReplay = () => {
    setVisibleCount(0);
    setIsTyping(false);
  };

  const formatText = (text) => {
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    formatted = formatted.replace(/\n/g, '<br/>');
    return formatted;
  };

  return (
    <main className="chat-window">
      <div className="chat-header">
        <div className="chat-header-left">
          <div>
            <h2>Preview Conversation</h2>
            <div className="chat-scenario-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M12 3l1.912 5.813h6.124l-4.962 3.587 1.912 5.813L12 14.626l-4.986 3.587 1.912-5.813-4.962-3.587h6.124z"/></svg>
              <span>Scenario: {scenario.title}</span>
            </div>
          </div>
        </div>
        <div className="chat-header-right">
          <div className="channel-tabs">
            {channels.map((ch) => (
              <button
                key={ch.id}
                className={`channel-tab ${activeChannel === ch.id ? 'active' : ''}`}
                onClick={() => setActiveChannel(ch.id)}
              >
                {ch.icon}
                {ch.label}
              </button>
            ))}
          </div>
          <button className="reload-btn" onClick={handleReplay} title="Replay conversation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {scenario.conversation.slice(0, visibleCount).map((msg, i) => (
          <div key={i} className={`message message-${msg.role}`}>
            {msg.role === 'agent' ? (
              <div className="message-agent-row">
                <div className="agent-avatar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="5" r="3"/>
                  </svg>
                </div>
                <div className="agent-bubble">
                  <div dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
                  {msg.time && <span className="msg-time">{msg.time}</span>}
                </div>
              </div>
            ) : (
              <div className="message-customer-row">
                <div className="customer-bubble">
                  <div dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
                  {msg.time && <span className="msg-time">{msg.time}</span>}
                </div>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="message message-agent">
            <div className="message-agent-row">
              <div className="agent-avatar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="5" r="3"/>
                </svg>
              </div>
              <div className="agent-bubble">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <div className="chat-input-wrapper">
          <input
            type="text"
            placeholder="Ask a question..."
            disabled
          />
          <button className="send-btn" disabled>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p className="footer-label">OMNICHANNEL PARTNER AGENT</p>
      </div>
    </main>
  );
}
