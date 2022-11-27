import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { countries } from '../../../assets/JsonDataFiles/countries';
import { AbstractControl, ControlContainer, FormControl } from '@angular/forms';

interface country {  
  table: string,
  id: string,
  name: string,
  english_name: string
}  
@Component({
  selector: 'app-form-drop-down',
  templateUrl: './form-drop-down.component.html',
  styleUrls: ['./form-drop-down.component.css'],
})
export class FormDropDownComponent implements OnInit {
  public labelText = '';
  public commentText = '';
  public connectedForm = '';
  public isFamilyStatusDic = '';
  public isIncomeTypeDic = '';
  public isCountriesDic = '';
  public isWorkStatusDic='';
  public isBanksDic='';
  ListUnits:country[]=countries;
  listOfData:Array<any>=["1","2","3"];
  
  public countriesList = new Map(
    countries.map((object) => {
      return [object.name, object.name];
    })
  );

  public FSDic: Map<string, boolean> = new Map<string, boolean>()
    .set('נשוי/נשואה', true)
    .set('רווק/רווקה', false);
  public IncomeTypeDic: Map<string, string> = new Map<string, string>()
    .set('value1', 'value1')
    .set('value2', 'value2');
  public WorkStatusDic: Map<string, string> = new Map<string, string>()
    .set('value3', 'value3')
    .set('value4', 'value4');

    public BanksDic: Map<string, string> = new Map<string, string>()
    .set('value5', 'value5')
    .set('value6', 'value6');
  // public control:FormControl =new FormControl();

  constructor(private controlContainer: ControlContainer) {}
  @Input() formBooleanValue!: boolean;
  @Output() formBooleanValueChange = new EventEmitter<boolean>();
  @Input() formStringValue!: string;
  @Output() formStringValueChange = new EventEmitter<string>();
  @Input() control!: FormControl;

  setForm(value: any) {
    
    if (value == true || value == false) {
      this.formBooleanValue = value;
      this.formBooleanValueChange.emit(this.formBooleanValue);
    } else {
      this.formStringValue = value;
      this.formStringValueChange.emit(this.formStringValue);
    }
  }

  @Input()
  set text(name: string) {
    this.labelText = name;
  }
  get name(): string {
    return this.labelText;
  }
  @Input()
  set comment(name: string) {
    this.commentText = name;
  }
  get comm(): string {
    return this.commentText;
  }

  @Input()
  set form(name: string) {
    this.connectedForm = name;
  }
  get formText(): string {
    return this.connectedForm;
  }

  @Input()
  set familyStatusDic(name: string) {
    this.isFamilyStatusDic = name;
  }
  get familyStatusDic(): string {
    return this.isFamilyStatusDic;
  }

  @Input()
  set incomeTypeDic(name: string) {
    this.isIncomeTypeDic = name;
  }
  get incomeTypeDic(): string {
    return this.isIncomeTypeDic;
  }

  @Input()
  set countriesDic(name: string) {
    this.isCountriesDic = name;
  }
  get countriesDic(): string {
    return this.isCountriesDic;
  }

  @Input()
  set workStatusDic(name: string) {
    this.isWorkStatusDic = name;
  }
  get workStatusDic(): string {
    return this.isWorkStatusDic;
  }

  @Input()
  set banksDic(name: string) {
    this.isBanksDic = name;
  }
  get banksDic(): string {
    return this.isBanksDic;
  }

  @Input()
  fodrmControlName: string = '';

  ngOnInit(): void {
   
  }
}
