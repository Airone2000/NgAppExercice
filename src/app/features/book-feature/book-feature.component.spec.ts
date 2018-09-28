import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFeatureComponent } from './book-feature.component';

describe('BookFeatureComponent', () => {
  let component: BookFeatureComponent;
  let fixture: ComponentFixture<BookFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
