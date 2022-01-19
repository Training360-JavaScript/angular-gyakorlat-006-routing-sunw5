import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../model/event';
import { Events } from '../mocks/event.service.mock';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  /*  getAll(): Observable<Event[]> {
    const events = of (Events);
    // console.log(events);
    return events;
  } */

  getAll(): Event[] {
    const eventList = Events;
    return eventList;
  }
}
