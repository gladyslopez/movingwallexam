import { Component, OnInit } from '@angular/core';
import { CirculationService } from './../circulation.service';
import { Circulation } from '../circulation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  circulations : Circulation[] = [];

  constructor(private circSrvc : CirculationService) { }

  ngOnInit() {
    this.circulations = this.circSrvc.getCirculation();
  }

}
