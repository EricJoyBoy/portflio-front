import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { CurriculumComponent } from './components/template/curriculum/curriculum.component';
import { ProgettiComponent } from './components/template/progetti/progetti.component';


@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
    FooterComponent,
    CurriculumComponent,
    ProgettiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
