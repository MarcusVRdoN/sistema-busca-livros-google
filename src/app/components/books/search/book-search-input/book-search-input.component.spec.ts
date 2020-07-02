import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchInputComponent } from './book-search-input.component';

describe('BookSearchInputComponent', () => {
  let component: BookSearchInputComponent;
  let fixture: ComponentFixture<BookSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
