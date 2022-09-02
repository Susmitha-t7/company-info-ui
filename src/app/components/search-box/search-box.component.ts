import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Company } from 'src/app/company';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }


}
