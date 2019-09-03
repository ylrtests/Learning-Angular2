import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})

export class MediaItemFormComponent {
  
  formAddMedia;

  ngOnInit(){
    this.formAddMedia = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
  }

  yearValidator(control){
    if(control.value.trim().length === 0){
      return null; //Es válido, si no hay año, no hay problema.
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;

    if( year >= minYear && year <= maxYear){
      return null; //Es válido, está entre los rangos
    }
    else{
      return {"notInRange": {
        min: minYear,
        max: maxYear
      }} //Retorna un objeto cuando no es válido.
    }
  }

  onSubmit(mediaItem){
    console.log(mediaItem)
  }
}
