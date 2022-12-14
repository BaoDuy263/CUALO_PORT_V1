import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from '../../../Service/Report/report-service.service';
import { Baocaohangton } from '../../../Model/Containerv2';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { convertHelper } from 'src/app/utils/helper/convertHelper';

@Component({
  selector: 'app-report-hangton',
  templateUrl: './report-hangton.component.html',
  styleUrls: ['./report-hangton.component.css']
})
export class ReportHangtonComponent implements OnInit {

  lstdata: Baocaohangton[] = [];
  loadding : Boolean = true;
  FromDate?: Date = undefined;
  ToDate? : Date = undefined;
  constructor(private ReportServiceService: ReportServiceService,private toastr: ToastrcustomService, public convertHelper: convertHelper) { }

  ngOnInit(): void {
    this.GetReport();
  }

  GetReport(){
    let data = {
      FromDate: this.FromDate,
      ToDate : this.ToDate
    }
    this.ReportServiceService.GetIndexBaocaoHangTon(data).subscribe(data => {
        if(data.status == 200){
          this.loadding = false;
          this.lstdata = data.data;
        }
        else {
          this.toastr.showError(data.message);
        }
    })
  }

  DowloadFile(){
    let data = {
      FromDate: this.FromDate,
      ToDate : this.ToDate
    }
    this.ReportServiceService.ExportBaoCaoTon(data).subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    })
  }

  CaculateTotalDay(dateCheckOut?: Date, lastImportDate?: Date){
    const currentDate = dateCheckOut ? new Date(dateCheckOut) : new Date();
    const  dateSent = lastImportDate ? new Date(lastImportDate) : new Date();
    const now = new Date();
    const TotalDay =  Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
    const total = TotalDay + 1 > 0 ? TotalDay + 1 : Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24)) + 1;
    return total;
  }

  CaculateTotalDayExit(dateCheckOut?: Date, lastImportDate?: Date){
    const currentDate = dateCheckOut ? new Date(dateCheckOut) : new Date();
    const  dateSent = lastImportDate ? new Date(lastImportDate) : new Date();
    const now = new Date();
    const TotalDay =  Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
    const total = TotalDay + 1 > 1 ? TotalDay + 1 : Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24)) + 1;
    const totalExit = total > 10 ? total - 10 : 0;
    return totalExit;
  }
}
