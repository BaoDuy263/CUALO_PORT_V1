export const activitiesPacking = [
  { value: 2, name: "Cấp rỗng" },
  { value: 4, name: "ShipSide" },
  { value: 9, name: "Đóng hàng" }
]

export const activitiesData = [
  { value: 0, name: "" },
  { value: 1, name: "Hạ bãi chờ xuất" },
  { value: 2, name: "Cấp rỗng" },
  { value: 3, name: "Trả rỗng" },
  // { value: 4, name: "ship side", hidden: true },
  { value: 5, name: "Lấy nguyên" },
  { value: 6, name: "Rút ruột" },
  // { value: 7, name: "Trả bãi", hidden: true },
  // { value: 8, name: "Kẹp chì", hidden: true },
  { value: 9, name: "Đóng hàng" },
]

export const lstStatusData = [
  { value: 0, name: "E" },
  { value: 1, name: "F" },
]

export const lstTypeDelivery = [
  { value: 0, name: "" },
  { value: 1, name: "Tàu xe" },
  { value: 2, name: "Xe tàu" },
  { value: 3, name: "Bãi tàu", },
  { value: 4, name: "Bãi xe" },
  { value: 5, name: "Xe bãi" },
  { value: 6, name: "Tàu bãi" },
  { value: 7, name: "Bãi bãi" },
]

export const lstTypeContData = [
  "20'DC", "20'OT", "40'DC", "40'OT"
]

export const lstSide = [
  { value: 0, name: "" },
  { value: 1, name: "Import" },
  { value: 2, name: "Export" },
  { value: 3, name: "StorageEmpty" },
]

export const lstState = [
  { value: 0, name: "" },
  { value: 1, name: "Delivery" },
  { value: 2, name: "Stacking" },
  { value: 3, name: "OutPort" },
]

export const lstStep = [
  { value: 0, name: "Kế hoạch" },
  { value: 1, name: "Đã nhập" },
  { value: 2, name: "Đang lấy nguyên" },
  { value: 3, name: "Lưu vỏ" },
  { value: 4, name: "Đang cấp rỗng" },
  { value: 5, name: "Hạ Bãi" },
  { value: 6, name: "Đã xuất" },
]

export const lstTypeVehicle = [
  { value: 0, name: "Xe ngoài" },
  { value: 1, name: "Nội bộ" }
]

export const lstCheckTD = [
  {
    activityPrev: 5,
    activityNext: 1,
    typeDelivery: 4,
    nameType: "Đóng kết hợp",
    alert: "Bạn có đang muốn đóng kết hợp cho Container này không ?",
    newStep: 5,
  },
  {  // đang đi lấy nguyên đưa cont về trả bãi
    activityPrev: 5,
    activityNext: 3,
    typeDelivery: 4,
    nameType: "X-B",
    alert: "",
    newStep: 3,
  },
  { // đổi step từ trả rỗng sang cấp rỗng.
    activityPrev: 3,
    activityNext: 2,
    typeDelivery: 5,
    nameType: "B-X",
    alert: "",
    newStep: 4,
  },
  { // đổi step từ cấp rỗng sang hạ bãi.
    activityPrev: 2,
    activityNext: 1,
    typeDelivery: 5,
    nameType: "X-B",
    alert: "",
    newStep: 5,
  },
  {
    activityPrev: 6,
    activityNext: 3,
    typeDelivery: 7,
    nameType: "B-B",
    alert: "Container này có để lại bãi đóng rút chờ cấp rỗng/đóng hàng không?",
    newStep: 3,
    newStepCancel: 2
  },
  {
    activityPrev: 0,
    activityNext: 3,
    typeDelivery: 5,
    nameType: "X-B",
    alert: "",
    newStep: 0
  },
  // {
  //   activityPrev: 2,
  //   activityNext: 1,
  //   typeDelivery: 4,
  //   nameType: "Shipside X-T",
  //   alert: "",
  //   newStep: 6
  // },
  {
    activityPrev: 9,
    activityNext: 1,
    typeDelivery: 7,
    nameType: "B-B",
    alert: "Container này có để lại bãi đóng rút chờ cấp rỗng/đóng hàng không?",
    newStep: 5,
    newStepCancel: 4
  },
  {
    activityPrev: 0,
    activityNext: 5,
    typeDelivery: 5,
    nameType: "X-B",
    alert: "",
    newStep: 6
  }
]
