import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-investedon-section',
  templateUrl: './investedon-section.component.html',
  styleUrls: ['./investedon-section.component.css']
})
export class InvestedonSectionComponent implements OnInit {

  @Input()
  investments !: any;
  public showContent: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.investments);
    setTimeout(()=>this.showContent=true, 1000);
  }

}
