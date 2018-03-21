import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BusService {

  searchTerm: Subject<string>;
  constructor() {
    this.searchTerm = new Subject<string>();
   }


}
