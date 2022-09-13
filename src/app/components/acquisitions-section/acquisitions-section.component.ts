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
  constructor() { }

  ngOnInit(): void {
    console.log(this.acquiredBy);
    console.log(this.acquisitions);
  }

}
