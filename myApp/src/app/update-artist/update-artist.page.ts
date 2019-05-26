import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.page.html',
  styleUrls: ['./update-artist.page.scss'],
})
export class UpdateArtistPage implements OnInit {
    artistId: number;
    artist: Artist;

  constructor(private route: ActivatedRoute,
                private artistservice: ArtistService,
                private router: Router) { }

  ngOnInit() {
      this.artistId = Number(this.route.snapshot.paramMap.get('id'));
      this.artist = this.artistservice.getArtist(this.artistId);
      console.log(this.artist);
  }

}
