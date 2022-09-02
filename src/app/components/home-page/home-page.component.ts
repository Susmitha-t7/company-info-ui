import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company';
import { ApiService } from 'src/app/services/api.service';
import { MessageCompanyService } from 'src/app/services/message-company.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  companies !: Company[];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe((data: Company[]) => {
      console.log(data.length);
      this.companies = data;
    });
}


}
