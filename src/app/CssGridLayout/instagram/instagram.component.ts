import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  constructor() { }

  images: any;
  ngOnInit() {
    this.images = [
      {src: '../../../assets/compu.jpg'},
      {src: '../../../assets/compu2.jpg'},
      {src: '../../../assets/compu3.jpg'},
      {src: '../../../assets/compu.jpg'},
      {src: '../../../assets/compu2.jpg'},
      {src: '../../../assets/compu3.jpg'},
      {src: '../../../assets/compu.jpg'},
      {src: '../../../assets/compu2.jpg'},
      {src: '../../../assets/compu3.jpg'},
      {src: '../../../assets/compu.jpg'},
      {src: '../../../assets/compu2.jpg'},
      {src: '../../../assets/compu3.jpg'},
      {src: '../../../assets/compu.jpg'},
      {src: '../../../assets/compu2.jpg'},
      {src: '../../../assets/compu3.jpg'},
    ];
  }

}
