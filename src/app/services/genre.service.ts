import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}
  // public
  getAllGenres(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/genres`);
  }

  getGenre(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/genres/${id}`);
  }

  // private only admin/manager
  createGenre(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/genres`, formData, {});
  }

  editGenre(id: string, formData: FormData): Observable<any> {
    return this.http.put(`${environment.apiUrl}/genres/${id}`, formData, {});
  }

  deleteGenre(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/genres/${id}`, {});
  }
}
