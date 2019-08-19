export interface FeeSchedule {
    feeScheduleKey: number;
    companyKey: number;
    accountKey: number;
    productKey: number;
    feeScheduleStartDate: Date;
    feeScheduleEndDate: Date;
    feeScheduleTypeCode: string;
    feeScheduleValue: number;
    productDesc: string;
    productCode: string;
    addedUserID: string;
    addedDateTime: Date;
    updateUserID: string;
    updateDateTime: Date;
    accountName: string;
    accountCode: string;
}
