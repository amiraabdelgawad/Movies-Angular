import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions, OwlRouterLinkDirective } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';

  @Input() headerTrendingMovies: any[] = [];
  customOptions: OwlOptions = {
    margin:5,
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 5,
      },
      400: {
        items: 6,
      },
      740: {
        items: 7,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };
  constructor() {}
  ngOnInit(): void {}
}
