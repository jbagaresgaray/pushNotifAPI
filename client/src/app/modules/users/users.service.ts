import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  loadAllUsers(): Observable<any> {
    return this.http
      .get<any>(environment.apiUrl + '/api/users')
      .pipe(map(res => res.data));
  }

  createUser(users: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/users', users);
  }

  findUserById(id: number) {
    return this.http.get(environment.apiUrl + '/api/users/' + id);
  }

  deleteUserById(id: number) {
    return this.http.delete(environment.apiUrl + '/api/users/' + id);
  }

  updateUserById(id: number, users: any) {
    return this.http.put(environment.apiUrl + '/api/users/' + id, users);
  }
}
