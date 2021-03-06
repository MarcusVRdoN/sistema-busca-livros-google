import { BooksService } from './../../../../services/books/books.service';
import { Book } from './../../../../models/book';
import { SearchService } from './../../../../services/search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[]
  maxResults: number = 12
  startIndex: number = 0
  totalItems: number
  currentBookId: string = ''

  constructor(private booksService: BooksService, private searchService: SearchService) { }

  ngOnInit(): void {
    // this.booksService.searchBooks('Editora Casa do Código 23', this.maxResults, this.startIndex).subscribe(books => {
    //   this.books = books.items
    //   this.totalItems = books.totalItems
    // })
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
