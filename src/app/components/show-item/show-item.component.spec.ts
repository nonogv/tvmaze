import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowItemComponent } from './show-item.component';
import { showMock } from 'src/app/mocks/show.mock';
import { By } from '@angular/platform-browser';

describe('ShowItemComponent', () => {
  let component: ShowItemComponent;
  let fixture: ComponentFixture<ShowItemComponent>;

  beforeEach(() => {
    TestBed.overrideComponent(ShowItemComponent, {
      add: {
        imports: [RouterTestingModule],
      },
    });
    fixture = TestBed.createComponent(ShowItemComponent);
    component = fixture.componentInstance;
    component.show = showMock;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right image', () => {
    expect(
      fixture.debugElement.query(By.css('img')).nativeElement.src,
    ).toBe('https://static.tvmaze.com/uploads/images/medium_portrait/449/1122639.jpg');
  });
});
