export interface Vehicle {
  id: number,
  licensePlates: string,
  rfidcode: string,
  nameDriver: string,
  phoneNumber: string,
  customer: string,
  tonnageDefault: string,
  idCardNumber: string,
  mediumUnladenWeight: string,
  lastContainer: string,
  lastContainerDateTime: Date,
  type: number,
  createdOn: Date,
  modifiedOn: Date,
  createdBy: string,
  modifiedBy: string,
}

export interface lstVehicle {
  currentPage: number,
  pageSize: number,
  totalRecord: number,
  totalPage: number
  data: Vehicle[]
}


export interface VehicleCreate {
  licensePlates: string,
  rfidcode: string,
  nameDriver: string,
  phoneNumber: string,
  customer: string,
  tonnageDefault: string,
  idCardNumber: string,
  mediumUnladenWeight: string,
  Phone: string,
  Type: string,
}



export interface VehicleEdit {
  id: number,
  licensePlates: string,
  rfidcode: string,
  nameDriver: string,
  Phone: string,
  customer: string,
  tonnageDefault: string,
  phoneNumber: string,
  idCardNumber: string,
  mediumUnladenWeight: string,
  Type: string,
}

