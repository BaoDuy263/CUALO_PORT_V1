import { Injectable } from "@angular/core";
import { activitiesData, lstSide, lstState, lstStatusData, lstStep } from "./constant";

@Injectable({
  providedIn: 'root'
})

export class convertHelper {
  showActivity(value: number) {
    return activitiesData[value].name;
  }

  showStatus(value: number) {
    return lstStatusData[value].name;
  }

  showSide(value: number) {
    return lstSide[value].name;
  }

  showState(value: number) {
    return lstState[value].name;
  }

  showStep(value: number) {
    return lstStep[value].name;
  }

}

