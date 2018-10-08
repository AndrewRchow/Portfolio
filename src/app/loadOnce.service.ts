import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class LoadOnceService {
    loadCount: number = 0;
    atHome: boolean = true;

    isAtHome = new EventEmitter<boolean>();

    constructor (){

    }

    getLoadCount() {
        return this.loadCount;
    }

    incLoadCount() {
        this.loadCount++;
    }


    getHomeStatus() {
        return this.atHome;
    }

    setHomeStatus(bool: boolean) {
        this.atHome=bool;
    }

}