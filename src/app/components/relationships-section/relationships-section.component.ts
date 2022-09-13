import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relationships-section',
  templateUrl: './relationships-section.component.html',
  styleUrls: ['./relationships-section.component.css']
})
export class RelationshipsSectionComponent implements OnInit {

  @Input()
  relationships !: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.relationships);
  }

}
