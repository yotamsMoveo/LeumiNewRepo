import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-move-to-buttons',
  templateUrl: './move-to-buttons.component.html',
  styleUrls: ['./move-to-buttons.component.css']
})
export class MoveToButtonsComponent implements OnInit {

  constructor(  private _router: Router,) { }

  ngOnInit(): void {
  }

  navigate(where: string) {
    switch (where) {
      case 'next': {
        this._router.navigate(['secound']);
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

}
