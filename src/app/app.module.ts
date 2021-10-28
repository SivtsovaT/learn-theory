import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {FormsModule} from "@angular/forms";
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AnimalsComponent } from './animals/animals.component';
import { ClickCountComponent } from './click-count/click-count.component';
import { HelloTomComponent } from './hello-tom/hello-tom.component';
import { RedComponent } from './red/red.component';
import { DirectiveComponent } from './directive/directive.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { FormsComponent} from "./forms/forms.component";
import { SecondFormComponent } from './second-form/second-form.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorisationComponent,
    ShoppingListComponent,
    AnimalsComponent,
    ClickCountComponent,
    HelloTomComponent,
    RedComponent,
    DirectiveComponent,
    StructureDirectiveComponent,
    FormsComponent,
    SecondFormComponent,
    ValidationComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
