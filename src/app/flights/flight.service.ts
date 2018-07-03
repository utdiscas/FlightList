import { Injectable } from '@angular/core';
import { IFlight } from "./flight";

@Injectable()
export class FlightService {

    getProducts(): IFlight[]{
        return[
            {
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
        ]
    }
}