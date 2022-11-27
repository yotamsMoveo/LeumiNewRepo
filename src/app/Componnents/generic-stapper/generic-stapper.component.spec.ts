import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericStapperComponent } from './generic-stapper.component';

describe('GenericStapperComponent', () => {
  let component: GenericStapperComponent;
  let fixture: ComponentFixture<GenericStapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericStapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericStapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
