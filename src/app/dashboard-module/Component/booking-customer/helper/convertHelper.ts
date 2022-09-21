import { Injectable } from "@angular/core";
import { activitiesData, lstState } from "./constant";

@Injectable({
  providedIn: 'root'
})

export class convertHelper {
  showActivity(value: number) {
    return value ? activitiesData[value].name : "";
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
    return value ? lstState[value-1].name : "";
  }

}

