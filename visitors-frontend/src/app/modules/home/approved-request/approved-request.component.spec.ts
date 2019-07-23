import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedRequestComponent } from './approved-request.component';

describe('ApprovedRequestComponent', () => {
  let component: ApprovedRequestComponent;
  let fixture: ComponentFixture<ApprovedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
