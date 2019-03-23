import { CIRCULATION } from './circulation.mock';
import { Circulation } from './circulation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CirculationService {

  constructor() { }

  getCirculation(): Circulation[] {
    return CIRCULATION;
  }
}
