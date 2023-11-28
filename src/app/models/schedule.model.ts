import { Show } from './show.model';

export type Schedule = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number | null;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number | null;
  rating: {
    average: string | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  show: Show;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
    };
  };
};
