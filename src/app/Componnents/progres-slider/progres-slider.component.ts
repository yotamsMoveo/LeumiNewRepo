import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-progres-slider',
  templateUrl: './progres-slider.component.html',
  styleUrls: ['./progres-slider.component.css'],
})
export class ProgresSliderComponent implements OnInit {
  progressValue: number;
  constructor(private dataService: DataService) {
    this.progressValue = this.dataService.getProgressValue();
    console.log(this.progressValue);
    this.dataService.setProgressValue(10);
    this.progressValue = this.dataService.getProgressValue();
    console.log(this.progressValue);
   }
  autoTicks = false;
  disabled = true;
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
}
