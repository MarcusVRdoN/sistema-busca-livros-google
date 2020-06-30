import { environment } from './../../../environments/environment';
import { GoogleBooks } from './../../models/google-book';
import { Book } from './../../models/book';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl: string = 'https://www.googleapis.com/books/v1/volumes'

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  searchBooks(query: string): Observable<Book[]> {
    const url = this.baseUrl
    const params = new HttpParams()
      .set('q', query)
      .set('key', environment.GOOGLE_BOOKS_API_KEY)

    return this.http.get<GoogleBooks>(url, { params })
      .pipe(
        map((googleBooks: GoogleBooks) => googleBooks.items),
        catchError(error => this.handlerError(error))
      )
  }

  getBook(id: string): Observable<Book> {
    const url = `${this.baseUrl}/${id}`
    const params = new HttpParams()
      .set('key', environment.GOOGLE_BOOKS_API_KEY)

    return this.http.get<Book>(url, { params })
      .pipe(
        catchError(error => this.handlerError(error))
      )
  }

  handlerError(error: any): Observable<any> {
    this.toastr.error(error.message, 'Erro!')
    return EMPTY
  }
}
