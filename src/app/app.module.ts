import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {FormsModule} from "@angular/forms";
import { AuthorisationComponent } from './authorisation/authorisation.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorisationComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
