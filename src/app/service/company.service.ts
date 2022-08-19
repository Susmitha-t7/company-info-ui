import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../model/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companiesUrl: string;

  constructor(private http: HttpClient) {
    this.companiesUrl = 'http://localhost:8080/api/companies';
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }
}
