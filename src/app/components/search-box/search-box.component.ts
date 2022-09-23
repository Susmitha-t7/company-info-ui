import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Company } from 'src/app/company';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FilterArgs } from 'src/app/FilterArgs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() onSearch = new EventEmitter<FilterArgs>();
  @Output() onClearSearch = new EventEmitter<String>();
  @Input() searchValue!: String;

  @Input() initialLoad !: boolean;
  args!: FilterArgs;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }


  search(){
    this.args = new FilterArgs;
    this.args.search = this.searchValue;
    if(this.args.search==''){
      this.searchValue = '';
      this.onClearSearch.emit("clear");
    }
    else{
      this.onSearch.emit(this.args);
    }   
  }

}
