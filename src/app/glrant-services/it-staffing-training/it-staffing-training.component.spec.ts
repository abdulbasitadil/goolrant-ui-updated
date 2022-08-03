import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStaffingTrainingComponent } from './it-staffing-training.component';

describe('ItStaffingTrainingComponent', () => {
  let component: ItStaffingTrainingComponent;
  let fixture: ComponentFixture<ItStaffingTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItStaffingTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItStaffingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
