import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acquisitions-section',
  templateUrl: './acquisitions-section.component.html',
  styleUrls: ['./acquisitions-section.component.css']
})
export class AcquisitionsSectionComponent implements OnInit {

  @Input()
  acquisitions !: any;

  @Input()
  acquiredBy !: any;
  public showContent: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.acquiredBy);
    console.log(this.acquisitions);
    setTimeout(()=>this.showContent=true, 1000);
  }

}
