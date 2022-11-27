import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  progressValue: number=0;
  constructor(private dataService: DataService) {
    this.progressValue = this.dataService.getProgressValue();
    console.log(this.progressValue);
    this.dataService.setProgressValue(10);
    this.progressValue = this.dataService.getProgressValue();
    console.log(this.progressValue);
   }

  ngOnInit(): void {
  }

}
