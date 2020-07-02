import { Router } from '@angular/router';
import { SearchService } from './../../../../services/search/search.service';
import { BooksService } from './../../../../services/books/books.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-search-input',
  templateUrl: './book-search-input.component.html',
  styleUrls: ['./book-search-input.component.scss']
})
export class BookSearchInputComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>()

  isBookmarksPage: boolean = false

  constructor(private bookService: BooksService, private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.checkIsBookmarksPage()
  }

  doSearch(event: any) {
    this.searchService.searchData = event.target.value
    this.searchEvent.emit(this.searchService.searchData)
  }

  checkIsBookmarksPage(): void {
    this.isBookmarksPage = window.location.pathname.includes('favoritos')
  }

  togglePage(event: any) {
    const page = event.target.checked ? '/favoritos' : ''
    this.router.navigate([page])
  }

}
