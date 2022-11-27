import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReqThirdFileComponent } from './new-req-third-file.component';

describe('NewReqThirdFileComponent', () => {
  let component: NewReqThirdFileComponent;
  let fixture: ComponentFixture<NewReqThirdFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReqThirdFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReqThirdFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
