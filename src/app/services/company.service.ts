import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getAllCompanies(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/company`);
  }

  getCompany(id: String): Observable<any> {
    return this.http.get(`${environment.apiUrl}/company/${id}`);
  }

  // private only admin/manager
  createCompany(formData: FormData) {
    return this.http.post(`${environment.apiUrl}/company`, formData);
  }

  editCompany(id: string, formData: FormData): Observable<any> {
    return this.http.put(`${environment.apiUrl}/company/${id}`, formData);
  }

  deleteCompany(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/company/${id}`);
  }
}
