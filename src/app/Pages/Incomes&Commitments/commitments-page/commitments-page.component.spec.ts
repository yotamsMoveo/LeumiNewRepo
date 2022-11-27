import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentsPageComponent } from './commitments-page.component';

describe('CommitmentsPageComponent', () => {
  let component: CommitmentsPageComponent;
  let fixture: ComponentFixture<CommitmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitmentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
