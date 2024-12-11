import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/user`);
  }

  makeManager(id: string): Observable<any> {
    return this.http.put(`${environment.apiUrl}/user/${id}/role`, {});
  }

  getDashboardData(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/dashboard`);
  }
}
