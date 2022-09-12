import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorSectionComponent } from './competitor-section.component';

describe('CompetitorSectionComponent', () => {
  let component: CompetitorSectionComponent;
  let fixture: ComponentFixture<CompetitorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitorSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
