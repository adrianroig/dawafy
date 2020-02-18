import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  albums:any = [];
  segment:string = "all";

  constructor(private router:Router, private albumService:AlbumService) { }

  ngOnInit() {
    if(this.segment == "all"){
      this.albumService.getAlbums().subscribe(albums =>{
        this.albums = [];
          for(let i = 0; i<albums.length; i++){
            this.albums.push(albums[i]);
          }
      })
    }

     if(this.segment == "favorites"){
      this.albumService.getAlbums().subscribe(albums =>{
        this.albums = [];
          for(let i = 0; i<albums.length; i++){
            if (albums[i].favorite == true){
            this.albums.push(albums[i]);
            }
          }
      })
    } 
}

  segmentChanged(ev: any) {
    console.log(ev);
    this.segment = ev;
  }

  add(){
    this.router.navigateByUrl('/add-album');
  }

}
