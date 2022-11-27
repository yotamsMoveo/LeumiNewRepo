import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCommantComponent } from './generic-commant.component';

describe('GenericCommantComponent', () => {
  let component: GenericCommantComponent;
  let fixture: ComponentFixture<GenericCommantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericCommantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericCommantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
