import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../services/artist.service';
import { ARTISTS } from '../mock-artists'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
    artists: Artist[];

    constructor(private artistservice: ArtistService) { }

    ngOnInit() {
        this.artists = this.artistservice.getArtists();
        //this.artists = ARTISTS;
    }
}
