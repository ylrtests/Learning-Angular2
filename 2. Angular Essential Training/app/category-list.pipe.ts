import { Pipe, PipeTransform  } from "@angular/core";

@Pipe({
    name: "categoryList",
})

export class CategoryListPipe implements PipeTransform {
    transform(mediaItems){
        var categories = [];
        mediaItems.forEach( mediaItem => {
            // Si el valor es -1, significa que no se encontro la categoria dentro del array
            // por eso la añade.
            if(categories.indexOf(mediaItem.category) <= -1){
                categories.push(mediaItem.category);
            }
        });

        return categories.join(', ');
    }
}