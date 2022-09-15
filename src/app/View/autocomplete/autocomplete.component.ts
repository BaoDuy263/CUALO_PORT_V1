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
  myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<any[]>;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    this.itemSelected.emit(value);

    const filterValue = value.toLowerCase();

    return this.data.filter((option: any) => option.licensePlates.toLowerCase().includes(filterValue));
  }

}
