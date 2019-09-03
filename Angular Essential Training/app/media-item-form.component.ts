import { Component } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";

import { MediaItemService } from "./media-item.service";

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})

export class MediaItemFormComponent {
  
  formAddMedia;

  constructor(private formBuilder: FormBuilder,
              private mediaItemService: MediaItemService){}

  ngOnInit(){
    this.formAddMedia = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator)
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
    this.mediaItemService.add(mediaItem);
  }
}
