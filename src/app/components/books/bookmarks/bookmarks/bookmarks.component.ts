import { SearchService } from './../../../../services/search/search.service';
import { BooksService } from './../../../../services/books/books.service';
import { Book } from './../../../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  books: Book[] = []
  maxResults: number = 12
  startIndex: number = 0
  totalItems: number
  currentBookId: string = ''
  bookmarkIds: string[]

  constructor(private booksService: BooksService, private searchService: SearchService) { }

  ngOnInit(): void {
    console.log('books:', this.books)
    this.bookmarkIds = localStorage.getItem('bookmarkIds').split(',')
    this.bookmarkIds.forEach(id => {
      this.booksService.getBook(id)
        .subscribe(book => this.books.push(book))
    })
    this.totalItems = this.bookmarkIds.length
  }

  get search(): string {
    return this.searchService.searchData
  }

  receiveSearch(startIndex: number = null): void {
    const index = startIndex || this.startIndex

    this.booksService.searchBooks(this.search, this.maxResults, index).subscribe(books => {
      this.books = books.items
      this.totalItems = books.totalItems
    })
  }

  getBookId(id: string) {
    this.currentBookId = id
  }

  resetCurrentBookId() {
    this.currentBookId = null
  }

}
