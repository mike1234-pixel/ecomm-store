import { Component } from '@angular/core';
import { select } from "ng2-redux";


@Component({
  selector: 'painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss']
})
export class PaintingComponent {

  @select() paintingProducts: any
//   paintingProducts = [
//     {id: 1, name:'Superman'},
//     {id: 2, name:'Batman'},
//     {id: 5, name:'BatGirl'},
//     {id: 3, name:'Robin'},
//     {id: 4, name:'Flash'}
// ];


  constructor() { 
   
  }


}
