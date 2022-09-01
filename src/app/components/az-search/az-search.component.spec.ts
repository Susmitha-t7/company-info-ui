import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzSearchComponent } from './az-search.component';

describe('AzSearchComponent', () => {
  let component: AzSearchComponent;
  let fixture: ComponentFixture<AzSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
