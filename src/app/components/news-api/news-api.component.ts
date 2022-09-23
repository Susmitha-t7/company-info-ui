import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.css']
})
export class NewsApiComponent implements OnInit {

  @Input()
  news !: any;

  public showContent: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>this.showContent=true, 1000);
  }

}
