import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { Company } from 'src/app/company';
import { FilterArgs } from 'src/app/FilterArgs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})

export class FilterSectionComponent implements OnInit {


  @Output() onApplyFilter = new EventEmitter<FilterArgs>();

  peepsSelect:any;

  categories !: String[];

  items = [
    "1-100", "100-500", "500-1000", "1000-5000", "5000-10000", "More than 10k"
]; 

  years !: number[];

  tags !: String[];

  noOfEmployeesSelected !: String;

  yearSelected !: number;

  categorySelected !: String;

  tagSelected !: String;

  investSelected !: String;

  fundSelected !: String;
  args!: FilterArgs;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getCategoryCodes().subscribe((data: String[]) => {
      this.categories = data;
    });

    this.apiService.getTags().subscribe((data: String[]) => {
      console.log(data.length);
      this.tags = data;
    });

      this.years = []; 
      for(let i = 0; i < 223; ++i) { 
        this.years.push(1800 + i);
      }

  }

  applyFilters(){
    this.args = new FilterArgs;
    this.args.category = this.categorySelected;
    this.args.noOfEmployees = this.noOfEmployeesSelected;
    this.args.year = this.yearSelected; 
    this.args.tag = this.tagSelected;
    this.args.invest = this.investSelected;
    this.args.fund = this.fundSelected

    this.onApplyFilter.emit(this.args);
  }

  clear(){
    this.categorySelected = '';
    this.noOfEmployeesSelected = '';
    this.yearSelected = 0; 
    this.tagSelected = '';
    this.investSelected = '';
    this.fundSelected = '';
  }
}
