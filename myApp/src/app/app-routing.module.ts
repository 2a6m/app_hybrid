import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'add-artist', loadChildren: './add-artist/add-artist.module#AddArtistPageModule' },
  { path: 'add-music', loadChildren: './add-music/add-music.module#AddMusicPageModule' },
  { path: 'update-artist', loadChildren: './update-artist/update-artist.module#UpdateArtistPageModule' },
  { path: 'update-music', loadChildren: './update-music/update-music.module#UpdateMusicPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
