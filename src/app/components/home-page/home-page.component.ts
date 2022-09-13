import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company';
import { FilterArgs } from 'src/app/FilterArgs';
import { ApiService } from 'src/app/services/api.service';
import { MessageCompanyService } from 'src/app/services/message-company.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


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
  this.args.search = args.search;
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
  this.args.search = new String;
  console.log("INNN"+this.args.search);
  this.apiService.getCompaniesFromFilter(this.args)
                  .subscribe((data: Company[]) => {
                                  this.companies = data;
                            });
}

}
