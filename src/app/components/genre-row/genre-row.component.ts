import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { Schedule } from 'src/app/models/schedule.model';
import { ShowItemComponent } from '../show-item/show-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genre-row',
  templateUrl: './genre-row.component.html',
  styleUrls: ['./genre-row.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ShowItemComponent],
})
export class GenreRowComponent {
  @Input({ required: true }) genre!: string;

  @Input({ required: true }) shows!: Schedule[];
}
