import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funding-section',
  templateUrl: './funding-section.component.html',
  styleUrls: ['./funding-section.component.css']
})
export class FundingSectionComponent implements OnInit {

  @Input()
  fundingRounds !: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.fundingRounds);
  }

}
