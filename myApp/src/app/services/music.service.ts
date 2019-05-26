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
        this.musics.push(music);
        return ;
    }

    updateMusic(music: Music) {
        return ;
    }

    getMusic(id: Number): Music {
        let findmusic: Music;
        this.musics.forEach(music => {
            if (music.id === id) {
                findmusic = music;
        }});
        return findmusic;
    }

    loadMusics() {
        this.musics = MUSICS;
        return;
    }
}
