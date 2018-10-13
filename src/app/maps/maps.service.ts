import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { InvestorTableInfo } from 'app/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapsService{

    private url:string = "";    //URL in here
    constructor(private http: HttpClient){ 

    }

    getMaps(): Observable<InvestorTableInfo[]>{
        
        return this.http.get<InvestorTableInfo[]>(this.url);   
    }

}