import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClickableComponent } from './form-clickable.component';

describe('FormClickableComponent', () => {
  let component: FormClickableComponent;
  let fixture: ComponentFixture<FormClickableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClickableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClickableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
