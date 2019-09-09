System.register(["@angular/router", "./media-item-form.component", "./media-item-list.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, media_item_form_component_1, media_item_list_component_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (media_item_form_component_1_1) {
                media_item_form_component_1 = media_item_form_component_1_1;
            },
            function (media_item_list_component_1_1) {
                media_item_list_component_1 = media_item_list_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: "add", component: media_item_form_component_1.MediaItemFormComponent },
                //El valor en este segundo path se refiere a un parámetro de la ruta
                { path: ":medium", component: media_item_list_component_1.MediaItemListComponent },
                //Por último una ruta default, redirectTo indica la ruta a redirigir. en este caso iria a :medium
                //pathMatch: full indica que tiene que haber un full match en la ruta que estamos dando.
                { path: "", pathMatch: "full", redirectTo: "all" }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map