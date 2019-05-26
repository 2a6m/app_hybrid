import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { MusicService } from '../services/music.service';
import { Artist } from '../artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.page.html',
  styleUrls: ['./add-music.page.scss'],
})
export class AddMusicPage implements OnInit {
    newMusic: Music;
    artists: Artist[];

  constructor(private musicservice: MusicService, private artistservice: ArtistService) {
    this.newMusic = new Music();
  }

  ngOnInit() {
      this.artists = this.artistservice.getArtists();
  }

  onSubmit() {
      console.log(this.newMusic);
      this.musicservice.createMusic(this.newMusic);
  }

}
