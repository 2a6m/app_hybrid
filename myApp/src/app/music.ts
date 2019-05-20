import { Artist } from './artist';

export class Music {
  public id: number;
  public title: string;
  public duration: string;
  public genre: string;
  public artist: Artist;
  public date: string;

  constructor (id: number, title: string, duration: string, genre: string, artist: Artist, date: string) {
      this.id = id;
      this.title = title;
      this.duration = duration;
      this.genre = genre;
      this.artist = artist;
      this.date = date;
  }
}
