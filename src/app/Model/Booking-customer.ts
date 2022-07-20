export interface BookingCustomer
{
    id : number,
    customerId :string,
    phoneNumber : string,
    typeContainer: string,
    typeMerchandise: string,
    weight : number,
    noVehicle: string,
    shipName: string,
    status : number
}


export interface lstBookingCustomer
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : BookingCustomer[]
}



export interface BookingCustomerCreate
{
    customerId: number,
    typeContainer: number,
    phoneNumber: string,
    typeMerchandise : number,
    noVehicle: string,
    weight: string,
    shipName: string,
    dateCheckOut : Date
}


export interface BookingCustomerEdit
{
    id : number,
    customerId: number,
    typeContainer: number,
    phoneNumber: string,
    typeMerchandise : number,
    noVehicle: string,
    weight: string,
    shipName: string,
    dateCheckOut : Date
}