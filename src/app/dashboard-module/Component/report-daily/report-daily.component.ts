import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from '../../../Service/Report/report-service.service';
import { TransactionEIR } from '../../../Model/TransactionEIR';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { convertHelper } from 'src/app/utils/helper/convertHelper';

@Component({
  selector: 'app-report-daily',
  templateUrl: './report-daily.component.html',
  styleUrls: ['./report-daily.component.css']
})
export class ReportDailyComponent implements OnInit {

  lstdata: TransactionEIR[] = [];
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
    this.ReportServiceService.GetIndexReport(data).subscribe(data => {
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
    this.ReportServiceService.ExportReport(data).subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    })
  }
}
