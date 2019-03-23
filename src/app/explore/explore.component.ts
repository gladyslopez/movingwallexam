import { CirculationService } from './../circulation.service';
import { BillboardService } from './../billboard.service';
import { Component, OnInit } from '@angular/core';
import { Billboard } from '../billboard';
import { Circulation } from '../circulation';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  billboards : Billboard[] = [];
  circulations : Circulation[] = [];
  searchbillboards: number = 4000;

  options: any = {format: 'DD.MM.YYYY', locale: 'fr'};

  constructor(private billboardService: BillboardService,
    private circSrvc : CirculationService) { }

  ngOnInit() {
    this.billboards = this.billboardService.getBillboards();
    this.circulations = this.circSrvc.getCirculation();
  }

}
