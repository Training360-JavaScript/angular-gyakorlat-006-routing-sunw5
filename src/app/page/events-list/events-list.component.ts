import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  eventList: Event[] = [];

  constructor(private eventService: EventService) {
    // this.eventService.getAll().subscribe(data => this.eventList = data);
    this.eventList = this.eventService.getAll();
  }

  ngOnInit(): void {}
}
