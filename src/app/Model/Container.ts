export interface Container {
  code: string,
  type: string,
  vessel: string,
  voyage: string,
  lastPort: string,
  ISO: string,
  side: string,
  customer: string,
  bookingNo: string,
  commodity: string,
  weight: string,
  dateCheckIn: Date,
  dateCheckOut: Date,
  note: string,
  returnAddress: string,
  typeDelivery: TypeDelivery,
  activity: Activity,
  status: StatusCont,
  location: string,
  region: string,
  state: State,
  vehicleNo: string,
  deliveryNo: string,
  serviceNo: string,
  sealNo: string,
  codePT: string,
  POL: string,
  POD: string,
  locationShip: string,
  planXD: string,
  cargoType: string,
  trunkBarge: string,
  domestic: string,
  packing: string,
  nonPacking: string,
  createOn: Date,
  createBy: string
}

export interface ContainerCreate{
  code : string,
  type : string,
  vessel : string,
  voyage : string,
  lastPort : string,
  ISO : string,
  side : string,
  customer : string,
  bookingNo : string,
  commodity : string,
  weight : string,
  dateCheckIn : string,
  wateCheckOut : string,
  note : string,
  returnAddress : string,
  noBL : string,
  consignee : string,
  typeDelivery : string,
  activity : string,
  status : string,
  vehicleNo : string,
  deliveryNo : string,
  serviceNo : string,
  sealNo : string,
  codePT : string,
  location : string,
  region : string,
  POL : string,
  POD : string,
  locationShip : string,
  planXD : string,
  cargoType : string,
  trunkBarge : string,
  domestic : string,
  packing : string,
  nonPacking : string,
  datePacking : string,
  createdOn : string,
  modifiedOn : string,
  seal : string,
  createdBy : string,
  modifiedBy : string,
  state : string,
}

export interface lstContainer {
  currentPage: number,
  pageSize: number,
  totalRecord: number,
  totalPage: number
  data: Container[]
}

export enum TypeDelivery {
  TAUBAI = 1,
  BAIXE = 2,
  BAIXESL = 3
}

export enum Activity {
  HaBaiChoXuat = 1,
  CapRong = 2,
  TraRong = 3,
  ShipSide = 4,
  LayNguyen = 5,
  RutRuot = 6,
  TraBai = 7,
  KepChi = 8
}
export enum StatusCont {
  Epmpty = 0,
  Full = 1,
}
export enum State {
  Delivery = 1,
  Stacking = 2,
  OutPort = 3
}