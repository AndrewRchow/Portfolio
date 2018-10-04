import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class LoadOnceService {
    loadCount: number = 0;

    constructor (){

    }

    getLoadCount() {
        return this.loadCount;
    }

    incLoadCount() {
        this.loadCount++;
    }

}