import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresSliderComponent } from './progres-slider.component';

describe('ProgresSliderComponent', () => {
  let component: ProgresSliderComponent;
  let fixture: ComponentFixture<ProgresSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
