import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {

  @Input()
  products !: any;
  constructor() { }

  ngOnInit(): void {
    console.log("products::::"+this.products);
  }

}
