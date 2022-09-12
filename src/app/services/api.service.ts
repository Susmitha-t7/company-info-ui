import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { FilterArgs } from '../FilterArgs';
import { Company } from '../company';
import { CompanyDetail } from '../CompanyDetail';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:8080/api/companies";

  private categoryUrl = "http://localhost:8080/api/categoryCode";

  private tagURL = "http://localhost:8080/api/tags";

  private customFilter = "http://localhost:8080/api/company/custom";

  private companyDetailURL = "http://localhost:8080/api/companies/";

  private competitorURL = "http://localhost:8080/api/competitors/";

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.baseUrl}`);
  }

  getCompanyDetails(name : string | null): Observable<any>{
    return this.http.get<any>(`${this.companyDetailURL}`+name);
  }

  getCategoryCodes(): Observable<String[]>{
    return this.http.get<String[]>(`${this.categoryUrl}`);
  }

  getTags(): Observable<String[]>{
    return this.http.get<String[]>(`${this.tagURL}`);
  }

  getCompetitors(names: any): Observable<Company[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("names",names);
    return this.http.get<Company[]>(`${this.competitorURL}`, {params:queryParams});
  }


  getCompaniesFromFilter(args : FilterArgs): Observable<Company[]>{
    console.log(args);
    let queryParams = new HttpParams();
    queryParams = queryParams.append("search",String(args.search));
    queryParams = queryParams.append("searchStart",String(args.searchStart));
    queryParams = queryParams.append("categoryCode",String(args.category));
    queryParams = queryParams.append("investedOn",String(args.invest));
    queryParams = queryParams.append("tag",String(args.tag));
    queryParams = queryParams.append("fundedBy",String(args.fund));
    queryParams = queryParams.append("numberOfEmployees",String(args.noOfEmployees));
    queryParams = queryParams.append("foundedYear",args.year);
    console.log(queryParams);
    return this.http.get<Company[]>(`${this.customFilter}`,{params:queryParams});
  }

}
