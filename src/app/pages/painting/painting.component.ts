import { Component } from '@angular/core';
import { select } from "ng2-redux";


@Component({
  selector: 'painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss']
})
export class PaintingComponent {

  @select() paintingProducts: any

  constructor() { 
   
  }


}
