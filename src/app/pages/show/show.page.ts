import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonBadge, IonButton, IonContent } from '@ionic/angular/standalone';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Show } from 'src/app/models/show.model';
import { getShowById } from 'src/app/store/selectors/root.selectors';
import { RootState } from 'src/app/store/states/root.state';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    IonBadge,
  ],
})
export class ShowPage implements OnInit {
  @Input() showId?: string;

  show$?: Observable<Show | undefined>;

  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {
    if (this.showId) {
      this.show$ = this.store.pipe(
        select(getShowById(parseInt(this.showId))),
      );
    }
  }
}
