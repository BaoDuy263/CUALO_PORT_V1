import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class convertHelper {
  showActivity(value: number) {
    switch (value) {
      case 2:
        return "Cấp rỗng"
      case 9:
        return "Đóng rời"
      default:
        return "";
    }
  }

  showStatus(value: number) {
    switch (value) {
      case 0:
        return "Rỗng"
      case 1:
        return "Đầy"
      default:
        return "";
    }
  }

}
