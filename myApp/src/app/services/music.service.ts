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

    deleteMusic(id) {
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
