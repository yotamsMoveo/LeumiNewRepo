import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-commant',
  templateUrl: './generic-commant.component.html',
  styleUrls: ['./generic-commant.component.css']
})
export class GenericCommantComponent implements OnInit {

  constructor() { }

  public textArea = '';

	@Input()
	set text(name: string) {
		this.textArea = name;
	}
	get name(): string {
		return this.textArea;
	}

  ngOnInit(): void {
  }

}
