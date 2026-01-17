import { DepositSVG, DentalSVG, PhysioSVG, OptomSVG, ChiroSVG, 
  NaturoSVG, NutritionSVG, PsychSVG, PillSVG, HealthSVG, AudioSVG } from "@/components"
import { ComponentType } from "react"


export const account = {
  firstname: 'John',
  lastname: 'Conner',
  userId: '@John123',
  DOB: '23/05/1995',
  email: 'johnconner@gmail.com',
  phone: '0412 345 678',
  address: '123 Sesame St',
  authentication: 1234,
}

export const banking = {
  accountName: 'John Conner',
  BSB: '123 456',
  accountNo: '123 456 789',
  payID: 'john123@coverme.com.co',
  cardNo: '4399102376890614',
  currentBalance: 12345
}

export const investment = {
  growth: 350,

}

export const policyInfo = {
  memberNo: '920231004',
  policyPerson: ['John Conner'],
  policyName: 'Basic Extras Only',
  startYear: '2025',
  joined: '19/01/2025',
  monthlyTotal: '$35',
  frequency: 'Monthly',
  invoice: '15th May',
  payment: 'Direct Debit',
  monthlyDeposit: '$35',
  monthlyPolicy: 'Free',
  totalBenefits: 500,
  remainBenefits: 300,
}


