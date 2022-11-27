import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { countries } from '../../../../assets/JsonDataFiles/countries';

@Component({
  selector: 'app-new-req-secound-file',
  templateUrl: './new-req-secound-file.component.html',
  styleUrls: ['./new-req-secound-file.component.css'],
})
export class NewReqSecoundFileComponent implements OnInit {
  public isMerridValue = false;
  public payAwayCountry: string = '';
  public countriesDic: string = 'countriesDic';
  public countries: any = countries;
  public isPayAway: boolean = false;
  public isRelatade: boolean = false;
  public nextPage: boolean = false;
  public num: number = 1;
  public FamilyStatusDic: string = 'isFamilyStatusDic';

  firstLayer = this.fb.group({
    isMerried: new FormControl(false),
    numberOfKids: new FormControl(1, Validators.required),
    isPayAwayForm: new FormControl(this.isPayAway),
    countryPayAway: new FormControl('', Validators.required),
    isRelatadeForm: new FormControl(this.isRelatade),
    country: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private _router: Router) {}

  ngOnInit(): void {}
  setIsPayAway(value: boolean) {
    this.isPayAway = value;
    console.log(this.isPayAway);
  }

  setIsRelatade(value: boolean) {
    this.isRelatade = value;
    this.firstLayer.value.isRelatadeForm = value;
    console.log(this.isRelatade);
  }

  navigate(where: string) {
    switch (where) {
      case 'next': {
        this.nextPage = true;
        this.setAndSendForms();
        setTimeout(() => {
          this._router.navigate(['third']);
        }, 1000);
        break;
      }
      case 'prev': {
        this._router.navigate(['first']);
        break;
      }
      default: {
        this._router.navigate(['first']);
        break;
      }
    }
  }

  setAndSendForms() {
    this.firstLayer.controls['isMerried'].setValue(this.isMerridValue);
    this.firstLayer.controls['country'].setValue(this.payAwayCountry);
    console.log(this.firstLayer)
  }
  setNumberOfKids(value: string) {
    switch (value) {
      case 'plus': {
        if (this.firstLayer.value.numberOfKids) {
          this.firstLayer.value.numberOfKids++;
          this.num = this.firstLayer.value.numberOfKids;
        } else {
          break;
        }
        break;
      }
      case 'minus': {
        if (
          this.firstLayer.value.numberOfKids &&
          this.firstLayer.value.numberOfKids > 1
        ) {
          this.firstLayer.value.numberOfKids--;
          this.num = this.firstLayer.value.numberOfKids;
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  addAnotherPartner() {
    console.log('addAnotherPartner working');
  }

  get isMerried() {
    return this.firstLayer.get('isMerried');
  }

  get numberOfKids() {
    return this.firstLayer.get('numberOfKids');
  }
  get isPayAwayForm() {
    return this.firstLayer.get('isPayAwayForm');
  }
  get countryPayAway() {
    return this.firstLayer.get('countryPayAway');
  }
  get isRelatadeForm() {
    return this.firstLayer.get('isRelatadeForm');
  }
  get country() {
    return this.firstLayer.get('country');
  }
}
