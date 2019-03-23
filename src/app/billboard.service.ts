import { BILLBOARD } from './billboard.mock';
import { Billboard } from './billboard';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {

  constructor() { }

  getBillboards(): Billboard[] {
    return BILLBOARD;
  }
}
