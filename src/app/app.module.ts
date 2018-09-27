import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router/app-router.module';
import { AppHomeComponent } from './app-home/app-home.component';
import { BookFeatureModule } from './features/book-feature/book-feature.module';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BookFeatureModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
