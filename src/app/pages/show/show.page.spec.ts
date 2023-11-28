import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ShowPage } from './show.page';
import { By } from '@angular/platform-browser';
import { storeMock } from 'src/app/mocks/store.mock';

describe('ShowPage', () => {
  let component: ShowPage;
  let fixture: ComponentFixture<ShowPage>;

  beforeEach(() => {
    TestBed.overrideComponent(ShowPage, {
      add: {
        providers: [
          provideMockStore({ initialState: storeMock }),
        ],
      },
    });
    fixture = TestBed.createComponent(ShowPage);
    component = fixture.componentInstance;
    component.showId = '12';
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right image', () => {
    expect(
      fixture.debugElement.query(By.css('img')).nativeElement.src,
    ).toBe('https://static.tvmaze.com/uploads/images/original_untouched/0/137.jpg');
  });
});
