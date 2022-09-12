import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisitionsSectionComponent } from './acquisitions-section.component';

describe('AcquisitionsSectionComponent', () => {
  let component: AcquisitionsSectionComponent;
  let fixture: ComponentFixture<AcquisitionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquisitionsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcquisitionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
