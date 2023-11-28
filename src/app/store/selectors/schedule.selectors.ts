import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ScheduleState } from '../states/schedule.state';
import { Schedule } from 'src/app/models/schedule.model';

export const getScheduleState = createFeatureSelector<ScheduleState>('schedule');

export const getAllScheduleShows = createSelector(
  getScheduleState,
  (shows) => [...shows.values()],
);

export const getScheduleHighlights = createSelector(
  getAllScheduleShows,
  (shows) => shows.sort((current, next) => (
    Number(next.show.rating?.average || 0) - Number(current.show.rating?.average || 0)
  )).slice(0, 5),
);

export const getScheduleShowsByGenre = createSelector(
  getAllScheduleShows,
  (shows) => {
    const genres: { [genre: string]: Schedule[] } = {};
    shows.forEach((show) => {
      if (!show.show.genres.length) {
        genres['No genre'] = [...(genres['No genre'] || []), show]
        return;
      }
      show.show.genres.forEach((genre) => {
        genres[genre] = [...(genres[genre] || []), show].sort((current, next) => (
          Number(next.show.rating?.average || 0) - Number(current.show.rating?.average || 0)
        ));
      });
    });
    return Object.keys(genres).sort().reduce(
      (obj: { [genre: string]: Schedule[] }, key: string) => {
        obj[key] = genres[key];
        return obj;
      },
      {}
    );
  },
);
