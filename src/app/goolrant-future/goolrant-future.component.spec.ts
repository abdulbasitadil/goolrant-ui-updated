import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoolrantFutureComponent } from './goolrant-future.component';

describe('GoolrantFutureComponent', () => {
  let component: GoolrantFutureComponent;
  let fixture: ComponentFixture<GoolrantFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoolrantFutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoolrantFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
