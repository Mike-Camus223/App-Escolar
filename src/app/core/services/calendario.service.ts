import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { CalendarEvent } from '../models/event.interface';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private apiUrl = `${environment.apiUrl}/eventos`;

  private storageKey = 'calendarEvents';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders() {
    const token = this.authService.getToken(); 
    return new HttpHeaders({      
    });
  }

  getEvents(): Observable<CalendarEvent[]> {
    const events = localStorage.getItem(this.storageKey);
    return of(events ? JSON.parse(events) : []);
  }

  createEvent(event: CalendarEvent): Observable<CalendarEvent> {
    return this.http.post<CalendarEvent>(this.apiUrl, event, { headers: this.getHeaders() })
      .pipe(
        tap(createdEvent => {
          const events = this.loadEventsFromLocal();
          events.push(createdEvent);
          this.saveEventsToLocal(events);
        })
      );
  }

  updateEvent(event: CalendarEvent): Observable<CalendarEvent> {
    return this.http.put<CalendarEvent>(`${this.apiUrl}/${event.id}`, event, { headers: this.getHeaders() })
      .pipe(
        tap(updatedEvent => {
          const events = this.loadEventsFromLocal();
          const index = events.findIndex(e => e.id === updatedEvent.id);
          if (index > -1) {
            events[index] = updatedEvent;
            this.saveEventsToLocal(events);
          }
        })
      );
  }

  deleteEvent(eventId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${eventId}`, { headers: this.getHeaders() })
      .pipe(
        tap(() => {
          const events = this.loadEventsFromLocal();
          const updatedEvents = events.filter(event => event.id !== eventId);
          this.saveEventsToLocal(updatedEvents);
        })
      );
  }

  saveEvents(events: CalendarEvent[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(events));
  }

  private saveEventsToLocal(events: CalendarEvent[]): void {
    localStorage.setItem('events', JSON.stringify(events));
  }

  private loadEventsFromLocal(): CalendarEvent[] {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  }
}
