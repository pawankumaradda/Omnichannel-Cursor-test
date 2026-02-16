# Product Requirements Document (PRD)

## OmniChannel Success Agent

| Field             | Value                              |
|-------------------|------------------------------------|
| **Product Name**  | OmniChannel Success Agent          |
| **Version**       | 1.0                                |
| **Author**        | Pawan Kumar Adda                   |
| **Date**          | February 16, 2026                  |
| **Status**        | MVP / In Development               |
| **Repository**    | [GitHub](https://github.com/pawankumaradda/Omnichannel-Cursor-test) |

---

## 1. Executive Summary

OmniChannel Success Agent is an interactive demo application that showcases how an AI-powered customer service agent handles diverse support scenarios across multiple communication channels. The app serves as a visual prototype and sales enablement tool, demonstrating best-practice conversational flows, real-time metrics, and seamless cross-channel handoffs for customer support operations.

---

## 2. Problem Statement

Customer service teams and stakeholders struggle to visualize how an AI agent would behave across different support scenarios, communication channels, and escalation paths. Traditional documentation (slides, PDFs) fails to convey the dynamic, real-time nature of AI-assisted conversations.

**Key pain points:**
- No interactive way to demo AI agent behavior to stakeholders or prospects
- Difficult to compare performance metrics across different scenario types
- Cross-channel handoff flows (Phone to Chat, Email to Chat, SMS to Chat, Social to Chat) are hard to conceptualize without a live simulation
- No centralized view linking conversation quality, sentiment analysis, and agent actions

---

## 3. Goals & Success Metrics

### 3.1 Goals

| # | Goal | Description |
|---|------|-------------|
| G1 | **Demonstrate AI Agent Capabilities** | Provide a realistic, interactive simulation of AI-powered customer support across 6+ scenario types |
| G2 | **Showcase OmniChannel Routing** | Visualize how conversations flow across Web Chat, Phone, Email, SMS, and Social Media channels |
| G3 | **Surface Performance Metrics** | Display key KPIs (response time, CSAT, automation rate, resolution type) per scenario |
| G4 | **Enable Stakeholder Buy-In** | Serve as a sales demo and internal alignment tool for AI-driven support initiatives |
| G5 | **Provide a Foundation for Production** | Establish the architecture and UX patterns for a future production-grade agent platform |

### 3.2 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Scenario Coverage | 6+ distinct scenarios | Count of unique scenario types |
| Channel Coverage | 5+ channels | Unique originating/transfer channels |
| Stakeholder Comprehension | 90%+ understand the flows after a demo | Post-demo survey |
| Page Load Time | < 2 seconds | Lighthouse performance audit |
| Mobile Responsiveness | Fully functional on tablet+ | Manual QA across breakpoints |

---

## 4. Target Users

| Persona | Description | Primary Need |
|---------|-------------|--------------|
| **Sales Engineer** | Demos the product to prospective customers | Polished, interactive walkthrough of AI capabilities |
| **Product Manager** | Evaluates feature coverage and scenario gaps | Visual map of supported scenarios, channels, and metrics |
| **CX Leader** | Head of customer support evaluating AI adoption | Proof of concept showing AI handling real-world cases |
| **Engineering Lead** | Assessing technical architecture for production build | Reference implementation of conversation UI and metrics |
| **Executive Sponsor** | VP/C-level reviewing AI investment | High-level dashboard with KPIs and outcome summaries |

---

## 5. Features & Requirements

### 5.1 Scenario Library (Sidebar)

**Description:** A searchable, filterable list of pre-built customer support scenarios.

| Req ID | Requirement | Priority | Status |
|--------|-------------|----------|--------|
| S-01 | Display scenario cards with icon, title, description, tags | P0 | Done |
| S-02 | Search scenarios by title or tag keyword | P0 | Done |
| S-03 | Show priority badge (Low, Medium, High, Urgent) per scenario | P0 | Done |
| S-04 | Show sentiment indicator dot per scenario | P0 | Done |
| S-05 | Show originating channel (Web Chat, Phone, Email, SMS, Social) | P0 | Done |
| S-06 | Highlight active/selected scenario | P0 | Done |
| S-07 | Display aggregate stats in footer (total scenarios, channels, CSAT) | P1 | Done |
| S-08 | Filter by channel type | P2 | Planned |
| S-09 | Filter by priority level | P2 | Planned |
| S-10 | Filter by sentiment | P2 | Planned |

### 5.2 Conversation Replay (Chat Window)

**Description:** An animated, message-by-message replay of each scenario's conversation.

| Req ID | Requirement | Priority | Status |
|--------|-------------|----------|--------|
| C-01 | Auto-play conversation messages sequentially on scenario select | P0 | Done |
| C-02 | Show typing indicator animation for AI Agent messages | P0 | Done |
| C-03 | Differentiate message bubbles by role (Customer, Agent, System) | P0 | Done |
| C-04 | Display system context messages (transfers, ticket info) | P0 | Done |
| C-05 | Support markdown-style formatting (bold, links, line breaks) | P0 | Done |
| C-06 | Auto-scroll to latest message | P0 | Done |
| C-07 | Replay button to restart the conversation animation | P0 | Done |
| C-08 | Show "Conversation resolved successfully" banner at completion | P0 | Done |
| C-09 | Display sentiment badge and priority pill in header | P0 | Done |
| C-10 | Adjustable replay speed (1x, 1.5x, 2x) | P2 | Planned |
| C-11 | Pause/resume conversation replay | P2 | Planned |
| C-12 | Interactive mode: user can type and receive mock AI responses | P3 | Planned |

### 5.3 Metrics & Analytics Panel

**Description:** A right-side panel showing performance metrics, agent actions, and scenario details.

| Req ID | Requirement | Priority | Status |
|--------|-------------|----------|--------|
| M-01 | Display 6 key metrics per scenario (response time, resolution, CSAT, channel path, automation rate, tokens used) | P0 | Done |
| M-02 | Show ordered list of agent actions taken during the conversation | P0 | Done |
| M-03 | Display scenario metadata (channel, priority, message count, sentiment) | P0 | Done |
| M-04 | Metrics update dynamically when switching scenarios | P0 | Done |
| M-05 | Aggregate dashboard view across all scenarios | P2 | Planned |
| M-06 | Export metrics as CSV/PDF | P3 | Planned |
| M-07 | Historical trend charts (CSAT over time, resolution rates) | P3 | Planned |

### 5.4 Responsive Design

| Req ID | Requirement | Priority | Status |
|--------|-------------|----------|--------|
| R-01 | 3-column layout on desktop (>1100px) | P0 | Done |
| R-02 | 2-column layout on medium screens (768px-1100px), hide metrics panel | P1 | Done |
| R-03 | Single-column layout on mobile (<768px), hide sidebar | P1 | Done |
| R-04 | Mobile hamburger menu to access scenario list | P2 | Planned |

---

## 6. Scenario Coverage

The MVP includes 6 pre-built scenarios covering the most common customer support use cases:

| # | Scenario | Channel | Priority | Sentiment | Key Capabilities Demonstrated |
|---|----------|---------|----------|-----------|-------------------------------|
| 1 | **Order Tracking** | Web Chat | Medium | Neutral | Order lookup, carrier API integration, proactive discount |
| 2 | **Billing Dispute** | Phone to Chat | High | Negative | Cross-channel transfer, refund processing, duplicate detection |
| 3 | **Technical Support** | Email to Chat | High | Negative | Account unlock, escalation handling, security recommendations |
| 4 | **Product Recommendation** | Web Chat | Low | Positive | Plan comparison, trial activation, upsell, meeting scheduling |
| 5 | **Complaint Escalation** | Social Media to Chat | Urgent | Very Negative | Social media monitoring, retention offers, SLA guarantees, dedicated account management |
| 6 | **Returns & Exchange** | SMS to Chat | Low | Neutral | Inventory check, exchange creation, return label generation |

---

## 7. Technical Architecture

### 7.1 Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend Framework** | React 19 | Component-based architecture, large ecosystem |
| **Build Tool** | Vite 7 | Fast HMR, optimized production builds |
| **Production Server** | Express 4 | Lightweight, proven Node.js server for static serving |
| **Styling** | Custom CSS with CSS Variables | Full design control, no dependency on UI libraries |
| **Deployment** | Heroku (Node.js buildpack) | Simple PaaS with GitHub integration |
| **Source Control** | GitHub | Standard Git workflow |

### 7.2 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx        # Scenario list with search
│   │   ├── ChatWindow.jsx     # Animated conversation replay
│   │   └── MetricsPanel.jsx   # Performance metrics & actions
│   ├── data/
│   │   └── scenarios.js       # Mock scenario definitions
│   ├── App.jsx                # Root layout (3-panel grid)
│   ├── App.css                # All application styles
│   ├── main.jsx               # React entry point
│   └── index.css              # Global reset
├── public/                    # Static assets
├── server.js                  # Express production server
├── Procfile                   # Heroku process definition
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
└── index.html                 # HTML entry point
```

### 7.3 Deployment Pipeline

```
Developer Push → GitHub (main) → Heroku Auto-Deploy
                                    ├── npm install
                                    ├── npm run build (vite build)
                                    └── npm start (node server.js)
```

---

## 8. Roadmap

### Phase 1 — MVP (Current)
- [x] 6 interactive chatbot scenario replays
- [x] 5-channel OmniChannel coverage
- [x] Per-scenario metrics and agent action tracking
- [x] Animated conversation replay with typing indicators
- [x] Search functionality
- [x] Responsive design (desktop + tablet)
- [x] Heroku deployment

### Phase 2 — Enhanced Demo
- [ ] Advanced filtering (by channel, priority, sentiment)
- [ ] Adjustable replay speed and pause/resume controls
- [ ] Mobile-optimized navigation (hamburger menu)
- [ ] Aggregate analytics dashboard across all scenarios
- [ ] Additional scenarios (10+ total): password reset, subscription cancellation, appointment booking, feedback collection
- [ ] Dark/light theme toggle

### Phase 3 — Interactive Prototype
- [ ] Live chat input: user types messages and receives context-aware mock AI responses
- [ ] Scenario builder: create custom scenarios via a form UI
- [ ] LLM integration (OpenAI/Anthropic) for dynamic responses
- [ ] Real-time sentiment analysis on user input
- [ ] Conversation branching (multiple resolution paths per scenario)

### Phase 4 — Production Platform
- [ ] Backend API with database (PostgreSQL) for scenario storage
- [ ] User authentication and role-based access
- [ ] Multi-tenant support
- [ ] Webhook integrations (Slack, Salesforce Service Cloud, Zendesk)
- [ ] Real metrics pipeline from production conversations
- [ ] A/B testing framework for agent response strategies
- [ ] Export and reporting (CSV, PDF, Salesforce dashboards)

---

## 9. Non-Functional Requirements

| Category | Requirement | Target |
|----------|-------------|--------|
| **Performance** | First Contentful Paint | < 1.5s |
| **Performance** | Production bundle size (gzipped) | < 70 KB |
| **Accessibility** | WCAG 2.1 AA compliance | Keyboard navigable, semantic HTML |
| **Browser Support** | Chrome, Firefox, Safari, Edge (latest 2 versions) | Full functionality |
| **Security** | No sensitive data in client bundle | All data is mock/demo |
| **Availability** | Heroku uptime | 99.5% (standard tier) |

---

## 10. Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Mock data perceived as real product capability | Stakeholders overestimate current AI maturity | Medium | Clear "Demo Mode" labels throughout the UI |
| Limited scenario coverage misses key use cases | Incomplete evaluation by prospects | Medium | Prioritize scenario expansion in Phase 2 |
| Heroku free/eco tier performance limitations | Slow cold starts for demo sessions | Low | Use Heroku Basic dyno; pre-warm before demos |
| No backend limits future extensibility | Can't persist custom scenarios or user data | Low | Addressed in Phase 4 roadmap |

---

## 11. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | Should we integrate with a live LLM for dynamic responses in Phase 3? | Product | Open |
| 2 | What additional scenarios are highest priority for Phase 2? | CX Team | Open |
| 3 | Should the app support multi-language conversations? | Product | Open |
| 4 | Is Salesforce Service Cloud integration a requirement for Phase 4? | Engineering | Open |
| 5 | Should we add voice/video channel simulations? | Product | Open |

---

## 12. Appendix

### A. Glossary

| Term | Definition |
|------|------------|
| **CSAT** | Customer Satisfaction Score — a metric measuring customer happiness (typically 1-5 scale) |
| **First Contact Resolution** | Issue resolved in a single interaction without transfers or follow-ups |
| **OmniChannel** | A unified approach to customer engagement across all communication channels |
| **Sentiment** | The emotional tone of a customer interaction (positive, neutral, negative, very negative) |
| **SLA** | Service Level Agreement — contractual uptime and response time guarantees |
| **Automation Rate** | Percentage of the conversation handled autonomously by the AI agent without human intervention |

### B. Channel Definitions

| Channel | Description |
|---------|-------------|
| **Web Chat** | Customer initiates chat directly on the website |
| **Phone to Chat** | Customer starts on phone, transferred to chat for richer interaction |
| **Email to Chat** | Support ticket escalated from email to live chat |
| **SMS to Chat** | Customer texts via SMS, auto-routed to chat interface |
| **Social Media to Chat** | Customer flagged from Twitter/social DMs into support chat |
