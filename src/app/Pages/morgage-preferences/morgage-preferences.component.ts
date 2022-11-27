import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-morgage-preferences',
  templateUrl: './morgage-preferences.component.html',
  styleUrls: ['./morgage-preferences.component.css'],
})
export class MorgagePreferencesComponent implements OnInit {
  progressValue: number;
  public nextPage: boolean = false;
  public defultMorgageValue: string = '1,750,000';
  public defultPayBackValue: string = '4,400';
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private dataService: DataService
  ) {
    this.progressValue = this.dataService.getProgressValue();
    console.log(this.progressValue);
    this.dataService.setProgressValue(10);
    this.progressValue = this.dataService.getProgressValue();
    console.log(this.progressValue);
  }

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  ngOnInit(): void {}

  navigate(where: string) {
    switch (where) {
      case 'next': {
        this.nextPage = true;
        this.setAndSendForms();
        this._router.navigate(['assestsDetails']);
        break;
      }
      case 'prev': {
        this._router.navigate(['partner/third']);
        break;
      }
      default: {
        this._router.navigate(['first']);
        break;
      }
    }
  }

  setAndSendForms() {}
}
