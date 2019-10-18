import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromToDateComponent } from './from-to-date.component';

describe('FromToDateComponent', () => {
  let component: FromToDateComponent;
  let fixture: ComponentFixture<FromToDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromToDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromToDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
