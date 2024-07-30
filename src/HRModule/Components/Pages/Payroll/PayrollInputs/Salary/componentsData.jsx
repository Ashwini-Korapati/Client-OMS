
const components = [
    {
      name: 'NET PAY',
      amount: '0.00',
      children: [
        { 
          name: 'GROSS', 
          amount: '0.00',
          children: [
            { name: 'BASIC', amount: '0.00' },
            { name: 'BASIC ARREARS', amount: '0.00' },
            { name: 'BASIC REVERSAL', amount: '0.00', editable: true },
            { name: 'DA', amount: '0.00' },
            { name: 'DA ARREARS', amount: '0.00' },
            { name: 'DA REVERSAL', amount: '0.00', editable: true },
            { name: 'HRA', amount: '0.00' },
            { name: 'HRA ARREARS', amount: '0.00' },
            { name: 'HRA REVERSAL', amount: '0.00', editable: true },
            { name: 'CONVEYANCE', amount: '0.00' },
            { name: 'CONVEYANCE ARREARS', amount: '0.00' },
            { name: 'CONVEYANCE REVERSAL', amount: '0.00', editable: true },
            { name: 'MEDICAL ALLOWANCE', amount: '0.00' },
            { name: 'MEDICAL ALLOWANCE ARREARS', amount: '0.00' },
            { name: 'MEDICAL ALLOWANCE REVERSAL', amount: '0.00', editable: true },
            { name: 'SPECIAL ALLOWANCE', amount: '0.00' },
            { name: 'SPECIAL ALLOWANCE ARREARS', amount: '0.00' },
            { name: 'SPECIAL ALLOWANCE REVERSAL', amount: '0.00', editable: true },
            { name: 'CONSULTANCY FEES', amount: '0.00' },
            { name: 'CONSULTANCY FEES REVERSAL', amount: '0.00', editable: true },
            { name: 'BONUS', amount: '0.00', editable: true },
            { name: 'INCENTIVE', amount: '0.00', editable: true },
            { name: 'OTHER EARNINGS', amount: '0.00', editable: true },
            { name: 'NOTICE PERIOD', amount: '0.00', editable: true },
            { name: 'GRATUITY', amount: '0.00' },
            { name: 'HOLD SALARY', amount: '0.00' },
            { name: 'LEAVE ENCASHMENT', amount: '0.00' },
            { name: 'PERFORMANCE BONUS', amount: '0.00', editable: true },
            { name: 'PERFORMANCE INCENTIVE', amount: '0.00', editable: true },
            { name: 'OVERTIME', amount: '0.00', editable: true },
            { name: 'RELOCATION BONUS', amount: '0.00', editable: true },
            { name: 'REFERRAL BONUS', amount: '0.00', editable: true },
            { name: 'JOINING BONUS', amount: '0.00', editable: true },
            { name: 'VARIABLE BONUS', amount: '0.00', editable: true },
            { name: 'OTHER ALLOWANCE', amount: '0.00' },
            { name: 'OTHER ALLOWANCE ARREARS', amount: '0.00' },
            { name: 'OTHER ALLOWANCE REVERSAL', amount: '0.00', editable: true },
            { name: 'TRAVELLING ALLOWANCE', amount: '0.00', editable: true },
            { name: 'MEAL ALLOWANCE', amount: '0.00' },
            { name: 'CONVEYANCE ALLOWANCE', amount: '0.00' },
            { name: 'EDUCATION ALLOWANCE', amount: '0.00' },
            { name: 'LTA', amount: '0.00' },            
          ]
        },
        { name: 'TOTAL DEDUCTIONS',
          amount: '0.00',
          children: [
            { name: 'PF', amount: '0.00' },
            { name: 'PF ARREARS', amount: '0.00' },
            { name: 'VPF', amount: '0.00', editable: true },
            { name: 'ESI', amount: '0.00' },
            { name: 'PROF TAX', amount: '0.00' },
            { name: 'INCOME TAX', amount: '0.00', editable: true },
            { name: 'LOAN', amount: '0.00', editable: true },
            { name: 'OTHER LOAN', amount: '0.00', editable: true },
            { name: 'SALARY ADVANCE', amount: '0.00', editable: true },
            { name: 'OTHER DEDUCTION', amount: '0.00', editable: true },
            { name: 'LABOUR WELFARE FUND', amount: '0.00' },
            { name: 'NOTICE PERIOD RECOVERY', amount: '0.00' },
       ] },
        { name: 'SALARY MASTER',
          amount: '0.00',
          children: [
            { name: 'FULL BASIC', amount: '0.00' },
            { name: 'FULL HRA', amount: '0.00' },
            { name: 'FULL SPECIAL ALLOWANCE', amount: '0.00' },
            { name: 'FULL OTHER ALLOWANCE', amount: '0.00' },
            { name: 'FULL MEAL ALLOWANCE', amount: '0.00' },
            { name: 'FULL CONVEYANCE ALLOWANCE', amount: '0.00' },
            { name: 'FULL EDUCATION ALLOWANCE', amount: '0.00' },
            { name: 'FULL LTA', amount: '0.00' },
          ]
     }
      ]
    },
    {
      name: 'CALCULATION FIELDS',
      amount: '0.00',
      children: [
        { name: 'CTC ITEMS',
          amount: '0.00',
          children: [
            { name: 'ANNUAL CTC', amount: '0.00' },
            { name: 'MONTHLY CTC', amount: '0.00', editable: true },
          ] 
        },
        { name: 'PF RELATED ITEMS',
          amount: '0.00',
          children: [
            { name: 'INTERNATIONAL EMPLOYEE', amount: '0.00' },
            { name: 'EPS EXCESS CONTIBUTION', amount: '0.00' },
            { name: 'EPF EXCESS CONTRIBUTION', amount: '0.00' },
            { name: 'AGE', amount: '0.00' },
            { name: 'PF BASE LIMIT', amount: '0.00' },
          ]
         },
        { name: 'ESI RELATED ITEMS', 
          amount: '0.00',
          children: [
            { name: 'ESI BASIC', amount: '0.00' },
            { name: 'EMPLOYERS ESI', amount: '0.00' },
            { name: 'ESI GROSS', amount: '0.00' },
          ]
         },
        { name: 'PROF TAX RELATED ITEMS', 
         amount: '0.00',
         children: [
            { name: 'PROF TAX BASIC', amount: '0.00' },
            { name: 'PRORATED PT TAMILNADU', amount: '0.00' },
            { name: 'PRORATED PT KERALA', amount: '0.00' },
          ]
         },
        { name: 'INCOME TAX RELATED ITEMS',
          amount: '0.00',
          children: [
            { name: 'TAXABLE AMOUNT WITH PREV EMP', amount: '0.00' },
            { name: 'TAXABLE AMOUNT', amount: '0.00' },
          ]
         },
        {
            name: 'PREQUISITE ITEMS',
            amount: '0.00',
            children: [
              { name: 'VEHICLE PERQ MONTHLY VALUE', amount: '0.00', editable: true },
              { name: 'VEHICLE PERQUISITE', amount: '0.00' },
              { name: 'HOUSE PERQUISITE', amount: '0.00', editable: true },
              { name: 'ASSET IN RESIDENCE', amount: '0.00', editable: true },
              { name: 'LOAN PERQUISITE', amount: '0.00', editable: true },
              { name: 'EMPLOYER PF PERQUISITE', amount: '0.00', editable: true },
            ]
          },
          {
            name: 'EXEMPTION ITEMS',
            amount: '0.00',
            children: [
                { name: 'EDUCATION EXEMPT', amount: '0.00', editable: true },
                { name: 'MEDICAL EXEMPT', amount: '0.00' },
                { name: 'LTA EXEMPT', amount: '0.00', editable: true },
                { name: 'CONVEYANCE EXEMPT', amount: '0.00' },
                { name: 'LEAVE ENCASHMENT EXEMPTION', amount: '0.00', editable: true },
              ]
          },
          {
            name: 'OTHER PAYMENT ITEMS',
            amount: '0.00',
            children: [
                { name: 'MISC PEIMBURSEMENT', amount: '0.00', editable: true },
                { name: 'COMAPNY LOOK UP', amount: '0.00' },
            ]
          },
        
      ]
    },
    
    
   
    {
      name: 'SETTLEMENT RELATED ITEMS',
      amount: '0.00',
      children: [
        { name: 'ENCASHMENT DAYS', amount: '0.00', editable: true },
        { name: 'NOTICE PERIOD SHORTFALL DAYS', amount: '0.00', editable: true },
        { name: 'IS SETTLED', amount: '0.00' },
        { name: 'NOTICE PERIOD EXCESS DAYS', amount: '0.00', editable: true },
      ]
    },
    {
      name: 'PROJECTION ITEMS',
      amount: '0.00',
      children: [
        { name: 'PROJ PROF TAX BASIC', amount: '0.00' },
        { name: 'PROJ PROF TAX', amount: '0.00' },
        { name: 'PROJ PF BASIC', amount: '0.00' },
        { name: 'PROJ PF', amount: '0.00' },
        { name: 'PROJ HOUSE PERQUISITE', amount: '0.00' },
        { name: 'PROJ VEHICLE PERQUISITE', amount: '0.00' },
        { name: 'PROJ CONV EXEMPTION', amount: '0.00' },
        { name: 'PROJ MEDICAL EXEMPTION', amount: '0.00' },
      ]
    },
    {
      name: 'MISCELLANEOUS ITEMS',
      amount: '0.00',
      children: [
        { name: 'PAYROLL MONTH', amount: '0.00' },
        { name: 'REMAINING MONTH', amount: '0.00' },
        { name: 'EMPLOYEE LABOUR WELFARE CONTRIBUTION', amount: '0.00' },
        { name: 'PRORATA FACTOR', amount: '0.00' },
        { name: 'CONSULTANCY CHECK', amount: '0.00' },
        { name: 'CONSULTANCY GROSS', amount: '0.00' },
        { name: 'MASTER PF BASIC', amount: '0.00' },
        { name: 'PRORATE PF BASIC', amount: '0.00' },
        { name: 'OT DAYS', amount: '0.00', editable: true },
        { name: 'OT HOURS', amount: '0.00', editable: true },
        { name: 'OT RATE', amount: '0.00', editable: true },
        
      ]
    },
    {
      name: 'REIMBURSEMENT ITEMS',
      amount: '0.00',
      children: [
        { name: 'TOTAL REIMBURSEMENT', amount: '0.00', editable: true },
        { name: 'PRORATED MEDICAL', amount: '0.00' },
        { name: 'ACCUMULATED MEDICAL', amount: '0.00' },
        { name: 'MEDICAL BILLS', amount: '0.00', editable: true },
        { name: 'ACCUMULATED MEDICAL BILLS', amount: '0.00' },
        { name: 'ACTUAL MEDICAL EXEMPTION', amount: '0.00' },
        { name: 'MEDICAL EXEMPT WRITBACK', amount: '0.00' },
        
      ]
    },
    {
      name: 'LEAVE ENCASHMENT RELATED ITEMS',
      amount: '0.00',
      children: [
        { name: 'LEAVE DAYS', amount: '0.00' },
      ]
    },
    {
      name: 'GRATUITY ITEMS',
      amount: '0.00',
      children: [
        { name: 'GRATUITY EXEMPTION', amount: '0.00' },
        { name: 'YEARS_IN_SERVICE1', amount: '0.00' },
        { name: 'YEARS_IN_SERVICE2', amount: '0.00' },
        { name: 'YEARS IN SERVICE', amount: '0.00' },
        { name: 'IS SETTLED ( YES-1 / NO-0', amount: '0.00' },
        { name: 'GRATUITY CALCULATION', amount: '0.00' },
      ]
    },
    {
      name: 'STATUTORY ITEMS',
      amount: '0.00',
      children: [
        { name: 'CONVEYANCE LIMIT MONTHLY', amount: '0.00' },
        { name: 'CONVEYANCE ANNUAL', amount: '0.00' },
      ]
    },
    {
        name: 'PF ARREAR RELATED ITEMS',
        amount: '0.00',
        children: [
          { name: 'ACTUAL PF BASIC', amount: '0.00' },
          { name: 'PF ARREAR BASIC FULL', amount: '0.00' },
          { name: 'NEW JOINEE PF BASIC', amount: '0.00' },
          { name: 'IS NEW JOINEE', amount: '0.00' },
          { name: 'PF ARREAR', amount: '0.00' },
          { name: 'FPF ARREAR', amount: '0.00' },
          { name: 'EMPLOYER PF ARREAR', amount: '0.00' },
          { name: 'PF ARREAR BASIC', amount: '0.00' },
          { name: 'PF ADMIN CHRGES ARREAR', amount: '0.00' },
          { name: 'EDLI CONTIBUTION ARREAR', amount: '0.00' },
          { name: 'EMPLOYER PF ARREAR', amount: '0.00' },
          { name: 'PF ARREAR BASIC', amount: '0.00' },
          { name: 'PF ADMIN CHRGES ARREAR', amount: '0.00' },
          { name: 'EDLI CONTIBUTION ARREAR', amount: '0.00' },
          { name: 'EDLI ADMIN CHARGES ARREAR', amount: '0.00' },
          { name: 'EPS BASIC ARREARS', amount: '0.00' },
          { name: 'EDLI BASIC ARREARS', amount: '0.00' },
          { name: 'INTERNATIONAL EMP ARREAR', amount: '0.00' },
        ]
      },
    
    {
      name: 'EXCLUDE WEEKOFFS AND HOLIDAYS',
      amount: '0.00',
      children: [
        { name: 'SUNDAYS', amount: '0.00', editable: true },
          { name: 'SATURDAYS', amount: '0.00', editable: true },
          { name: 'HOLIDAYS', amount: '0.00', editable: true },
          { name: 'NEW JOINEE SUNDAYS', amount: '0.00', editable: true },
          { name: 'NEW JOINEE SATURDAYS', amount: '0.00', editable: true },
          { name: 'NEW JOINEE HOLIDAYS', amount: '0.00', editable: true },
          { name: 'ACTUAL WORKDAYS', amount: '0.00' },
          { name: 'ACTUAL DAYS IN MONTH', amount: '0.00' },
      ]
    },
    {
      name: 'ANNUAL ITEMS',
      amount: '0.00',
      children: [
        { name: 'ANNUAL BASIC', amount: '0.00' },
          { name: 'ANNUAL HRA', amount: '0.00' },
          { name: 'ANNUAL CONVEYANCE', amount: '0.00' },
          { name: 'ANNUAL MEDIAL', amount: '0.00' },
          { name: 'ANNUAL DA', amount: '0.00' },
          { name: 'ANNUAL SPECIAL ALLOWANCE', amount: '0.00' },
          { name: 'ANNUAL EMPLOYER PF', amount: '0.00' },
          { name: 'ANNUAL OTHER ALLOWANCE', amount: '0.00' },
          { name: 'ANNUAL SALARY MASTER', amount: '0.00' },
          { name: 'ANNUAL PF', amount: '0.00' },
          { name: 'ANNUAL TOTAL DEDUCTION', amount: '0.00' },
          { name: 'ANNUAL GROSS', amount: '0.00' },
          { name: 'ANNUAL PROF TAX', amount: '0.00' },
          { name: 'ANNUAL NET PAY', amount: '0.00' },
          { name: 'ANNUAL MEALS', amount: '0.00' },
          { name: 'ANNUAL EDUCATION ALLOWANCE', amount: '0.00' },
          { name: 'ANNUAL LTA', amount: '0.00' },
          
      ]
    },
    {
      name: 'EMPLOYEE WORKDAYS',
      amount: '0.00',
      children: [
        { name: 'EMP EFFECTIVE WORKDAYS', amount: '0.00', editable: true },
        { name: 'EMP EFFECTIVE WORKDAYS FOR DISPLAY', amount: '0.00', editable: true },
        { name: 'EMP EFFECTIVE WORKDAYS FOR DISPLAY', amount: '0.00' },
        { name: 'DAYS IN MONTH', amount: '0.00' },
        { name: 'EMPLOYEE WORKDAYS', amount: '0.00' },
        { name: 'LOP', amount: '0.00', editable: true },
        { name: 'LOP REVERSAL', amount: '0.00', editable: true },
        { name: 'TRAVEL WORKING DAYS', amount: '0.00', editable: true },
        { name: 'TRAVEL PRESENT DAYS', amount: '0.00', editable: true },
      ]
    },
  ];
  
  export default components;
  
