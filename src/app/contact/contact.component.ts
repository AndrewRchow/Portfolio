import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if((!this.eRef.nativeElement.contains(event.target) && event.target.tagName!='LI')
          ||event.target.tagName=='APP-CONTACT') {
      console.log(event.target.tagName);
    this.router.navigateByUrl('/home');  
    } 
  }

  constructor(private eRef: ElementRef, private router: Router) { }

  ngOnInit() {
  }

}
