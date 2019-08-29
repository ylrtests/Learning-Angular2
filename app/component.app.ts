import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './partials/app.html' 
})

export class AppComponent {
  name: string;
  artists: any;

  onClick(artistContainer, currentArtist) {
    console.log(currentArtist)
    this.name = currentArtist.name;
    artistContainer.style.backgroundColor = "red"
  }

  addArtist(value) {
    if (value!=='') {
      this.artists.push({
        name: value,
        school: 'Hard Knocks'
      });
    }
  }

  constructor() {
    this.name = 'Xhou Ta';
    this.artists = [
      {
        name: 'Barot Bellingham',
        school: 'Penn State'
      }, {
        name: 'Jonathan Ferrar',
        school: 'University of Illinois'
      }, {
        name: 'Hillary Post',
        school: 'University of Florida'
      } 
    ]
  }
}