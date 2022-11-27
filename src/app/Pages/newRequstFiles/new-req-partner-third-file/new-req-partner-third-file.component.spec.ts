import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReqPartnerThirdFileComponent } from './new-req-partner-third-file.component';

describe('NewReqPartnerThirdFileComponent', () => {
  let component: NewReqPartnerThirdFileComponent;
  let fixture: ComponentFixture<NewReqPartnerThirdFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReqPartnerThirdFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReqPartnerThirdFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
