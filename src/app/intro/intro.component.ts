import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  
  // @HostListener('document:click', ['$event'])
  // clickout(event) {
  //   if(!this.eRef.nativeElement.contains(event.target)) {
  //   this.router.navigateByUrl('/home');  
  //   } 
  // }


  constructor(private eRef: ElementRef, private router: Router) { }

  ngOnInit() {
  }

}
