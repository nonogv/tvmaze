import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.model';
import { Search } from '../models/search.model';

@Injectable({ providedIn: 'root' })
export class ShowsService {
  constructor(protected http: HttpClient) { }

  fetchScheduleShows(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>('https://api.tvmaze.com/schedule');
  }

  fetchSearchShows(searchTerm: string): Observable<Search[]> {
    return this.http.get<Search[]>(`https://api.tvmaze.com/search/shows?q=${encodeURI(searchTerm)}`);
  }
}