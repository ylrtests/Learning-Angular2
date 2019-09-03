System.register(['@angular/core', "@angular/forms"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1;
    var MediaItemFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            MediaItemFormComponent = class MediaItemFormComponent {
                ngOnInit() {
                    this.formAddMedia = new forms_1.FormGroup({
                        medium: new forms_1.FormControl('Movies'),
                        name: new forms_1.FormControl('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        category: new forms_1.FormControl(''),
                        year: new forms_1.FormControl('', this.yearValidator)
                    });
                }
                yearValidator(control) {
                    if (control.value.trim().length === 0) {
                        return null; //Es válido, si no hay año, no hay problema.
                    }
                    let year = parseInt(control.value);
                    let minYear = 1900;
                    let maxYear = 2100;
                    if (year >= minYear && year <= maxYear) {
                        return null; //Es válido, está entre los rangos
                    }
                    else {
                        return { "notInRange": {
                                min: minYear,
                                max: maxYear
                            } }; //Retorna un objeto cuando no es válido.
                    }
                }
                onSubmit(mediaItem) {
                    console.log(mediaItem);
                }
            };
            MediaItemFormComponent = __decorate([
                core_1.Component({
                    selector: 'mw-media-item-form',
                    templateUrl: 'app/media-item-form.component.html',
                    styleUrls: ['app/media-item-form.component.css']
                }), 
                __metadata('design:paramtypes', [])
            ], MediaItemFormComponent);
            exports_1("MediaItemFormComponent", MediaItemFormComponent);
        }
    }
});
//# sourceMappingURL=media-item-form.component.js.map