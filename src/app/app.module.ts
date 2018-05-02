import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { problemeComponent } from './probleme/probleme.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TypeProblemeData } from './probleme/typeProbleme-data';
import { TypeProblemeService } from './probleme/typeprobleme.service';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    problemeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InMemoryWebApiModule .forRoot(TypeProblemeData, { delay: 1000}),
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
    
    
  ],
  providers: [TypeProblemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
