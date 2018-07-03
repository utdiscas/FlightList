import { Component } from '@angular/core';
import { FlightService } from "./flights/flight.service";

@Component({
  selector: 'pm-root',
  template:`
  <div><h1>{{pageTitle}}</h1>
  <pm-flights></pm-flights>
</div> `,
providers: [FlightService]
})

export class AppComponent {
  pageTitle: string = 'Flight List';
}
