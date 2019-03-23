import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CirculationService } from './../circulation.service';
import { Circulation } from '../circulation';
import * as $ from "jquery";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('btnList') toggleBtn: ElementRef;
  @ViewChild('btnClose') toggleBtnClose: ElementRef;

  circulations : Circulation[] = [];

  constructor(private circSrvc : CirculationService) { }

  ngOnInit() {
    this.circulations = this.circSrvc.getCirculation();

    $(this.toggleBtn.nativeElement)
      .click(function(){
        $(".table-container").show("slow");
        $(".graph-container").hide("slow");
      });

    $(this.toggleBtnClose.nativeElement)
      .click(function(){
        $(".table-container").hide("slow");
        $(".graph-container").show("slow");
      });
  }

}