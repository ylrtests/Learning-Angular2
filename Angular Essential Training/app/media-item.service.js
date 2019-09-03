System.register(["@angular/common/http", "@angular/core", "rxjs/operators"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var http_1, core_1, operators_1, MediaItemService;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (operators_1_1) {
                operators_1 = operators_1_1;
            }
        ],
        execute: function () {
            MediaItemService = class MediaItemService {
                constructor(http) {
                    this.http = http;
                }
                get(medium) {
                    let getOptions = {
                        params: {
                            medium
                        }
                    };
                    //"this.http.get('aquí va una url, mediaitems lo soporta el mock backend')
                    // this.http.get retorna un observable de http responses
                    return this.http.get("mediaitems", getOptions).pipe(operators_1.map((response) => {
                        return response.mediaItems;
                    }));
                }
                add(mediaItem) {
                    return this.http.post('mediaitems', mediaItem);
                }
                delete(mediaItem) {
                    return this.http.delete(`mediaitems/${mediaItem.id}`);
                }
            };
            MediaItemService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.HttpClient])
            ], MediaItemService);
            exports_1("MediaItemService", MediaItemService);
        }
    };
});
//# sourceMappingURL=media-item.service.js.map