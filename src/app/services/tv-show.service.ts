import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class TvShowService {
  constructor(private http: HttpClient) {}

  getAllTvShows(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/tvshows`);
  }

  getTvShows(id: String): Observable<any> {
    return this.http.get(`${environment.apiUrl}/tvshows/${id}`);
  }

  // private only admin/manager
  createTvShows(formData: FormData) {
    return this.http.post(`${environment.apiUrl}/tvshows`, formData);
  }

  editTvShows(id: string, formData: FormData): Observable<any> {
    return this.http.put(`${environment.apiUrl}/tvshows/${id}`, formData);
  }

  deleteTvShows(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/tvshows/${id}`);
  }
}
