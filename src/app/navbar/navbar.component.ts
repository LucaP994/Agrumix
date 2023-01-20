import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // this.items = [{
    //   items: [{
    //     label: 'HOME',
    //     command: () => {
    //       this.router.navigate(['home']);
    //     }
    //   },
    //   {
    //     label: 'CHI SIAMO',
    //     command: () => {
    //       this.router.navigate(['chi-siamo']);
    //     }
    //   },
    //   {
    //     label: 'CONTATTI',
    //     command: () => {
    //       this.router.navigate(['contatti']);
    //     }
    //   }
    //   ]
    // }
    // ];
  }
  navigateTo(nav: string) {
    this.router.navigate([nav]);
  }
  showMenu(){
    let navBar:HTMLElement = document.querySelector('#agr-navbar-menu')!;
    navBar.classList.toggle('expanded');
  }
}
