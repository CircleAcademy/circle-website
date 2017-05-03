webpackJsonp([1,4],{

/***/ 329:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 329;


/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(453);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(511),
            styles: [__webpack_require__(508)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quote_quote_component__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_7__quote_quote_component__["a" /* QuoteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        component: __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */],
                        path: ''
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__(512),
            styles: [__webpack_require__(507)]
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteComponent = (function () {
    function QuoteComponent() {
    }
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-quote',
            template: __webpack_require__(513),
            styles: [__webpack_require__(509)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteComponent);
    return QuoteComponent;
}());
//# sourceMappingURL=quote.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)();
// imports


// module
exports.push([module.i, "body {\n  max-width: 100%;\n  font-family: 'Source Sans Pro', sans-serif;\n  margin: 0px;\n  background-color: #F9F9F9;\n  color: #545454; }\n\nh1, h2, h3 {\n  font-weight: 400; }\n\ndiv.container {\n  width: 100%;\n  max-width: 768px;\n  margin: auto;\n  padding: 15px; }\n\na {\n  color: #327CCB;\n  text-decoration: none; }\n\na.button {\n  margin: 10px 0;\n  color: white;\n  background: #327CCB;\n  text-decoration: none;\n  width: 100px;\n  height: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n  font-weight: 700; }\n\nimg {\n  width: 200px;\n  display: block;\n  margin: auto; }\n\nh2 {\n  margin: 0 0 15px 0; }\n\ndiv.container.centered h1, div.container.centered h2 {\n  text-align: center; }\n\n.margin-top {\n  margin: 15px 0 0 0; }\n\n.margin {\n  margin: 0 0 15px 0; }\n\ndiv.skills {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\ndiv.social {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 0 15px 0; }\n  div.social a {\n    margin: 0 15px 0 0; }\n\ndiv.choices {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 15px 0; }\n  div.choices a {\n    margin: 0 15px 0 0;\n    width: 200px; }\n\ndiv.container-wrap {\n  background: #F4F4F4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)();
// imports


// module
exports.push([module.i, "body {\n  max-width: 100%;\n  font-family: 'Source Sans Pro', sans-serif;\n  margin: 0px;\n  background-color: #F9F9F9;\n  color: #545454; }\n\nh1, h2, h3 {\n  font-weight: 400; }\n\ndiv.container {\n  width: 100%;\n  max-width: 768px;\n  margin: auto;\n  padding: 15px; }\n\na {\n  color: #327CCB;\n  text-decoration: none; }\n\na.button {\n  margin: 10px 0;\n  color: white;\n  background: #327CCB;\n  text-decoration: none;\n  width: 100px;\n  height: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n  font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

module.exports = "<div class=\"container centered\">\n  <img src=\"/assets/circle.png\"/>\n  <h1>Circle Academy</h1>\n  <h2>Level up your coding game.</h2>\n  <div class=\"social\">\n    <a href=\"https://github.com/CircleAcademy\" href=\"_blank\">\n      <i class=\"fa fa-github\"></i> @CircleAcademy\n    </a>\n    <a href=\"mailto:hello@chriscates.ca\" href=\"_blank\">\n      <i class=\"fa fa-envelope-o\"></i> hello@chriscates.ca\n    </a>\n  </div>\n</div>\n<div class=\"container-wrap\">\n  <div class=\"container\">\n\n  </div>\n</div>\n<div class=\"container\">\n  <h1>Want to write high performance code?</h1>\n  <h2 class=\"margin\">Circle Academy helps you write better code. Faster. Leaner. And Elegantly.</h2>\n  <h2>Learn any of these following languages:</h2>\n\n  <h3><a class=\"button\">C/++</a></h3>\n  <p>The gold standard for systems level programming. Pretty much\n    everything is built on ANSI C or C++ these days. Learn\n  how to manage memory. Data structures and write high performance code.</p>\n\n  <h3><a class=\"button\">Java/Scala</a></h3>\n  <p>\n    The JVM ecosystem is robust and powerful. Learn how to use the\n    most powerful tools in Java. Learn data structures and how to\n    write performant code.\n  </p>\n\n  <h3><a class=\"button\">Golang</a></h3>\n  <p>\n    A staple language for writing high performance multi threaded\n    programs. Golang is an excellent general purpose language.\n  </p>\n\n  <h3><a class=\"button\">Elixir</a></h3>\n  <p>\n    Erlang/Elixir is the ultimate networking language.\n    Write high performance network based application in Elixir.\n    Designed specifically for web.\n  </p>\n\n  <h3><a class=\"button\">SQL</a></h3>\n  <p>\n    MySQL, Postgres and SQLite are the gold standard for\n    data storage and high throughput concurrent read/writes.\n    Learn how to traverse complex queries and other things.\n  </p>\n\n  <h3><a class=\"button\">Node.js</a></h3>\n  <p>\n    Javascript and Node.js are the defacto standard for front end\n    based applications. Learn to write React/Redux and Angular 4\n    web apps.\n  </p>\n\n  <h3><a class=\"button\">Swift</a></h3>\n  <p>\n    Swift 3 is the gold standard for iOS applications.\n    Build clean scalable iOS apps.\n  </p>\n\n  <h3><a class=\"button\">Python</a></h3>\n  <p>\n    The Python and PyPi toolkit are unbeatable. Learn how to write\n    Python and utilize the Python ecosystem.\n  </p>\n\n  <h1 class=\"margin-top\">Want to get started?</h1>\n  <h3>\n    Email:\n    <a href=\"mailto:hello@chriscates.ca\" href=\"_blank\">\n      <i class=\"fa fa-envelope-o\"></i> hello@chriscates.ca\n    </a>\n  </h3>\n</div>\n\n<div class=\"container-wrap\">\n  <div class=\"container\">\n\n  </div>\n</div>\n\n<div class=\"container\">\n  <img src=\"/assets/circle.png\"/>\n  <div class=\"social\">\n    <a href=\"https://github.com/CircleAcademy\" href=\"_blank\">\n      <i class=\"fa fa-github\"></i> @CircleAcademy\n    </a>\n    <a href=\"mailto:hello@chriscates.ca\" href=\"_blank\">\n      <i class=\"fa fa-envelope-o\"></i> hello@chriscates.ca\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "<p>\n  quote works!\n</p>\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(330);


/***/ })

},[531]);
//# sourceMappingURL=main.bundle.js.map