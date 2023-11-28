import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonBadge } from '@ionic/angular/standalone';
import { Store, select } from '@ngrx/store';
import { getScheduleHighlights } from 'src/app/store/selectors/schedule.selectors';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterLink,
    IonBadge,
  ],
  providers: [{
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true, 
      disableImageLazyLoadWarning: true,
    },
  }],
})
export class HighlightsComponent {
  constructor(private store: Store) {}

  highlights$ = this.store.pipe(select(getScheduleHighlights));
}
