(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\r\n<navbar-component></navbar-component>\r\n<!--Header-->\r\n<mat-drawer-container style=\"height: calc(89.4vh);\" autosize>\r\n\r\n<<<<<<< HEAD\r\n<mat-drawer-container autosize>\r\n  \r\n  <mat-drawer mode=\"side\" opened>\r\n    <side-nav></side-nav>\r\n  </mat-drawer>\r\n\r\n  <mat-drawer-content>\r\n=======\r\n  <!--Sidenav bar-->\r\n  <mat-drawer #drawer class=\"sidenav\" mode=\"side\" opened>\r\n    <div mode=\"side\" (click)=\"showFiller = !showFiller\">\r\n      <i>\r\n        <mat-icon>menu</mat-icon>\r\n      </i>\r\n      <!-- <span  *ngIf=\"showFiller\">\r\n                              Menu\r\n                          </span> -->\r\n    </div>\r\n>>>>>>> 18c3faca9fdaa324374aedac78176c76f39f01bc\r\n\r\n    <div>\r\n      <a [routerLink]=\"['dashboard']\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\" href=\"#\">\r\n        <i>\r\n          <mat-icon>dashboard</mat-icon>\r\n        </i>\r\n        <span *ngIf=\"showFiller\" mode=\"side\" (click)=\"showFiller = !showFiller\">\r\n          Dashboard\r\n        </span>\r\n      </a>\r\n    </div>\r\n\r\n    <div>\r\n      <a [routerLink]=\"['studentprofiles']\" [routerLinkActive]=\"'active'\">\r\n        <i>\r\n          <mat-icon>assignment_in</mat-icon>\r\n        </i>\r\n        <span *ngIf=\"showFiller\" mode=\"side\" (click)=\"showFiller = !showFiller\">\r\n          Student Profiles\r\n        </span>\r\n      </a>\r\n    </div>\r\n\r\n    <div>\r\n      <a [routerLink]=\"['lessonmgmt']\" [routerLinkActive]=\"'active'\">\r\n        <i>\r\n          <mat-icon>track_changes</mat-icon>\r\n        </i>\r\n        <span *ngIf=\"showFiller\" mode=\"side\" (click)=\"showFiller = !showFiller\">\r\n          Lesson Management\r\n        </span>\r\n      </a>\r\n    </div>\r\n\r\n    <div>\r\n      <a [routerLink]=\"['attendance']\" [routerLinkActive]=\"'active'\">\r\n        <i>\r\n          <mat-icon>playlist_add_check</mat-icon>\r\n        </i>\r\n        <span *ngIf=\"showFiller\" mode=\"side\" (click)=\"showFiller = !showFiller\">\r\n          Attendance\r\n        </span>\r\n      </a>\r\n    </div>\r\n\r\n    <div>\r\n      <a [routerLink]=\"['classperformance']\" [routerLinkActive]=\"'active'\">\r\n        <i>\r\n          <mat-icon>insert_chart</mat-icon>\r\n        </i>\r\n        <span *ngIf=\"showFiller\" mode=\"side\" (click)=\"showFiller = !showFiller\">\r\n          Class Performance\r\n        </span>\r\n      </a>\r\n    </div>\r\n\r\n    <div>\r\n      <a [routerLink]=\"['courses']\" [routerLinkActive]=\"'active'\">\r\n        <i>\r\n          <mat-icon>insert_drive_file</mat-icon>\r\n        </i>\r\n        <span *ngIf=\"showFiller\" mode=\"side\" (click)=\"showFiller = !showFiller\">\r\n          Courses\r\n        </span>\r\n      </a>\r\n    </div>\r\n\r\n    <div>\r\n      <a [routerLink]=\"['resources']\" [routerLinkActive]=\"'active'\">\r\n        <i>\r\n          <mat-icon>library_books</mat-icon>\r\n        </i>\r\n        <span *ngIf=\"showFiller\" mode=\"side\" (click)=\"showFiller = !showFiller\">\r\n          My Learning Resources\r\n        </span>\r\n      </a>\r\n    </div>\r\n\r\n\r\n  </mat-drawer>\r\n  <!--Sidenav bar-->\r\n\r\n  <!--main content-->\r\n  <mat-drawer-content style=\"background-color: #dfebf7;overflow: auto;\">\r\n    <router-outlet></router-outlet>\r\n  </mat-drawer-content>\r\n  <!--main content-->\r\n\r\n<<<<<<< HEAD\r\n  </mat-drawer-content>\r\n=======\r\n  <!--footer-->\r\n  <footer style=\"text-align: center;background:rgb(255, 153, 51);color:white; \">\r\n    Copyright 2018 @ LEARNOMAC\r\n  </footer>\r\n  <!--footer-->\r\n>>>>>>> 18c3faca9fdaa324374aedac78176c76f39f01bc\r\n\r\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n\n.sidenav {\n  font-family: sans-serif;\n  padding: 20px;\n  cursor: pointer;\n  background-color: #004d73;\n  line-height: 4.3rem;\n  color: #ffffff; }\n\n.material-icons {\n  font-size: 25px;\n  overflow: hidden; }\n\n.sidenav div {\n  font-family: sans-serif;\n  box-shadow: 0px 1px 0px #004567; }\n\n.sidenav div a {\n    color: #ffffff; }\n\n.sidenav div a i {\n      cursor: pointer; }\n\n.sidenav div a span {\n      font-size: 15px;\n      cursor: pointer;\n      text-transform: uppercase;\n      font-family: sans-serif;\n      position: relative;\n      bottom: 6px;\n      left: 6px; }\n\n.sidenav :hover {\n  color: #f57c00; }\n\nfooter {\n  font-family: sans-serif;\n  text-align: center;\n  background: #f57c00;\n  color: #f5f5f5;\n  padding: 14px 0;\n  text-transform: uppercase;\n  display: none; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ng_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-material.module */ "./src/app/ng-material.module.ts");
/* harmony import */ var _news_news_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.module */ "./src/app/news/news.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _news_news_module__WEBPACK_IMPORTED_MODULE_8__["NewsModule"],
                _ng_material_module__WEBPACK_IMPORTED_MODULE_7__["NgMaterialModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/calendar/calendar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/calendar/calendar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bq-orange\">\r\n    <div class=\"card-content\">\r\n\r\n        <div class=\"col s6 calendar-left\">\r\n            <span class=\"card-title\">Calendar</span>\r\n            <ul>\r\n                <li>\r\n                    Holiday - Vinayagar Sathurthi\r\n                    <br>\r\n                </li>\r\n                <li>\r\n                    Sports Day\r\n                    <br>\r\n                </li>\r\n                <li>\r\n                    Independence Day\r\n                    <br>\r\n                </li>\r\n                <li>\r\n                    Krishna Jayanthi\r\n                    <br>\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n        <div class=\"col s6 calendar-right\">\r\n            <mat-calendar [selected]=\"selectedDate\" (selectedChange)=\"selectedChange($event)\" (yearSelected)=\"yearSelected()\" (monthSelected)=\"monthSelected()\"\r\n                (_userSelection)=\"userSelection()\" (cdkAutofill)=\"cdkAutofill()\"> </mat-calendar>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/calendar/calendar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/calendar/calendar.component.ts ***!
  \*****************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/home/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ../home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/home/circulars/circulars-dialog/circulars-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/home/circulars/circulars-dialog/circulars-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n        <h5 class=\"card-title bq-green-text\">Circulars\r\n                <a (click)=\"closeDialog()\">\r\n                        <span class=\"btn btn-green\">\r\n                                <mat-icon>clear</mat-icon>\r\n                        </span>\r\n                </a>\r\n        </h5>\r\n        <div class=\"content-list\">\r\n                <ul>\r\n                        <li>Cras justo odio Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n\r\n                        <li>Dapibus ac facilisis in Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n                        <li>Morbi leo risus Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n\r\n                </ul>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/circulars/circulars-dialog/circulars-dialog.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/home/circulars/circulars-dialog/circulars-dialog.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  border: 0;\n  border-radius: 0.125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.btn:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.btn:hover {\n  box-shadow: 0px 4px 1px lightgrey; }\n\n.btn::-moz-selection {\n  background: #212529 !important; }\n\n.btn::selection {\n  background: #212529 !important; }\n\n.btn-primary {\n  background-color: #2e94ec !important;\n  color: #ffffff !important;\n  border-color: #2e6da4; }\n\n.btn-warning {\n  background-color: #f79c1c !important;\n  color: #ffffff !important;\n  border-color: #eea236; }\n\n.btn-danger {\n  background-color: #ef1912 !important;\n  color: #ffffff !important;\n  border-color: #d43f3a; }\n\n.btn-success {\n  background-color: #04b34b !important;\n  color: #ffffff !important;\n  border-color: #4cae4c; }\n\n.bq-green {\n  border-left: 3px solid #007E33 !important;\n  color: #007E33 !important; }\n\n.btn-green {\n  background-color: #007E33 !important;\n  color: white !important; }\n\n.bq-green-text {\n  color: #007E33 !important; }\n\n.badge-green {\n  float: right;\n  color: #007E33 !important; }\n\n.badge-green:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-blue {\n  border-left: 3px solid #039be5 !important;\n  color: #039be5 !important; }\n\n.btn-blue {\n  background-color: #039be5 !important;\n  color: white !important; }\n\n.bq-blue-text {\n  color: #039be5 !important; }\n\n.badge-blue {\n  float: right;\n  color: #039be5 !important; }\n\n.badge-blue:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-orange {\n  border-left: 3px solid #f57c00 !important;\n  color: #f57c00 !important; }\n\n.btn-orange {\n  background-color: #f57c00 !important;\n  color: white !important; }\n\n.bq-orange-text {\n  color: #f57c00 !important; }\n\n.badge-orange {\n  float: right;\n  color: #f57c00 !important; }\n\n.badge-orange:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.badge-red {\n  float: right;\n  color: #ff4444 !important; }\n\n.badge-red:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-red {\n  border-left: 3px solid #ff4444 !important;\n  color: #ff4444 !important; }\n\n.btn-red {\n  background-color: #ff4444 !important;\n  color: white !important; }\n\n.bq-red-text {\n  color: #ff4444 !important; }\n\n.bq-pink {\n  border-left: 3px solid #d81b60 !important;\n  color: #d81b60 !important; }\n\n.btn-pink {\n  background-color: #d81b60 !important;\n  color: white !important; }\n\n.bq-pink-text {\n  color: #d81b60 !important; }\n\n.badge-pink {\n  float: right;\n  color: #d81b60 !important; }\n\n.badge-pink:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-indigo {\n  border-left: 3px solid #0d47a1 !important;\n  color: #0d47a1 !important; }\n\n.btn-indigo {\n  background-color: #0d47a1 !important;\n  color: white !important; }\n\n.bq-indigo-text {\n  color: #0d47a1 !important; }\n\n.badge-indigo {\n  float: right;\n  color: #0d47a1 !important; }\n\n.badge-indigo:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.dialog .card-title {\n  font-family: sans-serif;\n  font-weight: 400;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  font-size: 24px;\n  margin: 0;\n  padding: 10px 0; }\n\n.dialog span {\n  padding: 5px;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/home/circulars/circulars-dialog/circulars-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/circulars/circulars-dialog/circulars-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CircularsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularsDialogComponent", function() { return CircularsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CircularsDialogComponent = /** @class */ (function () {
    function CircularsDialogComponent(dialogref) {
        this.dialogref = dialogref;
    }
    CircularsDialogComponent.prototype.closeDialog = function () {
        this.dialogref.close();
    };
    CircularsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'circulars-dialog',
            template: __webpack_require__(/*! ./circulars-dialog.component.html */ "./src/app/home/circulars/circulars-dialog/circulars-dialog.component.html"),
            styles: [__webpack_require__(/*! ./circulars-dialog.component.scss */ "./src/app/home/circulars/circulars-dialog/circulars-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], CircularsDialogComponent);
    return CircularsDialogComponent;
}());



/***/ }),

/***/ "./src/app/home/circulars/circulars.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/circulars/circulars.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bq-green\">\r\n        <div class=\"card-content\">\r\n                <span class=\"card-title\">Circulars\r\n                        <a>\r\n                                <span class=\"btn btn-green\">VIEW ALL</span>\r\n                        </a>\r\n                </span>\r\n                <div class=\"content-list\">\r\n                        <ul class=\"list-group\">\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-green\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Dapibus ac facilisis in\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-green\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Morbi leo risus\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-green\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-green\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-green\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                        </ul>\r\n                        <a class=\"badge-green\">\r\n                                <mat-icon>more_horiz</mat-icon>\r\n                        </a>\r\n                </div>\r\n\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/circulars/circulars.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/circulars/circulars.component.ts ***!
  \*******************************************************/
/*! exports provided: CircularsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularsComponent", function() { return CircularsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _circulars_dialog_circulars_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circulars-dialog/circulars-dialog.component */ "./src/app/home/circulars/circulars-dialog/circulars-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CircularsComponent = /** @class */ (function () {
    function CircularsComponent(dialog) {
        this.dialog = dialog;
    }
    CircularsComponent.prototype.openDialog = function () {
        this.circularsDialogRef = this.dialog.open(_circulars_dialog_circulars_dialog_component__WEBPACK_IMPORTED_MODULE_1__["CircularsDialogComponent"], {
            width: '50%',
            height: '60vh'
        });
        //this.circularsDialogRef.componentInstance.title = "odioCras justo odio";
        this.circularsDialogRef.disableClose = true;
    };
    CircularsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-circulars',
            template: __webpack_require__(/*! ./circulars.component.html */ "./src/app/home/circulars/circulars.component.html"),
            styles: [__webpack_require__(/*! ../home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CircularsComponent);
    return CircularsComponent;
}());



/***/ }),

/***/ "./src/app/home/courses/courses.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/courses/courses.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bq-pink\">\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title\">Courses\r\n            <a>\r\n                <span class=\"btn btn-pink\">VIEW ALL</span>\r\n            </a>\r\n        </span>\r\n        <div class=\"count-list\">\r\n            <div class=\"row\">\r\n                <div class=\"col s12 m6 l3 count\">\r\n                    04\r\n                    <span class=\"count-span btn-primary\">\r\n                    new\r\n                    </span>\r\n\r\n                </div>\r\n                <div class=\"col s12 m6 l3 count\">\r\n                    08\r\n                    <span class=\"count-span  btn-warning\">\r\n                        in progress\r\n                    </span>\r\n\r\n                </div>\r\n                <div class=\"col s12 m6 l3 count\">\r\n                    06\r\n                    <span class=\"count-span btn-danger\">\r\n                        pending\r\n                    </span>\r\n\r\n                </div>\r\n                <div class=\"col s12 m6 l3 count\">\r\n                    10\r\n                    <span class=\"count-span btn-success\">\r\n                        completed\r\n                    </span>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/courses/courses.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/courses/courses.component.ts ***!
  \***************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
    }
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/home/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ../home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<<<<<<< HEAD\r\n    <div class=\"col s4\">\r\n        <news-list></news-list>\r\n=======\r\n    <div class=\"col s12 m6 l4\">\r\n        <home-news></home-news>\r\n>>>>>>> 18c3faca9fdaa324374aedac78176c76f39f01bc\r\n    </div>\r\n    <div class=\"col s12 m6 l4\">\r\n        <home-circulars></home-circulars>\r\n    </div>\r\n    <div class=\"col s12 m6 l4\">\r\n        <home-notifications></home-notifications>\r\n    </div>\r\n    <div class=\"col s12 m6 l4\">\r\n        <home-messages></home-messages>\r\n    </div>\r\n    <div class=\"col s12 m6 l4\">\r\n        <home-calendar></home-calendar>\r\n    </div>\r\n    <div class=\"col s12 m6 l4\">\r\n        <home-courses></home-courses>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  border: 0;\n  border-radius: 0.125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.btn:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.btn:hover {\n  box-shadow: 0px 4px 1px lightgrey; }\n\n.btn::-moz-selection {\n  background: #212529 !important; }\n\n.btn::selection {\n  background: #212529 !important; }\n\n.btn-primary {\n  background-color: #2e94ec !important;\n  color: #ffffff !important;\n  border-color: #2e6da4; }\n\n.btn-warning {\n  background-color: #f79c1c !important;\n  color: #ffffff !important;\n  border-color: #eea236; }\n\n.btn-danger {\n  background-color: #ef1912 !important;\n  color: #ffffff !important;\n  border-color: #d43f3a; }\n\n.btn-success {\n  background-color: #04b34b !important;\n  color: #ffffff !important;\n  border-color: #4cae4c; }\n\n.bq-green {\n  border-left: 3px solid #007E33 !important;\n  color: #007E33 !important; }\n\n.btn-green {\n  background-color: #007E33 !important;\n  color: white !important; }\n\n.bq-green-text {\n  color: #007E33 !important; }\n\n.badge-green {\n  float: right;\n  color: #007E33 !important; }\n\n.badge-green:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-blue {\n  border-left: 3px solid #039be5 !important;\n  color: #039be5 !important; }\n\n.btn-blue {\n  background-color: #039be5 !important;\n  color: white !important; }\n\n.bq-blue-text {\n  color: #039be5 !important; }\n\n.badge-blue {\n  float: right;\n  color: #039be5 !important; }\n\n.badge-blue:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-orange {\n  border-left: 3px solid #f57c00 !important;\n  color: #f57c00 !important; }\n\n.btn-orange {\n  background-color: #f57c00 !important;\n  color: white !important; }\n\n.bq-orange-text {\n  color: #f57c00 !important; }\n\n.badge-orange {\n  float: right;\n  color: #f57c00 !important; }\n\n.badge-orange:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.badge-red {\n  float: right;\n  color: #ff4444 !important; }\n\n.badge-red:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-red {\n  border-left: 3px solid #ff4444 !important;\n  color: #ff4444 !important; }\n\n.btn-red {\n  background-color: #ff4444 !important;\n  color: white !important; }\n\n.bq-red-text {\n  color: #ff4444 !important; }\n\n.bq-pink {\n  border-left: 3px solid #d81b60 !important;\n  color: #d81b60 !important; }\n\n.btn-pink {\n  background-color: #d81b60 !important;\n  color: white !important; }\n\n.bq-pink-text {\n  color: #d81b60 !important; }\n\n.badge-pink {\n  float: right;\n  color: #d81b60 !important; }\n\n.badge-pink:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-indigo {\n  border-left: 3px solid #0d47a1 !important;\n  color: #0d47a1 !important; }\n\n.btn-indigo {\n  background-color: #0d47a1 !important;\n  color: white !important; }\n\n.bq-indigo-text {\n  color: #0d47a1 !important; }\n\n.badge-indigo {\n  float: right;\n  color: #0d47a1 !important; }\n\n.badge-indigo:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.row {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.col {\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.card {\n  height: calc(43vh);\n  margin-bottom: 0px;\n  font-family: sans-serif;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border: 0;\n  font-weight: 400;\n  overflow: auto; }\n\n.card-content {\n  margin: 0;\n  padding: 10px; }\n\n.card-title {\n  font-weight: 400;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase; }\n\n.card-title span {\n    font-size: 11px;\n    float: right; }\n\n.content-list ul li {\n  color: #747373;\n  padding-top: 15px; }\n\n.card-content {\n  padding: 10px;\n  overflow: auto; }\n\n.card-content .calendar-right {\n    overflow: hidden;\n    flex: 0 0 50%;\n    max-width: 50%; }\n\n.card-content .calendar-left {\n    float: left;\n    padding: 0; }\n\n.card-content .calendar-left ul li {\n      color: #747373;\n      padding-top: 15px; }\n\n.card-content .calendar-left .card-title {\n      font-weight: 400;\n      margin-bottom: 0.25rem;\n      text-transform: uppercase; }\n\n.count {\n  font-size: 51px;\n  color: black;\n  text-align: center; }\n\n.count-span {\n  font-size: 9px;\n  padding: 10px;\n  text-transform: uppercase; }\n\n.count-list {\n  padding: 5px; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/home/calendar/calendar.component.ts");
/* harmony import */ var _circulars_circulars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circulars/circulars.component */ "./src/app/home/circulars/circulars.component.ts");
/* harmony import */ var _circulars_circulars_dialog_circulars_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circulars/circulars-dialog/circulars-dialog.component */ "./src/app/home/circulars/circulars-dialog/circulars-dialog.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/home/courses/courses.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/home/messages/messages.component.ts");
/* harmony import */ var _messages_messages_dialog_messages_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages-dialog/messages-dialog.component */ "./src/app/home/messages/messages-dialog/messages-dialog.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "./src/app/home/news/news.component.ts");
/* harmony import */ var _news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/news-details/news-details.component */ "./src/app/home/news/news-details/news-details.component.ts");
/* harmony import */ var _news_news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news-dialog/news-dialog.component */ "./src/app/home/news/news-dialog/news-dialog.component.ts");
/* harmony import */ var _ng_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ng-material.module */ "./src/app/ng-material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/home/notifications/notifications.component.ts");
/* harmony import */ var _notifications_notifications_dialog_notifications_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notifications/notifications-dialog/notifications-dialog.component */ "./src/app/home/notifications/notifications-dialog/notifications-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                _news_news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_10__["NewsDialogComponent"],
                _news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_9__["NewsDetailsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__["NotificationsComponent"],
                _notifications_notifications_dialog_notifications_dialog_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsDialogComponent"],
                _circulars_circulars_component__WEBPACK_IMPORTED_MODULE_2__["CircularsComponent"],
                _circulars_circulars_dialog_circulars_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CircularsDialogComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _messages_messages_dialog_messages_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MessagesDialogComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_4__["CoursesComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _ng_material_module__WEBPACK_IMPORTED_MODULE_11__["NgMaterialModule"]
            ],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            entryComponents: [
                _news_news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_10__["NewsDialogComponent"],
                _circulars_circulars_dialog_circulars_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CircularsDialogComponent"],
                _notifications_notifications_dialog_notifications_dialog_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsDialogComponent"],
                _messages_messages_dialog_messages_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MessagesDialogComponent"]
            ],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/messages/messages-dialog/messages-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/home/messages/messages-dialog/messages-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n        <h5 class=\"card-title bq-indigo-text\">Messages\r\n                <a (click)=\"closeDialog()\">\r\n                        <span class=\"btn btn-indigo\">\r\n                                <mat-icon>clear</mat-icon>\r\n                        </span>\r\n                </a>\r\n        </h5>\r\n        <div class=\"content-list\">\r\n                <ul>\r\n                        <li>Cras justo odio Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n\r\n                        <li>Dapibus ac facilisis in Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n                        <li>Morbi leo risus Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n\r\n                </ul>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/messages/messages-dialog/messages-dialog.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/messages/messages-dialog/messages-dialog.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  border: 0;\n  border-radius: 0.125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.btn:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.btn:hover {\n  box-shadow: 0px 4px 1px lightgrey; }\n\n.btn::-moz-selection {\n  background: #212529 !important; }\n\n.btn::selection {\n  background: #212529 !important; }\n\n.btn-primary {\n  background-color: #2e94ec !important;\n  color: #ffffff !important;\n  border-color: #2e6da4; }\n\n.btn-warning {\n  background-color: #f79c1c !important;\n  color: #ffffff !important;\n  border-color: #eea236; }\n\n.btn-danger {\n  background-color: #ef1912 !important;\n  color: #ffffff !important;\n  border-color: #d43f3a; }\n\n.btn-success {\n  background-color: #04b34b !important;\n  color: #ffffff !important;\n  border-color: #4cae4c; }\n\n.bq-green {\n  border-left: 3px solid #007E33 !important;\n  color: #007E33 !important; }\n\n.btn-green {\n  background-color: #007E33 !important;\n  color: white !important; }\n\n.bq-green-text {\n  color: #007E33 !important; }\n\n.badge-green {\n  float: right;\n  color: #007E33 !important; }\n\n.badge-green:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-blue {\n  border-left: 3px solid #039be5 !important;\n  color: #039be5 !important; }\n\n.btn-blue {\n  background-color: #039be5 !important;\n  color: white !important; }\n\n.bq-blue-text {\n  color: #039be5 !important; }\n\n.badge-blue {\n  float: right;\n  color: #039be5 !important; }\n\n.badge-blue:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-orange {\n  border-left: 3px solid #f57c00 !important;\n  color: #f57c00 !important; }\n\n.btn-orange {\n  background-color: #f57c00 !important;\n  color: white !important; }\n\n.bq-orange-text {\n  color: #f57c00 !important; }\n\n.badge-orange {\n  float: right;\n  color: #f57c00 !important; }\n\n.badge-orange:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.badge-red {\n  float: right;\n  color: #ff4444 !important; }\n\n.badge-red:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-red {\n  border-left: 3px solid #ff4444 !important;\n  color: #ff4444 !important; }\n\n.btn-red {\n  background-color: #ff4444 !important;\n  color: white !important; }\n\n.bq-red-text {\n  color: #ff4444 !important; }\n\n.bq-pink {\n  border-left: 3px solid #d81b60 !important;\n  color: #d81b60 !important; }\n\n.btn-pink {\n  background-color: #d81b60 !important;\n  color: white !important; }\n\n.bq-pink-text {\n  color: #d81b60 !important; }\n\n.badge-pink {\n  float: right;\n  color: #d81b60 !important; }\n\n.badge-pink:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-indigo {\n  border-left: 3px solid #0d47a1 !important;\n  color: #0d47a1 !important; }\n\n.btn-indigo {\n  background-color: #0d47a1 !important;\n  color: white !important; }\n\n.bq-indigo-text {\n  color: #0d47a1 !important; }\n\n.badge-indigo {\n  float: right;\n  color: #0d47a1 !important; }\n\n.badge-indigo:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.dialog .card-title {\n  font-family: sans-serif;\n  font-weight: 400;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  font-size: 24px;\n  margin: 0;\n  padding: 10px 0; }\n\n.dialog span {\n  padding: 5px;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/home/messages/messages-dialog/messages-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/messages/messages-dialog/messages-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: MessagesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDialogComponent", function() { return MessagesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesDialogComponent = /** @class */ (function () {
    //public title: string = "";
    function MessagesDialogComponent(dialogref) {
        this.dialogref = dialogref;
    }
    MessagesDialogComponent.prototype.closeDialog = function () {
        this.dialogref.close();
    };
    MessagesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'messages-dialog',
            template: __webpack_require__(/*! ./messages-dialog.component.html */ "./src/app/home/messages/messages-dialog/messages-dialog.component.html"),
            styles: [__webpack_require__(/*! ./messages-dialog.component.scss */ "./src/app/home/messages/messages-dialog/messages-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], MessagesDialogComponent);
    return MessagesDialogComponent;
}());



/***/ }),

/***/ "./src/app/home/messages/messages.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/messages/messages.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bq-indigo\">\r\n        <div class=\"card-content\">\r\n                <span class=\"card-title\">Messages\r\n                        <a>\r\n                                <span class=\"btn btn-indigo\">VIEW ALL</span>\r\n                        </a>\r\n                </span>\r\n                <div class=\"content-list\">\r\n                        <ul class=\"list-group\">\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-indigo\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Dapibus ac facilisis in\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-indigo\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Morbi leo risus\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-indigo\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-indigo\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-indigo\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                        </ul>\r\n                        <a class=\"badge-indigo\">\r\n                                <mat-icon>more_horiz</mat-icon>\r\n                        </a>\r\n                </div>\r\n\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/messages/messages.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/messages/messages.component.ts ***!
  \*****************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _messages_dialog_messages_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-dialog/messages-dialog.component */ "./src/app/home/messages/messages-dialog/messages-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(dialog) {
        this.dialog = dialog;
    }
    MessagesComponent.prototype.openDialog = function () {
        this.messagesDialogRef = this.dialog.open(_messages_dialog_messages_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MessagesDialogComponent"], {
            width: '50%',
            height: '60vh'
        });
        //this.messagesDialogRef.componentInstance.title = "odioCras justo odio";
        this.messagesDialogRef.disableClose = true;
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/home/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ../home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/home/news/news-details/news-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/home/news/news-details/news-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n        <ag-grid-angular \r\n        style=\"width: 600px;height:400px;\"\r\n        class=\"ag-theme-balham\"\r\n        [enableSorting]=\"true\"\r\n        [enableFilter]=\"true\"\r\n        [rowData]=\"rowData\" \r\n        [columnDefs]=\"columnDefs\"\r\n        >\r\n    </ag-grid-angular>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/home/news/news-details/news-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/news/news-details/news-details.component.ts ***!
  \******************************************************************/
/*! exports provided: NewsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsComponent", function() { return NewsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsDetailsComponent = /** @class */ (function () {
    function NewsDetailsComponent() {
        this.columnDefs = [
            { headerName: 'No', field: 'no' },
            { headerName: 'News Title', field: 'title' },
            { headerName: 'News Detail', field: 'detail' }
        ];
        this.rowData = [
            { no: '1', title: 'Celica', detail: 'Cras justo odioCras justo odioCras justo odioCras justo odio' },
            { no: '2', title: 'Mondeo', detail: 'odioCras justo odioCras justo odio sto odisto odisto odi' },
            { no: '3', title: 'Boxter', detail: 'dioCras justo odoioCras justo odioCras justo odiojusto ' }
        ];
    }
    NewsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'news-details',
            template: __webpack_require__(/*! ./news-details.component.html */ "./src/app/home/news/news-details/news-details.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], NewsDetailsComponent);
    return NewsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/news/news-dialog/news-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home/news/news-dialog/news-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n        <h5 class=\"card-title bq-red-text\">News\r\n                <a (click)=\"closeDialog()\">\r\n                        <span class=\"btn btn-red\">\r\n                                <mat-icon>clear</mat-icon>\r\n                        </span>\r\n                </a>\r\n        </h5>\r\n        <div class=\"content-list\">\r\n                <ul>\r\n                        <li>Cras justo odio Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n\r\n                        <li>Dapibus ac facilisis in Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n                        <li>Morbi leo risus Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n\r\n                </ul>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/news/news-dialog/news-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/news/news-dialog/news-dialog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  border: 0;\n  border-radius: 0.125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.btn:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.btn:hover {\n  box-shadow: 0px 4px 1px lightgrey; }\n\n.btn::-moz-selection {\n  background: #212529 !important; }\n\n.btn::selection {\n  background: #212529 !important; }\n\n.btn-primary {\n  background-color: #2e94ec !important;\n  color: #ffffff !important;\n  border-color: #2e6da4; }\n\n.btn-warning {\n  background-color: #f79c1c !important;\n  color: #ffffff !important;\n  border-color: #eea236; }\n\n.btn-danger {\n  background-color: #ef1912 !important;\n  color: #ffffff !important;\n  border-color: #d43f3a; }\n\n.btn-success {\n  background-color: #04b34b !important;\n  color: #ffffff !important;\n  border-color: #4cae4c; }\n\n.bq-green {\n  border-left: 3px solid #007E33 !important;\n  color: #007E33 !important; }\n\n.btn-green {\n  background-color: #007E33 !important;\n  color: white !important; }\n\n.bq-green-text {\n  color: #007E33 !important; }\n\n.badge-green {\n  float: right;\n  color: #007E33 !important; }\n\n.badge-green:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-blue {\n  border-left: 3px solid #039be5 !important;\n  color: #039be5 !important; }\n\n.btn-blue {\n  background-color: #039be5 !important;\n  color: white !important; }\n\n.bq-blue-text {\n  color: #039be5 !important; }\n\n.badge-blue {\n  float: right;\n  color: #039be5 !important; }\n\n.badge-blue:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-orange {\n  border-left: 3px solid #f57c00 !important;\n  color: #f57c00 !important; }\n\n.btn-orange {\n  background-color: #f57c00 !important;\n  color: white !important; }\n\n.bq-orange-text {\n  color: #f57c00 !important; }\n\n.badge-orange {\n  float: right;\n  color: #f57c00 !important; }\n\n.badge-orange:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.badge-red {\n  float: right;\n  color: #ff4444 !important; }\n\n.badge-red:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-red {\n  border-left: 3px solid #ff4444 !important;\n  color: #ff4444 !important; }\n\n.btn-red {\n  background-color: #ff4444 !important;\n  color: white !important; }\n\n.bq-red-text {\n  color: #ff4444 !important; }\n\n.bq-pink {\n  border-left: 3px solid #d81b60 !important;\n  color: #d81b60 !important; }\n\n.btn-pink {\n  background-color: #d81b60 !important;\n  color: white !important; }\n\n.bq-pink-text {\n  color: #d81b60 !important; }\n\n.badge-pink {\n  float: right;\n  color: #d81b60 !important; }\n\n.badge-pink:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-indigo {\n  border-left: 3px solid #0d47a1 !important;\n  color: #0d47a1 !important; }\n\n.btn-indigo {\n  background-color: #0d47a1 !important;\n  color: white !important; }\n\n.bq-indigo-text {\n  color: #0d47a1 !important; }\n\n.badge-indigo {\n  float: right;\n  color: #0d47a1 !important; }\n\n.badge-indigo:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.dialog .card-title {\n  font-family: sans-serif;\n  font-weight: 400;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  font-size: 24px;\n  margin: 0;\n  padding: 10px 0; }\n\n.dialog span {\n  padding: 5px;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/home/news/news-dialog/news-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/news/news-dialog/news-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: NewsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDialogComponent", function() { return NewsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsDialogComponent = /** @class */ (function () {
    //public title: string = "";
    function NewsDialogComponent(dialogref) {
        this.dialogref = dialogref;
    }
    NewsDialogComponent.prototype.closeDialog = function () {
        this.dialogref.close();
    };
    NewsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'news-dialog',
            template: __webpack_require__(/*! ./news-dialog.component.html */ "./src/app/home/news/news-dialog/news-dialog.component.html"),
            styles: [__webpack_require__(/*! ./news-dialog.component.scss */ "./src/app/home/news/news-dialog/news-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], NewsDialogComponent);
    return NewsDialogComponent;
}());



/***/ }),

/***/ "./src/app/home/news/news.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/news/news.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bq-red\">\r\n        <div class=\"card-content\">\r\n                <span class=\"card-title\">News\r\n                        <a>\r\n                                <span class=\"btn btn-red\">VIEW ALL</span>\r\n                        </a>\r\n                </span>\r\n                <div class=\"content-list\">\r\n                        <ul class=\"list-group\">\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-red\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Dapibus ac facilisis in\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-red\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Morbi leo risus\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-red\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-red\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-red\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                        </ul>\r\n                        <a class=\"badge-red\">\r\n                                <mat-icon>more_horiz</mat-icon>\r\n                        </a>\r\n                </div>\r\n\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/news/news.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/news/news.component.ts ***!
  \*********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-dialog/news-dialog.component */ "./src/app/home/news/news-dialog/news-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = /** @class */ (function () {
    function NewsComponent(dialog) {
        this.dialog = dialog;
    }
    NewsComponent.prototype.openDialog = function () {
        this.newsDialogRef = this.dialog.open(_news_dialog_news_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NewsDialogComponent"], {
            width: '50%',
            height: '60vh'
        });
        //this.newsDialogRef.componentInstance.title = "odioCras justo odio";
        this.newsDialogRef.disableClose = true;
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/home/news/news.component.html"),
            styles: [__webpack_require__(/*! ../home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/home/notifications/notifications-dialog/notifications-dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/notifications/notifications-dialog/notifications-dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n        <h5 class=\"card-title bq-blue-text\">Notifications\r\n                <a (click)=\"closeDialog()\">\r\n                        <span class=\"btn btn-blue\">\r\n                                <mat-icon>clear</mat-icon>\r\n                        </span>\r\n                </a>\r\n        </h5>\r\n        <div class=\"content-list\">\r\n                <ul>\r\n                        <li>Cras justo odio Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n\r\n                        <li>Dapibus ac facilisis in Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n                        <li>Morbi leo risus Cras justo odioCras justo odioCras justo odioCras justo odio Cras justo odioCras\r\n                                justo odioCras justo odioCras justo odio Cras justo odioCras justo odioCras justo odioCras\r\n                                justo odio Cras justo odioCras justo odioCras justo odioCras justo odio\r\n                                <hr>\r\n                        </li>\r\n\r\n                </ul>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/notifications/notifications-dialog/notifications-dialog.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/home/notifications/notifications-dialog/notifications-dialog.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  border: 0;\n  border-radius: 0.125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.btn:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.btn:hover {\n  box-shadow: 0px 4px 1px lightgrey; }\n\n.btn::-moz-selection {\n  background: #212529 !important; }\n\n.btn::selection {\n  background: #212529 !important; }\n\n.btn-primary {\n  background-color: #2e94ec !important;\n  color: #ffffff !important;\n  border-color: #2e6da4; }\n\n.btn-warning {\n  background-color: #f79c1c !important;\n  color: #ffffff !important;\n  border-color: #eea236; }\n\n.btn-danger {\n  background-color: #ef1912 !important;\n  color: #ffffff !important;\n  border-color: #d43f3a; }\n\n.btn-success {\n  background-color: #04b34b !important;\n  color: #ffffff !important;\n  border-color: #4cae4c; }\n\n.bq-green {\n  border-left: 3px solid #007E33 !important;\n  color: #007E33 !important; }\n\n.btn-green {\n  background-color: #007E33 !important;\n  color: white !important; }\n\n.bq-green-text {\n  color: #007E33 !important; }\n\n.badge-green {\n  float: right;\n  color: #007E33 !important; }\n\n.badge-green:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-blue {\n  border-left: 3px solid #039be5 !important;\n  color: #039be5 !important; }\n\n.btn-blue {\n  background-color: #039be5 !important;\n  color: white !important; }\n\n.bq-blue-text {\n  color: #039be5 !important; }\n\n.badge-blue {\n  float: right;\n  color: #039be5 !important; }\n\n.badge-blue:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-orange {\n  border-left: 3px solid #f57c00 !important;\n  color: #f57c00 !important; }\n\n.btn-orange {\n  background-color: #f57c00 !important;\n  color: white !important; }\n\n.bq-orange-text {\n  color: #f57c00 !important; }\n\n.badge-orange {\n  float: right;\n  color: #f57c00 !important; }\n\n.badge-orange:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.badge-red {\n  float: right;\n  color: #ff4444 !important; }\n\n.badge-red:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-red {\n  border-left: 3px solid #ff4444 !important;\n  color: #ff4444 !important; }\n\n.btn-red {\n  background-color: #ff4444 !important;\n  color: white !important; }\n\n.bq-red-text {\n  color: #ff4444 !important; }\n\n.bq-pink {\n  border-left: 3px solid #d81b60 !important;\n  color: #d81b60 !important; }\n\n.btn-pink {\n  background-color: #d81b60 !important;\n  color: white !important; }\n\n.bq-pink-text {\n  color: #d81b60 !important; }\n\n.badge-pink {\n  float: right;\n  color: #d81b60 !important; }\n\n.badge-pink:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-indigo {\n  border-left: 3px solid #0d47a1 !important;\n  color: #0d47a1 !important; }\n\n.btn-indigo {\n  background-color: #0d47a1 !important;\n  color: white !important; }\n\n.bq-indigo-text {\n  color: #0d47a1 !important; }\n\n.badge-indigo {\n  float: right;\n  color: #0d47a1 !important; }\n\n.badge-indigo:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.dialog .card-title {\n  font-family: sans-serif;\n  font-weight: 400;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  font-size: 24px;\n  margin: 0;\n  padding: 10px 0; }\n\n.dialog span {\n  padding: 5px;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/home/notifications/notifications-dialog/notifications-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/notifications/notifications-dialog/notifications-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NotificationsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsDialogComponent", function() { return NotificationsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsDialogComponent = /** @class */ (function () {
    function NotificationsDialogComponent(dialogref) {
        this.dialogref = dialogref;
    }
    NotificationsDialogComponent.prototype.closeDialog = function () {
        this.dialogref.close();
    };
    NotificationsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notifications-dialog',
            template: __webpack_require__(/*! ./notifications-dialog.component.html */ "./src/app/home/notifications/notifications-dialog/notifications-dialog.component.html"),
            styles: [__webpack_require__(/*! ./notifications-dialog.component.scss */ "./src/app/home/notifications/notifications-dialog/notifications-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], NotificationsDialogComponent);
    return NotificationsDialogComponent;
}());



/***/ }),

/***/ "./src/app/home/notifications/notifications.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/notifications/notifications.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bq-blue\">\r\n        <div class=\"card-content\">\r\n                <span class=\"card-title\">Notifications\r\n                        <a>\r\n                                <span class=\"btn btn-blue\">VIEW ALL</span>\r\n                        </a>\r\n                </span>\r\n                <div class=\"content-list\">\r\n                        <ul class=\"list-group\">\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-blue\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Dapibus ac facilisis in\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-blue\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Morbi leo risus\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-blue\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-blue\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Cras justo odio\r\n                                        <a (click)=\"openDialog()\">\r\n                                                <span class=\"badge-blue\">\r\n                                                        <mat-icon>add_box</mat-icon>\r\n                                                </span>\r\n                                        </a>\r\n                                </li>\r\n                        </ul>\r\n                        <a class=\"badge-blue\">\r\n                                <mat-icon>more_horiz</mat-icon>\r\n                        </a>\r\n                </div>\r\n\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/notifications/notifications.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/notifications/notifications.component.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifications_dialog_notifications_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications-dialog/notifications-dialog.component */ "./src/app/home/notifications/notifications-dialog/notifications-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(dialog) {
        this.dialog = dialog;
    }
    NotificationsComponent.prototype.openDialog = function () {
        this.notificationsDialogRef = this.dialog.open(_notifications_dialog_notifications_dialog_component__WEBPACK_IMPORTED_MODULE_1__["NotificationsDialogComponent"], {
            width: '50%',
            height: '60vh'
        });
        //this.notificationsDialogRef.componentInstance.title = "odioCras justo odio";
        this.notificationsDialogRef.disableClose = true;
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/home/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ../home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\r\n<mat-toolbar>\r\n    <mat-toolbar-row>\r\n        <span class=\"logo\">\r\n            <img style=\"width:30%\" src=\"../assets/logo1.png\">\r\n        </span>\r\n        <span class=\"header-spacer\"></span>\r\n        <span class=\"header-logout\">\r\n            <button class=\"btn btn-royalblue\">\r\n                Logout\r\n            </button>\r\n        </span>\r\n\r\n\r\n    </mat-toolbar-row>\r\n\r\n</mat-toolbar>\r\n<!--Header-->\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  border: 0;\n  border-radius: 0.125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.btn:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.btn:hover {\n  box-shadow: 0px 4px 1px lightgrey; }\n\n.btn::-moz-selection {\n  background: #212529 !important; }\n\n.btn::selection {\n  background: #212529 !important; }\n\n.btn-primary {\n  background-color: #2e94ec !important;\n  color: #ffffff !important;\n  border-color: #2e6da4; }\n\n.btn-warning {\n  background-color: #f79c1c !important;\n  color: #ffffff !important;\n  border-color: #eea236; }\n\n.btn-danger {\n  background-color: #ef1912 !important;\n  color: #ffffff !important;\n  border-color: #d43f3a; }\n\n.btn-success {\n  background-color: #04b34b !important;\n  color: #ffffff !important;\n  border-color: #4cae4c; }\n\n.bq-green {\n  border-left: 3px solid #007E33 !important;\n  color: #007E33 !important; }\n\n.btn-green {\n  background-color: #007E33 !important;\n  color: white !important; }\n\n.bq-green-text {\n  color: #007E33 !important; }\n\n.badge-green {\n  float: right;\n  color: #007E33 !important; }\n\n.badge-green:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-blue {\n  border-left: 3px solid #039be5 !important;\n  color: #039be5 !important; }\n\n.btn-blue {\n  background-color: #039be5 !important;\n  color: white !important; }\n\n.bq-blue-text {\n  color: #039be5 !important; }\n\n.badge-blue {\n  float: right;\n  color: #039be5 !important; }\n\n.badge-blue:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-orange {\n  border-left: 3px solid #f57c00 !important;\n  color: #f57c00 !important; }\n\n.btn-orange {\n  background-color: #f57c00 !important;\n  color: white !important; }\n\n.bq-orange-text {\n  color: #f57c00 !important; }\n\n.badge-orange {\n  float: right;\n  color: #f57c00 !important; }\n\n.badge-orange:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.badge-red {\n  float: right;\n  color: #ff4444 !important; }\n\n.badge-red:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-red {\n  border-left: 3px solid #ff4444 !important;\n  color: #ff4444 !important; }\n\n.btn-red {\n  background-color: #ff4444 !important;\n  color: white !important; }\n\n.bq-red-text {\n  color: #ff4444 !important; }\n\n.bq-pink {\n  border-left: 3px solid #d81b60 !important;\n  color: #d81b60 !important; }\n\n.btn-pink {\n  background-color: #d81b60 !important;\n  color: white !important; }\n\n.bq-pink-text {\n  color: #d81b60 !important; }\n\n.badge-pink {\n  float: right;\n  color: #d81b60 !important; }\n\n.badge-pink:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\n.bq-indigo {\n  border-left: 3px solid #0d47a1 !important;\n  color: #0d47a1 !important; }\n\n.btn-indigo {\n  background-color: #0d47a1 !important;\n  color: white !important; }\n\n.bq-indigo-text {\n  color: #0d47a1 !important; }\n\n.badge-indigo {\n  float: right;\n  color: #0d47a1 !important; }\n\n.badge-indigo:active {\n  -webkit-transform: translateY(2px);\n          transform: translateY(2px); }\n\nnav {\n  background-color: #f5f5f5; }\n\n.logo {\n  width: 150px;\n  height: 64px;\n  background: url(\"/assets/images/logo.png\");\n  background-repeat: no-repeat, repeat;\n  background-color: #f5f5f5;\n  background-position: center;\n  background-size: 175px;\n  display: inline-block;\n  left: 20px;\n  position: relative; }\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 0;\n  padding: 35px; }\n\n.logo > img {\n  width: 30%; }\n\n.header-logout {\n  font-size: 10px;\n  padding: 0 14px; }\n\n.header-spacer {\n  flex: 1 1 auto; }\n\n.btn-royalblue {\n  background-color: #004d73;\n  color: #ffffff;\n  font-size: 12px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "navbar-component",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/news/new-list/news-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/news/new-list/news-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title\">Card Title</span>\r\n        <table>\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Item Name</th>\r\n                    <th>Item Price</th>\r\n                </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n                <tr>\r\n                    <td>Alvin</td>\r\n                    <td>Eclair</td>\r\n                    <td>$0.87</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Alan</td>\r\n                    <td>Jellybean</td>\r\n                    <td>$3.76</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Jonathan</td>\r\n                    <td>Lollipop</td>\r\n                    <td>$7.00</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/new-list/news-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/news/new-list/news-list.component.ts ***!
  \******************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewsListComponent = /** @class */ (function () {
    function NewsListComponent() {
    }
    NewsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "news-list",
            template: __webpack_require__(/*! ./news-list.component.html */ "./src/app/news/new-list/news-list.component.html")
        })
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/news/news-detail/news-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/news/news-detail/news-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>News Detail Component</h1>"

/***/ }),

/***/ "./src/app/news/news-detail/news-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/news/news-detail/news-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent() {
    }
    NewsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "news-detail",
            template: __webpack_require__(/*! ./news-detail.component.html */ "./src/app/news/news-detail/news-detail.component.html")
        })
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());



/***/ }),

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _new_list_news_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-list/news-list.component */ "./src/app/news/new-list/news-list.component.ts");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-detail/news-detail.component */ "./src/app/news/news-detail/news-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_new_list_news_list_component__WEBPACK_IMPORTED_MODULE_1__["NewsListComponent"], _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_2__["NewsDetailComponent"]],
            exports: [_new_list_news_list_component__WEBPACK_IMPORTED_MODULE_1__["NewsListComponent"], _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_2__["NewsDetailComponent"]]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/ng-material.module.ts":
/*!***************************************!*\
  !*** ./src/app/ng-material.module.ts ***!
  \***************************************/
/*! exports provided: NgMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMaterialModule", function() { return NgMaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// A shared module which imports and exports all the Angular Material 
var NgMaterialModule = /** @class */ (function () {
    function NgMaterialModule() {
    }
    NgMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"]
            ]
        })
    ], NgMaterialModule);
    return NgMaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\insightus\source\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map