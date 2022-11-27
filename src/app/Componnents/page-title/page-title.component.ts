import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  public MainTitle = '';
  public SubTitle = '';

  constructor() { }
 

	@Input()
	set mainTitle(name: string) {
		this.MainTitle = name;
	}
	get name(): string {
    debugger;
		return this.MainTitle;
	}
  @Input()
	set subTitle(name: string) {
		this.SubTitle = name;
	}
	get subName(): string {
		return this.SubTitle;
	}

  ngOnInit(): void {
  }

}
