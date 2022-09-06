export interface BookingCustomer
{
    id : number,
    customer :string,
    typeContainer : string,
    typeMerchandise : string,
    typeBooking : string,
    shipperName : string,
    shipName : string,
    company : string,
    activity : number,
    positionReturn : string,
    time: string,
    note : string,
    status : string,
    listContainer: string,
    dateCheckOut: Date,
    createdOn: Date
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
  customer :string,
    typeContainer : string,
    typeMerchandise : string,
    typeBooking : string,
    shipperName : string,
    shipName : string,
    company : string,
    activity : string,
    positionReturn : string,
    time: string,
    note : string,
    status : string,
    listContainer: string,
    dateCheckOut: Date,
}


export interface BookingCustomerEdit
{
    id : number,
    customer :string,
    typeContainer : string,
    typeMerchandise : string,
    typeBooking : string,
    shipperName : string,
    shipName : string,
    company : string,
    activity : string,
    positionReturn : string,
    time: string,
    note : string,
    status : string,
    listContainer: string,
    dateCheckOut: Date,
}

export interface BookingTemplate
{
  id: number,
  pathFile: string,
  createdOn: Date,
  createdBy: string
}

export interface BookingTemplateCreate
{
  id: number,
  pathFile: string
}

export interface lstBookingTemplate
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : BookingTemplate[]
}


