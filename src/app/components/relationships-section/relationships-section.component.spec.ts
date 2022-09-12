import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipsSectionComponent } from './relationships-section.component';

describe('RelationshipsSectionComponent', () => {
  let component: RelationshipsSectionComponent;
  let fixture: ComponentFixture<RelationshipsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshipsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
