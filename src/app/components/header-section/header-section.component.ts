import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  companyInfo = 'CompanyInfo';
  azDatabase = 'A-Z Database';
  
  constructor() {
    
    
   }

  ngOnInit(): void {
   
  }

}
