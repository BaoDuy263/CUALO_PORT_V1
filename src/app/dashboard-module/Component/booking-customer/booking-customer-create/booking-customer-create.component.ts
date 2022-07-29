import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingCustomer } from 'src/app/Model/Booking-customer';
import { CustomerSelect } from 'src/app/Model/Customer';
import { ProductSelect } from 'src/app/Model/Product';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';


@Component({
    selector: 'app-booking-customer-create',
    templateUrl: './booking-customer-create.component.html',
    styleUrls: ['./booking-customer-create.component.css']
})
export class BookingCustomerCreateComponent implements OnInit {
    @ViewChild('bill') bill: ElementRef<HTMLDivElement> | undefined;
    CreateEditForm!: FormGroup
    submited: boolean = false;
    bookCutomerId: number = 0;
    isCreate: boolean = true;
    lstCustomer: CustomerSelect[] = [];
    lsttypeMerchandise: ProductSelect[] = [];
    bookingCustomer: BookingCustomer | undefined;


    lstContainer = [
        { "id": "20Dc", name: "Container Khô 20 feet (20DC)" },
        { "id": "20Ot", name: "Container Khô 20 feet hở nóc (20Ot)" },
        { "id": "40Dc", name: "Container Khô 40 feet (20DC)" },
        { "id": "40Ot", name: "Container Khô 40 feet hở nóc(20DC)" }
    ]

    bookingTypes = [
        { id: 1, name: "Xuất nhập bãi", value: TypeBooking.ImportAndExport },
        { id: 2, name: "Đóng rút hàng", value: TypeBooking.PackingAndWithraw },
    ]

    constructor(private bookingService: BookingServiceService, public dialogRef: MatDialogRef<BookingCustomerCreateComponent>, private renderer: Renderer2) {
        this.CreateEditForm = new FormGroup({
            customerId: new FormControl('', Validators.required),
            typeContainer: new FormControl('', Validators.required),
            phoneNumber: new FormControl('', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
            typeMerchandise: new FormControl('', Validators.required),
            noVehicle: new FormControl(),
            weight: new FormControl(),
            shipName: new FormControl(),
            dateCheckOut: new FormControl(),
            typeBooking: new FormControl('', Validators.required)
        })
    }

    get customerId() { return this.CreateEditForm.get('customerId'); }
    get typeContainer() { return this.CreateEditForm.get('typeContainer') }
    get phoneNumber() { return this.CreateEditForm.get('phoneNumber') }
    get typeMerchandise() { return this.CreateEditForm.get('typeMerchandise') }
    ngOnInit(): void {
        this.bookingService.Detail(this.bookCutomerId).subscribe(response => {
            this.CreateEditForm = new FormGroup({
                id: new FormControl(response.id),
                customerId: new FormControl(response.customerId, Validators.required),
                typeContainer: new FormControl(response.typeContainer, Validators.required),
                phoneNumber: new FormControl(response.phoneNumber, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
                typeMerchandise: new FormControl(response.typeMerchandise, Validators.required),
                noVehicle: new FormControl(response.noVehicle),
                weight: new FormControl(response.weight),
                shipName: new FormControl(response.shipName),
                dateCheckOut: new FormControl(response.dateCheckOut),
                typeBooking: new FormControl(response.typeBooking, Validators.required)
            });
            this.bookingCustomer = response
        })
    }

    onSubmit() {
        this.submited = true;
        if (this.CreateEditForm.valid && this.isCreate === true) {
            this.bookingService.Insert(this.CreateEditForm.value).subscribe(response => {
                this.dialogRef.close(response);
            });
        }
        if (this.CreateEditForm.valid && this.isCreate === false) {
            this.bookingService.Update(this.CreateEditForm.value).subscribe(response => {
                this.dialogRef.close(response);
            })
        }
    }

    getNameCustomer(id: any): string {
        const customerId = parseInt(id);
        const index = this.lstCustomer.findIndex(item => item.id === customerId);
        return this.lstCustomer[index].name
    }

    getTypeBooking(id: number): string {
        switch (id) {
            case TypeBooking.ImportAndExport:
                return "Xuất nhập container"
            case TypeBooking.PackingAndWithraw:
                return "Đóng rút hàng"
            default:
                return ""
        }
    }

    print() {
        var divContents = this.bill?.nativeElement.innerHTML || "";
        var printWindow = window.open('', '', "width=" + screen.availWidth + ",height=" + screen.availHeight);
        if (printWindow) {
            printWindow.document.write('<html><head><title>PHIẾU IN</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write(divContents);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        }
    }
}

enum TypeBooking {
    ImportAndExport = 1,
    PackingAndWithraw = 2,
}
