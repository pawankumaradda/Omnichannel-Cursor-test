const scenarios = [
  {
    id: 'auth-happy',
    title: 'Authentication - Happy Path',
    description: 'Login issues and identity verification',
    icon: 'lock',
    welcomeMessage:
      'Hello! I\'m your Welo Partner Success Agent that can answer your partner questions. Ask me things like:\n\n- "Tell me about my partner scorecard"\n- "Do I have any deal registration expiring soon?"\n- "Can you qualify these leads for relevance?"\n- "Can you verify the MDF Balance?"\n- "What are you able to help me with?"\n\nSo, how can I help?',
    conversation: [
      {
        role: 'agent',
        text: 'Hello! I\'m your Welo Partner Success Agent that can answer your partner questions. Ask me things like:\n\n- "Tell me about my partner scorecard"\n- "Do I have any deal registration expiring soon?"\n- "Can you qualify these leads for relevance?"\n- "Can you verify the MDF Balance?"\n- "What are you able to help me with?"\n\nSo, how can I help?',
        time: '18:45',
      },
      {
        role: 'customer',
        text: 'I need to verify my identity to access the partner portal.',
        time: '18:46',
      },
      {
        role: 'agent',
        text: 'Of course! I\'ll send a one-time password to your registered phone number ending in **4821**. Please enter the code once you receive it.',
        time: '18:46',
      },
      {
        role: 'customer',
        text: '482916',
        time: '18:47',
      },
      {
        role: 'agent',
        text: 'Your identity has been verified successfully. You now have full access to the partner portal. Is there anything else I can help you with today?',
        time: '18:47',
      },
    ],
  },
  {
    id: 'auth-unhappy',
    title: 'Authentication - Unhappy Path',
    description: 'Simulates rejection of incorrect one-time passwords',
    icon: 'lock',
    conversation: [
      {
        role: 'agent',
        text: 'Hello! I\'m your Welo Partner Success Agent. I can help you with authentication, deal registration, and more.\n\nSo, how can I help?',
        time: '09:12',
      },
      {
        role: 'customer',
        text: 'I need to log in to the partner portal.',
        time: '09:13',
      },
      {
        role: 'agent',
        text: 'Sure! I\'ll send a one-time password to your registered phone number ending in **7653**. Please enter the code once you receive it.',
        time: '09:13',
      },
      {
        role: 'customer',
        text: '123456',
        time: '09:14',
      },
      {
        role: 'agent',
        text: 'That code doesn\'t match. You have **2 attempts remaining**. Please check your messages and try again.',
        time: '09:14',
      },
      {
        role: 'customer',
        text: '654321',
        time: '09:15',
      },
      {
        role: 'agent',
        text: 'That code is also incorrect. You have **1 attempt remaining**. After that, your account will be temporarily locked for security purposes.',
        time: '09:15',
      },
      {
        role: 'customer',
        text: '111111',
        time: '09:16',
      },
      {
        role: 'agent',
        text: 'Your account has been temporarily locked due to multiple failed authentication attempts. For security, please contact your Partner Account Manager or try again in **30 minutes**.',
        time: '09:16',
      },
    ],
  },
  {
    id: 'auth-unmapped',
    title: 'Authentication - Unmapped Phone',
    description: 'Simulates failure when phone number is not found in CRM',
    icon: 'lock-open',
    conversation: [
      {
        role: 'agent',
        text: 'Hello! I\'m your Welo Partner Success Agent. I can help you with authentication, deal registration, and more.\n\nSo, how can I help?',
        time: '14:30',
      },
      {
        role: 'customer',
        text: 'Hi, I need to verify my identity.',
        time: '14:31',
      },
      {
        role: 'agent',
        text: 'I\'d be happy to help with identity verification. Let me look up your phone number in our system...',
        time: '14:31',
      },
      {
        role: 'agent',
        text: 'I\'m sorry, but the phone number you\'re contacting from doesn\'t match any partner records in our CRM. This could mean:\n\n- Your phone number hasn\'t been registered with your partner account\n- The number on file may be different\n\nPlease contact your **Partner Account Manager** to update your phone number, or try reaching us from your registered number.',
        time: '14:32',
      },
    ],
  },
  {
    id: 'deal-registration',
    title: 'Deal Registration - Happy Path',
    description: 'Register a new deal with vouchers',
    icon: 'briefcase',
    conversation: [
      {
        role: 'agent',
        text: 'Hello! I\'m your Welo Partner Success Agent. I can help you with deal registration, partner scorecard, and more.\n\nSo, how can I help?',
        time: '10:00',
      },
      {
        role: 'customer',
        text: 'I want to register a new deal for Acme Corp.',
        time: '10:01',
      },
      {
        role: 'agent',
        text: 'Great! Let me help you register a new deal. I\'ll need a few details:\n\n1. **Customer Name:** Acme Corp (confirmed)\n2. **Estimated Deal Value?**\n3. **Product Line?**\n4. **Expected Close Date?**',
        time: '10:01',
      },
      {
        role: 'customer',
        text: 'Deal value is $250,000 for Sales Cloud, expected close in Q2 2026.',
        time: '10:02',
      },
      {
        role: 'agent',
        text: 'Your deal has been registered successfully:\n\n- **Deal ID:** DR-2026-04871\n- **Customer:** Acme Corp\n- **Value:** $250,000\n- **Product:** Sales Cloud\n- **Close Date:** Q2 2026\n- **Voucher Applied:** Partner Incentive 15%\n\nYou\'ll receive a confirmation email shortly. Is there anything else?',
        time: '10:03',
      },
    ],
  },
  {
    id: 'partner-support',
    title: 'Partner Support',
    description: 'Deal registration and tier status',
    icon: 'support',
    conversation: [
      {
        role: 'agent',
        text: 'Hello! I\'m your Welo Partner Success Agent. I can help you with deal registration, tier status, MDF balance, and more.\n\nSo, how can I help?',
        time: '11:20',
      },
      {
        role: 'customer',
        text: 'Tell me about my partner scorecard.',
        time: '11:21',
      },
      {
        role: 'agent',
        text: 'Here\'s your current partner scorecard:\n\n- **Partner Tier:** Gold\n- **Certifications:** 12/15 required for Platinum\n- **Revenue YTD:** $1.8M (Target: $2.5M)\n- **Deal Registrations:** 24 active\n- **Customer Satisfaction:** 4.7/5\n- **MDF Balance:** $45,000 remaining\n\nYou\'re **72% toward Platinum tier**. Would you like suggestions on how to reach Platinum this quarter?',
        time: '11:22',
      },
      {
        role: 'customer',
        text: 'Yes, what do I need to do?',
        time: '11:23',
      },
      {
        role: 'agent',
        text: 'To reach **Platinum tier** by end of Q2, here\'s what I recommend:\n\n1. **Complete 3 more certifications** — I can enroll your team in the next available sessions\n2. **Close $700K more in revenue** — You have 8 deals in pipeline totaling $920K\n3. **Increase deal registrations** — Register 5+ new deals this quarter\n\nWould you like me to schedule the certification sessions or pull up your pipeline details?',
        time: '11:24',
      },
    ],
  },
];

export default scenarios;
