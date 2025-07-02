
export const account = {
  firstname: 'Poluk',
  lastname: 'Ikbal',
  DOB: '23/05/1995',
}

export const banking = {
  accountName: 'Asif Ikbal Poluk',
  BSB: '123 456',
  accountNo: '123 456 789',
  payID: 'asifpoluk@coverme.com.co',
  cardNo: '4399102376890614',
  currentBalance: 12345
}

export const investment = {
  growth: 350,

}

export const policyInfo = {
  memberNo: '920231004',
  policyPerson: ['Asif Ikbal Poluk'],
  policyName: 'Basic Extras Only',
  startYear: '2025',
  monthlyTotal: '$35',
  monthlyDeposit: '$35',
  monthlyPolicy: 'FREE',
  totalBenefits: 500,
  remainBenefits: 300,
}


export const transactionsHistory = [
  { date: '25/05/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '22/05/25', type: 'Expense', label: 'Tooth Extraction', amount: 180 },
  { date: '20/05/25', type: 'Deposit', label: 'Top Up', amount: 100 },
  { date: '18/05/25', type: 'Deposit', label: 'Top Up', amount: 500 },
  { date: '16/05/25', type: 'Expense', label: 'Root Canal', amount: 250 },
  { date: '12/05/25', type: 'Expense', label: 'Dental Filling', amount: 100 },
  { date: '07/05/25', type: 'Deposit', label: 'Top Up', amount: 150 },
  { date: '05/05/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '28/04/25', type: 'Expense', label: 'Physio Appointment', amount: 50 },
  { date: '20/04/25', type: 'Deposit', label: 'Top Up', amount: 200 },
  { date: '12/04/25', type: 'Expense', label: 'Glasses Purchase', amount: 120 },
  { date: '05/04/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
];



export const claimsHistory = [
  { date: '12/05/25', type: 'CLAIM', label: 'Dental Filling', amount: 150 },
  { date: '28/04/25', type: 'CLAIM', label: 'Physio Appointment', amount: 100 },
  { date: '16/04/25', type: 'CLAIM', label: 'Eye Test', amount: 75 },
  { date: '08/04/25', type: 'CLAIM', label: 'Tooth Cleaning', amount: 90 },
];

export function getEmoji(label) {
  const emojiMap = {
    "🦷": ["Dental Filling", "Tooth Extraction", "Root Canal", "Tooth Cleaning", "Checkup & Clean"],
    "💪": ["Physio Appointment"],
    "👓": ["Glasses", "Eye Test", "Glasses Purchase"],
    "💸": ["Premium Deposit", "Top Up"],
    "📄": ["Claim Submission"],
    "🏥": ["Hospital Visit"]
  };

  for (const [emoji, labels] of Object.entries(emojiMap)) {
    if (labels.includes(label)) {
      return emoji;
    }
  }

  return "💳"; // Default emoji for unknown transactions
}


export const savingsGoals = {
  target: 900,
  current: 465,
  reward: 'Unlock the hopsital cover add-on to your policy'
}