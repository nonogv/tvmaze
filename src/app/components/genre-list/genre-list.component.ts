import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getScheduleShowsByGenre } from 'src/app/store/selectors/schedule.selectors';
import { GenreRowComponent } from '../genre-row/genre-row.component';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    GenreRowComponent,
  ],
})
export class GenreListComponent {
  constructor(private store: Store) { }

  showsByGenre$ = this.store.pipe(select(getScheduleShowsByGenre));
}
