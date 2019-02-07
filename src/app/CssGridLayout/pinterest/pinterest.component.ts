import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.scss']
})
export class PinterestComponent implements OnInit {

  constructor() { }

  images: any;
  ngOnInit() {
    this.images = [
      {src: '../../../assets/house.jpg'  , level: 'level-3'},
      {src: '../../../assets/landing.jpg', level: 'level-1'},
      {src: '../../../assets/tshirt.jpg' , level: 'level-2'},
      {src: '../../../assets/ngColombia.jpg' , level: 'level-4'},
      {src: '../../../assets/house.jpg'  , level: 'level-3'},
      {src: '../../../assets/landing.jpg', level: 'level-1'},
      {src: '../../../assets/tshirt.jpg' , level: 'level-2'},
      {src: '../../../assets/ngColombia.jpg' , level: 'level-4'},
      {src: '../../../assets/house.jpg'  , level: 'level-3'},
      {src: '../../../assets/landing.jpg', level: 'level-1'},
      {src: '../../../assets/tshirt.jpg' , level: 'level-2'},
      {src: '../../../assets/ngColombia.jpg' , level: 'level-4'},
      {src: '../../../assets/house.jpg'  , level: 'level-3'},
      {src: '../../../assets/landing.jpg', level: 'level-1'},
      {src: '../../../assets/tshirt.jpg' , level: 'level-2'},
      {src: '../../../assets/ngColombia.jpg' , level: 'level-4'},
      {src: '../../../assets/house.jpg'  , level: 'level-3'},
      {src: '../../../assets/landing.jpg', level: 'level-1'},
      {src: '../../../assets/tshirt.jpg' , level: 'level-2'},
      {src: '../../../assets/ngColombia.jpg' , level: 'level-4'},

    ];
  }

}
