import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) {}

  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=260e2dafbfd7bf87ccb64e60aebcdbc5`
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this._HttpClient.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=260e2dafbfd7bf87ccb64e60aebcdbc5&language=en-US`
    );
  }

  getPopular(mediaType: string, pageNumber:number): Observable<any> {
    return this._HttpClient.get(
      ` https://api.themoviedb.org/3/${mediaType}/popular?api_key=260e2dafbfd7bf87ccb64e60aebcdbc5&language=en-US&page=${pageNumber}`
    );
  }
}
