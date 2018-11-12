import { Component } from '@angular/core';
import { fadeAnimation } from './fade.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  ,  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'app';
  backgroundImageBlur:string = "noBlur";

  getDepth(outlet){
    return outlet.activatedRouteData['depth'];
  }

  onActivate(e) {
    if(e.constructor.name == "DashboardComponent"){
      console.log('none');
      this.backgroundImageBlur = "noBlur";
    }else{
      this.backgroundImageBlur = "applyBlur";
    }
  }
}

