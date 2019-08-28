import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './partials/app.html' 
})

export class AppComponent {
  //Estas declaraciones son opcionales y vienen de TypeScript
  name: string; 
  artists: string[];
  students: any;
  
  constructor (){
    this.name = "";
    this.artists = [' Juanes', 'Fonseca', 'Shakira'];
    this.students = [
      {
        name: "Carlos",
        school: "Universidad Central"
      },
      {
        name: "Jimenez",
        school: "Universidad del Norte"
      },
      {
        name: "Juan",
        school: "Universidad del Sur"
      },
      {
        name: "Paula",
        school: "Universidad del Este"
      }
    ]
  }
}