import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorgagePreferencesComponent } from './morgage-preferences.component';

describe('MorgagePreferencesComponent', () => {
  let component: MorgagePreferencesComponent;
  let fixture: ComponentFixture<MorgagePreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorgagePreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorgagePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
