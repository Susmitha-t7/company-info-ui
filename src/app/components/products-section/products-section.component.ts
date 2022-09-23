import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {

  @Input()
  products !: any;

  public showContent: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    console.log("products::::"+this.products);
    setTimeout(()=>this.showContent=true, 1000);
  }

}
