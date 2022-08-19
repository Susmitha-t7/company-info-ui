import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies?: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.findAll().subscribe(data => {
        this.companies = data;
    });
  }

}
