import { Component, OnInit } from "@angular/core";
import { IFlight } from "./flight";
import { FlightService } from "./flight.service";

@Component({
    selector:'pm-flights',
    templateUrl:'./flight-list.component.html',
    styleUrls:['./flight-list.component.css']
})
export class FlightListComponent implements OnInit{
    filteredflights: IFlight[];
    pageTitle: string = 'Flight List';
imageWidth: number = 50;
imageMargin: number =2;
showImage: Boolean = true;
_listFilter: string;
get listFilter(): string{
    return this._listFilter;
}

set listFilter(value:string){
    this._listFilter = value;
    this.filteredflights=this.listFilter ? this.performFilter(this.listFilter) : this.flights;
}

flights: IFlight[] = [
    {
        "flightId": "DLH232",
        "departure": "EPGD",
        "destination":"BIEG",
        "date":"02-02-2018",
        "fuelCost":2323.23,
        "safetyRating": 1.4,
        "status": "canceled",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPrsQLar_S9LNi9krK3qOXT_-qIcmdiSnZ1wu8I7K1VElwOaXog"
    },
    {
        "flightId": "AFR232",
        "departure": "EDDF",
        "destination":"EPWA",
        "date":"04-04-2018",
        "fuelCost":253.23,
        "safetyRating": 3.6,
        "status": "take off",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo19Qq2SgDv1XmtttALlggvsLThrju1tBa8CY5BCJli9QgYwEa"
    }, {
        "flightId": "DLH177",
        "departure": "EDDM",
        "destination":"KJFK",
        "date":"03-04-2018",
        "fuelCost":253.23,
        "safetyRating": 4.8,
        "status": "take off",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo19Qq2SgDv1XmtttALlggvsLThrju1tBa8CY5BCJli9QgYwEa"
    }, {
        "flightId": "AFR352",
        "departure": "LIRA",
        "destination":"KBOC",
        "date":"03-04-2018",
        "fuelCost":7893.23,
        "safetyRating": 3.7,
        "status": "take off",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo19Qq2SgDv1XmtttALlggvsLThrju1tBa8CY5BCJli9QgYwEa"
    },
    {
        "flightId": "AFR952",
        "departure": "EPWA",
        "destination":"KBOC",
        "date":"03-04-2018",
        "fuelCost":7893.23,
        "safetyRating": 3.0,
        "status": "take off",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo19Qq2SgDv1XmtttALlggvsLThrju1tBa8CY5BCJli9QgYwEa"
    }
];

constructor(private _flightService: FlightService){
    this.listFilter = 'd';
}
onRatingClicked(message: string) :void{
    this.pageTitle= 'Flight List: ' + message;
}

performFilter(filterBy: string): IFlight[]{
filterBy = filterBy.toLocaleLowerCase();
return this.flights.filter((flight : IFlight) =>
flight.flightId.toLocaleLowerCase().indexOf(filterBy) !== -1);

}

toggleImage(): void {
    this.showImage = !this.showImage;
}

ngOnInit(): void{
    this.flights = this._flightService.getProducts();
    this.filteredflights=this.flights;
}
}