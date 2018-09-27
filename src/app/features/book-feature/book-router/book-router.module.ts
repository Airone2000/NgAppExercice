import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BookHomeComponent } from '../book-home/book-home.component'
import { BookDetailComponent } from '../book-detail/book-detail.component'


const ROUTES: Routes = [
  {path: 'books', component: BookHomeComponent},
  {path: 'books/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class BookRouterModule { }
