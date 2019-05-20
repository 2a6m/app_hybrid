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

    deleteArtist(id) {
        return ;
    }

    createArtist(artist: Artist) {
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
