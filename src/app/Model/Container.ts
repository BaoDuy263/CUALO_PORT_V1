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
  state: State
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
