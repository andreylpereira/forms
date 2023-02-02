import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PdfComponent } from './pages/pdf/pdf.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CNPJPipe } from './pipe/cnpj.pipe';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PdfComponent,
    HeaderComponent,
    CNPJPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
