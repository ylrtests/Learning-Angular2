import { Routes, RouterModule } from "@angular/router"
import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemListComponent } from "./media-item-list.component"

const appRoutes: Routes = [
    {path: "add", component: MediaItemFormComponent},
    //El valor en este segundo path se refiere a un parámetro de la ruta
    {path: ":medium", component: MediaItemListComponent},
    //Por último una ruta default, redirectTo indica la ruta a redirigir. en este caso iria a :medium
    //pathMatch: full indica que tiene que haber un full match en la ruta que estamos dando.
    {path: "", pathMatch: "full" , redirectTo: "all"}
];

export const routing = RouterModule.forRoot(appRoutes)