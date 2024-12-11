import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  // public
  getAllCollections(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/collections`);
  }

  getCollection(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/collections/${id}`);
  }

  // private only admin/manager
  createCollection(formData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/collections`, formData, {});
  }

  editCollection(id: string, formData: FormData): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}/collections/${id}`,
      formData,
      {}
    );
  }

  deleteCollection(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/collections/${id}`, {});
  }
}
