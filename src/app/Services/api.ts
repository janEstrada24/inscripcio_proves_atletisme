import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const apiURL="https://cataas.com/api/";

@Injectable({
    providedIn: 'root'
})

export class Api {
    constructor(private http:HttpClient) {};
}