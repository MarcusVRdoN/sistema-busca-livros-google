import { BookmarksComponent } from './components/books/bookmarks/bookmarks/bookmarks.component';
import { BookListComponent } from './components/books/list/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path: "favoritos",
    component: BookmarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
