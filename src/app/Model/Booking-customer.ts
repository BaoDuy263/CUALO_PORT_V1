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
    status : number,
    dateCheckout: Date,
    typeBooking: number,
    company: string,
    container: string,
    containerStatus: string,
    note: string,
    seaportEnd: string,
    brandName: string
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
  customerId :string,
  phoneNumber : string,
  typeContainer: string,
  typeMerchandise: string,
  weight : number,
  noVehicle: string,
  shipName: string,
  status : number,
  dateCheckout: Date,
  typeBooking: number,
  company: string,
  container: string,
  containerStatus: string,
  note: string,
  seaportEnd: string,
  brandName: string
}


export interface BookingCustomerEdit
{
  customerId :string,
  phoneNumber : string,
  typeContainer: string,
  typeMerchandise: string,
  weight : number,
  noVehicle: string,
  shipName: string,
  status : number,
  dateCheckout: Date,
  typeBooking: number,
  company: string,
  container: string,
  containerStatus: string,
  note: string,
  seaportEnd: string
}
