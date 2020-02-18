import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albums';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.page.html',
  styleUrls: ['./add-album.page.scss'],
})
export class AddAlbumPage implements OnInit {

  private new_album:Album;
  name:string;
  artist:string;
  year:number;
  image:string;
  favorite:boolean = false;

  toast: any


  constructor(private albumService:AlbumService, private router:Router, private toastController:ToastController) { }

  ngOnInit() {
  }

  ionChange(detail: boolean, index: number){
    if(detail == true){
      this.favorite = true;
    }else{
      this.favorite = false
    }
  }

  add_album(){
    if(this.image == 'beatles'){
      this.image= 'beatles.jpg';
    }
    if(this.image == 'christmas'){
      this.image= 'christmas.png';
    }
    if(this.image == 'destrangis'){
      this.image= 'destrangis.jpg';
    }
    if(this.image == 'iglesias'){
      this.image= 'iglesias.jpg';
    }
    if(this.image == 'jackson'){
      this.image= 'jackson.jpeg';
    }
    if(this.image == 'ot'){
      this.image= 'ot.jpg';
    }

    if(this.name != "" && this.artist !="" && this.year !=0){
    this.new_album = {
      id: "",
      name: this.name,
      artist: this.artist,
      year: this.year,
      image: this.image,
      favorite: this.favorite
    }
    console.log(this.new_album); 
    this.albumService.add_Album(this.new_album);
    this.router.navigateByUrl("albums");
  }else{
    this.toast = this.toastController.create({
      message: "Hay datos incorrectos y no se ha podido crear ",
      duration: 3000
    }).then ((toastData)=>{
      console.log(toastData);
      toastData.present();
    })
  }
  }

}
