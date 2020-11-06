import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public user: any;
  public input: string;

  constructor() {
    this.user = {
      name : '',
      lastname : '',
      bio : "",
      genre : ""
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
  }

  triggerAlert(){
    alert("Alerta generada.")
  }

  triggerEvent(){
    console.log("Haz conseguido ejecutar un evento.");
  }

}
