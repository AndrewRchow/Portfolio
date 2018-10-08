import { Component, OnInit, Renderer2 } from '@angular/core';

import {LoadOnceService} from '../loadOnce.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  firstLoad: boolean = true;

  constructor(private loadOnceService: LoadOnceService, private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.loadOnceService.getLoadCount());
    if(this.loadOnceService.getLoadCount()>0){
      this.firstLoad = false;
    }
    this.loadOnceService.incLoadCount();

    this.loadOnceService.isAtHome.emit(true);

  }

  ngAfterViewInit(){

  }

  
}
