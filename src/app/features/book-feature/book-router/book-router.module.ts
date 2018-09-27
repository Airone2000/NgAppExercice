import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BookHomeComponent } from '../book-home/book-home.component'


const ROUTES: Routes = [
  {path: 'books', component: BookHomeComponent}
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
