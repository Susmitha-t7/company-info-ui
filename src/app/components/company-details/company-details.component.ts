import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Company } from '../../company';
import { CompanyDetail } from '../../CompanyDetail';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private _Activatedroute : ActivatedRoute, private apiService: ApiService) { }

    companyName !: string | null;

    companyDetail !: any;

    products !: any;

    competitors !: String[];

    investments !: any;

    acquiredBy !: any;

    acquisitions !:any;

    fundingRounds !: any;

    relationships !: any;

    show !: any
    summarySec = 'notActive';
    competitorSec = 'notActive';
    investedOnSec = 'notActive';
    acquisitionSec = 'notActive';
    fundingSec = 'notActive';
    relationshipSec = 'notActive';
    productSec = 'notActive';
    newsSec = 'notActive';
    
  ngOnInit(): void {
    this.competitors = [];
    this.summarySec = 'active';
    this.show = 1;
    this.companyName=this._Activatedroute.snapshot.paramMap.get("name");
    this.apiService.getCompanyDetails(this.companyName).subscribe((data: any) => {
      this.companyDetail = data;
      this.products = data.products;
      this.investments = data.investments;
      this.acquiredBy = data.acquiredBy;
      this.acquisitions = data.acquisitions;
      this.fundingRounds = data.fundingRounds;
      this.relationships = data.relationships;
    });
  }


  onSummaryClick(){ 
    this.show = 1;
    this.reset();
    this.summarySec = 'active';
    console.log('summary'+this.show);
    
  }

  onCompetitorClick(){
    this.show = 2;
    this.reset();
    this.competitorSec = 'active';
    console.log('competition'+this.show);
    for (var comp of this.companyDetail.competitions) {
      //console.log(comp.competitor.permalink);
      this.competitors.push(comp.competitor.permalink);
    }
    
  }

  onInvestedClick(){
    this.show = 3;
    this.reset();
    this.investedOnSec = 'active';
    console.log('invest'+this.show);
  }

  onAcquisitionClick(){
    this.show = 4;
    this.reset();
    this.acquisitionSec = 'active';
    console.log('acquisition'+this.show);
  }

  onFundingClick(){
    this.show = 5;
    this.reset();
    this.fundingSec = 'active';
    console.log('funding'+this.show);
  }

  onRelationshipClick(){
    this.show = 6;
    this.reset();
    this.relationshipSec = 'active';
    console.log('relation'+this.show);
  }

  onProductClick(){
    this.show = 7;
    this.reset();
    this.productSec = 'active';
    console.log(this.products);
  }

  onNewsClick(){
    this.show = 8;
    this.reset();
    this.newsSec = 'active';
    console.log('news'+this.show);
  }

  reset(){
    this.summarySec = 'notActive';
    this.competitorSec = 'notActive';
    this.investedOnSec = 'notActive';
    this.acquisitionSec = 'notActive';
    this.fundingSec = 'notActive';
    this.relationshipSec = 'notActive';
    this.productSec = 'notActive';
    this.newsSec = 'notActive';
  }

}
