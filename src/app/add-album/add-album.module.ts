import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAlbumPageRoutingModule } from './add-album-routing.module';

import { AddAlbumPage } from './add-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAlbumPageRoutingModule
  ],
  declarations: [AddAlbumPage]
})
export class AddAlbumPageModule {}
