import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ShowsService } from './shows.service';
import { TestBed } from '@angular/core/testing';
import { storeMock } from '../mocks/store.mock';

const scheduleResponseMock = [...storeMock.schedule.values()];
const searchResponseMock = [...storeMock.search.values()];

describe('ShowsService', () => {
  let service: ShowsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ShowsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should fetch the scheduled shows', () => {
    service.fetchScheduleShows().subscribe((response) => {
      expect(response).toEqual(scheduleResponseMock);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: 'https://api.tvmaze.com/schedule',
    });
    req.flush(scheduleResponseMock);
  });

  it('should fetch the search results', () => {
    service.fetchSearchShows('test').subscribe((response) => {
      expect(response).toEqual(searchResponseMock);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: 'https://api.tvmaze.com/search/shows?q=test',
    });
    req.flush(searchResponseMock);
  });
});