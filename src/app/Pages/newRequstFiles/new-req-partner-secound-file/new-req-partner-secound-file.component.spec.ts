import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReqPartnerSecoundFileComponent } from './new-req-partner-secound-file.component';

describe('NewReqPartnerSecoundFileComponent', () => {
  let component: NewReqPartnerSecoundFileComponent;
  let fixture: ComponentFixture<NewReqPartnerSecoundFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReqPartnerSecoundFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReqPartnerSecoundFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
