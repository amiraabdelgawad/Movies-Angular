import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private _MoviesService: MoviesService) {}
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  PopularMovies: any[] = [];
  pagesNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numberOfPage: number = 0;

  ngOnInit(): void {
    this.displayMovies(1);
  }

  displayMovies(pageNumber: number) {
    this._MoviesService
      .getPopular('movie', pageNumber)
      .subscribe((response) => {
        this.PopularMovies = response.results;
      });
        this.numberOfPage = pageNumber;
  }

  displayPrevious() {
    if (this.numberOfPage > 1) {
      this.displayMovies(this.numberOfPage - 1);
    }
  }

  displayNext() {
    if (this.numberOfPage < this.pagesNumber.length) {
      this.displayMovies(this.numberOfPage + 1);
    }
  }

  isActive(number: number) {
    return this.numberOfPage === number;
  }
}
