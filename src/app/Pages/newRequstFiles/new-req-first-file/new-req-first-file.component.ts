import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-new-req-first-file',
  templateUrl: './new-req-first-file.component.html',
  styleUrls: ['./new-req-first-file.component.css'],
})
export class NewReqFirstFileComponent implements OnInit {

  public defultFirstName:string='';
  public defultLastName:string='';
  public defultPhoneNumber:string='';
  public defuitEmail:string="rona.c@gmail.com"
  public defultDate:Date;
  public defultId:string='';
  public nextPage: boolean = false;


  public profileForm = this.fb.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('', Validators.email),
    id: new FormControl('', Validators.required),
    dateOfBirth: new FormControl(new Date().getUTCDate(), Validators.required),
  });

  build(){
    this.profileForm.controls['firstName'].setValue("");
  }

  progressValue: number = 0;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private dataService: DataService
  ) {
    this.defultDate=new Date('1/1/2020');
    this.progressValue = this.dataService.getProgressValue();
    console.log(this.progressValue);
    this.dataService.setProgressValue(10);
    this.progressValue = this.dataService.getProgressValue();
    console.log(this.progressValue);
  }
  addAnotherPartner() {
    console.log('addAnotherPartner working');
  }
  navigate(where: string) {
    switch (where) {
      case 'next': {
        this.nextPage = true;
        this.setAndSendForms();
        console.log(this.profileForm);
        setTimeout(() => {
          this._router.navigate(['secound']);
        }, 1000);
        // this._router.navigate(['secound']);
        break;
      }
      case 'prev': {
        this._router.navigate(['my-requests']);
        break;
      }
      default: {
        this._router.navigate(['first']);
        break;
      }
    }
  }

  setAndSendForms(){
    this.profileForm.controls['firstName'].setValue(this.defultFirstName);
    this.profileForm.controls['lastName'].setValue(this.defultLastName);
    this.profileForm.controls['phoneNumber'].setValue(this.defultPhoneNumber);
    this.profileForm.controls['id'].setValue(this.defultId);

  }

  ngOnInit(): void {

  }

  get firstname() {
    return this.profileForm.get('firstname');
  }

  get lastname() {
    return this.profileForm.get('lastname');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get phoneNumber() {
    return this.profileForm.get('phoneNumber');
  }

  get dateOfBirth() {
    return this.profileForm.get('dateOfBirth');
  }

  get id() {
    return this.profileForm.get('id');
  }
}
