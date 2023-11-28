import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SchedulePage } from './schedule.page';
import { Component } from '@angular/core';
import { HighlightsComponent } from 'src/app/components/highlights/highlights.component';
import { GenreListComponent } from 'src/app/components/genre-list/genre-list.component';

@Component({
  selector: 'app-highlights',
  template: '',
  standalone: true,
})
class StubHighlightsComponent { }

@Component({
  selector: 'app-genre-list',
  template: '',
  standalone: true,
})
class StubGenreListComponent { }

describe('SchedulePage', () => {
  let component: SchedulePage;
  let fixture: ComponentFixture<SchedulePage>;

  beforeEach(() => {
    TestBed.overrideComponent(SchedulePage, {
      add: {
        imports: [
          StubHighlightsComponent,
          StubGenreListComponent,
        ],
      },
      remove: {
        imports: [
          HighlightsComponent,
          GenreListComponent,
        ],
      },
    });
    fixture = TestBed.createComponent(SchedulePage);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
