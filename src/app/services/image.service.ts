import { Injectable } from '@angular/core';
import { Image } from '../models/image' ;

@Injectable()
export class ImageService {
images: Image[] = [
 new Image('1', 'First image', 'First image description', 'assets/images/img1.jpg','assets/images/img1-l.jpg'),
 new Image('2', 'Second image', 'Second image description', 'assets/images/img2.jpg', 'assets/images/img2-l.jpg'),
 new Image('3', 'Third image', 'Third image description', 'assets/images/img3.jpg','assets/images/img3-l.jpg'),
 new Image('4', 'Fourth image', 'Fourth image description', 'assets/images/img4.jpg', 'assets/images/img4-l.jpg'),
 new Image('5', 'Fifth image', 'Fifth image description', 'assets/images/img5.jpg','assets/images/img5-l.jpg'),
 new Image('6', 'Sixth image', 'Sixth image description', 'assets/images/img6.jpg','assets/images/img6-l.jpg'),
 new Image('7', 'Seventh image', 'Seventh image description', 'assets/images/img7.jpg', 'assets/images/img7-l.jpg'),
 new Image('8', 'Eighth image', 'Eighth image description', 'assets/images/img8.jpg' , 'assets/images/img8-l.jpg'),
 ];

  constructor() { }
  getImages(){
    return this.images;
  }
}
