import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-req-partner-third-file',
  templateUrl: './new-req-partner-third-file.component.html',
  styleUrls: ['./new-req-partner-third-file.component.css'],
})
export class NewReqPartnerThirdFileComponent implements OnInit {
  public isWorkStatusDic: string = '';
  public isBanksDic: string = '';
  public workTime: number = 1;
  public nextPage: boolean = false;
  workStatusFormGroup = this.fb.group({
    workStatus: new FormControl(''),
    workTimeStatus: new FormControl(this.workTime),
  });

  constructor(private fb: FormBuilder, private _router: Router) {}

  ngOnInit(): void {}

  navigate(where: string) {
    switch (where) {
      case 'next': {
        debugger;
        this.nextPage = true;
        this.setAndSendForms();
        setTimeout(() => {
          this._router.navigate(['incomes']);
        }, 1000);
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

  setAndSendForms() {
    this.workStatusFormGroup.controls['workStatus'].setValue(
      this.isWorkStatusDic
    );
  }

  setWorkTime(years: number) {
    switch (years) {
      case 1: {
        this.workTime = 1;
        break;
      }
      case 2: {
        this.workTime = 2;
        break;
      }
      case 3: {
        this.workTime = 3;
        break;
      }
      default: {
        this.workTime = 1;
        break;
      }
    }
  }
  addAnotherPartner() {
    console.log('add another partner done');
  }
}
