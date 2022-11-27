import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveToButtonsComponent } from './move-to-buttons.component';

describe('MoveToButtonsComponent', () => {
  let component: MoveToButtonsComponent;
  let fixture: ComponentFixture<MoveToButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveToButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveToButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
