import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent implements OnInit {


  @Input()
  companyName !: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.companyName);
  }

}
