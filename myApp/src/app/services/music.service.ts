import { Injectable } from '@angular/core';
import { Music } from '../music';
import { MUSICS } from '../mock-musics';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
    private musics: Music[]

    constructor() { }

    getMusics() {
        // if this.musics is empty -> load musics this.musics.length
        this.loadMusics();
        return this.musics;
    }

    deleteMusic(music: Music) {
        var idx = this.musics.indexOf(music);
        this.musics.splice(idx, 1);
        return ;
    }

    createMusic(music: Music) {
        return ;
    }

    updateMusic(music: Music) {
        return ;
    }

    loadMusics() {
        this.musics = MUSICS;
        return;
    }
}
