import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AppHomeComponent } from '../app-home/app-home.component'
import { AppNotFoundComponent } from '../app-not-found/app-not-found.component'


const ROUTES: Routes = [
  {path: '', component: AppHomeComponent},
  {path: '**', component: AppNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
