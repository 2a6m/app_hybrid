import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
    musics: Music[];

    constructor(private musicservice: MusicService) { }

    ngOnInit() {
        this.musics = this.musicservice.getMusics();
    }

    delete(music: Music) {
        this.musicservice.deleteMusic(music);
    }
}
