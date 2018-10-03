import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if((!this.eRef.nativeElement.contains(event.target) && event.target.tagName!='LI' && event.target.tagName!='A')
          ||event.target.tagName=='APP-SKILLS') {
      console.log(event.target.tagName);
    this.router.navigateByUrl('/home');  
    } 
  }

  constructor(private eRef: ElementRef, private router: Router) { }

  ngOnInit() {
  }

}
