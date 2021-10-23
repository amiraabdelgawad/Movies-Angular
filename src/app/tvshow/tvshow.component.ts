import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})
export class TvshowComponent implements OnInit {
  constructor(private _MoviesService: MoviesService) {}

  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  PopularTvshow: any[] = [];
  pagesNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numberOfPage: number = 0;
  ngOnInit(): void {
    this.displayTvshow(1);
  }

  displayTvshow(pageNumber: number) {
    this._MoviesService
      .getPopular('tv', pageNumber)
      .subscribe((response) => {
        this.PopularTvshow = response.results;
      });
    this.numberOfPage = pageNumber;
  }

  displayPrevious() {
    if (this.numberOfPage > 1) {
      this.displayTvshow(this.numberOfPage - 1);
    }
  }

  displayNext() {
    if (this.numberOfPage < this.pagesNumber.length) {
      this.displayTvshow(this.numberOfPage + 1);
    }
  }

  isActive(number: number) {
    return this.numberOfPage === number;
  }
}
