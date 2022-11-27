import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestsFileComponent } from './my-requests-file.component';

describe('MyRequestsFileComponent', () => {
  let component: MyRequestsFileComponent;
  let fixture: ComponentFixture<MyRequestsFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRequestsFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestsFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
