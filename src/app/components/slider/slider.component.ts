import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  // Recoger la propiedad Input en la etiqueta app-slider en app.component.html
  @Input() name: string;
  @Input() size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
