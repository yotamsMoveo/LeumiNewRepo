import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commitments-page',
  templateUrl: './commitments-page.component.html',
  styleUrls: ['./commitments-page.component.css'],
})
export class CommitmentsPageComponent implements OnInit {
  public nextPage: boolean = false;
  public commitments: Commitment[] = [];
  public commitmentSource: string = '';
  public defultCommitment: string = '30000';
  public isBanksDic: string = '';
  hasMoreCommitments: FormControl = new FormControl(false);
  moreBankAcounts: FormControl = new FormControl('');

  public groupOfThreeCommitments = [
    { commitmentType: '', commitmentAmount: '', commitmentSource: '' },
    { commitmentType: '', commitmentAmount: '', commitmentSource: '' },
    { commitmentType: '', commitmentAmount: '', commitmentSource: '' },
  ];

  moreIncomesForm = this.fb.group({
    incomeType: new FormControl(''),
    incomeTypeType: new FormControl(''),
    incomeTypeAmounr: new FormControl(0),
  });

  constructor(private fb: FormBuilder, private _router: Router) {
    this.commitments = [new Commitment()];
  }

  ngOnInit(): void {}

  navigate(where: string) {
    switch (where) {
      case 'next': {
        this.nextPage = true;
        this.setAndSendForms();
        setTimeout(() => {
          this._router.navigate(['assetsdetails']);
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
    this.groupOfThreeCommitments;
  }

  setCommitmentSource(value: string, i: number) {
    switch (value) {
      case 'bank': {
        this.groupOfThreeCommitments[i].commitmentSource = value;
        break;
      }
      case 'notBank': {
        this.groupOfThreeCommitments[i].commitmentSource = value;
        break;
      }
      default: {
        this.groupOfThreeCommitments[i].commitmentSource = '';
        break;
      }
    }
  }

  setHasMoreCommitments(value: boolean) {
    this.hasMoreCommitments.setValue(value);
  }

  deleteSpacificCommitment(index: number) {
    if (this.commitments.length == 1) {
      return;
    }
    this.commitments.splice(index, 1);
    console.log('deleted');
  }
  addAnotherCommitment() {
    if (this.commitments.length == 3) {
      return;
    }
    this.commitments.push(new Commitment());
    console.log('incomes added' + this.commitments.length);
  }
}

export class Commitment {
  constructor() {}
}
