import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/books/list/book-list/book-list.component';
import { BookSearchInputComponent } from './components/books/search/book-search-input/book-search-input.component';
import { BookDetailsComponent } from './components/books/details/book-details/book-details.component';
import { BookPaginationComponent } from './components/books/pagination/book-pagination/book-pagination.component';

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { BookmarksComponent } from './components/books/bookmarks/bookmarks/bookmarks.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookSearchInputComponent,
    BookDetailsComponent,
    BookPaginationComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
