import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GenreRowComponent } from './genre-row.component';
import { storeMock } from 'src/app/mocks/store.mock';
import { By } from '@angular/platform-browser';
import { Show } from 'src/app/models/show.model';
import { Component, Input } from '@angular/core';
import { ShowItemComponent } from '../show-item/show-item.component';

@Component({
  selector: 'app-show-item',
  template: '',
  standalone: true,
})
class StubShowItemComponent {
  @Input({ required: true }) show!: Show[];
}

describe('GenreRowComponent', () => {
  let component: GenreRowComponent;
  let fixture: ComponentFixture<GenreRowComponent>;

  beforeEach(() => {
    TestBed.overrideComponent(GenreRowComponent, {
      add: {
        imports: [StubShowItemComponent],
      },
      remove: {
        imports: [ShowItemComponent],
      },
    });
    fixture = TestBed.createComponent(GenreRowComponent);
    component = fixture.componentInstance;
    component.genre = 'Test';
    component.shows = [...storeMock.schedule.values()];
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all scheduled shows', () => {
    expect(fixture.debugElement.queryAll(By.css('app-show-item')).length).toBe(72);
  });
});
