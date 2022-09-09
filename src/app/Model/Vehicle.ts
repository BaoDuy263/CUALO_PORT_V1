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
}



export interface VehicleEdit {
  id: number,
  licensePlates: string,
  rfidcode: string,
  nameDriver: string,
  phoneNumber: string,
  customer: string,
  tonnageDefault: string,
  idCardNumber: string,
  mediumUnladenWeight: string,
}``
