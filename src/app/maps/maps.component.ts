import { Component,OnInit } from '@angular/core';
import {MapsService} from './maps.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
    
})

export class MapsComponent implements OnInit {
    public tableData1: TableData;
    details:String='some data';
    name:String='xyz';

    public investor=[];


    constructor(private _mapsservice: MapsService){

    }
    ngOnInit(){
        this._mapsservice.getMaps()
        .subscribe(data=> this.investor=data);





        // this.tableData1 = {
        //     headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
        //     dataRows: [
        //         ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
        //         ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
        //         ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
        //         ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
        //         ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
        //         ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
        //     ]
        // };

}
}
