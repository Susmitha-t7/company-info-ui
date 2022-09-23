import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { Company } from 'src/app/company';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-competitor-section',
  templateUrl: './competitor-section.component.html',
  styleUrls: ['./competitor-section.component.css']
})
export class CompetitorSectionComponent implements OnInit {

  @Input()
  competitors !: any;
  competitorDetail !: Company[];
  public showContent: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCompetitors(this.competitors).subscribe((data: Company[]) => {
      console.log(data);
      this.competitorDetail = data;
    });
    setTimeout(()=>this.showContent=true, 1000);
    
  }

}
