import { Injectable } from '@angular/core';
import { Album } from '../models/albums';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private db:AngularFirestore) { }

  getAlbums(){
    return this.db.collection('albums').snapshotChanges().pipe(map(albums => {
     return albums.map(a => {
       const data = a.payload.doc.data() as Album;
       data.id = a.payload.doc.id;
       return data;
     })
    }))
   }

  add_Album(album:Album){
    console.log(album);
    this.db.collection("albums").add({
      id: "",
      name: album.name,
      artist: album.artist,
      year: album.year,
      image: album.image,
      favorite: album.favorite
    })
  }
}
