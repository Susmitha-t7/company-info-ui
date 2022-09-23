import { Component, Input, OnInit } from '@angular/core';
import { relationship } from 'src/app/relationship';


@Component({
  selector: 'app-relationships-section',
  templateUrl: './relationships-section.component.html',
  styleUrls: ['./relationships-section.component.css']
})


export class RelationshipsSectionComponent implements OnInit {


  @Input()
  relationships !: any;

  filteredItems !: relationship[];

  searchValue !: string;

  public showContent: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.relationships);
    this.assignCopy();
    setTimeout(()=>this.showContent=true, 1000);
  }

  assignCopy(){
    this.filteredItems = Object.assign([], this.relationships);
 }

 search(){
  this.assignCopy();
  if(this.searchValue != null && this.searchValue!=""){
    this.filteredItems = this.filteredItems
                              .filter(
                                        obj => obj.person.firstName.toLowerCase().includes(this.searchValue.toLowerCase()) 
                                                || obj.person.lastName.toLowerCase().includes(this.searchValue.toLowerCase()))
  }

 }



}
