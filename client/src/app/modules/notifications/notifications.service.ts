import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private http: HttpClient) {}

  loadAllNotifications(): Observable<any> {
    return this.http
      .get<any>(environment.apiUrl + '/api/notifications')
      .pipe(map(res => res.data));
  }

  createNotification(notification): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/api/notifications',
      notification,
    );
  }

  findNotificationById(id: number) {
    return this.http.get(environment.apiUrl + '/api/notifications/' + id);
  }

  deleteNotificationById(id: number) {
    return this.http.delete(environment.apiUrl + '/api/notifications/' + id);
  }
}
