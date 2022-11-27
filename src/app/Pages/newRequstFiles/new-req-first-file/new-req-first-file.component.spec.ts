import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReqFirstFileComponent } from './new-req-first-file.component';

describe('NewReqFirstFileComponent', () => {
  let component: NewReqFirstFileComponent;
  let fixture: ComponentFixture<NewReqFirstFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReqFirstFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReqFirstFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
