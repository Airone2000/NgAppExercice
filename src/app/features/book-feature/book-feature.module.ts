import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookHomeComponent } from './book-home/book-home.component';
import { BookRouterModule } from './book-router/book-router.module';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BookRouterModule
  ],
  declarations: [BookHomeComponent, BookDetailComponent]
})
export class BookFeatureModule { }
