webpackJsonp([2,5],{

/***/ 326:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 326;


/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(344);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/exodus/NetBeansProjects/jsmsuwinthawong/src/main/web/src/main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        Date.prototype.toISOString = function () {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(this).format('YYYY-MM-DDTHH:mm:ss');
        };
        Date.prototype.toString = function () {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(this).format('YYYY-MM-DDTHH:mm:ss');
        };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(519)
    })
], AppComponent);

//# sourceMappingURL=/home/exodus/NetBeansProjects/jsmsuwinthawong/src/main/web/src/app.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__private_home_home_component__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__private_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* LOCALE_ID */], useValue: 'th-TH' },
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* PreloadAllModules */] }),
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=/home/exodus/NetBeansProjects/jsmsuwinthawong/src/main/web/src/app.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(modalService) {
        this.modalService = modalService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openDownLoad = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(520),
        styles: [__webpack_require__(508)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=/home/exodus/NetBeansProjects/jsmsuwinthawong/src/main/web/src/home.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/exodus/NetBeansProjects/jsmsuwinthawong/src/main/web/src/environment.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "a {\n  color: #3D454D;\n}\n\n.form-number {\n  color: steelblue;\n}\n@media (min-width: 992px){\n  .app-content {\n    margin-left: 13.75rem;\n  }\n}\n@media (max-width: 991px){\n  .app-content {\n    margin-left: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 198,
	"./af.js": 198,
	"./ar": 205,
	"./ar-dz": 199,
	"./ar-dz.js": 199,
	"./ar-kw": 200,
	"./ar-kw.js": 200,
	"./ar-ly": 201,
	"./ar-ly.js": 201,
	"./ar-ma": 202,
	"./ar-ma.js": 202,
	"./ar-sa": 203,
	"./ar-sa.js": 203,
	"./ar-tn": 204,
	"./ar-tn.js": 204,
	"./ar.js": 205,
	"./az": 206,
	"./az.js": 206,
	"./be": 207,
	"./be.js": 207,
	"./bg": 208,
	"./bg.js": 208,
	"./bn": 209,
	"./bn.js": 209,
	"./bo": 210,
	"./bo.js": 210,
	"./br": 211,
	"./br.js": 211,
	"./bs": 212,
	"./bs.js": 212,
	"./ca": 213,
	"./ca.js": 213,
	"./cs": 214,
	"./cs.js": 214,
	"./cv": 215,
	"./cv.js": 215,
	"./cy": 216,
	"./cy.js": 216,
	"./da": 217,
	"./da.js": 217,
	"./de": 220,
	"./de-at": 218,
	"./de-at.js": 218,
	"./de-ch": 219,
	"./de-ch.js": 219,
	"./de.js": 220,
	"./dv": 221,
	"./dv.js": 221,
	"./el": 222,
	"./el.js": 222,
	"./en-au": 223,
	"./en-au.js": 223,
	"./en-ca": 224,
	"./en-ca.js": 224,
	"./en-gb": 225,
	"./en-gb.js": 225,
	"./en-ie": 226,
	"./en-ie.js": 226,
	"./en-nz": 227,
	"./en-nz.js": 227,
	"./eo": 228,
	"./eo.js": 228,
	"./es": 230,
	"./es-do": 229,
	"./es-do.js": 229,
	"./es.js": 230,
	"./et": 231,
	"./et.js": 231,
	"./eu": 232,
	"./eu.js": 232,
	"./fa": 233,
	"./fa.js": 233,
	"./fi": 234,
	"./fi.js": 234,
	"./fo": 235,
	"./fo.js": 235,
	"./fr": 238,
	"./fr-ca": 236,
	"./fr-ca.js": 236,
	"./fr-ch": 237,
	"./fr-ch.js": 237,
	"./fr.js": 238,
	"./fy": 239,
	"./fy.js": 239,
	"./gd": 240,
	"./gd.js": 240,
	"./gl": 241,
	"./gl.js": 241,
	"./gom-latn": 242,
	"./gom-latn.js": 242,
	"./he": 243,
	"./he.js": 243,
	"./hi": 244,
	"./hi.js": 244,
	"./hr": 245,
	"./hr.js": 245,
	"./hu": 246,
	"./hu.js": 246,
	"./hy-am": 247,
	"./hy-am.js": 247,
	"./id": 248,
	"./id.js": 248,
	"./is": 249,
	"./is.js": 249,
	"./it": 250,
	"./it.js": 250,
	"./ja": 251,
	"./ja.js": 251,
	"./jv": 252,
	"./jv.js": 252,
	"./ka": 253,
	"./ka.js": 253,
	"./kk": 254,
	"./kk.js": 254,
	"./km": 255,
	"./km.js": 255,
	"./kn": 256,
	"./kn.js": 256,
	"./ko": 257,
	"./ko.js": 257,
	"./ky": 258,
	"./ky.js": 258,
	"./lb": 259,
	"./lb.js": 259,
	"./lo": 260,
	"./lo.js": 260,
	"./lt": 261,
	"./lt.js": 261,
	"./lv": 262,
	"./lv.js": 262,
	"./me": 263,
	"./me.js": 263,
	"./mi": 264,
	"./mi.js": 264,
	"./mk": 265,
	"./mk.js": 265,
	"./ml": 266,
	"./ml.js": 266,
	"./mr": 267,
	"./mr.js": 267,
	"./ms": 269,
	"./ms-my": 268,
	"./ms-my.js": 268,
	"./ms.js": 269,
	"./my": 270,
	"./my.js": 270,
	"./nb": 271,
	"./nb.js": 271,
	"./ne": 272,
	"./ne.js": 272,
	"./nl": 274,
	"./nl-be": 273,
	"./nl-be.js": 273,
	"./nl.js": 274,
	"./nn": 275,
	"./nn.js": 275,
	"./pa-in": 276,
	"./pa-in.js": 276,
	"./pl": 277,
	"./pl.js": 277,
	"./pt": 279,
	"./pt-br": 278,
	"./pt-br.js": 278,
	"./pt.js": 279,
	"./ro": 280,
	"./ro.js": 280,
	"./ru": 281,
	"./ru.js": 281,
	"./sd": 282,
	"./sd.js": 282,
	"./se": 283,
	"./se.js": 283,
	"./si": 284,
	"./si.js": 284,
	"./sk": 285,
	"./sk.js": 285,
	"./sl": 286,
	"./sl.js": 286,
	"./sq": 287,
	"./sq.js": 287,
	"./sr": 289,
	"./sr-cyrl": 288,
	"./sr-cyrl.js": 288,
	"./sr.js": 289,
	"./ss": 290,
	"./ss.js": 290,
	"./sv": 291,
	"./sv.js": 291,
	"./sw": 292,
	"./sw.js": 292,
	"./ta": 293,
	"./ta.js": 293,
	"./te": 294,
	"./te.js": 294,
	"./tet": 295,
	"./tet.js": 295,
	"./th": 296,
	"./th.js": 296,
	"./tl-ph": 297,
	"./tl-ph.js": 297,
	"./tlh": 298,
	"./tlh.js": 298,
	"./tr": 299,
	"./tr.js": 299,
	"./tzl": 300,
	"./tzl.js": 300,
	"./tzm": 302,
	"./tzm-latn": 301,
	"./tzm-latn.js": 301,
	"./tzm.js": 302,
	"./uk": 303,
	"./uk.js": 303,
	"./ur": 304,
	"./ur.js": 304,
	"./uz": 306,
	"./uz-latn": 305,
	"./uz-latn.js": 305,
	"./uz.js": 306,
	"./vi": 307,
	"./vi.js": 307,
	"./x-pseudo": 308,
	"./x-pseudo.js": 308,
	"./yo": 309,
	"./yo.js": 309,
	"./zh-cn": 310,
	"./zh-cn.js": 310,
	"./zh-hk": 311,
	"./zh-hk.js": 311,
	"./zh-tw": 312,
	"./zh-tw.js": 312
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 514;


/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n<app-sidebar></app-sidebar>\n<!--<gt-loading [isSuccess]=\"httpRequestCompleted\"></gt-loading>-->\n<router-outlet></router-outlet>\n<template ngbModalContainer></template>\n"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content padding\">\n  <div class=\"dip--container dip--container__home box container\">\n    <div class=\"grey-50 dip--page__header\">\n      <div class=\"navbar\">\n        <div>\n          <i class=\"fa fa-home\" aria-hidden=\"true\"></i> หน้าหลัก\n          <span class=\"pull-right\">\n             <button type=\"button\" class=\"btn btn-info btn-md\" (click)=\"openDownLoad()\">\n               <i class=\"fa fa-download\" aria-hidden=\"true\"></i> ดาวโหลดแบบฟอร์ม\n             </button>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"padding\">\n      <h6 style=\"margin-left: 10px\">บันทึกคำขอ(มีค่าธรรมเนียม)</h6>\n      <ol>\n        <ul>\n          <a routerLink=\"all-form/birth/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.01 </span>\n            คำขอจดทะเบียนเครื่องหมายการค้า เครื่องหมายบริการเครื่องหมายรับรองหรือเครื่องหมายร่วม\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/opposition/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.02 </span>\n            คำคัดค้านการขอจดทะเบียนเครื่องหมายการค้า\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/appeal/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.03 </span>\n            คำอุทธรณ์\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/transfer/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.04 </span>\n            คำขอโอนหรือรับมรดกสิทธิ\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/licensing/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.05 </span>\n            คำขอจดทะเบียนสัญญาอนุญาตให้ใช้เครื่องหมายการค้า/บริการ\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/correction/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.06 </span>\n            คำขอแก้ไขเปลี่ยนแปลงรายการจดทะเบียน\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/renewal/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.07 </span>\n            คำขอต่ออายุการจดทะเบียน\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/cancellation/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.08 </span>\n            คำขอให้เพิกถอนการจดทะเบียน\n          </a>\n        </ul>\n      </ol>\n      <hr>\n      <h6 style=\"margin-left: 10px\">บันทึกคำขอ(ไม่มีค่าธรรมเนียม)</h6>\n      <ol>\n        <ul>\n          <a routerLink=\"all-form/debate/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.02 </span>\n            คำโต้แย้ง\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/requestfromkingdom/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.10 </span>\n            คำขอถือสิทธิวันที่ยื่นคำขอนอกราชอาณาจักรครั้งแรกหรือวันที่นำสินค้าที่ใช้เครื่องหมายออกแสดงในงานแสดง\n            สินค้าระหว่างประเทศเป็นวันยื่นคำขอในราชอาณาจักรตามมาตรา 28 หรือมาตรา 28 ทวิ\n          </a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/reject/present\" routerLinkActive=\"active\"><span\n            class=\"form-number\">แบบฟอร์ม ก.12 </span>\n            หนังสือแสดงการปฏิเสธ</a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/judgment-ruling/present\" routerLinkActive=\"active\"><span class=\"form-number\">แบบฟอร์ม ก.14 </span>\n            หนังสือแจ้งฟ้องคดีต่อศาล คำพิพากษาและผลคดี</a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/request-cancellation/present\" routerLinkActive=\"active\"><span class=\"form-number\">แบบฟอร์ม ก.15 </span>\n            หนังสือชี้แจงการถูกร้องขอให้เพิกถอนการจดทะเบียน</a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/postpone/present\" routerLinkActive=\"active\"><span\n            class=\"form-number\">แบบฟอร์ม ก.19 </span>\n            หนังสือขอผ่อนผันการส่งหลักฐาน</a>\n        </ul>\n        <ul>\n          <a routerLink=\"all-form/freedoc/present\" routerLinkActive=\"active\">\n            <span class=\"form-number\">แบบฟอร์ม ก.20 </span>หนังสือนำส่งเอกสารหลักฐานและคำชี้แจง</a>\n        </ul>\n      </ol>\n      <hr>\n      <h6 style=\"margin-left: 10px\">บันทึกรายการชำระเงิน(อื่นๆ)</h6>\n      <ol>\n        <ul>\n          <a routerLink=\"all-form/pay-approve\" routerLinkActive=\"active\"> <span\n            class=\"form-number\">บันทึกการชำระเงิน </span>บันทึกการชำระเงินที่ได้รับการอนุมัติ</a>\n        </ul>\n      </ol>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(327);


/***/ })

},[566]);
//# sourceMappingURL=main.bundle.js.map