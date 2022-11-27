import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReqPartnerFirstFileComponent } from './new-req-partner-first-file.component';

describe('NewReqPartnerFirstFileComponent', () => {
  let component: NewReqPartnerFirstFileComponent;
  let fixture: ComponentFixture<NewReqPartnerFirstFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReqPartnerFirstFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReqPartnerFirstFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
