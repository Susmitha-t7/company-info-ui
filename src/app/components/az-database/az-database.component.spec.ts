import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzDatabaseComponent } from './az-database.component';

describe('AzDatabaseComponent', () => {
  let component: AzDatabaseComponent;
  let fixture: ComponentFixture<AzDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
