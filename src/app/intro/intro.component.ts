import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if((!this.eRef.nativeElement.contains(event.target) && event.target.tagName!='LI' && event.target.tagName!='A')
          ||event.target.tagName=='APP-INTRO') {
      console.log(event.target.tagName);
    this.router.navigateByUrl('/home');  
    } 
  }


  constructor(private eRef: ElementRef, private router: Router) { }

  ngOnInit() {
  }

}
