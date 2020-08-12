import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnTvService {
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

  getTvOnTheAir(page: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
  }

  getTVAiringToday(page: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}tv/airing_today?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
  }

  getPopularTVShow(page: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
  }

  getTVShow(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getGenres(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`);
  }

  getTVShowByGenre(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`);
  }

}
