import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Company } from '../company';
import { CompanyDetail } from '../CompanyDetail';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private _Activatedroute : ActivatedRoute, private apiService: ApiService) { }

    companyName !: string | null;

    company !: Company;

    companyDetail !: CompanyDetail;
    
  ngOnInit(): void {
    this.companyName=this._Activatedroute.snapshot.paramMap.get("name");
    this.apiService.getCompanyDetails(this.companyName).subscribe((data: CompanyDetail) => {
      this.companyDetail = data;
      console.log(data);
    });
  }

}
