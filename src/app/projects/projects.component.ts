import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if((!this.eRef.nativeElement.contains(event.target) && event.target.tagName!='LI')
          ||event.target.tagName=='APP-PROJECTS') {
      console.log(event.target.tagName);
    this.router.navigateByUrl('/home');  
    } 
  }

  constructor(private eRef: ElementRef, private router: Router) { }

  ngOnInit() {
  }

}
