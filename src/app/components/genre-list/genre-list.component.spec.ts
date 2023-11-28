import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GenreListComponent } from './genre-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { storeMock } from 'src/app/mocks/store.mock';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { GenreRowComponent } from '../genre-row/genre-row.component';
import { Schedule } from 'src/app/models/schedule.model';

@Component({
  selector: 'app-genre-row',
  template: '',
  standalone: true,
})
class StubGenreRowComponent {
  @Input({ required: true }) genre!: string;
  @Input({ required: true }) shows!: Schedule[];
}

describe('GenreListComponent', () => {
  let component: GenreListComponent;
  let fixture: ComponentFixture<GenreListComponent>;

  beforeEach(() => {
    TestBed.overrideComponent(GenreListComponent, {
      add: {
        providers: [
          provideMockStore({ initialState: storeMock }),
        ],
        imports: [StubGenreRowComponent],
      },
      remove: {
        imports: [GenreRowComponent],
      },
    });
    fixture = TestBed.createComponent(GenreListComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all genres in rows', () => {
    expect(fixture.debugElement.queryAll(By.css('app-genre-row')).length).toBe(15);
  });
});
