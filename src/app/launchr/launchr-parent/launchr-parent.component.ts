import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-launchr-parent',
  templateUrl: './launchr-parent.component.html',
  styleUrls: ['./launchr-parent.component.css']
})
export class LaunchrParentComponent implements OnInit, AfterViewInit {
  // @ViewChild('myDiv') myDiv: ElementRef;
  showMenu = false;
  constructor() {
     
   }

  ngOnInit(): void {
    
    
    
  }
  ngAfterViewInit(){
  //   var nav = document.getElementById('site-menu');
  //   var header = document.getElementById('top');
    
  //   window.addEventListener('scroll', function() {
  //     if (window.scrollY >=400) { // adjust this value based on site structure and header image height
  //       nav.classList.add('nav-sticky');
  //       header.classList.add('pt-scroll');
  //     } else {
  //       nav.classList.remove('nav-sticky');
  //       header.classList.remove('pt-scroll');
  //     }
  //   });
  }
     navToggle() {
            // var btn = document.getElementById('menuBtn');
            // var nav = document.getElementById('menu');
    
            // btn.classList.toggle('open');
            // nav.classList.toggle('flex');
            // nav.classList.toggle('hidden');

            
            // toggleNavbar(){
              this.showMenu = !this.showMenu;
            // }
        }
  // }
  
}
