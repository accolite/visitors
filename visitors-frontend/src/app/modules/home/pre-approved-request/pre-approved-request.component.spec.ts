import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreApprovedRequestComponent } from './pre-approved-request.component';

describe('PreApprovedRequestComponent', () => {
  let component: PreApprovedRequestComponent;
  let fixture: ComponentFixture<PreApprovedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreApprovedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreApprovedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
