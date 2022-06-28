export interface BookingImportContService
{
    id: number,
    title: string,
    customerId: string,
    bookingContent: string,
    registerDate : Date,
    step: string,
    sumNumberConts: string,
    stavoyagetus: string,
    vessel: string,
    createdOn: Date,
    modifiedOn: Date,
    createdBy: string,
    modifiedBy: string,
    price: string,
}

export interface lstBookingImportContService
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : BookingImportContService[]
}


export interface BookingImportContServiceCreate
{
    title: string,
    customerId: string,
    bookingContent: string,
    registerDate : Date,
    step: string,
    sumNumberConts: string,
    stavoyagetus: string,
    vessel: string,
}



export interface BookingImportContServiceEdit
{
    id: number,
    title: string,
    customerId: string,
    bookingContent: string,
    registerDate : Date,
    step: string,
    sumNumberConts: string,
    stavoyagetus: string,
    vessel: string,
}``