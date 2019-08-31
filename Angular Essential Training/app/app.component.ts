import { Component } from "@angular/core";

@Component({
    selector: "mw-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"]
})

export class AppComponent{
    firstMediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science fiction",
        year: 2010,
        watchedOn: "1294166565384",
        isFavorite: false
    }

    onMediaItemDelete(mediaItem){
        console.log("eliminare este mediaItem")
    }
}