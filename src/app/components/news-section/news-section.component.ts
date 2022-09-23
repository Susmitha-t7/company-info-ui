import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent implements OnInit {


  @Input()
  companyName !: any;

  public showContent: boolean = false;

  news !: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.companyName);
    this.apiService.getNewsByCompany(this.companyName).subscribe((news: any) => {
      console.log(news);
      this.news = news;
    });
    setTimeout(()=>this.showContent=true, 1000);
  }

}
