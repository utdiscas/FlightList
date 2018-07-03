import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightListComponent } from "./flights/flight-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
