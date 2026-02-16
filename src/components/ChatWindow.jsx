import { useState, useEffect, useRef } from 'react';

export default function ChatWindow({ scenario }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setVisibleCount(0);
    setIsTyping(false);
  }, [scenario.id]);

  useEffect(() => {
    if (visibleCount < scenario.conversation.length) {
      const nextMsg = scenario.conversation[visibleCount];
      const delay = nextMsg.role === 'agent' ? 1200 : 600;

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

  const sentimentLabel = {
    positive: '😊 Positive',
    neutral: '😐 Neutral',
    negative: '😟 Negative',
    'very-negative': '😡 Very Negative',
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
          <span className="chat-icon">{scenario.icon}</span>
          <div>
            <h2>{scenario.title}</h2>
            <span className="chat-channel">{scenario.channel}</span>
          </div>
        </div>
        <div className="chat-header-right">
          <span className={`sentiment-badge sentiment-${scenario.sentiment}`}>
            {sentimentLabel[scenario.sentiment]}
          </span>
          <span className={`priority-pill priority-${scenario.priority.toLowerCase()}`}>
            {scenario.priority}
          </span>
          <button className="replay-btn" onClick={handleReplay} title="Replay conversation">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            Replay
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {scenario.conversation.slice(0, visibleCount).map((msg, i) => (
          <div key={i} className={`message message-${msg.role}`}>
            {msg.role === 'system' ? (
              <div className="system-message">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
              </div>
            ) : (
              <>
                <div className="message-avatar">
                  {msg.role === 'customer' ? '👤' : '🤖'}
                </div>
                <div className="message-content">
                  <div className="message-role">
                    {msg.role === 'customer' ? 'Customer' : 'AI Agent'}
                  </div>
                  <div
                    className="message-bubble"
                    dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                  />
                </div>
              </>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="message message-agent">
            <div className="message-avatar">🤖</div>
            <div className="message-content">
              <div className="message-role">AI Agent</div>
              <div className="message-bubble typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}

        {visibleCount >= scenario.conversation.length && (
          <div className="conversation-end">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Conversation resolved successfully
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <div className="chat-input-wrapper">
          <input
            type="text"
            placeholder="Type a message... (demo mode)"
            disabled
          />
          <button className="send-btn" disabled>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p className="demo-note">This is a demo replay of a chatbot scenario</p>
      </div>
    </main>
  );
}
