import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsApiComponent } from './components/news-api/news-api.component';
import { AzDatabaseComponent } from './components/az-database/az-database.component';
import { AzSearchComponent } from './components/az-search/az-search.component';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MessageCompanyService } from './services/message-company.service';
import { ApiService } from './services/api.service';
import { DropdownDirectiveDirective } from './dropdown-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    FilterSectionComponent,
    SearchBoxComponent,
    SearchResultComponent,
    HomePageComponent,
    NewsApiComponent,
    AzDatabaseComponent,
    AzSearchComponent,
    DropdownDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule, 
    InfiniteScrollModule,
    ReactiveFormsModule
  ],
  providers: [MessageCompanyService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
