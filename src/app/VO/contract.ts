export interface Contract {
    contractId: string;
    contractName: string;
    companyName: string;
    contractType: string;
    reinsType: string;
    linfenType: string;
    signDate: string;
    beginDate: string;
    endDate: string;
    description: string;
    contractStatus: string;

    retention: number,
    split_amount: number,
    ceiling_top: number,
    line_no: number,
    contract_limit: number,
    risk_unit: number
}