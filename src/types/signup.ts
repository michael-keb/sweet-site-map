export interface SignUpData {
  // Step 1: Basic Info
  fullName: string;
  email: string;
  phone: string;
  location: string;
  otherState?: string;
  workEligibility: string;

  // Step 2: Background & Goals
  employmentStatus: string;
  currentRole?: string;
  careerGoal: string;
  targetRole: string;
  whySquad: string;
  whyIncomeShare: string[];
  whyIncomeShareOther?: string;

  // Step 3: Financial
  currentIncome: string;
  incomeAmount?: number;
  housingType: string;
  housingCost?: number;
  monthlyEssentials: number;
  dependents: string;
  dependentsCount?: number;
  hasDebts: boolean;
  creditCardBalance?: number;
  creditCardPayment?: number;
  personalLoanBalance?: number;
  personalLoanPayment?: number;
  carLoanBalance?: number;
  carLoanPayment?: number;
  hecsBalance?: number;
  otherDebt?: string;
  totalMonthlyDebt: number;
  affordabilityCheck: string;

  // Step 4: Documents
  documents: {
    payslip?: File;
    bankStatement?: File;
    debtStatement?: File;
    centrelinkStatement?: File;
  };
}
