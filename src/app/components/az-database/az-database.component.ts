import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company';

import { FilterArgs } from 'src/app/FilterArgs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-az-database',
  templateUrl: './az-database.component.html',
  styleUrls: ['./az-database.component.css']
})
export class AzDatabaseComponent implements OnInit {

  args!: FilterArgs;
  companies !: Company[];
  searchValue !: String;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.args = new FilterArgs;
    this.apiService.getCompanies().subscribe((data: Company[]) => {
      console.log(data.length);
      this.companies = data;
    });

}

onApplyFilter(args : FilterArgs){

  this.args.category = args.category;
  this.args.noOfEmployees = args.noOfEmployees;
  this.args.year = args.year; 
  this.args.tag = args.tag;
  this.args.invest = args.invest;
  this.args.fund = args.fund;

  this.apiService.getCompaniesFromFilter(this.args)
                  .subscribe((data: Company[]) => {
                                  this.companies = data;
                            });
}

onSearch(args : FilterArgs){
this.args.searchStart= args.searchStart;
this.apiService.getCompaniesFromFilter(this.args)
                .subscribe((data: Company[]) => {
                                this.companies = data;
                          });
}

onClear(args : String){
this.searchValue = '';
this.args = new FilterArgs;
this.apiService.getCompanies()
                .subscribe((data: Company[]) => {
                                this.companies = data;
                          });
}

onClearSearch(args : String){
this.searchValue = '';
this.args.searchStart = '';
this.apiService.getCompaniesFromFilter(this.args)
                .subscribe((data: Company[]) => {
                                this.companies = data;
                          });
}

}
