import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { VerLibroComponent } from './pages/ver-libro/ver-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    AddComponent,
    NavbarComponent,
    VerLibroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
