import { Injectable } from '@angular/core';
import { Artist } from '../artist';
import { ARTISTS } from '../mock-artists';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
    private artists: Artist[]

    constructor() { }

    getArtists() {
        // if this.artists is empty -> load artists this.artists.length
        this.loadArtists();
        return this.artists;
    }

    deleteArtist(artist: Artist) {
        var idx = this.artists.indexOf(artist);
        this.artists.splice(idx, 1);
        return ;
    }

    createArtist(artist: Artist) {
        this.artists.push(artist);
        return ;
    }

    updateArtist(artist: Artist) {
        return ;
    }

    loadArtists() {
        this.artists = ARTISTS;
        return;
    }
}
