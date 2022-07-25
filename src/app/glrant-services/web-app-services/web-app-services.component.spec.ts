import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppServicesComponent } from './web-app-services.component';

describe('WebAppServicesComponent', () => {
  let component: WebAppServicesComponent;
  let fixture: ComponentFixture<WebAppServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebAppServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
