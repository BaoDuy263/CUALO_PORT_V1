export interface Container {
  code: string,
  type: string,
  vessel: string,
  voyage: string,
  lastPort: string,
  iso: string,
  side: number,
  customer: string,
  bookingNo: string,
  commodity: string,
  weight: number,
  dateCheckIn: Date,
  dateCheckOut: Date,
  note: string,
  returnAddress: string,
  noBL: string,
  consignee: string,
  typeDelivery: number,
  activity: number,
  status: number,
  vehicleNo: string,
  deliveryNo: string,
  serviceNo: string,
  sealNo: string,
  codePT: string,
  location: string,
  region: string,
  pol: string,
  pod: string,
  locationShip: string,
  planXD: string,
  cargoType: string,
  trunkBarge: string,
  domestic: string,
  packing: string,
  nonPacking: string,
  datePacking: Date,
  createdOn: Date,
  modifiedOn: Date,
  seal: string,
  createdBy: string,
  modifiedBy: string,
  state: number
}

export interface ContainerCreate{
    code: string,
    type: string,
    vessel: string,
    voyage: string,
    lastPort: string,
    iso: string,
    side: number,
    customer: string,
    bookingNo: string,
    commodity: string,
    weight: number,
    dateCheckIn: Date,
    dateCheckOut: Date,
    note: string,
    returnAddress: string,
    noBL: string,
    consignee: string,
    typeDelivery: number,
    activity: number,
    status: number,
    vehicleNo: string,
    deliveryNo: string,
    serviceNo: string,
    sealNo: string,
    codePT: string,
    location: string,
    region: string,
    pol: string,
    pod: string,
    locationShip: string,
    planXD: string,
    cargoType: string,
    trunkBarge: string,
    domestic: string,
    packing: string,
    nonPacking: string,
    datePacking: Date,
    seal: string,
    state: number
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
