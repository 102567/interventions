import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NveauComponent } from './probleme/nveau.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TypeProblemeData } from './probleme/typeProbleme-data';
import { TypeProblemeService } from './probleme/typeprobleme.service';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NveauComponent,
    NveauComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule .forRoot(TypeProblemeData, { delay: 1000}),
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
    
    
  ],
  providers: [TypeProblemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
