import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReqSecoundFileComponent } from './new-req-secound-file.component';

describe('NewReqSecoundFileComponent', () => {
  let component: NewReqSecoundFileComponent;
  let fixture: ComponentFixture<NewReqSecoundFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReqSecoundFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReqSecoundFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
