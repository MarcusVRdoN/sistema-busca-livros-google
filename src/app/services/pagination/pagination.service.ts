import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private _paginationData = new BehaviorSubject<number>(1)

  constructor() { }

  get paginationData(): number {
    return this._paginationData.value
  }

  set paginationData(page: number) {
    this._paginationData.next(page)
  }
}
