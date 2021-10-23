import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute,private _MoviesService: MoviesService) {}
  id: string = '';
  movieDetails:any ={}
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getMovieDetails(this.id).subscribe((response)=>{
      this.movieDetails = response;
    })
  }

}
