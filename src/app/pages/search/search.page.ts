import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonRow, IonSearchbar } from '@ionic/angular/standalone';
import { IonSearchbarCustomEvent, SearchbarInputEventDetail } from '@ionic/core';
import { Store, select } from '@ngrx/store';
import { ShowItemComponent } from 'src/app/components/show-item/show-item.component';
import { cleanSearchShows, fetchSearchShows } from 'src/app/store/actions/search.actions';
import { getAllSearchShows } from 'src/app/store/selectors/search.selectors';
import { RootState } from 'src/app/store/states/root.state';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonSearchbar,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    ShowItemComponent,
  ],
})
export class SearchPage {
  constructor(private store: Store<RootState>) { }

  searchResult$ = this.store.pipe(select(getAllSearchShows));

  search({ detail: { value } }: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    if (value) {
      this.store.dispatch(fetchSearchShows({ searchTerm: value }));
    } else {
      this.store.dispatch(cleanSearchShows());
    }
  }
}
