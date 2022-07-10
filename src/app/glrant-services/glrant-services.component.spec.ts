import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlrantServicesComponent } from './glrant-services.component';

describe('GlrantServicesComponent', () => {
  let component: GlrantServicesComponent;
  let fixture: ComponentFixture<GlrantServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlrantServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlrantServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
