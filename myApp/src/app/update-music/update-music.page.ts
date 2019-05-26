import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Music } from '../music';
import { MusicService } from '../services/music.service';
import { Artist } from '../artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-update-music',
  templateUrl: './update-music.page.html',
  styleUrls: ['./update-music.page.scss'],
})
export class UpdateMusicPage implements OnInit {
    musicId: number;
    music: Music;
    artists: Artist[];

  constructor(private route: ActivatedRoute,
                private musicservice: MusicService,
                private artistservice: ArtistService,
                private router: Router) { }

  ngOnInit() {
      this.artists = this.artistservice.getArtists();
      this.musicId = Number(this.route.snapshot.paramMap.get('id'));
      this.music = this.musicservice.getMusic(this.musicId);
      console.log(this.music);
  }

}
