export interface BookingContEmtpy
{
    id: number,
    commandNo: string,
    title: string,
    customerId: string,
    bookingContent : string,
    sumNumber20Dc: string,
    sumNumber20Ot: string,
    sumNumber40Dc: string,
    sumNumber40Hc: string,
    registerDate: Date,
    shipName: string,
    loadingPort: string,
    tripNo: string,
    productName: string,
    unLoadingPort: string,
    expiredDate: string,
    requestDescription: string,
    depot1Confimed: boolean,
    depot1Note: string,
    step: string,
    depot1ConfirmedDate: Date,
    customerConfirmedDate: Date,
    customerNote: string,

    createdOn: Date,
    modifiedOn: Date,
    createdBy: string,
    modifiedBy: string,
    price: string,
}

export interface lstBookingContEmtpy
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : BookingContEmtpy[]
}


export interface BookingContEmtpyCreate
{
   
    commandNo: string,
    title: string,
    customerId: string,
    bookingContent : string,
    sumNumber20Dc: string,
    sumNumber20Ot: string,
    sumNumber40Dc: string,
    sumNumber40Hc: string,
    shipName: string,

    registerDate: Date,
    loadingPort: string,
    tripNo: string,
    productName: string,
    unLoadingPort: string,
    expiredDate: string,
    requestDescription: string,
    depot1Confimed: boolean,
    depot1Note: string,
    step: string,
    depot1ConfirmedDate: Date,
    customerConfirmedDate: Date,
    customerNote: string,
}



export interface BookingContEmtpyEdit
{
    id: number,
    commandNo: string,
    title: string,
    customerId: string,
    bookingContent : string,
    sumNumber20Dc: string,
    sumNumber20Ot: string,
    sumNumber40Dc: string,
    sumNumber40Hc: string,
    shipName: string,

    registerDate: Date,
    loadingPort: string,
    tripNo: string,
    productName: string,
    unLoadingPort: string,
    expiredDate: string,
    requestDescription: string,
    depot1Confimed: boolean,
    depot1Note: string,
    step: string,
    depot1ConfirmedDate: Date,
    customerConfirmedDate: Date,
    customerNote: string,

}``