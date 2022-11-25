import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() data: any = [];
  @Input() isUser: boolean = false
  @Input() valueDefault: string = ''
  myControl = new FormControl('');
  filteredOptions!: Observable<any[]>;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.myControl = new FormControl(this.valueDefault);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    this.itemSelected.emit(value);

    const filterValue = value.toLowerCase();
    if(this.isUser){
      
      return this.data.filter((option: any) => option.fullName.toLowerCase().includes(filterValue));
    }
    else
    {
      return this.data.filter((option: any) => option.licensePlates.toLowerCase().includes(filterValue));
    }
  }

}
