import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OpenDialogComponent } from 'src/app/Componnents/open-dialog/open-dialog.component';

@Component({
  selector: 'app-my-requests-file',
  templateUrl: './my-requests-file.component.html',
  styleUrls: ['./my-requests-file.component.css'],
})
export class MyRequestsFileComponent implements OnInit {
  public nextPage:boolean=false;
  constructor(private _router: Router,private _activatedRoute:ActivatedRoute,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }

  navigateToFirst() {
    this.nextPage=true;
    setTimeout(()=>{ this._router.navigate(['explanation-file']);},1000)
    
  }

  openDialog() {
    this.dialog.open(OpenDialogComponent);
  }

  clickHandler(){
    console.log("its working");
  }
}
