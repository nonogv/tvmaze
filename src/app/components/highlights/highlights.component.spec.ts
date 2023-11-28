import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightsComponent } from './highlights.component';
import { provideMockStore } from '@ngrx/store/testing';
import { storeMock } from 'src/app/mocks/store.mock';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('HighlightsComponent', () => {
  let component: HighlightsComponent;
  let fixture: ComponentFixture<HighlightsComponent>;

  beforeEach(() => {
    TestBed.overrideComponent(HighlightsComponent, {
      add: {
        imports: [
          RouterTestingModule,
        ],
        providers: [
          provideMockStore({ initialState: storeMock }),
        ],
      },
    });
    fixture = TestBed.createComponent(HighlightsComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the 5 most rated shows', () => {
    expect(fixture.debugElement.queryAll(By.css('swiper-slide')).length).toBe(5);
  });

  it('should display the right show first', () => {
    expect(
      fixture.debugElement.queryAll(By.css('h3'))[0].nativeElement.textContent,
    ).toBe(' Champions Wildcard Tournament Clubs Finals Game 1, Show # 8916. - Jeopardy! ');
  });
});
