import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestedonSectionComponent } from './investedon-section.component';

describe('InvestedonSectionComponent', () => {
  let component: InvestedonSectionComponent;
  let fixture: ComponentFixture<InvestedonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestedonSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestedonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
