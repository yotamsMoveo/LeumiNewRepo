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
  selector: 'app-new-req-partner-secound-file',
  templateUrl: './new-req-partner-secound-file.component.html',
  styleUrls: ['./new-req-partner-secound-file.component.css'],
})
export class NewReqPartnerSecoundFileComponent implements OnInit {
  public isMerridValue = false;
  public payAwayCountry: string = '';
  public countriesDic: string = 'countriesDic';
  public countries: any = countries;
  public hadAnotherDealText: string =
    'ערבים תומכים, הם בני משפחה מדרגה ראשונה, שמתחייבים לשאת בהחזר המשכנתה במקרה, מכל סיבה שהיא, לוקחי המשכנתה לא יעמדו בהחזרים.';
  
  public isPayAway: boolean = false;
  public isRelatade: boolean = false;
  public nextPage: boolean = false;
  public num: number = 1;
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
    this.firstLayer.value.isPayAwayForm = value;
    console.log(this.isPayAway);
  }

  setAndSendForms() {
    this.firstLayer.controls['isMerried'].setValue(this.isMerridValue);
    this.firstLayer.controls['country'].setValue(this.payAwayCountry);
    console.log(this.firstLayer)
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
        setTimeout(() => {
          this._router.navigate(['partner/third']);
        }, 1000);
        break;
      }
      case 'prev': {
        this._router.navigate(['partner/first']);
        break;
      }
      default: {
        this._router.navigate(['first']);
        break;
      }
    }
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

  setHasAnotherDeal() {
    console.log('has another deal change');
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
}
