import { Component } from '@angular/core';

import { MediaItemService } from "./media-item.service";

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems;

  //Creamos el constructor para que Angular haga la inyección en el constructor.
  constructor(private mediaItemService: MediaItemService){}

  ngOnInit(){
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) { 
    this.mediaItemService.delete(mediaItem)
  }

  
}
