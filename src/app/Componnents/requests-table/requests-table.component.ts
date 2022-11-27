import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  nameReq: string;
  typeReq: string;
  houseLocation: string;
  houseOwners:string;
  reqDate: number;
  lastChange:number;
  reqStatus:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nameReq: 'דירה יד שניה',typeReq: 'בקשה #1',  houseLocation: 'חולון',houseOwners:'hhh', reqDate: new Date().getDate(),lastChange: new Date().getDate(),reqStatus:'השלמת השאלון'},
];


@Component({
  selector: 'app-requests-table',
  templateUrl: './requests-table.component.html',
  styleUrls: ['./requests-table.component.css']
})


export class RequestsTableComponent implements OnInit {
  data: Array<any>
  constructor() {this.data = [
    { firstName: 'John', lastName: 'Doe', age: '35' },
    { firstName: 'Michael', lastName: 'Smith', age: '39' },
    { firstName: 'Michael', lastName: 'Jordan', age: '45' },
    { firstName: 'Tanya', lastName: 'Blake', age: '47' }
]; }

  table = [ [123, 456, 789], [111, 222, 333], [111, 222, 333]]
  displayedColumns: string[] = ['שם בקשה', 'סוג עסקה', 'מיקום בית', 'תאריך יצירה','השינוי האחרון','סטטוס בקשה'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  ngOnInit(): void {
  }

}
