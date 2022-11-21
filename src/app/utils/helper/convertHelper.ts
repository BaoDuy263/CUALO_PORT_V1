import { Injectable } from "@angular/core";
import { activitiesData, lstSide, lstState, lstStatusData, lstStep,lstTypeDelivery ,lstTypeVehicle} from "./constant";

@Injectable({
  providedIn: 'root'
})

export class convertHelper {
  showActivity(value: number) {
    const index = activitiesData.findIndex(a => a.value === value);
    return activitiesData[index]?.name;
  }

  showStatus(value: number) {
    return lstStatusData[value]?.name;
  }

  showSide(value: number) {
    return lstSide[value]?.name;
  }

  showState(value: number) {
    return lstState[value]?.name;
  }

  showStep(value: number) {
    return lstStep[value]?.name;
  }

  showTypeDelivery(value: number)
  {
    return lstTypeDelivery[value]?.name;
  }
  
  showTypeVehicle(value: number) {
    return lstTypeVehicle[value]?.name;
  }


  Chang24Hour(date: Date){
     if(date){
      return  date.toLocaleString('en-US', {
        hour12: false,
      })
     }else
     {
      return null;
     }
    
  };
}

