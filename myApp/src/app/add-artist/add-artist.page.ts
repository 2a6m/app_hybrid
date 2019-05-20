import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.page.html',
  styleUrls: ['./add-artist.page.scss'],
})
export class AddArtistPage implements OnInit {
    newArtist: Artist;

  constructor(private artistservice: ArtistService) {
      this.newArtist = new Artist();
  }

  ngOnInit() {
  }

  onSubmit() {
      this.artistservice.createArtist(this.newArtist);
  }
}
