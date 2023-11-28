import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HighlightsComponent } from '../../components/highlights/highlights.component';
import { GenreListComponent } from '../../components/genre-list/genre-list.component';

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.page.html',
  styleUrls: ['schedule.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HighlightsComponent,
    GenreListComponent,
  ],
})
export class SchedulePage {}
