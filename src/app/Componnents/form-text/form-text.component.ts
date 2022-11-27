import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent implements OnInit {
  public labelText = '';
  public difultValue:any;
  public commentText='';
  public inputType="";
  public inputDate=new Date();
  @Output() valueChange = new EventEmitter<string>();
  //@Output() dateChange = new EventEmitter<Date>();
  constructor() { }
  

  @Input()
  set text(name: string) {
    this.labelText = name;
  }
  get name(): string {
    return this.labelText;
  }
  @Input()
  set type(name: string) {
    this.inputType = name;
  }
  get inputTypeP(): string {
    return this.inputType;
  }

  @Input()
  set dateValue(name: Date) {
    this.inputDate = name;
  }
  get inputDateP(): Date {
    return this.inputDate;
  }

  @Input()
  set comment(name: string) {
    this.commentText = name;
  }
  get comm(): string {
    return this.commentText;
  }

  @Input()
  set value(name: string) {
    this.difultValue = name;
  }
  get inputValue(): string {
    return this.difultValue;
  }
  setForm(value:any){
    this.difultValue=value.target.value;
    this.valueChange.emit(this.difultValue);
  }
  // setDate(value:any){
  //   this.inputDate=value.target.value;
  //   this.dateChange.emit(this.inputDate);
  // }
  ngOnInit(): void {
  }

}
