import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  constructor(private _MoviesService: MoviesService) {}

  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  PopularPeople: any[] = [];
  pagesNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numberOfPage: number = 0;
  ngOnInit(): void {this.displayPeople(1)}

  displayPeople(pageNumber: number) {
    this._MoviesService.getPopular('person', pageNumber).subscribe((response) => {
        this.PopularPeople = response.results;
      });
    this.numberOfPage = pageNumber;
  }

  displayPrevious() {
    if (this.numberOfPage > 1) {
      this.displayPeople(this.numberOfPage - 1);
    }
  }

  displayNext() {
    if (this.numberOfPage < this.pagesNumber.length) {
      this.displayPeople(this.numberOfPage + 1);
    }
  }

  isActive(number: number) {
    return this.numberOfPage === number;
  }
}
