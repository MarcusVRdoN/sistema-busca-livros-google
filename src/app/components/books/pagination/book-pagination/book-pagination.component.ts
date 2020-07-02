import { PaginationService } from './../../../../services/pagination/pagination.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-book-pagination',
  templateUrl: './book-pagination.component.html',
  styleUrls: ['./book-pagination.component.scss']
})
export class BookPaginationComponent implements OnInit {

  @Input() maxResults: number
  @Input() startIndex: number
  @Input() totalItems: number
  @Output() paginationEvent = new EventEmitter<number>()

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
  }

  get page(): number {
    return this.paginationService.paginationData
  }

  get pagination(): number[] {
    return  Array(Math.ceil(this.totalItems / this.maxResults)).fill(0).map((e, number) => number)
  }

  changePage(event: any, direction: number = null) {
    event.preventDefault()
    this.startIndex = 12

    if (event.currentTarget.value)
      this.paginationService.paginationData = event.currentTarget.value

    if (direction)
      this.paginationService.paginationData += direction

    this.paginationEvent.emit(this.startIndex * this.page)

  }

}
