import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SearchPage } from './search.page';
import { getAllSearchShows } from 'src/app/store/selectors/search.selectors';
import { storeMock } from 'src/app/mocks/store.mock';
import { Component, Input } from '@angular/core';
import { Show } from 'src/app/models/show.model';
import { ShowItemComponent } from 'src/app/components/show-item/show-item.component';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-show-item',
  template: '',
  standalone: true,
})
class StubShowItemComponent {
  @Input({ required: true }) show!: Show[];
}

describe('SearchPage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;

  beforeEach(() => {
    TestBed.overrideComponent(SearchPage, {
      add: {
        imports: [StubShowItemComponent],
        providers: [
          provideMockStore({
            selectors: [
              {
                selector: getAllSearchShows,
                value: [...storeMock.search.values()],
              },
            ],
          }),
        ],
      },
      remove: {
        imports: [ShowItemComponent],
      },
    });
    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all search results', () => {
    expect(fixture.debugElement.queryAll(
      By.css('app-show-item'),
    ).length).toBe(storeMock.search.size);
  });
});
