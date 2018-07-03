export interface IFlight{

"flightId": string;
"departure": string;
"destination": string;
"date": string;
"fuelCost": number;
"status": string;
"imageUrl":string;
"safetyRating":number;
}

//export class Flight implements IFlight{

  //  constructor(public flightId: string,
    //    public departure: string,
    //    public destination: string,
    //    public date: string,
    //    public fuelCost: number,
    //    public safetyRating: number,
    //    public status: string,
     //   public "imageUrl":string){}


//updateSafetyRating(percent: number): number{
//return this.safetyRating - (this.safetyRating * percent /100); 
//}
//}