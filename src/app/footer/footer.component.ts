import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) { }

  public navigateTo(path: string) {
    this.router.navigate([path]);
  }

  redirectTo(path: string) {
    switch(path){
      case "fb":
      window.open("https://www.facebook.com/agrumix.sicilia");
      break;
      case "ig":
      window.open("https://www.instagram.com/agrumix.sicilia/");
    }
  }
}
