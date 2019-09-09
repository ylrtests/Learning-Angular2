System.register(["@angular/common/http", "rxjs/Observable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, Observable_1, MockXHRBackend;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            MockXHRBackend = class MockXHRBackend {
                constructor() {
                    this._mediaItems = [
                        {
                            id: 1,
                            name: "Firebug",
                            medium: "Series",
                            category: "Science Fiction",
                            year: 2010,
                            watchedOn: 1294166565384,
                            isFavorite: false
                        },
                        {
                            id: 2,
                            name: "The Small Tall",
                            medium: "Movies",
                            category: "Comedy",
                            year: 2015,
                            watchedOn: null,
                            isFavorite: true
                        }, {
                            id: 3,
                            name: "The Redemption",
                            medium: "Movies",
                            category: "Action",
                            year: 2016,
                            watchedOn: null,
                            isFavorite: false
                        }, {
                            id: 4,
                            name: "Hoopers",
                            medium: "Series",
                            category: "Drama",
                            year: null,
                            watchedOn: null,
                            isFavorite: true
                        }, {
                            id: 5,
                            name: "Happy Joe: Cheery Road",
                            medium: "Movies",
                            category: "Action",
                            year: 2015,
                            watchedOn: 1457166565384,
                            isFavorite: false
                        }
                    ];
                }
                handle(request) {
                    return new Observable_1.Observable((responseObserver) => {
                        let responseOptions;
                        switch (request.method) {
                            case 'GET':
                                if (request.urlWithParams.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
                                    let medium;
                                    if (request.urlWithParams.indexOf('?') >= 0) {
                                        medium = request.urlWithParams.split('=')[1];
                                        if (medium === 'undefined')
                                            medium = '';
                                    }
                                    let mediaItems;
                                    if (medium) {
                                        mediaItems = this._mediaItems.filter(mediaItem => mediaItem.medium.toLowerCase() === medium);
                                    }
                                    else {
                                        mediaItems = this._mediaItems;
                                    }
                                    responseOptions = {
                                        body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
                                        status: 200
                                    };
                                }
                                else {
                                    let mediaItems;
                                    let id = parseInt(request.url.split('/')[1]);
                                    mediaItems = this._mediaItems.filter(mediaItem => mediaItem.id === id);
                                    responseOptions = {
                                        body: JSON.parse(JSON.stringify(mediaItems[0])),
                                        status: 200
                                    };
                                }
                                break;
                            case 'POST':
                                let mediaItem = request.body;
                                mediaItem.id = this._getNewId();
                                this._mediaItems.push(mediaItem);
                                responseOptions = { status: 201 };
                                break;
                            case 'DELETE':
                                let id = parseInt(request.url.split('/')[1]);
                                this._deleteMediaItem(id);
                                responseOptions = { status: 200 };
                        }
                        const responseObject = new http_1.HttpResponse(responseOptions);
                        responseObserver.next(responseObject);
                        responseObserver.complete();
                        return () => {
                        };
                    });
                }
                _deleteMediaItem(id) {
                    const mediaItem = this._mediaItems.find(mediaItem => mediaItem.id === id);
                    const index = this._mediaItems.indexOf(mediaItem);
                    if (index >= 0) {
                        this._mediaItems.splice(index, 1);
                    }
                }
                _getNewId() {
                    if (this._mediaItems.length > 0) {
                        return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.id)) + 1;
                    }
                    else {
                        return 1;
                    }
                }
            };
            exports_1("MockXHRBackend", MockXHRBackend);
        }
    };
});
//# sourceMappingURL=mock-xhr-backend.js.map