export const transactionsHistory = [
  // APR 2025 (weeks starting 07, 14, 21, 28)
  { date: '07/04/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '09/04/25', type: 'Deposit', label: 'Top Up', amount: 120 },
  { date: '11/04/25', type: 'Expense', label: 'Dental Filling', amount: 95 },

  { date: '14/04/25', type: 'Deposit', label: 'Top Up', amount: 150 },
  { date: '16/04/25', type: 'Expense', label: 'Glasses Purchase', amount: 140 },

  { date: '21/04/25', type: 'Deposit', label: 'Top Up', amount: 200 },
  { date: '24/04/25', type: 'Expense', label: 'Physio Appointment', amount: 60 },

  { date: '28/04/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '30/04/25', type: 'Expense', label: 'Checkup & Clean', amount: 110 },

  // MAY 2025 (weeks starting 05, 12, 19, 26)
  { date: '05/05/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '06/05/25', type: 'Deposit', label: 'Top Up', amount: 150 },
  { date: '08/05/25', type: 'Expense', label: 'Root Canal', amount: 260 },

  { date: '12/05/25', type: 'Deposit', label: 'Top Up', amount: 180 },
  { date: '14/05/25', type: 'Expense', label: 'Dental Filling', amount: 100 },

  { date: '19/05/25', type: 'Deposit', label: 'Top Up', amount: 100 },
  { date: '21/05/25', type: 'Expense', label: 'Tooth Extraction', amount: 185 },

  { date: '26/05/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '28/05/25', type: 'Expense', label: 'Physio Appointment', amount: 70 },

  // JUN 2025 (weeks starting 02, 09, 16, 23, 30)
  { date: '02/06/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '03/06/25', type: 'Deposit', label: 'Top Up', amount: 220 },
  { date: '05/06/25', type: 'Expense', label: 'Eye Test', amount: 80 },

  { date: '09/06/25', type: 'Deposit', label: 'Top Up', amount: 160 },
  { date: '12/06/25', type: 'Expense', label: 'Glasses Purchase', amount: 130 },

  { date: '16/06/25', type: 'Deposit', label: 'Top Up', amount: 90 },
  { date: '18/06/25', type: 'Expense', label: 'Dental Filling', amount: 105 },

  { date: '23/06/25', type: 'Deposit', label: 'Top Up', amount: 140 },
  { date: '26/06/25', type: 'Expense', label: 'Physio Appointment', amount: 65 },

  { date: '30/06/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '30/06/25', type: 'Expense', label: 'Checkup & Clean', amount: 115 },

  // JUL 2025 (weeks starting 07, 14, 21, 28)
  { date: '07/07/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '08/07/25', type: 'Deposit', label: 'Top Up', amount: 180 },
  { date: '10/07/25', type: 'Expense', label: 'Therapy', amount: 120 },

  { date: '14/07/25', type: 'Deposit', label: 'Top Up', amount: 200 },
  { date: '16/07/25', type: 'Expense', label: 'Dental Filling', amount: 95 },

  { date: '21/07/25', type: 'Deposit', label: 'Top Up', amount: 130 },
  { date: '24/07/25', type: 'Expense', label: 'Chiro', amount: 85 },

  { date: '28/07/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '30/07/25', type: 'Expense', label: 'Physicial Therapy', amount: 75 },

  // AUG 2025 (weeks starting 04, 11, 18, 25)
  { date: '04/08/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '05/08/25', type: 'Deposit', label: 'Top Up', amount: 150 },
  { date: '07/08/25', type: 'Expense', label: 'Prescription', amount: 55 },
  { date: '10/08/25', type: 'Expense', label: 'Naturopath', amount: 55 },

  { date: '11/08/25', type: 'Deposit', label: 'Top Up', amount: 170 },
  { date: '13/08/25', type: 'Expense', label: 'GP Visit', amount: 95 },

  { date: '18/08/25', type: 'Deposit', label: 'Top Up', amount: 120 },
  { date: '20/08/25', type: 'Expense', label: 'Osteopath', amount: 90 },

  { date: '25/08/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '28/08/25', type: 'Expense', label: 'Nutritionist', amount: 110 },

  // SEP 2025 (weeks starting 01, 08, 15, 22, 29)
  { date: '01/09/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '02/09/25', type: 'Deposit', label: 'Top Up', amount: 210 },
  { date: '04/09/25', type: 'Expense', label: 'Dental Filling', amount: 100 },

  { date: '08/09/25', type: 'Deposit', label: 'Top Up', amount: 160 },
  { date: '11/09/25', type: 'Expense', label: 'Hearing Aids', amount: 150 },

  { date: '15/09/25', type: 'Deposit', label: 'Top Up', amount: 140 },
  { date: '17/09/25', type: 'Expense', label: 'Therapy', amount: 130 },

  { date: '22/09/25', type: 'Deposit', label: 'Top Up', amount: 100 },
  { date: '25/09/25', type: 'Expense', label: 'Glasses Purchase', amount: 180 },

  { date: '29/09/25', type: 'Deposit', label: 'Premium Deposit', amount: 35 },
  { date: '30/09/25', type: 'Expense', label: 'Physio Appointment', amount: 70 },
];

export const claimsHistory = [
  // APR 2025
  { date: '08/04/25', type: 'CLAIM', label: 'Tooth Cleaning', amount: 90 },
  { date: '16/04/25', type: 'CLAIM', label: 'Eye Test', amount: 75 },
  { date: '22/04/25', type: 'CLAIM', label: 'Physio Appointment', amount: 100 },
  { date: '29/04/25', type: 'CLAIM', label: 'Dental Filling', amount: 120 },

  // MAY 2025
  { date: '06/05/25', type: 'CLAIM', label: 'Checkup & Clean', amount: 110 },
  { date: '13/05/25', type: 'CLAIM', label: 'Dental Filling', amount: 150 },
  { date: '20/05/25', type: 'CLAIM', label: 'Physio Appointment', amount: 90 },
  { date: '27/05/25', type: 'CLAIM', label: 'Glasses Purchase', amount: 130 },

  // JUN 2025
  { date: '03/06/25', type: 'CLAIM', label: 'Eye Test', amount: 80 },
  { date: '10/06/25', type: 'CLAIM', label: 'Physicial Therapy', amount: 95 },
  { date: '17/06/25', type: 'CLAIM', label: 'Dental Filling', amount: 115 },
  { date: '24/06/25', type: 'CLAIM', label: 'Checkup & Clean', amount: 105 },
  { date: '30/06/25', type: 'CLAIM', label: 'GP Visit', amount: 85 },

  // JUL 2025
  { date: '08/07/25', type: 'CLAIM', label: 'Therapy', amount: 110 },
  { date: '15/07/25', type: 'CLAIM', label: 'Dental Filling', amount: 95 },
  { date: '22/07/25', type: 'CLAIM', label: 'Chiro', amount: 80 },
  { date: '29/07/25', type: 'CLAIM', label: 'Physio Appointment', amount: 90 },

  // AUG 2025
  { date: '05/08/25', type: 'CLAIM', label: 'Prescription', amount: 45 },
  { date: '12/08/25', type: 'CLAIM', label: 'GP Visit', amount: 100 },
  { date: '19/08/25', type: 'CLAIM', label: 'Osteopath', amount: 85 },
  { date: '26/08/25', type: 'CLAIM', label: 'Nutritionist', amount: 95 },

  // SEP 2025
  { date: '02/09/25', type: 'CLAIM', label: 'Dental Filling', amount: 120 },
  { date: '09/09/25', type: 'CLAIM', label: 'Hearing Aids', amount: 200 },
  { date: '16/09/25', type: 'CLAIM', label: 'Therapy', amount: 120 },
  { date: '23/09/25', type: 'CLAIM', label: 'Glasses Purchase', amount: 150 },
  { date: '30/09/25', type: 'CLAIM', label: 'Physio Appointment', amount: 95 },
];

interface IconProps {
  colour1?: string;
  colour2?: string;
}

interface IconMapping {
  icon: ComponentType<IconProps>; // This tells TS it's a React Component
  labels: string[];
}

export function getIcon(label: string) {


  const iconMap: IconMapping[] = [
    { icon: DentalSVG, labels: ['Dental Filling', 'Tooth Extraction', 'Root Canal', 'Tooth Cleaning', 'Checkup & Clean'] },
    { icon: PhysioSVG, labels: ['Physio Appointment', 'Physicial Therapy'] },
    { icon: OptomSVG, labels: ['Glasses', 'Eye Test', 'Glasses Purchase'] },
    { icon: ChiroSVG, labels: ['Chiro', 'Osteopath'] },
    { icon: NaturoSVG, labels: ['Naturopath'] },
    { icon: NutritionSVG, labels: ['Nutritionist'] },
    { icon: PsychSVG, labels: ['Therapy', 'Counselling', 'Psychologist'] },
    { icon: PillSVG, labels: ['Prescription', 'Pharmacist'] },
    { icon: HealthSVG, labels: ['GP Visit', 'Out-Patient Care'] },
    { icon: AudioSVG, labels: ['Audiologist', 'Hearing Aids'] },
    { icon: DepositSVG, labels: ['Premium Deposit', 'Top Up'] },
    { icon: DepositSVG, labels: ['Claim Submission'] },
    { icon: HealthSVG, labels: ['Hospital Visit'] },

    ];


  const match = iconMap.find(item => item.labels.includes(label));
  return match ? match.icon : iconMap[0].icon;
}



export const savingsGoals = {
  target: 900,
  current: 465,
  reward: 'Unlock the hopsital cover add-on to your policy'
}

export const investmentReturns = [
  { date: '2024-07-01', invested: 1000, return: 12, balance: 1012 },
  { date: '2024-08-01', invested: 500, return: 8, balance: 1520 },
  { date: '2024-09-01', invested: 0, return: -5, balance: 1515 },
  { date: '2024-10-01', invested: 1000, return: 20, balance: 2535 },
  { date: '2024-11-01', invested: 500, return: 15, balance: 3050 },
  { date: '2024-12-01', invested: 0, return: 10, balance: 2830 },
  { date: '2025-01-01', invested: 500, return: 25, balance: 3285 },
  { date: '2025-02-01', invested: 500, return: -10, balance: 3075 },
  { date: '2025-03-01', invested: 0, return: 30, balance: 3805 },
  { date: '2025-04-01', invested: 1000, return: 40, balance: 4145 },
  { date: '2025-05-01', invested: 0, return: 22, balance: 4067 },
  { date: '2025-06-01', invested: 500, return: 18, balance: 3956 },
  { date: '2025-07-01', invested: 1000, return: 35, balance: 4720 },
  { date: '2025-08-01', invested: 500, return: 20, balance: 4240 },
  { date: '2025-09-01', invested: 0, return: 15, balance: 5255 },
  { date: '2025-10-01', invested: 1000, return: 28, balance: 5283 },
  { date: '2025-11-01', invested: 500, return: 12, balance: 5795 },
  { date: '2025-12-01', invested: 0, return: 18, balance: 5813 },
  { date: '2026-01-01', invested: 500, return: 22, balance: 5335 },
  { date: '2026-02-01', invested: 500, return: -8, balance: 5827 },
  { date: '2026-03-01', invested: 0, return: 25, balance: 5852 },
  { date: '2026-04-01', invested: 1000, return: 38, balance: 6089 },
  { date: '2026-05-01', invested: 0, return: 20, balance: 6091 },
  { date: '2026-06-01', invested: 500, return: 16, balance: 6142 },
  { date: '2025-06-01', invested: 500, return: 18, balance: 6143 },
  { date: '2025-07-01', invested: 1000, return: 35, balance: 6150 },
  { date: '2025-08-01', invested: 500, return: 20, balance: 6156 },
  { date: '2025-09-01', invested: 0, return: 15, balance: 6600 },
  { date: '2025-10-01', invested: 1000, return: 28, balance: 6900 },
  { date: '2025-11-01', invested: 500, return: 12, balance: 7154 },
  { date: '2025-12-01', invested: 0, return: 18, balance: 7500 },
  { date: '2026-01-01', invested: 500, return: 22, balance: 7140 },
  { date: '2026-02-01', invested: 500, return: -8, balance: 7634 },
  { date: '2026-03-01', invested: 0, return: 25, balance: 7621 },
  { date: '2026-04-01', invested: 1000, return: 38, balance: 7768 },
  { date: '2026-05-01', invested: 0, return: 20, balance: 8000 },
  { date: '2026-06-01', invested: 500, return: 16, balance: 8006 },
];

export const notificationAlerts = [
  {emoji: '🎉', header: 'Welcome to CoverMe!', subheading: 'Your wallet and your health will thank you...'},
  {emoji: '🤖', header: 'Got any question?', subheading: 'Ask your AI assistant anything you want...'},
  {emoji: '⁉️', header: 'We’d love to hear from you!', subheading: 'Got any feedback? Let us know how to ma'}
]

export const receipts = [
  {type: 'Dental', status: 'Processing', date: '06/10/2025', members: 'John Connor', charge: 199.75, benefits: 114.63,},
  {type: 'Psychology', status: 'Processing', date: '03/10/2025', members: 'John Connor', charge: 199.75, benefits: 114.63,},
  {type: 'Physio', status: 'Claimed', date: '25/09/2025', members: 'John Connor', charge: 99.95, benefits: 45.55,},
  {type: 'Optical', status: 'Claimed', date: '13/05/2025', members: 'John Connor', charge: 99.95, benefits: 45.55,}
]

export const offers = [
  {id: '1', isNew: true, img: require('@/assets/images/Toothpaste.png'), title: 'Save 10% on skin products'},
  {id: '2', isNew: false, img: require('@/assets/images/Apple.png'), title: 'Get $5 cashback on your groceries'},
  {id: '3', isNew: false, img: require('@/assets/images/Stethoscope.png'), title: 'Book in your annual GP check'}
]

export const myExtras = [
  {id: '1', title: 'Dental', total: 1200, remain: 387, img: require('@/assets/images/Tooth.png')},
  {id: '2', title: 'General health', total: 1200, remain: 900, img: require('@/assets/images/Stethoscope.png')},
  {id: '3', title: 'Psychology', total: 900, remain: 440, img: require('@/assets/images/Notebook.png')},
]

export const cardPoints = [
  {id: '1', Stamp: require('@/components/SVG/TrophySVG').default, header: 'Get instant rebates', body: 'No need to submit a claim, get your rebate instantly'},
  {id: '2', Stamp: require('@/components/SVG/UmbrellaSVG').default, header: 'Access your rainy day fund', body: 'Have your rainy day fund available anywhere, anytime you need it'},
  {id: '3', Stamp: require('@/components/SVG/WatchSVG').default, header: 'Save time, save money', body: 'Get access to your CoverMe benefits instantly'}
]

export const levelUp = {
  level: 'Level 1',
  current: 75,
  target: 300,
}

export const formatDate = (rawDate: string) => {
  // 1. Split '25/05/25' into [25, 05, 25]
  const [day, month, year] = rawDate.split('/').map(Number);
  
  // 2. Create Date (Year 2025, Month is 0-indexed so 5-1=4, Day 25)
  const date = new Date(2000 + year, month - 1, day);

  // 3. Get the ordinal suffix logic
  const getOrdinal = (d: number) => {
    if (d > 3 && d < 21) return d + 'th';
    switch (d % 10) {
      case 1:  return d + "st";
      case 2:  return d + "nd";
      case 3:  return d + "rd";
      default: return d + "th";
    }
  };

  // 4. Format the Weekday and Month name
  const weekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(date);
  const monthName = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(date);

  return `${weekday}, ${getOrdinal(day)} ${monthName}`;
};

export const cleanDate = (rawDate: string) => {
  // 1. Split '25/05/25' into [25, 05, 25]
  const [day, month, year] = rawDate.split('/').map(Number);
  
  // 2. Create Date (Year 2025, Month is 0-indexed so 5-1=4, Day 25)
  const date = new Date(2000 + year, month - 1, day);

  // 3. Get the ordinal suffix logic
  const getOrdinal = (d: number) => {
    if (d > 3 && d < 21) return d + 'th';
    switch (d % 10) {
      case 1:  return d + "st";
      case 2:  return d + "nd";
      case 3:  return d + "rd";
      default: return d + "th";
    }
  };

  const monthName = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(date);

  return `${getOrdinal(day)} ${monthName} ${year}`;
};