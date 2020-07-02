import { Book } from './../../../../models/book';
import { BooksService } from './../../../../services/books/books.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() bookId: string
  @Output() close: EventEmitter<string> = new EventEmitter<string>()

  book: Book
  bookmarkText: string = 'Adicionar aos favoritos'
  inBookmark: boolean = false

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBook(this.bookId)
      .subscribe(book => {
        this.book = book

        if (this.hasInStorage('bookmarkIds', this.bookId)) {
          this.toggleBookmarkSatus()
          this.toggleBookmarkText()
        }
      })
  }

  closeModal(): void {
    const isBookmarksPage = window.location.pathname.includes('favoritos')
    window.location.href = isBookmarksPage ? '/favoritos#' : '#'
    this.close.emit('closed')
  }

  toggleBookmark(): void {
    this.toggleBookmarkSatus()
    this.toggleBookmarkText()
    this.pushToStorage('bookmarkIds', this.bookId)
  }

  toggleBookmarkSatus(): void {
    this.inBookmark = !this.inBookmark
  }

  toggleBookmarkText(): void {
    this.bookmarkText = this.inBookmark ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
  }

  hasInStorage(bookId: string, id: string): boolean {
    return localStorage.getItem(bookId).includes(id)
  }

  pushToStorage(bookId: string, id: string): void {
    let bookmarks: string | string[] = localStorage.getItem(bookId)

    bookmarks = bookmarks ? bookmarks.split(',') : []

    if (bookmarks.includes(id))
      bookmarks = bookmarks.filter(bookId => bookId !== id)
    else
      bookmarks.push(id)

    localStorage.setItem(bookId, bookmarks.toString())
  }
}
