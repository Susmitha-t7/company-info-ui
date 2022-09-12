import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrls: ['./summary-section.component.css']
})
export class SummarySectionComponent implements OnInit {

  @Input()
  companyDetail !: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.companyDetail);
  }

}
