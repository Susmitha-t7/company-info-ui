import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterArgs } from 'src/app/FilterArgs';

@Component({
  selector: 'app-az-search',
  templateUrl: './az-search.component.html',
  styleUrls: ['./az-search.component.css']
})
export class AzSearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<FilterArgs>();
  @Output() onClearSearch = new EventEmitter<String>();
  @Input() searchValue!: String;
 
  args!: FilterArgs;
  constructor() { }

  ngOnInit(): void {
  }

  search(searchValue : String){
    this.args = new FilterArgs;
    this.searchValue = searchValue;
    this.args.searchStart = searchValue;
    if(searchValue == "All"){
      this.onClearSearch.emit(searchValue);
    }
    else{
      this.onSearch.emit(this.args);
    }
    
  }
}
