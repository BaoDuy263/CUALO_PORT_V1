export interface Perform {
  activity: number;
  billNo: string;
  book: string;
  cargoType: string;
  checkIn: Date;
  checkOut: Date;
  commodity: string;
  contNo: string;
  contact: string
  countContainer: number;
  createdBy: string;
  createdOn: Date;
  customer: string;
  customerSeal: string;
  dateUpdate: Date;
  direction: 0;
  formality: string;
  height: string;
  id: number;
  imdg: string;
  isLeave: boolean;
  iso: string;
  landingDate: Date,
  location: string;
  modifiedBy: string;
  modifiedOn: Date;
  no: string;
  note: string;
  oog: string;
  operator: string;
  pod: string;
  ref: string;
  returnAddress: string;
  returnPlace: string;
  returnPlan: string;
  seal1: string;
  seal2: string;
  shipperName: string;
  side: number;
  size: number;
  state: number;
  status: number;
  statusContainer: string;
  step: number;
  temparature: string;
  time: string;
  transCom: string;
  transType: string;
  typeCont: string;
  vehicleNo: string;
  ventilation: string;
  vessel: string;
  voyage: string;
  weight: number;
}

export interface lstPerform
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : Perform[]
}
