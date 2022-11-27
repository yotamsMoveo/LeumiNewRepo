import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NastedStapperComponent } from './nasted-stapper.component';

describe('NastedStapperComponent', () => {
  let component: NastedStapperComponent;
  let fixture: ComponentFixture<NastedStapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NastedStapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NastedStapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
