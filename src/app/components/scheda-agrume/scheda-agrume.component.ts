import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheda-agrume',
  templateUrl: './scheda-agrume.component.html',
  styleUrls: ['./scheda-agrume.component.css']
})
export class SchedaAgrumeComponent implements OnInit {

  @Input() agrume: string = null!;
  @Input() title: string = null!;
  @Input() desc: string = null!;

  ngOnInit(): void {
    // let agrume:HTMLElement = document.querySelector('#agr-img')!;
    // agrume.style.backgroundImage = `url("/assets/images/${this.agrume}.png")`;
    this.desc = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid,lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
  }

  showDesc() {
    let desc: HTMLElement = document.querySelector(`#${this.agrume}-desc`)!;
    let img: HTMLElement = document.querySelector(`#${this.agrume}-img`)!;
    desc.classList.toggle('expanded');
    img.classList.toggle('agr-bn');
    let descExpanded = document.querySelectorAll(".expanded");
    let images = document.querySelectorAll(".agr-img");
    descExpanded.forEach(e => {
      if (e.classList.contains('expanded') && e.id !== desc.id) {
        e.classList.remove('expanded');
      }
    })
    images.forEach(e => {
      if (!e.classList.contains('agr-bn') && e.id !== img.id) {
        e.classList.add('agr-bn');
      }
    })
  }
}
