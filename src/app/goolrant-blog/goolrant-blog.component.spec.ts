import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoolrantBlogComponent } from './goolrant-blog.component';

describe('GoolrantBlogComponent', () => {
  let component: GoolrantBlogComponent;
  let fixture: ComponentFixture<GoolrantBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoolrantBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoolrantBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
