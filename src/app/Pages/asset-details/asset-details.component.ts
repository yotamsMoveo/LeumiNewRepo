import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css'],
})
export class AssetDetailsComponent implements OnInit {
  public defultMorgageCause: string = '';
  public defultBuyCause: string = '';
  public defultCity: string = '';
  public defultAssetsValue: string = '';
  public nextPage: boolean = false;
  public loanTime: number = 1;
  

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private dataService: DataService
  ) {}

  public assestFormGroup = this.fb.group({
    morgageCause: new FormControl(''),
    buyCause: new FormControl(''),
    city: new FormControl(''),
    assetsValue: new FormControl('', Validators.required),
  });

  setWorkTime(years: number) {
    switch (years) {
      case 1: {
        this.loanTime = 1;
        break;
      }
      case 2: {
        this.loanTime = 2;
        break;
      }
      case 3: {
        this.loanTime = 3;
        break;
      }
      case 4: {
        this.loanTime = 4;
        break;
      }
      default: {
        this.loanTime = 1;
        break;
      }
    }
  }

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

  ngOnInit(): void {}
}
