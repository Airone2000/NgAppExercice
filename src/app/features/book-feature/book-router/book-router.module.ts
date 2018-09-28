import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BookHomeComponent } from '../book-home/book-home.component'
import { BookDetailComponent } from '../book-detail/book-detail.component'
import { AppNotFoundComponent } from '../../../app-not-found/app-not-found.component';
import { BookFeatureComponent } from '../book-feature.component';


const ROUTES: Routes = [
  { 
    path: 'books', 
    component: BookFeatureComponent,
    children: [
      {
        path: ':id',
        component: BookDetailComponent
      },
      {
        path: '',
        component: BookHomeComponent
      },
      {
        path: '**',
        component: AppNotFoundComponent
      }
    ]
  }
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
