import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public progressValue: number = 0;
  constructor() {}
  getProgressValue(): number {
    return this.progressValue;
  }

  setProgressValue(newValue: number) {
    this.progressValue += newValue;
  }
}
