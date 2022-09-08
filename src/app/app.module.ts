import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutosListComponent } from './pages/produtos/produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './pages/produtos/produtos-form/produtos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutosListComponent,
    ProdutosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
