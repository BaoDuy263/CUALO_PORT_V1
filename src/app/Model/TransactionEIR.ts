import { ContainerV2 } from 'src/app/Model/Containerv2';
import { Activity, Side, State, StatusCont, Step, TypeDelivery } from "./Containerv2";

export interface TransactionEIR
{
  id : number,
  contNo : string,  //ForeignKey
  billNo : string,  //Mã vận đơn.
  no : string,   // số.
  customer : string,  //Khách hàng.
  ref : string,  //Mã tham chiếu.
  status : StatusCont,  //Tình trạng.
  typeCont : string,  //Loại cont.
  size : number,  //Kích thước cont.
  activity : Activity,  //Phương án
  weight : number,  //
  ventilation : string,  // Độ thông gió.
  commodity : string,  // Loại hàng hóa.
  iso : string,  //
  cargoType : string,  // Loại hàng hóa.
  height : string,  //Chiều cao.
  temparature : string,  // Nhiệt độ.
  oog : string,  // Cont đặc biệt.
  operator : string,  // Hãng tàu.
  location : string,  // Vị trí.
  pod : string,  // Cảng Đến.
  imdg : string,  // Mã Nguy Hiểm.
  customerSeal : string,  // Niêm chì hải quan.
  seal1 : string,  // Niêm chì 1.
  seal2 : string,  // Niêm chì 2.
  returnPlace : string,  // Nơi trả rỗng.
  vessel : string,  //Tên tàu.
  voyage : string,  // Chuyến.
  landingDate : Date,   //Ngày cập bến.
  transType : string,  // Phương tiện vận chuyển.
  transCom : string,  // Công ty vận chuyển.
  vehicleNo : string,  // Sô xe.
  checkIn : Date,  // Thời gian vào.
  checkOut : Date,  // Thời gian ra.
  step : Step,   // Bước hiện tại.
  side : Side,   // Hướng.
  typeDelivery : TypeDelivery,  //Phương thức giao nhận.
  state : State,  //
  outDeliveryDate : Date,  // ngay cap cont, tra khach
  inDeliveryDate : Date,  // ngay nhan vo, ha bai
  lastPort : string,  // Cảng cuối.
  dateCheckIn : Date,  // Ngày nhập bãi
  dateCheckOut : Date,  // Ngày ra bãi
  note : string,  //ghi chú
  returnAddress : string,  //Nơi trả vỏ
  noBL : string,  //số B/L
  consignee : string,  //Người nhận hàng
  serviceNo : string,  // Số lệnh dịch vụ
  sealNo : string,   // Số seal
  codePT : string,   // Số seal
  region : string,   // Vùng
  pol : string,   // Cảng đến
  locationShip : string,   // Cảng đến
  planXD : string,   // Phương Án
  trunkBarge : string,  // Xe sà lan.
  domestic : string,  // Hàng nội địa hay hàng ngoại
  packing : string,  //  đóng
  nonPacking : string,  // rút
  container: ContainerV2,
  nameDriver: string,
  licensePlates: string,
  phoneNumberDriver: string,
  createdBy: string,
  createdOn: Date,
  modifiedBy: string,
  modifiedOn: Date,
}

export interface lstTransactionEIR {
  currentPage: number,
  pageSize: number,
  totalRecord: number,
  totalPage: number,
  data: TransactionEIR[]
}
