export default function MetricsPanel({ scenario }) {
  const metrics = {
    'order-tracking': {
      responseTime: '1.2s',
      resolution: 'First Contact',
      satisfaction: '4.8/5',
      handoff: 'None',
      automationRate: '92%',
      tokensUsed: '1,240',
    },
    'billing-dispute': {
      responseTime: '0.8s',
      resolution: 'First Contact',
      satisfaction: '4.5/5',
      handoff: 'Phone → Chat',
      automationRate: '78%',
      tokensUsed: '1,820',
    },
    'tech-support': {
      responseTime: '1.0s',
      resolution: 'First Contact',
      satisfaction: '4.9/5',
      handoff: 'Email → Chat',
      automationRate: '85%',
      tokensUsed: '1,560',
    },
    'product-inquiry': {
      responseTime: '0.9s',
      resolution: 'First Contact',
      satisfaction: '5.0/5',
      handoff: 'None',
      automationRate: '95%',
      tokensUsed: '2,100',
    },
    'complaint-escalation': {
      responseTime: '0.6s',
      resolution: 'First Contact',
      satisfaction: '4.2/5',
      handoff: 'Social → Chat',
      automationRate: '65%',
      tokensUsed: '2,450',
    },
    'returns-exchange': {
      responseTime: '1.1s',
      resolution: 'First Contact',
      satisfaction: '4.7/5',
      handoff: 'SMS → Chat',
      automationRate: '90%',
      tokensUsed: '980',
    },
  };

  const m = metrics[scenario.id] || metrics['order-tracking'];

  const metricItems = [
    { label: 'Avg Response', value: m.responseTime, icon: '⚡' },
    { label: 'Resolution', value: m.resolution, icon: '✅' },
    { label: 'CSAT Score', value: m.satisfaction, icon: '⭐' },
    { label: 'Channel Path', value: m.handoff, icon: '🔀' },
    { label: 'Automation', value: m.automationRate, icon: '🤖' },
    { label: 'Tokens Used', value: m.tokensUsed, icon: '🔤' },
  ];

  const actionsTaken = {
    'order-tracking': ['Looked up order status', 'Checked shipping carrier API', 'Applied courtesy discount', 'Generated tracking link'],
    'billing-dispute': ['Verified duplicate charge', 'Initiated refund process', 'Flagged account for protection', 'Applied goodwill credit'],
    'tech-support': ['Checked account lock status', 'Unlocked account', 'Sent password reset', 'Recommended 2FA setup'],
    'product-inquiry': ['Analyzed usage patterns', 'Generated plan comparison', 'Activated free trial', 'Scheduled onboarding call'],
    'complaint-escalation': ['Reviewed incident history', 'Authorized full credit', 'Assigned dedicated manager', 'Initiated infrastructure upgrade'],
    'returns-exchange': ['Located order details', 'Checked inventory availability', 'Created exchange order', 'Generated return label'],
  };

  const actions = actionsTaken[scenario.id] || [];

  return (
    <aside className="metrics-panel">
      <h3 className="metrics-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
        Scenario Metrics
      </h3>

      <div className="metrics-grid">
        {metricItems.map((item) => (
          <div key={item.label} className="metric-card">
            <span className="metric-icon">{item.icon}</span>
            <div className="metric-info">
              <span className="metric-value">{item.value}</span>
              <span className="metric-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="metrics-title" style={{ marginTop: '24px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        Agent Actions
      </h3>

      <div className="actions-list">
        {actions.map((action, i) => (
          <div key={i} className="action-item">
            <div className="action-step">{i + 1}</div>
            <span>{action}</span>
          </div>
        ))}
      </div>

      <h3 className="metrics-title" style={{ marginTop: '24px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
        Scenario Details
      </h3>

      <div className="details-list">
        <div className="detail-row">
          <span className="detail-label">Channel</span>
          <span className="detail-value">{scenario.channel}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Priority</span>
          <span className={`detail-value priority-text-${scenario.priority.toLowerCase()}`}>
            {scenario.priority}
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Messages</span>
          <span className="detail-value">{scenario.conversation.length}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Sentiment</span>
          <span className="detail-value">{scenario.sentiment}</span>
        </div>
      </div>
    </aside>
  );
}
