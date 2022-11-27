import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explanation-page',
  templateUrl: './explanation-page.component.html',
  styleUrls: ['./explanation-page.component.css']
})
export class ExplanationPageComponent implements OnInit {
  public nextPage: boolean = false;
  public levelArr:string[]=["מגיש הבקשה","בן/בת הזוג","הכנסות והתחייבויות","פרטי הנכס","העדפות משכנתה"];

  constructor(private _router: Router) { }
  ngOnInit(): void {
  }
  navigate(where: string) {
    switch (where) {
      case 'next': {
        this.nextPage = true;
        setTimeout(() => {
          this._router.navigate(['first']);
        }, 1000);
        break;
      }
      default: {
        this._router.navigate(['first']);
        break;
      }
    }
  }

}
