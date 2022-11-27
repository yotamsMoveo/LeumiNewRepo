import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  public buttonText = '';
  public iconLogo = '';
  public styleButton = '';

  @Input()
  set text(name: string) {
    this.buttonText = name.toUpperCase();
  }
  get name(): string {
    return this.buttonText;
  }

  @Input()
  set styleB(styleN: string) {
    this.styleButton = styleN;
  }
  get styleN(): string {
    return this.styleButton;
  }

  @Input()
  set icon(iconName: string) {
    this.iconLogo = iconName;
  }
  get iconName(): string {
    return this.iconLogo;
  }

  @Input() color: string = '0068B4';
  @Input() type: string = 'button';

  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
