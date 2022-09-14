import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class convertHelper {
  showActivity(value: number) {
    switch (value) {
      case 0:
        return "Không xác định"
      case 1:
        return "Chờ xuất"
      case 2:
        return "Cấp rỗng"
      case 3:
        return "Trả nguyên"
      case 4:
        return "Shipside lên tàu"
      case 5:
        return "Lấy nguyên"
      case 6:
        return "Rút ruột"
      case 7:
        return "Trả bãi"
      case 8:
        return "Kẹp chì"
      case 9:
        return "Đóng rời"
      default:
        return "";
    }
  }

  showStatus(value: number) {
    switch (value) {
      case 0:
        return "E"
      case 1:
        return "F"
      default:
        return "";
    }
  }

  showSide(value: number) {
    switch (value) {
      case 0:
        return "Không xác định"
      case 1:
        return "Import"
      case 2:
        return "Export"
      case 3:
        return "Storage empty"
      default:
        return "";
    }
  }

  showState(value: number) {
    switch (value) {
      case 0:
        return "Không xác định"
      case 1:
        return "Delivery"
      case 2:
        return "Stacking"
      case 3:
        return "Ngoài cảng"
      default:
        return "";
    }
  }

}

