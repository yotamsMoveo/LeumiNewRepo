import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incomes-page',
  templateUrl: './incomes-page.component.html',
  styleUrls: ['./incomes-page.component.css'],
})
export class IncomesPageComponent implements OnInit {
  public nextPage: boolean = false;
  public incomes: Income[] = [];
  public isBanksDic: string = '';
  public defultIncome: string = '30000';
  // public incomeTypeDefultValue: string = '';
  public groupOfThreeIncomes = [
    { incomeType: '', incomeTypeType: '', incomeAmount: '30000' },
    { incomeType: '', incomeTypeType: '', incomeAmount: '30000' },
    { incomeType: '', incomeTypeType: '', incomeAmount: '30000' }
  ];
  incomeAmount: FormControl = new FormControl('');
  moreBankAcounts: FormControl = new FormControl('');

  moreIncomesForm = this.fb.group({
    incomeType: new FormControl(''),
    incomeTypeType: new FormControl(''),
    incomeTypeAmount: new FormControl(0),
  });

  constructor(private fb: FormBuilder, private _router: Router) {
    this.incomes = [new Income()];
  }

  ngOnInit(): void {}

  navigate(where: string) {
    switch (where) {
      case 'next': {
        this.nextPage = true;
        this.setAndSendForms();
        setTimeout(() => {
          this._router.navigate(['commitments']);
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
    this.moreBankAcounts.setValue(this.isBanksDic);
    this.incomeAmount.setValue(this.defultIncome);
  }
  deleteSpacificIncome(index: number) {
    if (this.incomes.length == 1) {
      return;
    }
    this.incomes.splice(index, 1);
    console.log('deleted');
  }
  addAnotherIncome() {
    if (this.incomes.length == 3) {
      return;
    }
    this.incomes.push(new Income());
    console.log('incomes added' + this.incomes.length);
  }
}

export class Income {
  constructor() {}
}
