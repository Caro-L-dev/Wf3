import {Vehicle} from "./vehicle";

export interface VehicleDetails {
    count: number,
    next: null | string,
    previous: null | string,
    results: Vehicle[]
}