export interface ContainerV2 {
  contNo: string,
  vessel: string,  //Tên tàu.
  voyage: string,  // Chuyến.
  customer: string,  //Khách hàng.
  commodity: string,  // Hàng hóa.
  weight: number,  // WG.
  nWeight: number,  // NG.
  note: string,  //ghi chú.
  consignee: string,  //Người nhận hàng.
  book: string,  //Book
  bill: string,  //Book
  seal: string,  //seal
  type: string,  //Type cont
  size: string,  //Size cont
  datePlan: Date,  // Ngày dự kiến tàu cập
  dateCheckIn: Date,  // Ngày nhập bãi.
  dateCheckOut: Date,  // Ngày ra bãi.
  transaction_eir_no: string,  // Số lệnh giao nhận. - map với trường No tự sinh trong TransactionEIR
  location: string,   // Vị trí.
  statusContainer: string,   // trạng thái cont.
  step: Step,   // Bước hiện tại.
  side: Side,   // Hướng.
  typeDelivery: TypeDelivery,  //Phương thức giao nhận.
  activity: Activity,  //Phương án.
  status: StatusCont,   // Status.
  state: State,  //
  datePacking: Date,  // Ngày đóng hàng.
  inDeliveryDate: Date,  // Ngày nhập bãi.
  outDeliveryDate: Date,   // Ngày nhập bãi.
  returnPlan: Date,   //Kế hoạch trả.
  returnAddress: string,  // Địa chỉ trả hàng.
  createdOn: Date,
  createdBy: string,
  modifiedBy: string,
  modifiedOn: Date
}

export interface lstContainerV2 {
  currentPage: number,
  pageSize: number,
  totalRecord: number,
  totalPage: number,
  data: ContainerV2[]
}

export enum TypeDelivery {
  TAUXE = 1,
  XETAU = 2,
  BAITAU = 3,
  BAIXE = 4,
  XEBAI = 5,
  TAUBAI = 6
}

export enum Step {
  Kehoach = 0,
  DaNhap = 1,
  DangLayNguyen = 2,
  Luuvo = 3,
  DangCapRong = 4,
  HaBai = 5,
  DaXuat = 6
}

export enum Activity {
  Nothing = 0,
  HaBaiChoXuat = 1,
  CapRong = 2,
  TraRong = 3,
  ShipSide = 4,
  LayNguyen = 5,
  RutRuot = 6,
  TraBai = 7,
  KepChi = 8,
  DongRoi = 9,
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

export enum Side {
  Import = 1,
  Export = 2,
  StorageEmpty = 3
}
