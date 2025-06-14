
export const account = {
  firstname: 'Poluk',
  lastname: 'Doe',
  DOB: '23/05/1995',
}

export const banking = {
  accountName: 'J Doe',
  BSB: '123456',
  accountNo: '123456789',
  payID: 'jdoe@coverme.com.co',
  cardNo: '4399102376890614',
  currentBalance: 12345
}

export const policy = {
  memberNo: '920231004',
  policyName: 'Basic Extras Only',
  monthlyTotal: '$35',
  monthlyDeposit: '$35',
  monthlyPolicy: 'FREE',
  totalBenefits: 500,
  remainBenefits: 500,
}


export const transactions = [
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



export const claims = [
  { date: '12/05/24', status: 'CLAIM', label: 'Dental Filling', requested: 150 },
  { date: '28/04/24', status: 'CLAIM', label: 'Physio Appointment', requested: 100 },
  { date: '16/04/24', status: 'CLAIM', label: 'Eye Test', requested: 75 },
  { date: '08/04/24', status: 'CLAIM', label: 'Tooth Cleaning', requested: 90 },
];

export const savingsGoals = {
  target: 900,
  current: 345,
  reward: 'Unlock the hopsital cover add-on to your policy'
}