import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _searchData = new BehaviorSubject<string>('')

  constructor() { }

  get searchData(): string {
    return this._searchData.value
  }

  set searchData(query: string) {
    this._searchData.next(query)
  }
}
