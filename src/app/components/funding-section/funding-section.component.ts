import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-funding-section',
  templateUrl: './funding-section.component.html',
  styleUrls: ['./funding-section.component.css']
})
export class FundingSectionComponent implements OnInit {

  @Input()
  fundingRounds !: any;

  @ViewChild('dialogRef')
  dialogRef !: TemplateRef<any>

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.fundingRounds.forEach((_fundingRounds: { isExpanded: boolean; }) => {
      _fundingRounds.isExpanded = false;
    });
    console.log(this.fundingRounds);
  }

  openFundingDetails(investments : any){
    const myCompDialog = this.dialog.open(this.dialogRef,{data:investments,
      panelClass : 'custom-modalbox', width:'50vh'
    })
  }

}
