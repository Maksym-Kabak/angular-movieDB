import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '7c5086918c894c47ba4b2c2dd4245a14';
    this.language = 'en-US';
    this.region = 'US';
  }

  getNowPlaying(page: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}`);
  }

  searchMovies(searchStr: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}&language=${this.language}&region=${this.region}`);
  }

  getPopular(page: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getUpComingMovies(page: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getTopRatedMovies(page): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}`);
  }

  getGenres(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
  }

  getMoviesByGenre(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`);
  }

  getGenresMovieList(): Observable<any> {
    return this.httpClient.get(
      `${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  getMoviesForGenre(genreId: number, page: number): Observable<any> {
    return this.httpClient.get(
      `${this.baseUrl}discover/movie?api_key=${this.apiKey}&language=${this.language}&with_genres=${genreId}&page=${page}`
    );
  }

  getMovie(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieReviews(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`);
  }

  getRecomendMovies(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`);
  }

  getPersonDetail(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`);
  }

  getPersonExternalData(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}person/${id}/external_ids?api_key=${this.apiKey}`);
  }

  getPersonCast(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}person/${id}/movie_credits?api_key=${this.apiKey}`);
  }

}
