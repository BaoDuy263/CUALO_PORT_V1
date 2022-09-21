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
  state: number,
  impExpDate: Date,
  outDeliveryDate: Date,
  inDeliveryDate: Date
}

export interface ContainerActive {
  code: string,
  note: string
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

export interface ContHistory {
  id: number,
  contNo: string,
  note: string,
  createdBy: string,
  modifiedBy: string,
  createdOn: Date,
  modifiedOn: Date,
}

export interface ContImage {
  id: number,
  contNo: string,
  urlImage: string,
  captureArea: string,
  note: string,
  createdOn: Date,
}

export interface lstContainer {
  currentPage: number,
  pageSize: number,
  totalRecord: number,
  totalPage: number,
  data: Container[]
}

export interface lstContHistory {
  currentPage: number,
  pageSize: number,
  totalRecord: number,
  totalPage: number,
  data: ContHistory[]
}

export interface lstContImages {
  currentPage: number,
  pageSize: number,
  totalRecord: number,
  totalPage: number,
  data: ContImage[]
}


