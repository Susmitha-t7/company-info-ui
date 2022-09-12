import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingSectionComponent } from './funding-section.component';

describe('FundingSectionComponent', () => {
  let component: FundingSectionComponent;
  let fixture: ComponentFixture<FundingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
