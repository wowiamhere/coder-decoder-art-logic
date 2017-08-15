import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'encoder-decoder-menu',
  templateUrl: '../templates/menu.component.html',
  styleUrls: [ '../styles/app.component.css' ]
})

export class MenuComponent{

	constructor( private router: Router ){ }

  encoder: string = "Encoder"
  decoder: string = "Decoder"

  set_function(to_do: string): void {
    this.router.navigate( [ to_do ] );
  }

}
