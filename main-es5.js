function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var appRoutes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Rahul-Yadav';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/hero/hero.component */
    "./src/app/home/hero/hero.component.ts");
    /* harmony import */


    var _home_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/about/about.component */
    "./src/app/home/about/about.component.ts");
    /* harmony import */


    var _home_work_process_work_process_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/work-process/work-process.component */
    "./src/app/home/work-process/work-process.component.ts");
    /* harmony import */


    var _home_passion_passion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/passion/passion.component */
    "./src/app/home/passion/passion.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase, 'stalldata'), angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _home_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _home_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _home_work_process_work_process_component__WEBPACK_IMPORTED_MODULE_9__["WorkProcessComponent"], _home_passion_passion_component__WEBPACK_IMPORTED_MODULE_10__["PassionComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _home_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _home_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _home_work_process_work_process_component__WEBPACK_IMPORTED_MODULE_9__["WorkProcessComponent"], _home_passion_passion_component__WEBPACK_IMPORTED_MODULE_10__["PassionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase, 'stalldata'), angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_16_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }
    }

    function HeaderComponent_li_16_ul_5_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subMenu_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", subMenu_r6.navLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subMenu_r6.navItem);
      }
    }

    function HeaderComponent_li_16_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_16_ul_5_li_1_Template, 3, 2, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", nav_r1.submenu);
      }
    }

    function HeaderComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_16_ng_template_3_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_16_ul_5_Template, 2, 1, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", nav_r1.navLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nav_r1.navItem, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submenu);
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.logoRahul = "rahul";
        this.logoYadav = "yadav";
        this.navLink = "home";
        this.submenu = true;
        this.navigation = [{
          navItem: "about me",
          navLink: "about",
          submenu: [{
            navItem: "my mission",
            navLink: "mission"
          }, {
            navItem: "my vision",
            navLink: "vision"
          }]
        }, {
          navItem: "work",
          navLink: "portfolio"
        }, {
          navItem: "online CV",
          navLink: "cv"
        }, {
          navItem: "hire me",
          navLink: "hire"
        }];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 17,
      vars: 4,
      consts: [[1, "container"], [1, "header-content"], [1, "logo"], [3, "routerLink"], [1, "humberger-menu"], [1, "menu-cover"], [1, "cross"], [1, "nav-menu"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "navactive", 3, "routerLink"], ["test", ""], [4, "ngIfTest", "ngIf"], ["routerLinkActive", "submenuactive", 3, "routerLink"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 6, 3, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.navLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logoRahul);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logoYadav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigation);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  float: left;\n  padding: 44px 44px;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n  z-index: 2;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 23px 0 0 40px;\n  float: left;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 80px;\n  text-transform: uppercase;\n  letter-spacing: -9px;\n  line-height: 56px;\n  margin: 0 0 17px 0;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: normal;\n  font-size: 42px;\n  color: #ff603c;\n  text-transform: uppercase;\n  padding: 0 0 0 56px;\n  letter-spacing: 9px;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::first-letter {\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:before {\n  width: 81px;\n  height: 81px;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n  background-color: #fde756;\n  content: \"\";\n  z-index: -1;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n  width: 59px;\n  height: 59px;\n  position: absolute;\n  left: 58px;\n  right: auto;\n  top: 69px;\n  bottom: auto;\n  background-color: #ff603c;\n  content: \"\";\n  z-index: -2;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  float: left;\n  margin: 48px 0 0 164px;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 0 0;\n  padding: 0;\n  float: left;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-transform: capitalize;\n  font-weight: 700;\n  padding: 0 20px;\n  border-radius: 50px;\n  height: 44px;\n  line-height: 46px;\n  float: left;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 250px;\n  opacity: 0;\n  filter: Alpha(opacity=0);\n  visibility: hidden;\n  -webkit-visibility: hidden;\n  -moz-visibility: hidden;\n  -o-visibility: hidden;\n  -ms-visibility: hidden;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 0 20px;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 17px;\n  text-transform: capitalize;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px 0 10px 15px;\n  width: 100%;\n  height: auto;\n  line-height: normal;\n  border-radius: 0;\n  color: #3e3a39;\n  border-bottom: rgba(255, 255, 255, 0.2) 1px solid;\n  font-size: 17px;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #3e3a39;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin: 0 0 0 20px;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #fff;\n  padding-left: 40px;\n  padding-right: 40px;\n  font-weight: normal;\n  text-transform: uppercase;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]:hover {\n  background-color: #3e3a39;\n  color: #fff;\n  border-color: #3e3a39;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: Alpha(opacity=1);\n  visibility: visible;\n  -webkit-visibility: visible;\n  -moz-visibility: visible;\n  -o-visibility: visible;\n  -ms-visibility: visible;\n}\n.humberger-menu[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: #351055 2px solid;\n  position: absolute;\n  left: auto;\n  right: 22%;\n  top: 69px;\n  bottom: auto;\n  border-radius: 5px;\n  cursor: pointer;\n  display: block;\n  display: none;\n}\n.humberger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.humberger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  width: 60%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: -6px;\n  bottom: auto;\n  margin: auto;\n  content: \"\";\n}\n.humberger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  width: 60%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 6px;\n  bottom: auto;\n  margin: auto;\n  content: \"\";\n}\n.cross[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: #351055 2px solid;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 100px;\n  bottom: auto;\n  margin: auto;\n  border-radius: 5px;\n  cursor: pointer;\n  display: none;\n}\n.cross[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  -moz-transform-style: flat;\n  -o-transform-style: flat;\n}\n.cross[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  width: 100%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  -moz-transform-style: flat;\n  -o-transform-style: flat;\n  content: \"\";\n}\n@media only screen and (min-width: 1600px) and (max-width: 1800px) {\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    margin: 48px 0 0 65px;\n  }\n}\n@media only screen and (min-width: 1366px) and (max-width: 1750px) {\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    margin: 48px 0 0 65px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1365px) {\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding: 10px 0 0 17px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n    margin: 0 0 1px 0;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    padding: 0 0 0 39px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:before {\n    width: 60px;\n    height: 60px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 30px;\n    right: auto;\n    top: 48px;\n    bottom: auto;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    margin: 30px 0 0 30px;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin: 0 0 0 10px;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding: 10px 0 0 17px;\n    margin: 0 0 0 100px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n    margin: 0 0 1px 0;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    padding: 0 0 0 39px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:before {\n    width: 60px;\n    height: 60px;\n    background-color: #e6d24f;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 30px;\n    right: auto;\n    top: 48px;\n    bottom: auto;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 25px 0;\n    font-size: 36px;\n    height: auto;\n    line-height: normal;\n    color: #fff;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin: 0;\n    width: 100%;\n    float: left;\n    text-align: center;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n    padding: 0 40px;\n    background-color: #fde756;\n    width: auto;\n    color: #3e3a39;\n    display: inline-block;\n    float: none;\n    height: 44px;\n    line-height: 46px;\n    font-weight: 700;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: relative;\n    opacity: 1;\n    filter: Alpha(opacity=1);\n    visibility: visible;\n    -webkit-visibility: visible;\n    -moz-visibility: visible;\n    -o-visibility: visible;\n    -ms-visibility: visible;\n    top: 0;\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n  }\n  header[_ngcontent-%COMP%]   .menu-cover[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #ff603c;\n    z-index: 10;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    filter: Alpha(opacity=0);\n    position: fixed;\n    left: 0;\n    right: auto;\n    top: -100%;\n    bottom: auto;\n    transition: all 0.5s ease-in;\n    -webkit-transition: all 0.5s ease-in;\n    -moz-transition: all 0.5s ease-in;\n    -o-transition: all 0.5s ease-in;\n    -ms-transition: all 0.5s ease-in;\n  }\n  header[_ngcontent-%COMP%]   .menu-cover.open[_ngcontent-%COMP%] {\n    opacity: 1;\n    filter: Alpha(opacity=1);\n    position: fixed;\n    left: 0;\n    right: auto;\n    top: 0;\n    bottom: auto;\n  }\n  header[_ngcontent-%COMP%]   .menu-cover.close[_ngcontent-%COMP%] {\n    opacity: 0;\n    filter: Alpha(opacity=0);\n    position: fixed;\n    left: auto;\n    right: 0;\n    top: 100%;\n    bottom: auto;\n  }\n  header[_ngcontent-%COMP%]   .humberger-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 480px) and (max-width: 639px) {\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin: 0 0 0 46px;\n  }\n}\n@media only screen and (min-width: 360px) and (max-width: 479px) {\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin: 0 0 0 -1px;\n  }\n  header[_ngcontent-%COMP%]   .humberger-menu[_ngcontent-%COMP%] {\n    right: 15%;\n  }\n}\n@media only screen and (max-width: 359px) {\n  header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin: 0 0 0 0;\n  }\n  header[_ngcontent-%COMP%]   .humberger-menu[_ngcontent-%COMP%] {\n    right: 20px;\n    top: 43px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0k6XFxBTkdVTEFSIFRVVE9SSUFMXFxSYWh1bFlhZGF2XFxSYWh1bC1ZYWRhdi9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9JOlxcQU5HVUxBUiBUVVRPUklBTFxcUmFodWxZYWRhdlxcUmFodWwtWWFkYXYvc3JjXFxhc3NldHNcXGNzc1xcdmFyaWFibGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvSTpcXEFOR1VMQVIgVFVUT1JJQUxcXFJhaHVsWWFkYXZcXFJhaHVsLVlhZGF2L3NyY1xcYXNzZXRzXFxjc3NcXG1peGlucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdDMEJVO0VEMUJXLFlBQUE7RUFBYyxXQUFBO0VBQWEsa0JBQUE7RUVIaEQsa0JGR3lHO0VFRnpHLE9GRWtIO0VFRGxILFdGQ29IO0VFQXBILE1BQUE7RUFDQSxZRkQySDtFQUFPLFVBQUE7QUdPdEk7QUhMUTtFQUNJLGtCQUFBO0VBQW9CLHNCQUFBO0VBQXdCLFdBQUE7QUdTeEQ7QUhSWTtFQUNJLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIseUJBQUE7RUFBMkIsb0JBQUE7RUFBc0IsaUJBQUE7RUFBbUIsa0JBQUE7QUdldkg7QUhiWTtFQUNJLHVDQ0NJO0VERDZCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsY0NaeEU7RURZOEYseUJBQUE7RUFBMkIsbUJBQUE7RUFBcUIsbUJBQUE7QUdxQjdKO0FIcEJnQjtFQUFnQixXQUFBO0FHdUJoQztBSHJCWTtFQUFVLFdBQUE7RUFBYSxZQUFBO0VFZC9CLGtCRmMrRDtFRWIvRCxPRmF3RTtFRVp4RSxXRlkwRTtFRVgxRSxNRlcrRTtFRVYvRSxZRlVpRjtFQUFPLHlCQ2QzRTtFRGM4RyxXQUFBO0VBQWEsV0FBQTtBR2lDNUk7QUhoQ1k7RUFBUyxXQUFBO0VBQWEsWUFBQTtFRWY5QixrQkZlOEQ7RUVkOUQsVUZjdUU7RUVidkUsV0ZhNEU7RUVaNUUsU0ZZaUY7RUVYakYsWUZXc0Y7RUFBTyx5QkNoQmxGO0VEZ0JtSCxXQUFBO0VBQWEsV0FBQTtBRzRDL0k7QUh6Q0k7RUFDSSxXQUFBO0VBQWEsc0JBQUE7QUc0Q3JCO0FIM0NRO0VBQ0ksZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixVQUFBO0VBQVksV0FBQTtFQUFhLGtCQUFBO0FHaUR4RTtBSGhEWTtFQUNJLGVBQUE7RUFBaUIsMEJBQUE7RUFBNEIsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixtQkFBQTtFQUFxQixZQUFBO0VBQWMsaUJBQUE7RUFBbUIsV0FBQTtFQUFhLGtCQUFBO0FHMERuSztBSHhEWTtFQUNDLGtCQUFBO0VBQW9CLFNBQUE7RUFBVyxPQUFBO0VBQVMsWUFBQTtFRTJCakQsVUYzQmdGO0VFNEJoRix3QkFBQTtFQTlDQSxrQkZrQnVHO0VFakJ2RywwQkZpQnVHO0VFaEJ2Ryx1QkZnQnVHO0VFZnZHLHFCRmV1RztFRWR2RyxzQkZjdUc7RUFBVSxnQkFBQTtFRU1qSCxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VGVjZLLG1CQUFBO0VBQXFCLHNCQ3RCeEw7RURzQndOLHlDQUFBO0FHNkV0TztBSDVFYTtFQUNJLFdBQUE7RUFBYSxXQUFBO0VBQWEsU0FBQTtBR2dGM0M7QUg5RXFCO0VBQ0ksZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQiwwQkFBQTtBR2tGNUQ7QUgvRWlCO0VBQ0csc0JDL0JOO0VEK0JzQyx5QkFBQTtFQUEyQixXQUFBO0VBQWEsWUFBQTtFQUFjLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLGNDbENsSTtFRGtDd0osaURBQUE7RUFBK0MsZUFBQTtFRUhsTixnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FDNkZKO0FIN0ZvQjtFQUNJLHNCQ2pDVjtFRGlDMEMsY0NwQ3pDO0FFb0lmO0FIM0ZZO0VBQ0ksa0JBQUE7QUc2RmhCO0FINUZnQjtFQUNJLHNCQ3pDTjtFRHlDc0MsV0N6Q3RDO0VEeUMyRCxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixtQkFBQTtFQUFxQix5QkFBQTtFQUEyQixlQUFBO0VFYjlKLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNrSEo7QUh4R29CO0VBQ0kseUJDOUNUO0VEOEMwQyxXQzNDM0M7RUQyQ2dFLHFCQzlDL0Q7QUUwSmY7QUh2R2dCO0VFQ1osVUFBQTtFQUNBLHdCQUFBO0VBOUNBLG1CRjZDd0Q7RUU1Q3hELDJCRjRDd0Q7RUUzQ3hELHdCRjJDd0Q7RUUxQ3hELHNCRjBDd0Q7RUV6Q3hELHVCRnlDd0Q7QUcrRzVEO0FIckdBO0VBQ0ksV0FBQTtFQUFhLFlBQUE7RUFBYyx5QkFBQTtFRWhFM0Isa0JGZ0VrRjtFRS9EbEYsVUYrRDJGO0VFOUQzRixVRjhEZ0c7RUU3RGhHLFNGNkRvRztFRTVEcEcsWUY0RHlHO0VBQU8sa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGFBQUE7QUdtSHpLO0FIbEhJO0VBQ0ksVUFBQTtFQUFZLFdBQUE7RUFBYSx5QkMzRGQ7RUNQZixrQkZrRW9GO0VFakVwRixPRmlFNkY7RUVoRTdGLFFGZ0UrRjtFRS9EL0YsTUYrRGlHO0VFOURqRyxTRjhEbUc7RUFBSSxZQUFBO0FHNEgzRztBSDNIUTtFQUNJLFVBQUE7RUFBWSxXQUFBO0VBQWEseUJDN0RsQjtFQ1BmLGtCRm9Fd0Y7RUVuRXhGLE9GbUVpRztFRWxFakcsV0ZrRW1HO0VFakVuRyxTRmlFd0c7RUVoRXhHLFlGZ0U2RztFQUFPLFlBQUE7RUFBYyxXQUFBO0FHc0l0STtBSHBJUTtFQUNJLFVBQUE7RUFBWSxXQUFBO0VBQWEseUJDaEVsQjtFQ1BmLGtCRnVFd0Y7RUV0RXhGLFVGc0VpRztFRXJFakcsUUZxRXNHO0VFcEV0RyxRRm9Fd0c7RUVuRXhHLFlGbUU0RztFQUFPLFlBQUE7RUFBYyxXQUFBO0FHK0lySTtBSDNJQTtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMseUJBQUE7RUU1RTNCLGtCRjRFa0Y7RUUzRWxGLE9GMkUyRjtFRTFFM0YsUUYwRTZGO0VFekU3RixVRnlFK0Y7RUV4RS9GLFlGd0VxRztFQUFPLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGFBQUE7QUd5Sm5LO0FIeEpJO0VBQ0ksVUFBQTtFQUFZLFdBQUE7RUFBYSx5QkN2RWQ7RUNQZixrQkY4RW9GO0VFN0VwRixPRjZFNkY7RUU1RTdGLFFGNEUrRjtFRTNFL0YsTUYyRWlHO0VFMUVqRyxTRjBFbUc7RUFBSSxZQUFBO0VFNUR2Ryx3QkY0RHdJO0VFM0R4SSxnQ0YyRHdJO0VFMUR4SSw2QkYwRHdJO0VFekR4SSwyQkZ5RHdJO0VFeER4SSwrQkZ3RHNKO0VFdkR0Six1Q0Z1RHNKO0VFdER0SixvQ0ZzRHNKO0VFckR0SixrQ0ZxRHNKO0VFcER0SixxQkZvRG9LO0VFbkRwSyw2QkZtRG9LO0VFbERwSywwQkZrRG9LO0VFakRwSyx3QkZpRG9LO0FHOEt4SztBSDdLUTtFQUNJLFdBQUE7RUFBYSxXQUFBO0VBQWEseUJDekVuQjtFQ1BmLGtCRmdGeUY7RUUvRXpGLE9GK0VrRztFRTlFbEcsUUY4RW9HO0VFN0VwRyxNRjZFc0c7RUU1RXRHLFNGNEV3RztFQUFJLFlBQUE7RUU5RDVHLHdCRjhENkk7RUU3RDdJLGdDRjZENkk7RUU1RDdJLDZCRjRENkk7RUUzRDdJLDJCRjJENkk7RUUxRDdJLCtCRjBEMko7RUV6RDNKLHVDRnlEMko7RUV4RDNKLG9DRndEMko7RUV2RDNKLGtDRnVEMko7RUV0RDNKLHFCRnNEeUs7RUVyRHpLLDZCRnFEeUs7RUVwRHpLLDBCRm9EeUs7RUVuRHpLLHdCRm1EeUs7RUFBTyxXQUFBO0FHb01wTDtBSC9MQTtFQUVRO0lBQ0kscUJBQUE7RUdpTVY7QUFDRjtBSDlMQTtFQUVRO0lBQ0kscUJBQUE7RUcrTFY7QUFDRjtBSDVMQTtFQUdZO0lBQ0ksc0JBQUE7RUc0TGQ7RUgzTGM7SUFDSSxlQUFBO0lBQWlCLGlCQUFBO0VHOExuQztFSDVMYztJQUNJLGVBQUE7SUFBaUIsbUJBQUE7RUcrTG5DO0VIN0xjO0lBQVUsV0FBQTtJQUFhLFlBQUE7RUdpTXJDO0VIaE1jO0lBQVMsV0FBQTtJQUFhLFlBQUE7SUUvR2xDLGtCRitHa0U7SUU5R2xFLFVGOEcyRTtJRTdHM0UsV0Y2R2dGO0lFNUdoRixTRjRHcUY7SUUzR3JGLFlGMkcwRjtFR3lNNUY7RUh0TU07SUFDSSxxQkFBQTtFR3dNVjtFSHRNYztJQUNJLGtCQUFBO0VHd01sQjtFSHZNa0I7SUFDSSxrQkFBQTtJQUFvQixtQkFBQTtFRzBNMUM7RUh2TWM7SUFBRSxlQUFBO0lBQXFCLGVBQUE7RUcyTXJDO0FBQ0Y7QUh0TUE7RUFHWTtJQUNJLHNCQUFBO0lBQXdCLG1CQUFBO0VHdU10QztFSHRNYztJQUNJLGVBQUE7SUFBaUIsaUJBQUE7RUd5TW5DO0VIdk1jO0lBQ0ksZUFBQTtJQUFpQixtQkFBQTtFRzBNbkM7RUh4TWM7SUFBVSxXQUFBO0lBQWEsWUFBQTtJQUFjLHlCQUFBO0VHNk1uRDtFSDVNYztJQUFTLFdBQUE7SUFBYSxZQUFBO0lFN0lsQyxrQkY2SWtFO0lFNUlsRSxVRjRJMkU7SUUzSTNFLFdGMklnRjtJRTFJaEYsU0YwSXFGO0lFeklyRixZRnlJMEY7RUdxTjVGO0VIbE5NO0lBQ0ksV0FBQTtJQUFhLFNBQUE7RUdxTnZCO0VIcE5VO0lBQ0ksV0FBQTtFR3NOZDtFSHJOYztJQUFHLFdBQUE7SUFBYSxrQkFBQTtJQUFvQixlQUFBO0lBQWlCLGVBQUE7SUFBaUIsWUFBQTtJQUFjLG1CQUFBO0lBQXFCLFdDaEozRztFRThXWjtFSDdOYztJQUNJLFNBQUE7SUFBVyxXQUFBO0lBQWEsV0FBQTtJQUFhLGtCQUFBO0VHa092RDtFSGpPa0I7SUFBRSxlQUFBO0lBQWlCLHlCQ3ZKdEI7SUR1SnlELFdBQUE7SUFBYSxjQ3RKeEU7SURzSjhGLHFCQUFBO0lBQXVCLFdBQUE7SUFBYSxZQUFBO0lBQWMsaUJBQUE7SUFBbUIsZ0JBQUE7RUc0T2hMO0VIMU9jO0lBQ0ksa0JBQUE7SUVyR2hCLFVGcUdzRDtJRXBHdEQsd0JBQUE7SUE5Q0EsbUJGa0o2RTtJRWpKN0UsMkJGaUo2RTtJRWhKN0Usd0JGZ0o2RTtJRS9JN0Usc0JGK0k2RTtJRTlJN0UsdUJGOEk2RTtJQUFVLE1BQUE7SUFBUSxXQUFBO0VHcVBqRztFSG5Qc0I7SUFBRyx3Q0FBQTtFR3NQekI7RUhqUE07SUFDSSxhQUFBO0lBQWUsbUJBQUE7SUFBcUIsdUJBQUE7SUFBeUIseUJDbksxRDtJRG1LNkYsV0FBQTtJQUFhLFlBQUE7SUFBYyxXQUFBO0lFN0duSSxVRjZHaUs7SUU1R2pLLHdCQUFBO0lBdERBLGVGa0t5TDtJRWpLekwsT0ZpSytMO0lFaEsvTCxXRmdLaU07SUUvSmpNLFVGK0pzTTtJRTlKdE0sWUY4SjRNO0lFbEk1TSw0QkFBQTtJQUNBLG9DQUFBO0lBQ0EsaUNBQUE7SUFDQSwrQkFBQTtJQUNBLGdDQUFBO0VDbVlGO0VIcFFVO0lFOUdSLFVGK0c2QjtJRTlHN0Isd0JBQUE7SUF0REEsZUZvS21EO0lFbktuRCxPRm1LeUQ7SUVsS3pELFdGa0syRDtJRWpLM0QsTUZpS2dFO0lFaEtoRSxZRmdLa0U7RUc0UXBFO0VIMVFVO0lFakhSLFVGa0g2QjtJRWpIN0Isd0JBQUE7SUF0REEsZUZ1S21EO0lFdEtuRCxVRnNLeUQ7SUVyS3pELFFGcUs4RDtJRXBLOUQsU0ZvS2dFO0lFbktoRSxZRm1LcUU7RUdrUnZFO0VIL1FNO0lBQWtCLGNBQUE7RUdrUnhCO0VIalJNO0lBQVEsY0FBQTtFR29SZDtBQUNGO0FIalJBO0VBR1k7SUFDSSxrQkFBQTtFR2lSZDtBQUNGO0FIelFBO0VBR1k7SUFDSSxrQkFBQTtFR3lRZDtFSHRRTTtJQUFpQixVQUFBO0VHeVF2QjtBQUNGO0FIblFBO0VBQ0k7SUFDSSxhQUFBO0VHcVFOO0VIblFVO0lBQ0ksZUFBQTtFR3FRZDtFSGxRTTtJQUFpQixXQUFBO0lBQWEsU0FBQTtFR3NRcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2Nzcy92YXJpYWJsZXMuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jc3MvbWl4aW5zLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG5oZWFkZXJ7XHJcbiAgICB3aWR0aDogJGNvbGdyaWQtMTAwOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0OyBwYWRkaW5nOiAkUGFkZGluZ1RvcDIgJFBhZGRpbmdib3R0b20yOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLGF1dG8sMCxhdXRvKTsgei1pbmRleDogMjtcclxuICAgIC5oZWFkZXItY29udGVudHtcclxuICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nOiAyM3B4IDAgMCA0MHB4OyBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDgwcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAtOXB4OyBsaW5lLWhlaWdodDogNTZweDsgbWFyZ2luOiAwIDAgMTdweCAwOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc3ViaGVhZGluZ0ZvbnR1c2U7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogNDJweDsgY29sb3I6ICRwcmltYXJ5Q29sb3I7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDAgMCAwIDU2cHg7IGxldHRlci1zcGFjaW5nOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAmOjpmaXJzdC1sZXR0ZXJ7Y29sb3I6I2ZmZjt9ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmV7IHdpZHRoOiA4MXB4OyBoZWlnaHQ6IDgxcHg7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsYXV0bywwLGF1dG8pOyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5Q29sb3I7IGNvbnRlbnQ6IFwiXCI7IHotaW5kZXg6IC0xO31cclxuICAgICAgICAgICAgJjphZnRlcnsgd2lkdGg6IDU5cHg7IGhlaWdodDogNTlweDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsNThweCxhdXRvLDY5cHgsYXV0byk7IGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7IGNvbnRlbnQ6IFwiXCI7IHotaW5kZXg6IC0yO31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LW1lbnV7IFxyXG4gICAgICAgIGZsb2F0OiBsZWZ0OyBtYXJnaW46IDQ4cHggMCAwIDE2NHB4OyBcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgbWFyZ2luOiAwIDAgMCAwOyBwYWRkaW5nOiAwOyBmbG9hdDogbGVmdDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogMCAyMHB4OyBib3JkZXItcmFkaXVzOiA1MHB4OyBoZWlnaHQ6IDQ0cHg7IGxpbmUtaGVpZ2h0OiA0NnB4OyBmbG9hdDogbGVmdDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwMCU7IGxlZnQ6IDA7IHdpZHRoOiAyNTBweDsgQGluY2x1ZGUgb3BhY2l0eSgwKTsgQGluY2x1ZGUgdmlzaWJsaXR5KGhpZGRlbik7ICBvdmVyZmxvdzogaGlkZGVuOyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuM3MsZWFzZS1pbi1vdXQpOyBib3JkZXItcmFkaXVzOiAxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tbW9uQ29sb3I7IGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjEpIDFweCAwIDIwcHg7IFxyXG4gICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IGZsb2F0OiBsZWZ0OyBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAxN3B4OyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21tb25Db2xvcjsgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDsgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgbGluZS1oZWlnaHQ6IG5vcm1hbDsgYm9yZGVyLXJhZGl1czogMDsgY29sb3I6ICRkZWZhdWx0Q29sb3I7IGJvcmRlci1ib3R0b206cmdiYSgyNTUsMjU1LDI1NSwuMikgMXB4IHNvbGlkIDsgZm9udC1zaXplOiAxN3B4OyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuM3MsZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21tb25Db2xvcjsgY29sb3I6ICRkZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MCAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbW1vbkNvbG9yOyBjb2xvcjogJGNvbW1vbkNvbG9yOyBwYWRkaW5nLWxlZnQ6IDQwcHg7IHBhZGRpbmctcmlnaHQ6IDQwcHg7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGZvbnQtc2l6ZTogMTZweDsgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsLjNzLGVhc2UtaW4tb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVmYXVsdENvbG9yOyBjb2xvcjogJGNvbW1vbkNvbG9yOyBib3JkZXItY29sb3I6ICRkZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDEpOyBAaW5jbHVkZSB2aXNpYmxpdHkodmlzaWJsZSk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uaHVtYmVyZ2VyLW1lbnV7IFxyXG4gICAgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgYm9yZGVyOiAkYWRkaXRpb25Db2xvclR3byAycHggc29saWQ7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMjIlLDY5cHgsYXV0byk7IGJvcmRlci1yYWRpdXM6IDVweDsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBibG9jazsgZGlzcGxheTogbm9uZTtcclxuICAgIHNwYW57XHJcbiAgICAgICAgd2lkdGg6IDYwJTsgaGVpZ2h0OiAzcHg7IGJhY2tncm91bmQtY29sb3I6ICRhZGRpdGlvbkNvbG9yVHdvOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLDAsMCwwKTsgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlOyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsYXV0bywtNnB4LGF1dG8pOyBtYXJnaW46IGF1dG87IGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvclR3bzsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywwLDZweCxhdXRvKTsgbWFyZ2luOiBhdXRvOyBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY3Jvc3N7XHJcbiAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyBib3JkZXI6ICRhZGRpdGlvbkNvbG9yVHdvIDJweCBzb2xpZDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCwwLDEwMHB4LGF1dG8pOyBtYXJnaW46IGF1dG87IGJvcmRlci1yYWRpdXM6IDVweDsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBub25lO1xyXG4gICAgc3BhbntcclxuICAgICAgICB3aWR0aDogNjAlOyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsMCwwLDApOyBtYXJnaW46IGF1dG87IEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoNDVkZWcpLGNlbnRlciBjZW50ZXIsZmxhdCk7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsMCwwLDApOyBtYXJnaW46IGF1dG87IEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoOTBkZWcpLGNlbnRlciBjZW50ZXIsZmxhdCk7IGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTYwMHB4KSBhbmQgKG1heC13aWR0aDoxODAwcHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIC5uYXYtbWVudXsgXHJcbiAgICAgICAgICAgIG1hcmdpbjogNDhweCAwIDAgNjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEzNjZweCkgYW5kIChtYXgtd2lkdGg6MTc1MHB4KXtcclxuICAgIGhlYWRlcntcclxuICAgICAgICAubmF2LW1lbnV7IFxyXG4gICAgICAgICAgICBtYXJnaW46IDQ4cHggMCAwIDY1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEzNjVweCl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDE3cHg7XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7IG1hcmdpbjogMCAwIDFweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4OyBwYWRkaW5nOiAwIDAgMCAzOXB4OyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YmVmb3JleyB3aWR0aDogNjBweDsgaGVpZ2h0OiA2MHB4O31cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDMwcHgsYXV0byw0OHB4LGF1dG8pO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LW1lbnV7IFxyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDMwcHg7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkeyBcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OyBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF7cGFkZGluZzogMCAxMHB4OyAgICAgZm9udC1zaXplOiAxOHB4O31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDE3cHg7IG1hcmdpbjogMCAwIDAgMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7IG1hcmdpbjogMCAwIDFweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4OyBwYWRkaW5nOiAwIDAgMCAzOXB4OyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YmVmb3JleyB3aWR0aDogNjBweDsgaGVpZ2h0OiA2MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZkMjRmO31cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDMwcHgsYXV0byw0OHB4LGF1dG8pO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LW1lbnV7IFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgbWFyZ2luOiAwOyAgXHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBheyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAyNXB4IDA7IGZvbnQtc2l6ZTogMzZweDsgaGVpZ2h0OiBhdXRvOyBsaW5lLWhlaWdodDogbm9ybWFsOyBjb2xvcjogJGNvbW1vbkNvbG9yO31cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOyB3aWR0aDogMTAwJTsgZmxvYXQ6IGxlZnQ7IHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgYXtwYWRkaW5nOiAwIDQwcHg7IGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnlDb2xvcjsgd2lkdGg6IGF1dG87IGNvbG9yOiAkZGVmYXVsdENvbG9yOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZsb2F0OiBub25lOyBoZWlnaHQ6IDQ0cHg7IGxpbmUtaGVpZ2h0OiA0NnB4OyBmb250LXdlaWdodDogNzAwO31cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBAaW5jbHVkZSBvcGFjaXR5KDEpOyBAaW5jbHVkZSB2aXNpYmxpdHkodmlzaWJsZSk7IHRvcDogMDsgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudS1jb3ZlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7ICAgei1pbmRleDogMTA7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IEBpbmNsdWRlIG9wYWNpdHkoMCk7ICAgQGluY2x1ZGUgcG9zaXRpb24oZml4ZWQsMCxhdXRvLC0xMDAlLGF1dG8pOyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuNXMsZWFzZS1pbik7XHJcbiAgICAgICAgICAgICYub3BlbntcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7IEBpbmNsdWRlIHBvc2l0aW9uKGZpeGVkLDAsYXV0bywwLGF1dG8pO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAmLmNsb3Nle1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwKTsgQGluY2x1ZGUgcG9zaXRpb24oZml4ZWQsYXV0bywwLDEwMCUsYXV0byk7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5odW1iZXJnZXItbWVudXsgIGRpc3BsYXk6IGJsb2NrO31cclxuICAgICAgICAuY3Jvc3N7IGRpc3BsYXk6IGJsb2NrO31cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0ODBweCkgYW5kIChtYXgtd2lkdGg6NjM5cHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIC5oZWFkZXItY29udGVudHtcclxuICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDQ2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozNjBweCkgYW5kIChtYXgtd2lkdGg6NDc5cHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIC5oZWFkZXItY29udGVudHtcclxuICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIC0xcHg7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmh1bWJlcmdlci1tZW51eyByaWdodDogMTUlO31cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM1OXB4KXtcclxuICAgIGhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIC5oZWFkZXItY29udGVudHtcclxuICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmh1bWJlcmdlci1tZW51eyByaWdodDogMjBweDsgdG9wOiA0M3B4O31cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbiIsIiRwcmltYXJ5Q29sb3I6ICNmZjYwM2M7XHJcbiRzZWNvbmRhcnlDb2xvcjogI2ZkZTc1NjtcclxuJGRlZmF1bHRDb2xvcjogIzNlM2EzOTtcclxuJGRlZmF1bHRDb2xvcnR3bzogIzA1MDUwNTtcclxuJG1haW5Db250YWluZXI6IDEyMDBweDtcclxuJGNvbW1vbkNvbG9yOiAjZmZmO1xyXG4kY29tbW9uQ29sb3IyOiAjZmNmY2ZjO1xyXG4kYWRkaXRpb25Db2xvck9uZTogIzEwMjYzMTtcclxuJGFkZGl0aW9uQ29sb3JUd286ICMzNTEwNTU7XHJcbiRhZGRpdGlvbkNvbG9yVGhyZWU6ICM4ZThkOGQ7XHJcblxyXG5cclxuJGhlYWRpbmdGb250dXNlOiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuJHN1YmhlYWRpbmdGb250dXNlOiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJGRlc2NyaWJlRm9udHVzZTogJ0JlbGxvdGEgVGV4dCcsIGN1cnNpdmU7XHJcblxyXG5cclxuJG1haW5Db250YWluZXI6IDEyMDBweDtcclxuXHJcbiRjb2xncmlkLTEwOiAxMCU7XHJcbiRjb2xncmlkLTIwOiAyMCU7XHJcbiRjb2xncmlkLTI1OiAyNSU7XHJcbiRjb2xncmlkLTMwOiAzMCU7XHJcbiRjb2xncmlkLTMzOiAzMy4zMzMzMyU7XHJcbiRjb2xncmlkLTQwOiA0MCU7XHJcbiRjb2xncmlkLTUwOiA1MCU7XHJcbiRjb2xncmlkLTYwOiA2MCU7XHJcbiRjb2xncmlkLTcwOiA3MCU7XHJcbiRjb2xncmlkLTgwOiA4MCU7XHJcbiRjb2xncmlkLTkwOiA5MCU7XHJcbiRjb2xncmlkLTEwMDogMTAwJTtcclxuXHJcbiRQYWRkaW5nVG9wOiAxMjNweDtcclxuJFBhZGRpbmdib3R0b206IDEyM3B4O1xyXG5cclxuJFBhZGRpbmdUb3AyOiA0NHB4O1xyXG4kUGFkZGluZ2JvdHRvbTI6IDQ0cHg7XHJcblxyXG4kZGVmYXVsdC1mb250c2l6ZTogMTZweDtcclxuJGZvbnQtYmlnLWV4dHJhOiAxMTBweDtcclxuJGZvbnQtYmlnLXVsdHJhOiA3MHB4O1xyXG4kZm9udC1iaWc6IDQycHg7XHJcbiRmb250LW1pZGl1bTogMzBweDtcclxuJGZvbnQtc21hbGw6IDIwcHg7IiwiQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbiwkbGVmdCwkcmlnaHQsJHRvcCwkYm90dG9tKXtcclxuICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XHJcbiAgICBsZWZ0OiAkbGVmdDtcclxuICAgIHJpZ2h0OiAkcmlnaHQ7XHJcbiAgICB0b3A6ICR0b3A7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbkBtaXhpbiB2aXNpYmxpdHkoJHZhbHVlKXtcclxuICAgIHZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICAgIC13ZWJraXQtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG4gICAgLW1vei12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtby12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtbXMtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbHVlLXR5cGUsJG9yaWdpbiwkc3R5bGUpe1xyXG4gICAgdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbHVlLXR5cGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogJHN0eWxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiAkc3R5bGU7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxufVxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbiwkZHVyYXRpb24sJGJlaGF2aW91cil7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkYmVoYXZpb3VyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbn1cclxuQG1peGluIGZpbHRlcigkdmFsdWUpe1xyXG4gICAgZmlsdGVyOiAkdmFsdWU7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogJHZhbHVlO1xyXG4gICAgLW1vei1maWx0ZXI6ICR2YWx1ZTtcclxuICAgIC1vLWZpbHRlcjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCgkdmFsdWUpe1xyXG4gICAgZmxleDogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsdWU7XHJcbiAgICAtbW96LWZsZXg6ICR2YWx1ZTtcclxuICAgIC1vLWZsZXg6ICR2YWx1ZTtcclxuICAgIC1tcy1mbGV4OiAkdmFsdWU7XHJcbn1cclxuQG1peGluIG9wYWNpdHkoJHZhbHVlKXtcclxuICAgIG9wYWNpdHk6ICR2YWx1ZTtcclxuICAgIGZpbHRlcjogQWxwaGEob3BhY2l0eT0kdmFsdWUpO1xyXG59XHJcbkBtaXhpbiBhbmltYXRpb24oJG5hbWUsJHRpbWUsJGZpbGxtb2RlKXtcclxuICAgIGFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkbmFtZSAkdGltZSAkZmlsbG1vZGU7XHJcbiAgICAtby1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1tcy1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTsgXHJcbn1cclxuIiwiaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDQ0cHggNDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG4gIHotaW5kZXg6IDI7XG59XG5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyM3B4IDAgMCA0MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbmhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ28gaDEge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDgwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAtOXB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgbWFyZ2luOiAwIDAgMTdweCAwO1xufVxuaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDQycHg7XG4gIGNvbG9yOiAjZmY2MDNjO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAwIDAgMCA1NnB4O1xuICBsZXR0ZXItc3BhY2luZzogOXB4O1xufVxuaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyBoMjo6Zmlyc3QtbGV0dGVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvOmJlZm9yZSB7XG4gIHdpZHRoOiA4MXB4O1xuICBoZWlnaHQ6IDgxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlNzU2O1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAtMTtcbn1cbmhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ286YWZ0ZXIge1xuICB3aWR0aDogNTlweDtcbiAgaGVpZ2h0OiA1OXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDU4cHg7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IDY5cHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAzYztcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogLTI7XG59XG5oZWFkZXIgLm5hdi1tZW51IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogNDhweCAwIDAgMTY0cHg7XG59XG5oZWFkZXIgLm5hdi1tZW51IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5uYXYtbWVudSBsaSBhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5uYXYtbWVudSBsaSB1bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjUwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogQWxwaGEob3BhY2l0eT0wKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1vLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1zLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAxcHggMCAyMHB4O1xufVxuaGVhZGVyIC5uYXYtbWVudSBsaSB1bCBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xufVxuaGVhZGVyIC5uYXYtbWVudSBsaSB1bCBsaTpsYXN0LWNoaWxkIGEge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaGVhZGVyIC5uYXYtbWVudSBsaSB1bCBsaSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICMzZTNhMzk7XG4gIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxcHggc29saWQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5oZWFkZXIgLm5hdi1tZW51IGxpIHVsIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzNlM2EzOTtcbn1cbmhlYWRlciAubmF2LW1lbnUgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbmhlYWRlciAubmF2LW1lbnUgbGk6bGFzdC1jaGlsZCBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbmhlYWRlciAubmF2LW1lbnUgbGk6bGFzdC1jaGlsZCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlM2EzOTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogIzNlM2EzOTtcbn1cbmhlYWRlciAubmF2LW1lbnUgbGk6aG92ZXIgdWwge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IEFscGhhKG9wYWNpdHk9MSk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLW1vei12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtby12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtbXMtdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmh1bWJlcmdlci1tZW51IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAjMzUxMDU1IDJweCBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMjIlO1xuICB0b3A6IDY5cHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmh1bWJlcmdlci1tZW51IHNwYW4ge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5odW1iZXJnZXItbWVudSBzcGFuOmJlZm9yZSB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxMDU1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IC02cHg7XG4gIGJvdHRvbTogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBjb250ZW50OiBcIlwiO1xufVxuLmh1bWJlcmdlci1tZW51IHNwYW46YWZ0ZXIge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbiAgdG9wOiA2cHg7XG4gIGJvdHRvbTogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uY3Jvc3Mge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6ICMzNTEwNTUgMnB4IHNvbGlkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMHB4O1xuICBib3R0b206IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY3Jvc3Mgc3BhbiB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxMDU1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC1vLXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbn1cbi5jcm9zcyBzcGFuOmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAtby10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSBhbmQgKG1heC13aWR0aDogMTgwMHB4KSB7XG4gIGhlYWRlciAubmF2LW1lbnUge1xuICAgIG1hcmdpbjogNDhweCAwIDAgNjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LXdpZHRoOiAxNzUwcHgpIHtcbiAgaGVhZGVyIC5uYXYtbWVudSB7XG4gICAgbWFyZ2luOiA0OHB4IDAgMCA2NXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAxN3B4O1xuICB9XG4gIGhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ28gaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBtYXJnaW46IDAgMCAxcHggMDtcbiAgfVxuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIGgyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgcGFkZGluZzogMCAwIDAgMzlweDtcbiAgfVxuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvOmJlZm9yZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIGhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ286YWZ0ZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzBweDtcbiAgICByaWdodDogYXV0bztcbiAgICB0b3A6IDQ4cHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIGhlYWRlciAubmF2LW1lbnUge1xuICAgIG1hcmdpbjogMzBweCAwIDAgMzBweDtcbiAgfVxuICBoZWFkZXIgLm5hdi1tZW51IGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgfVxuICBoZWFkZXIgLm5hdi1tZW51IGxpOmxhc3QtY2hpbGQgYSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSBsaSBhIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAxN3B4O1xuICAgIG1hcmdpbjogMCAwIDAgMTAwcHg7XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyBoMSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIG1hcmdpbjogMCAwIDFweCAwO1xuICB9XG4gIGhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ28gaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBwYWRkaW5nOiAwIDAgMCAzOXB4O1xuICB9XG4gIGhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ286YmVmb3JlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZDI0ZjtcbiAgfVxuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvOmFmdGVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiA0OHB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICBoZWFkZXIgLm5hdi1tZW51IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSBsaSBhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjVweCAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBoZWFkZXIgLm5hdi1tZW51IGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSBsaTpsYXN0LWNoaWxkIGEge1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlNzU2O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiAjM2UzYTM5O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBoZWFkZXIgLm5hdi1tZW51IGxpIHVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IEFscGhhKG9wYWNpdHk9MSk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAtd2Via2l0LXZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgLW1vei12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC1vLXZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgLW1zLXZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciAubmF2LW1lbnUgbGkgdWwgbGkgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuICBoZWFkZXIgLm1lbnUtY292ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MDNjO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogQWxwaGEob3BhY2l0eT0wKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogYXV0bztcbiAgICB0b3A6IC0xMDAlO1xuICAgIGJvdHRvbTogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgfVxuICBoZWFkZXIgLm1lbnUtY292ZXIub3BlbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IEFscGhhKG9wYWNpdHk9MSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICBoZWFkZXIgLm1lbnUtY292ZXIuY2xvc2Uge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBBbHBoYShvcGFjaXR5PTApO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAwJTtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgaGVhZGVyIC5odW1iZXJnZXItbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgaGVhZGVyIC5jcm9zcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIHtcbiAgICBtYXJnaW46IDAgMCAwIDQ2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIHtcbiAgICBtYXJnaW46IDAgMCAwIC0xcHg7XG4gIH1cbiAgaGVhZGVyIC5odW1iZXJnZXItbWVudSB7XG4gICAgcmlnaHQ6IDE1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyB7XG4gICAgbWFyZ2luOiAwIDAgMCAwO1xuICB9XG4gIGhlYWRlciAuaHVtYmVyZ2VyLW1lbnUge1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNDNweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/about/about.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/about/about.component.ts ***!
    \***********************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppHomeAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var details_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r10.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r10.subheading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r10.content);
      }
    }

    function AboutComponent_li_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bioDel_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bioDel_r11.property);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", bioDel_r11.attibute, " ");
      }
    }

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.title = "Who am I";
        this.main = "About Me";
        this.headingdetails = [{
          "heading": "What I do best",
          "subheading": "A product designer focusing on mobile app interactive experiences",
          "content": ""
        }, {
          "heading": "A bit about me",
          "subheading": "",
          "content": "Hungry, ambitious, and loves to give back by openly sharing his process. Currently, Creative Director at DJVWB where Yoneth Asmara envisions and conceptualizes digital products for clients like Tinder, Boosted Boards, Lufthansa, and Flip."
        }];
        this.aboutMoreContent = "Hello! I’m Daniel Curry. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.";
        this.bioDetails = [{
          "property": "Age",
          "attibute": 34
        }, {
          "property": "Residence",
          "attibute": "INDIA"
        }, {
          "property": "Freelance",
          "attibute": "Available"
        }, {
          "property": "Address",
          "attibute": "Kolkata, Bamangachi, INDIA"
        }, {
          "property": "Phone",
          "attibute": "+91 91 4311 6017"
        }, {
          "property": "Whats App",
          "attibute": "+91 9088569689"
        }, {
          "property": "Skype",
          "attibute": "rahullooksforward1986"
        }, {
          "property": "E-mail",
          "attibute": "rahullooksforward@gmail.com"
        }];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 65,
      vars: 5,
      consts: [[1, "p-t", "p-b"], [1, "dot-design"], [1, "container"], [1, "about-section"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 4722 3500", 0, "xml", "space", "preserve"], ["d", "M1356.04,3242.26c6.91,4.58,15.47,6.67,23.69,5.59h263.62c-4.91-47.74-8.02-98.58,12.53-141.94\n               c3.82-8.06,8.49-15.82,10.9-24.41c5.47-19.53-0.19-43.81,14.48-57.81c7.79,8.32,9.4,20.54,10.33,31.91\n               c4.6,56.07,2.15,112.71-7.26,168.17c-1.38,8.15-2.06,16.74,1.71,24.09h288.36c7.4-49.86,9.62-100.47,17.02-150.33\n               c20.93-141.01,41.91-283.61,29.27-425.61c-0.43-4.83-1-9.92-3.87-13.83c-7.03-9.54-21.75-6.13-33.04-2.54\n               c-45.68,14.55-94.35,15.77-142.24,17.96c-88.69,4.06-177.16,11.87-265.42,21.44c-43.12,4.67-86.19,9.78-129.24,15.07\n               c-26.65,3.27-87.36-1.45-104.09,23.2c-15.55,22.9-5.84,80.65-6.29,107.27c-0.76,45.41-0.52,90.83,0.73,136.23\n               c1.25,45.4,3.5,90.77,6.76,136.07C1345.29,3131.14,1342.31,3233.16,1356.04,3242.26z", 1, "st11"], ["d", "M1224.05,1586.02c-15.98,8.75-32.05,17.88-45.04,30.66c-17.08,16.8-27.8,38.86-38.2,60.45\n               c-34.37,71.36-68.73,142.72-103.1,214.08c-4.75,9.86-9.55,21.35-5.07,31.33c4.28,9.54,15.3,13.73,25.24,16.99\n               c40.55,13.29,81.11,26.58,121.66,39.88c12.4,4.06,25.49,8.18,38.28,5.61c12.79-2.57,24.72-14.42,22.48-27.27\n               c17.13,68.7-8.84,143.03,10.25,211.22c20.85,74.49,93.72,137.56,79.29,213.56c-4.04,21.27-14.85,40.59-21.38,61.23\n               c-21.7,68.57,5.45,142.48,3,214.37c-1.17,34.25-8.26,71.98,11.29,100.12c13.76,19.81,37.58,29.62,60.22,37.91\n               c137.05,50.17,291.75,81.46,426.87,26.32c43.75-17.85,83.51-44.08,122.52-70.75c52.12-35.64,108.36-80.61,113.14-143.56\n               c2.43-32.05-9.35-63.26-14.44-94.99c-6.55-40.82-1.99-82.52-3.46-123.83c-2.92-82.07-29.47-161.14-49.03-240.89\n               c-19.56-79.76-32.05-164.82-7.2-243.09c5.63,13.86,16.46,25.53,29.86,32.18c58.64-35.15,111.02-80.68,154-133.85\n               c5.01-6.2,10.14-13.21,9.93-21.18c-0.18-6.62-4.03-12.51-7.76-17.99c-11.9-17.52-23.8-35.05-35.7-52.57\n               c-16.5-24.29-33.03-48.63-51.7-71.29c-48.41-58.73-111.15-105.56-181.22-135.26c-21.12-8.95-42.87-16.36-64.93-22.6\n               c-109.83-31.07-213.88-24.47-325.12-8.84C1401.36,1487.61,1309.68,1539.14,1224.05,1586.02z", 1, "st12"], ["d", "M1450.57,1521.53c32.21,26.28,66.37,50.16,102.11,71.38c16.17,9.6,35.44,18.93,53.05,12.3\n               c11.9-4.48,20.06-15.32,27.15-25.88c13.35-19.89,25.3-40.72,35.74-62.29c5.13-10.6,9.97-21.67,10.79-33.42\n               c0.79-11.34-2.21-22.57-5.19-33.55c-7.2-26.56-14.41-53.11-21.61-79.67c-0.87-3.22-1.9-6.68-4.53-8.73\n               c-2.5-1.95-5.89-2.19-9.05-2.35c-45.18-2.29-147.13-26.1-177.92,19.78C1445.2,1402.8,1432.08,1506.44,1450.57,1521.53z", 1, "st13"], ["d", "M1412.42,1225.28c-0.15,9.02-0.03,18.79-5.38,26.06c-3.21,4.37-8.02,7.25-11.88,11.05\n               c-15.19,14.94-10.31,44.58,8.86,53.88c7.5,3.64,16.76,4.76,22.01,11.23c6.39,7.88,3.64,19.34,2.93,29.47\n               c-2.82,40.05,30.65,72.33,61.46,98.07c19.94,16.65,42.02,34.03,67.98,34.9c35.98,1.2,64.26-29.03,87.24-56.75\n               c16.48-19.87,33.2-40.14,43-64.02c11.45-27.89,12.68-58.76,13.76-88.9c1.79-49.91,3.57-99.81,5.36-149.72\n               c0.78-21.76,1-45.42-12.01-62.88c-8.29-11.12-20.92-18.15-33.71-23.51c-58.36-24.5-144.05-21.06-194.59,21.16\n               C1427.89,1098.35,1413.19,1177.23,1412.42,1225.28z", 1, "st14"], ["d", "M1342.53,1291.13c-15.14-26.66-47.31-41.67-58.31-70.29c-6.45-16.78-4.45-35.57-8.18-53.16\n               c-6.96-32.77-33.61-65.05-20.47-95.87c6.46-15.16,21.14-24.91,31.57-37.67c11.23-13.73,17.41-30.81,26.8-45.85\n               c22.12-35.42,60.19-57.14,96.7-77.41c16.39-9.1,33.27-18.37,51.85-20.91c14.34-1.96,29.17,0.18,43.24-3.26\n               c27.16-6.65,48.13-33.22,76.08-33.05c29.81,0.18,50.24,30.21,77.95,41.19c20.09,7.97,44.96,6.35,60.3,21.58\n               c15.68,15.57,13.99,41.64,25.52,60.49c18.97,31,70.72,39.05,74.71,75.18c2.33,21.08-14.4,39.55-17.48,60.53\n               c-4.6,31.38,21.37,65.65,5.24,92.96c-4.79,8.11-12.76,14.08-16.91,22.53c-7.27,14.84-0.91,32.77-4.19,48.97\n               c-7.05,34.81-51.07,45.05-86.46,48.07c2.02-45.22,4.04-90.44,6.05-135.66c0.62-13.91,1.19-28.21-3.27-41.4\n               c-6.63-19.6-23.24-33.85-39.14-47.08c-19.1-15.9-40.61-32.68-65.44-31.95c-14.28,0.41-27.64,6.68-41.47,10.27\n               c-20.91,5.43-43.4,4.85-63.27,13.33c-19.87,8.48-36.58,31.48-27.53,51.1c2.98,6.46,8.49,11.98,9.28,19.05\n               c1.7,15.35-17.59,22.74-29.47,32.59c-20.12,16.7-5.49,68.45-1.24,100.69c-17.4-10.55-29.35-36.69-46.37-27.67\n               c-35.98,45.94,43.51,39.2,31.01,81.39C1415.77,1396.61,1350.05,1304.37,1342.53,1291.13z", 1, "st15"], ["d", "M921.6,2195.34c43.53-4.84,84.44-44.54,128.21-46.04c43.77-1.5,90.23-12.73,119.51-45.3\n               c17.8-19.81,27.41-45.44,36.63-70.42c8.31-22.5,16.74-45.75,15.63-69.71c-0.97-20.95-98.26-38.97-114.16-40.7\n               c-35.92-3.92-57.91-0.18-84.55,24.06C965.59,1999.35,915.76,2099.69,921.6,2195.34z", 1, "st16"], ["d", "M1129.88,2071.28c25.94-2.2,52.39-1.85,77.44-8.96c31.07-8.83,57.7-28.46,85.2-45.4\n               c99.36-61.19,216.8-90.17,311.87-157.84c22.36-15.92,43.34-33.88,66.98-47.84c27.67-16.34,58.34-26.81,88.76-37.17\n               c7.31,6.27,5.86,18.61-0.22,26.08c-6.07,7.47-15.3,11.47-23.87,15.86c-28.31,14.52-52.89,36.23-70.79,62.53\n               c-5.12,7.52-9.85,15.95-9.63,25.05c0.22,9.09,7.28,18.57,16.38,18.26c12.29-0.42,23.49,8.15,29.65,18.79\n               c6.16,10.64,8.19,23.1,9.87,35.28c2.34,17.04,4.08,34.99-2.34,50.95c-6.42,15.96-23.64,28.9-40.31,24.65\n               c-1.14-6.75-2.27-13.5-3.41-20.24c-8.87,6.08-17.75,12.17-26.62,18.25c-10.59,7.26-21.77,14.74-34.55,16\n               c-12.77,1.26-27.38-6.14-29.44-18.8c-1.79-11-16.42-14.94-27.06-11.63c-10.64,3.31-19.42,11.08-29.98,14.65\n               c-28.97,9.81-62.59-13.97-90.3-1.02c-9.37,4.38-16.45,12.4-23.27,20.18c-50.27,57.26-102.27,112.98-155.91,167.08\n               c-36.21,36.52-77.12,74.26-128.21,80.18c-26.76,3.1-55.98-2.54-79.19,11.15c-17.08,10.08-31.65,30.45-51.11,26.67\n               c-11.32-2.2-19.2-12.2-26.02-21.5c-30.31-41.37-57.61-125.59-32.06-176.8C960.83,2097.38,1072.53,2076.15,1129.88,2071.28z", 1, "st14"], ["d", "M2124.13,2082.7c46.19,48.82,109.97,88.45,176.75,80.87c2.44-57.25,0.11-114.71-6.98-171.57\n               c-1.98-15.87-4.44-32.06-12-46.15c-7.85-14.63-20.58-25.9-32.68-37.26c-28.41-26.68-54.75-55.71-76.85-87.82\n               c-6.76-9.82-13.54-20.32-23.99-26.05c-22.79-12.5-50.38,2.79-71.42,18.06c-36.09,26.19-95.53,74.79-68.54,124.47\n               C2035.71,1987.45,2084.86,2041.21,2124.13,2082.7z", 1, "st13"], ["d", "M2223.35,1958.31c24.58-41.29,64.46-74.66,76.37-121.22c5.4-21.09,4.49-43.19,5.01-64.96\n               c3.37-141.14,67.81-274.11,147.18-390.87c1.91-2.8,4.13-5.82,7.43-6.57c8.23-1.88,11.64,10.33,10.35,18.68\n               c-5.39,35.11-23.73,66.67-41.02,97.69c-5.83,10.46-11.29,24.42-3.34,33.38c13.61,15.33,43.47-7.49,58.24,6.73\n               c12.52,12.05-1.55,35.75,8.66,49.82c2.92,4.02,7.41,6.54,11.17,9.79c11.67,10.07,15.53,26.26,18.75,41.34\n               c1.37,6.39,2.74,12.98,1.52,19.4c-3.78,20.04-28.45,27.01-48.64,29.94c3.18,24.39-7.3,50.11-26.6,65.35\n               c-11.9,9.39-27.22,15.47-34.9,28.53c-7.92,13.46-5.4,30.32-3.26,45.78c15.6,112.34-2.26,229.11-50.74,331.64\n               c-3.53,7.48-7.37,15.07-13.55,20.57c-39.76,35.39-105.74-2.47-126.47-39.23C2189.44,2080.79,2192.28,2010.52,2223.35,1958.31z", 1, "st14"], ["d", "M1015.13,1454.63c-12.49,16.53-31.83,26.41-46.34,41.2c-20.04,20.44-29.81,50.83-24.21,78.9\n               c1.11,5.56,2.82,11.09,6,15.78c9.85,14.54,30.03,16.87,47.59,17.22c34.45,0.67,68.95-0.95,103.18-4.87\n               c3.14-0.36,6.67-0.97,8.45-3.58c1.24-1.83,1.28-4.2,1.18-6.42c-0.96-21.2-10.48-40.94-19.82-59.99\n               c-8.5-17.34-17.1-34.83-29.19-49.88c-7.96-9.91-17.29-18.57-25.92-27.87C1025.82,1444.09,1024.27,1442.53,1015.13,1454.63z", 1, "st17"], ["d", "M877.53,2660.43c84.54,10.05,172.32-20.87,240.5-95.65c3.6-3.95,7.34-8.42,8.66-14.77\n               c1.34-6.45-0.15-13.41-1.99-19.59c-16.79-56.41-60.18-83.03-100.45-98.39c-84.44-32.22-173.35-38.48-259.47-18.3\n               c-42.04,9.86-150.93,68.07-91.94,145.48C721.74,2623.39,814.73,2652.97,877.53,2660.43z", 1, "st18"], ["d", "M1041.45,2540.12c43.6-1.62,87.18-4.45,130.53-9.39c13.8-1.57,28.91-3.07,40.51,4.57\n               c17.19,11.33,17.67,35.77,17.81,56.36c0.8,123.9,55.99,242.67,56.49,366.57c0.39,97.17-32.85,191.17-44.37,287.66\n               c-4.48,1.04-9.03,2.24-13.63,2.24H927.41c-4.15-36.95-1.36-74.7,5.63-111.22c4.61-24.07,11.63-47.85,12.57-72.33\n               c0.95-24.48-5.14-50.63-22.89-67.53c-7.08-6.74-18.68-11.62-26.19-5.37c-3.66,3.05-5.17,7.93-6.36,12.55\n               c-8.81,34.42-9.44,70.44-7.16,105.89c2.98,46.41,8.5,93.25,21.11,138.01H540.53c-3.72-94.62-38.4-185.65-43.69-280.19\n               c-4.24-75.95,10.94-151.3,34.48-223.19c19.05-58.19,40.27-141.62,81.14-188.93c37.9-43.87,121.71-19.97,171.73-17.77\n               C869.88,2541.82,955.72,2543.31,1041.45,2540.12z", 1, "st19"], ["d", "M526.17,1723.71c-27.15,14.62-54.83,32.07-68.91,59.51c-13.72,26.75-12.21,58.44-10.35,88.45\n               c2.75,44.38,5.52,88.76,8.33,133.13c2.49,39.31,5.06,78.94,15.62,116.88c17.4,62.53,56.3,120.05,57.77,184.94\n               c0.45,19.97-2.71,40.12,0.54,59.82c3.25,19.71,15.05,39.92,34.36,45.03c11.08,2.93,23.14,0.53,34.02,4.1\n               c20.73,6.8,29.08,32.36,27.34,54.11s-10.38,42.62-10.92,64.43c50.76-54.01,125.42-84.68,199.48-81.95\n               c33.04,1.22,65.5,8.69,97.71,16.13c38.01,8.78,76.04,17.57,113.54,28.31c91.88,26.31,180.39,64.33,262.72,112.85\n               c-3.04-39.75-6.08-79.5-9.11-119.24c-1.66-21.68-4.06-45.15-18.83-61.11c-7.56-8.17-18.43-14.64-20.6-25.55\n               c-3.66-18.46,19.09-29.92,37.3-34.67c31.57-8.25,63.13-16.49,94.7-24.74c8.66-2.26,17.73-4.74,24.19-10.94\n               c5.12-4.91,8.04-11.64,10.42-18.31c30.77-86.13-8.17-179.32-30.89-267.92c-32.76-127.72-32.46-265.38-90.51-383.77\n               c-7.8-15.91-13.24-43.23-30.73-46.11c-31.67-5.21-32.21-1.44-81.69-12.36c-87.32-19.28-178.8,4.06-268.2,6.09\n               c-62.2,1.41-118.42,21.08-178.18,35.95C656.08,1664,589,1689.89,526.17,1723.71z", 1, "st20"], ["d", "M718.67,1645.96c90.11,59.98,204.15,82.85,310.42,62.24c30.57-5.93,60.38-15.26,89.72-25.72\n               c47.12-16.8,93.56-36.76,134.57-65.4c-77.83-16.95-157.93-23.42-237.47-19.2c-19.47,1.03-42.41,1.22-54.16-14.34\n               c-8.11-10.74-7.8-25.34-8.84-38.75c-3.64-46.92-91.52-189.96-145.89-123.88c-22.98,27.93-7.97,83.06-16.29,116.58\n               C780.06,1580.44,755.01,1620.26,718.67,1645.96z", 1, "st18"], ["d", "M722.88,1303.26c-12.1,18.9-6.29,47.01,12.32,59.57c8.91,6.01,20.38,9.04,26.48,17.9\n               c6.99,10.16,4.21,23.74,4.46,36.07c0.89,43.67,41.3,74.88,78.6,97.6c19.44,11.84,39.54,23.42,61.75,28.43\n               c22.21,5.01,47.16,2.58,65.05-11.51c9.97-7.85,17.09-18.7,23.39-29.72c53.81-94.08,57.77-207.54,60.37-315.89\n               c0.33-13.83,0.59-28.09-4.52-40.95c-10.21-25.68-38.65-38.77-65.4-45.71c-41.76-10.84-86.86-12.59-127.51,1.87\n               c-40.65,14.46-76.12,46.67-88.22,88.08c-11.16,38.2-0.6,79.18-11.3,116.96C748.06,1303.06,733.75,1300.02,722.88,1303.26z", 1, "st21"], ["d", "M820.89,1147.95c-28.07,32.65-42.15,75.53-46.53,118.36c-1.04,10.19-0.58,18.16-7.29,29.66\n               c-3.16,5.41-2.54,10.99-8.72,9.99c-26.35-4.25-30.11,4.93-28.08,29.94c1.73,21.4,22.34,27.06,30.31,39.02\n               c32.09,48.15,46.34,95.19,43.08,149.54c-3.33,55.55-33.57,105.23-54.71,156.7c-21.15,51.47-32.27,114.29-0.34,159.86\n               c-14.89-4.42-25.21-20.74-22.81-36.09c-23.63,49.89,26.08,104.07,28.29,159.22c2.02,50.34-36.15,99.2-22.43,147.68\n               c-29.18-13.72-48.87-45.53-48.14-77.76c-34.16-1.81-68.79-21.66-80.64-53.76c-7.89-21.38-5.14-44.98-6.71-67.72\n               c-1.57-22.73-9.8-47.89-30.44-57.54c-5.22-2.44-11.06-3.78-15.59-7.35c-9.88-7.78-9.79-22.98-5.65-34.86\n               c4.13-11.88,11.36-22.83,12.97-35.3c1.39-10.81-1.59-21.63-3.11-32.42c-5.46-38.75,7.92-77.41,21.1-114.25\n               c-8.06,11.8-16.12,23.6-24.17,35.41c16.53-27.37,3.65-62.58,7.53-94.32c5.09-41.69,38.96-75.17,45.96-116.59\n               c4.57-27.06-2.81-54.49-7.52-81.53c-12.05-69.18-2.79-149,50.35-194.92c12.76-11.03,27.71-19.79,38.19-33\n               c16.17-20.39,19.27-48.15,31.75-70.98c21.91-40.05,69.4-59.19,114.65-65.2c38.14-5.07,78.44-2.63,112.65,14.97\n               c31.88,16.4,63.75,52.54,60.67,90.22c-36.34,9.63-58.93-11.48-91.98-14.35C879.09,1097.59,842.25,1123.1,820.89,1147.95z", 1, "st17"], ["d", "M1044.4,1207.37c0.42,58.61-8.35,116.85-17.1,174.8c-3.47,22.97-6.94,45.93-10.4,68.9\n               c-4.6,30.48-9.39,61.54-23.27,89.06c-8.65,17.16-20.98,33.48-22.29,52.65c41.23,2.86,82.45,5.72,123.68,8.58\n               c5.6,0.39,11.39,0.83,16.37,3.42c2.56,1.33,5.28,3.28,8.05,2.46c2.01-0.6,3.32-2.51,4.31-4.36c13.41-25.29-4.66-54.98-9.4-83.21\n               c-4.54-27.08,3.66-54.88,0.75-82.18c-3.11-29.18-18.82-57.08-15.28-86.22c5.35,12.86,10.69,25.73,16.04,38.59\n               c-0.82-28.46-15.74-54.6-20.42-82.69c-2.26-13.58-2.1-27.43-1.93-41.19c0.32-26.38,0.65-52.77,0.97-79.15\n               c0.25-20.58,0.4-41.76-7.04-60.95c-7.4-19.07-22.54-34.91-40.94-43.72c-13.21-6.32-50.35-16.39-56.34,4.52\n               c-5.21,18.19,24.52,34.21,33.81,44.96C1041.86,1152.35,1044.21,1181.19,1044.4,1207.37z", 1, "st17"], ["d", "M1065.03,2149.2c11.5-0.98,23.26-2.1,33.74-6.94c9.22-4.26,16.93-11.16,24.34-18.12\n               c18.81-17.68,36.66-36.37,53.45-55.98c14.68-17.15,29.4-39.47,21.73-60.7c-2.2-6.08-6.19-11.77-6.15-18.24\n               c0.06-9.04,7.82-15.91,15.05-21.33c30.14-22.59,62.63-42.06,96.76-57.98c4.77,5.98,3.91,14.99-0.01,21.57\n               c-3.91,6.58-10.26,11.27-16.44,15.78c-11.2,8.18-22.4,16.36-33.6,24.53c-8.94,6.52-18.87,15.16-17.76,26.16\n               c1.03,10.12,11.56,16.92,21.66,18.06c10.11,1.14,20.17-1.77,30.26-3.07c39.17-5.07,80.39,16.72,98.26,51.94\n               c-2.19,8.05-14.28,5.15-21.35,0.72c-25.05-15.72-54.12-30.02-83.08-24.03c-6.1,1.26-13.41,7.2-9.71,12.21\n               c0.83,1.13,10.9,1.13,12.72,1.45c4.37,0.77,8.69,1.81,12.94,3.1c8.5,2.58,22.86,14.21,30.55,18.64\n               c15.43,8.88,22.77,17.79,33.04,32.34c5.04,7.14,9.76,10.36,13.11,18.62c1.76,4.33,3.17,8.8,4.18,13.36\n               c0.99,4.5,0.95,6.34-3.91,6.91c-3.31,0.39-6.66-0.11-9.83-1.08c-6.31-1.94-11.98-5.75-17-9.94c-8.98-7.51-17.96-16.57-29.61-17.79\n               c7.85,5.91,15.29,12.37,22.23,19.33c2.71,2.72,25.54,20.8,13.65,23.54c-5.52,1.27-12.44-0.69-17.76-2.19\n               c-7.71-2.17-14.82-6.1-21.54-10.36c-13.42-8.49-25.87-19.68-40.97-25.17c-7-2.55-14.47-3.77-21.9-2.69\n               c-39.21,5.72-50.99,67.94-90.45,71.5c-7.24,0.65-14.49-0.93-21.76-0.96c-11.41-0.05-22.45,3.69-33.31,7.18\n               c-61.09,19.62-124.13,32.38-187.02,45.1c-4.13,0.84-8.35,1.68-12.54,1.25c-5.55-0.57-10.61-3.31-15.5-5.99\n               c-26.3-14.44-58.39-29.06-79.46-50.97c-29.42-30.59,26.95-30.14,45.86-30.27C927.04,2158.22,996.15,2155.06,1065.03,2149.2z", 1, "st21"], [1, "custom-heading"], [1, "heading"], [1, "clear"], ["class", "about-heading-section", 4, "ngFor", "ngForOf"], [1, "custom-button-back"], ["href", "home#MoreAbout"], ["id", "MoreAbout", 1, "dark", "p-t", "p-b"], [1, "content", "p-t", "p-b"], [1, "span1"], [1, "span2"], [1, "details"], [1, "image-back"], ["src", "", "alt", ""], [1, "content-details"], [4, "ngFor", "ngForOf"], ["href", ""], [1, "about-heading-section"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AboutComponent_div_42_Template, 7, 3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AboutComponent_li_60_Template, 4, 2, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Online CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.main);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headingdetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.aboutMoreContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bioDetails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["section[_ngcontent-%COMP%]   .dot-design[_ngcontent-%COMP%] {\n  left: 80px;\n  top: 123px;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding-left: 40.8333%;\n  position: relative;\n  z-index: 1;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   .about-heading-section[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  margin-bottom: 70px;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   .about-heading-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #ff603c;\n  font-size: 20px;\n  margin-bottom: 18px;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   .about-heading-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #3e3a39;\n  font-size: 36px;\n  line-height: 39px;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   .about-heading-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8e8d8d;\n  font-size: 24px;\n  line-height: 39px;\n  font-family: \"Josefin Sans\", sans-serif;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -95px;\n  right: auto;\n  top: auto;\n  bottom: -178px;\n  width: 85%;\n  z-index: -1;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st11[_ngcontent-%COMP%] {\n  fill: #102631;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st12[_ngcontent-%COMP%] {\n  fill: #ff603c;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st13[_ngcontent-%COMP%] {\n  fill: #E98969;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st14[_ngcontent-%COMP%] {\n  fill: #F2A88D;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st15[_ngcontent-%COMP%] {\n  fill: #194455;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st16[_ngcontent-%COMP%] {\n  fill: #CD39EF;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st17[_ngcontent-%COMP%] {\n  fill: #1E495A;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st18[_ngcontent-%COMP%] {\n  fill: #DB7B61;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st19[_ngcontent-%COMP%] {\n  fill: #102631;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st20[_ngcontent-%COMP%] {\n  fill: #fde756;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st21[_ngcontent-%COMP%] {\n  fill: #F39C81;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .st22[_ngcontent-%COMP%] {\n  fill: #5FBBA4;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\nsection[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 60px;\n  padding-right: 60px;\n}\nsection.dark[_ngcontent-%COMP%] {\n  background-color: #102631;\n  padding-bottom: 123px;\n}\nsection.dark[_ngcontent-%COMP%]:before {\n  width: 100%;\n  height: 1px;\n  background-color: #103446;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 122px;\n  bottom: auto;\n}\nsection.dark[_ngcontent-%COMP%]:after {\n  width: 100%;\n  height: 1px;\n  background-color: #103446;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: auto;\n  bottom: 122px;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  float: left;\n  position: relative;\n  padding-left: 123px;\n  padding-right: 123px;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:before {\n  width: 1px;\n  height: 100%;\n  background-color: #103446;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:after {\n  width: 1px;\n  height: 100%;\n  background-color: #103446;\n  content: \"\";\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 0;\n  bottom: auto;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n  width: 1px;\n  height: 100%;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%]:before {\n  width: 1px;\n  height: 100%;\n  background-color: #103446;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: -123px;\n  bottom: auto;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%]:after {\n  width: 1px;\n  height: 100%;\n  background-color: #103446;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: auto;\n  bottom: -123px;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 0;\n  bottom: auto;\n  width: 1px;\n  height: 100%;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]:before {\n  width: 1px;\n  height: 100%;\n  background-color: #103446;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: -123px;\n  bottom: auto;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]:after {\n  width: 1px;\n  height: 100%;\n  background-color: #103446;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: auto;\n  bottom: -123px;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  float: left;\n  position: relative;\n  padding-left: 33.123%;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n  width: 28.301%;\n  height: 100%;\n  background-color: #ff603c;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  margin-bottom: 38px;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  float: left;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n  float: left;\n  margin-bottom: 20px;\n  color: #fff;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fde756;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n  margin-top: 94px;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\nsection.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #ff603c;\n}\n@media only screen and (max-width: 1365px) and (min-width: 1024px) {\n  section[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    left: -68px;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  section[_ngcontent-%COMP%]   .dot-design[_ngcontent-%COMP%] {\n    display: none;\n  }\n  section[_ngcontent-%COMP%]   .custom-heading[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  section[_ngcontent-%COMP%]   .custom-heading[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    float: none;\n    display: inline-block;\n    text-align: left;\n  }\n  section[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%] {\n    padding-left: 0;\n    text-align: center;\n  }\n  section[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    display: none;\n  }\n  section[_ngcontent-%COMP%]   .about-section[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n    float: none;\n    display: inline-block;\n  }\n  section.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    padding-left: 0;\n    text-align: center;\n  }\n  section.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: 200px;\n    height: 200px;\n    border-radius: 100%;\n    margin-bottom: 40px;\n  }\n  section.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n    float: none;\n    display: inline-block;\n  }\n}\n@media only screen and (max-width: 767px) {\n  section.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media only screen and (max-width: 639px) {\n  section.dark[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dC9JOlxcQU5HVUxBUiBUVVRPUklBTFxcUmFodWxZYWRhdlxcUmFodWwtWWFkYXYvc3JjXFxhcHBcXGhvbWVcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9hYm91dC9JOlxcQU5HVUxBUiBUVVRPUklBTFxcUmFodWxZYWRhdlxcUmFodWwtWWFkYXYvc3JjXFxhc3NldHNcXGNzc1xcdmFyaWFibGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2Fib3V0L0k6XFxBTkdVTEFSIFRVVE9SSUFMXFxSYWh1bFlhZGF2XFxSYWh1bC1ZYWRhdi9zcmNcXGFzc2V0c1xcY3NzXFxtaXhpbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFBYSxVQUFBO0VBQVksVUFBQTtBQ0Q3QjtBREVJO0VBQ0ksV0FBQTtFQUFhLFdBQUE7RUFBYSxzQkFBQTtFQUF3QixrQkFBQTtFQUFvQixVQUFBO0FDSTlFO0FESFE7RUFDSSxXQUFBO0VBQWEsV0FBQTtFQUFhLG1CQUFBO0FDT3RDO0FETlk7RUFDSSxjRVZEO0VGVXVCLGVBQUE7RUFBaUIsbUJBQUE7QUNVdkQ7QURSWTtFQUNJLGNFWEQ7RUZXdUIsZUFBQTtFQUFpQixpQkFBQTtBQ1l2RDtBRFZZO0VBQ0ksY0VQSztFRk91QixlQUFBO0VBQWlCLGlCQUFBO0VBQW1CLHVDRUg1RDtBRGtCcEI7QURaUTtFR2xCSixrQkhtQjBCO0VHbEIxQixXSGtCbUM7RUdqQm5DLFdIaUJ5QztFR2hCekMsU0hnQjhDO0VHZjlDLGNIZW1EO0VBQVEsVUFBQTtFQUFZLFdBQUE7QUNvQjNFO0FEbkJZO0VBQU0sYUFBQTtBQ3NCbEI7QURyQlk7RUFBTSxhRXRCSDtBRDhDZjtBRHZCWTtFQUFNLGFBQUE7QUMwQmxCO0FEekJZO0VBQU0sYUFBQTtBQzRCbEI7QUQzQlk7RUFBTSxhQUFBO0FDOEJsQjtBRDdCWTtFQUFNLGFBQUE7QUNnQ2xCO0FEL0JZO0VBQU0sYUFBQTtBQ2tDbEI7QURqQ1k7RUFBTSxhQUFBO0FDb0NsQjtBRG5DWTtFQUFNLGFBQUE7QUNzQ2xCO0FEckNZO0VBQU0sYUU3QkQ7QURxRWpCO0FEdkNZO0VBQU0sYUFBQTtBQzBDbEI7QUR6Q1k7RUFBTSxhQUFBO0FDNENsQjtBRDFDUTtFQUNJLGdCQUFBO0FDNENaO0FEM0NZO0VBQ0ksa0JBQUE7RUFBb0IsbUJBQUE7QUM4Q3BDO0FEMUNJO0VBQ0kseUJFbkNXO0VGbUMwQixxQkFBQTtBQzZDN0M7QUQ1Q1E7RUFDSSxXQUFBO0VBQWEsV0FBQTtFQUFhLHlCQUFBO0VBQTJCLFdBQUE7RUczQzdELGtCSDJDNEY7RUcxQzVGLE9IMENxRztFR3pDckcsV0h5Q3VHO0VHeEN2RyxVSHdDNEc7RUd2QzVHLFlIdUNrSDtBQ3NEdEg7QURwRFE7RUFDSSxXQUFBO0VBQWEsV0FBQTtFQUFhLHlCQUFBO0VBQTJCLFdBQUE7RUc5QzdELGtCSDhDNEY7RUc3QzVGLE9INkNxRztFRzVDckcsV0g0Q3VHO0VHM0N2RyxTSDJDNEc7RUcxQzVHLGFIMENpSDtBQzhEckg7QUQ1RFE7RUFDSSxXQUFBO0VBQWEsWUFBQTtFQUFjLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixvQkFBQTtBQ21FN0Y7QURsRVk7RUFDSSxVQUFBO0VBQVksWUFBQTtFQUFjLHlCQUFBO0VBQTJCLFdBQUE7RUduRGpFLGtCSG1EZ0c7RUdsRGhHLE9Ia0R5RztFR2pEekcsV0hpRDJHO0VHaEQzRyxNSGdEZ0g7RUcvQ2hILFlIK0NrSDtBQzRFdEg7QUQxRVk7RUFDSSxVQUFBO0VBQVksWUFBQTtFQUFjLHlCQUFBO0VBQTJCLFdBQUE7RUd0RGpFLGtCSHNEZ0c7RUdyRGhHLFVIcUR5RztFR3BEekcsUUhvRDhHO0VHbkQ5RyxNSG1EZ0g7RUdsRGhILFlIa0RrSDtBQ29GdEg7QURsRlk7RUd4RFIsa0JIeUQ4QjtFR3hEOUIsT0h3RHVDO0VHdkR2QyxXSHVEeUM7RUd0RHpDLE1Ic0Q4QztFR3JEOUMsWUhxRGdEO0VBQU8sVUFBQTtFQUFZLFlBQUE7QUMwRnZFO0FEekZnQjtFQUNJLFVBQUE7RUFBWSxZQUFBO0VBQWMseUJBQUE7RUFBMkIsV0FBQTtFRzNEckUsa0JIMkRvRztFRzFEcEcsT0gwRDZHO0VHekQ3RyxXSHlEK0c7RUd4RC9HLFdId0RvSDtFR3ZEcEgsWUh1RDJIO0FDbUcvSDtBRGpHZ0I7RUFDSSxVQUFBO0VBQVksWUFBQTtFQUFjLHlCQUFBO0VBQTJCLFdBQUE7RUc5RHJFLGtCSDhEb0c7RUc3RHBHLE9INkQ2RztFRzVEN0csV0g0RCtHO0VHM0QvRyxTSDJEb0g7RUcxRHBILGNIMER5SDtBQzJHN0g7QUR4R1k7RUdqRVIsa0JIa0U4QjtFR2pFOUIsVUhpRXVDO0VHaEV2QyxRSGdFNEM7RUcvRDVDLE1IK0Q4QztFRzlEOUMsWUg4RGdEO0VBQU8sVUFBQTtFQUFZLFlBQUE7QUNnSHZFO0FEL0dnQjtFQUNJLFVBQUE7RUFBWSxZQUFBO0VBQWMseUJBQUE7RUFBMkIsV0FBQTtFR3BFckUsa0JIb0VvRztFR25FcEcsT0htRTZHO0VHbEU3RyxXSGtFK0c7RUdqRS9HLFdIaUVvSDtFR2hFcEgsWUhnRTJIO0FDeUgvSDtBRHZIZ0I7RUFDSSxVQUFBO0VBQVksWUFBQTtFQUFjLHlCQUFBO0VBQTJCLFdBQUE7RUd2RXJFLGtCSHVFb0c7RUd0RXBHLE9Ic0U2RztFR3JFN0csV0hxRStHO0VHcEUvRyxTSG9Fb0g7RUduRXBILGNIbUV5SDtBQ2lJN0g7QUQ5SFk7RUFDSSxXQUFBO0VBQWEsWUFBQTtFQUFjLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixxQkFBQTtBQ29JNUU7QURuSWdCO0VBQ0ksY0FBQTtFQUFnQixZQUFBO0VBQWMseUJFOUVuQztFQ0NYLGtCSDZFaUc7RUc1RWpHLE9INEUwRztFRzNFMUcsV0gyRTRHO0VHMUU1RyxNSDBFaUg7RUd6RWpILFlIeUVtSDtBQzRJdkg7QUQxSWdCO0VBQ0ksV0U1RU47RUY0RTJCLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsaUJBQUE7RUFBbUIsbUJBQUE7QUNnSi9GO0FEOUlnQjtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMsV0FBQTtBQ2tKL0M7QURqSm9CO0VBQ0ksVUFBQTtFQUFZLFlBQUE7RUFBYyxXQUFBO0VBQWEsbUJBQUE7RUFBc0IsV0VqRnZFO0FEd09kO0FEdEp3QjtFQUNJLGNFdkZYO0FEK09qQjtBRHBKZ0I7RUFDSSxnQkFBQTtBQ3NKcEI7QURySm9CO0VBQ0ksNkJBQUE7RUFBK0Isa0JFMUZ6QztFRjBGcUUsV0UxRnJFO0FEbVBkO0FEeEp3QjtFQUFRLHNCRTNGbEI7RUYyRmtELGNFaEdqRDtBRDRQZjtBRG5KQTtFQUdZO0lBQ0ksV0FBQTtFQ29KZDtBQUNGO0FEOUlBO0VBRVE7SUFDSSxhQUFBO0VDK0lWO0VEN0lNO0lBQ0ksa0JBQUE7RUMrSVY7RUQ5SVU7SUFBVSxXQUFBO0lBQWEscUJBQUE7SUFBdUIsZ0JBQUE7RUNtSnhEO0VEakpNO0lBQ0ksZUFBQTtJQUFpQixrQkFBQTtFQ29KM0I7RURuSlU7SUFDSSxhQUFBO0VDcUpkO0VEbkpVO0lBQXFCLFdBQUE7SUFBYSxxQkFBQTtFQ3VKNUM7RURsSmM7SUFDSSxlQUFBO0lBQWlCLGtCQUFBO0VDcUpuQztFRHBKa0I7SUFDSSxrQkFBQTtJQUFvQixxQkFBQTtJQUF1QixZQUFBO0lBQWMsYUFBQTtJQUFlLG1CQUFBO0lBQXFCLG1CQUFBO0VDMkpuSDtFRHpKa0I7SUFBc0IsV0FBQTtJQUFhLHFCQUFBO0VDNkpyRDtBQUNGO0FEdkpBO0VBR1k7SUFDSyxrQkFBQTtJQUFvQixtQkFBQTtFQ3dKbkM7QUFDRjtBRG5KQTtFQU13QjtJQUNJLFdBQUE7RUNnSjFCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvdmFyaWFibGVzLmNvbXBvbmVudC5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvY3NzL21peGlucy5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuc2VjdGlvbnsgICAgXHJcbiAgICAuZG90LWRlc2lnbnsgbGVmdDogODBweDsgdG9wOiAxMjNweDt9XHJcbiAgICAuYWJvdXQtc2VjdGlvbnsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IGZsb2F0OiBsZWZ0OyBwYWRkaW5nLWxlZnQ6IDQwLjgzMzMlOyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDE7XHJcbiAgICAgICAgLmFib3V0LWhlYWRpbmctc2VjdGlvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IGZsb2F0OiBsZWZ0OyBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yOyBmb250LXNpemU6IDIwcHg7IG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRlZmF1bHRDb2xvcjsgZm9udC1zaXplOiAzNnB4OyBsaW5lLWhlaWdodDogMzlweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYWRkaXRpb25Db2xvclRocmVlOyBmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAzOXB4OyBmb250LWZhbWlseTogJHN1YmhlYWRpbmdGb250dXNlOyAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwtOTVweCxhdXRvLGF1dG8sLTE3OHB4KTt3aWR0aDogODUlOyB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgLnN0MTF7ZmlsbDojMTAyNjMxO31cclxuICAgICAgICAgICAgLnN0MTJ7ZmlsbDokcHJpbWFyeUNvbG9yO31cclxuICAgICAgICAgICAgLnN0MTN7ZmlsbDojRTk4OTY5O31cclxuICAgICAgICAgICAgLnN0MTR7ZmlsbDojRjJBODhEO31cclxuICAgICAgICAgICAgLnN0MTV7ZmlsbDojMTk0NDU1O31cclxuICAgICAgICAgICAgLnN0MTZ7ZmlsbDojQ0QzOUVGO31cclxuICAgICAgICAgICAgLnN0MTd7ZmlsbDojMUU0OTVBO31cclxuICAgICAgICAgICAgLnN0MTh7ZmlsbDojREI3QjYxO31cclxuICAgICAgICAgICAgLnN0MTl7ZmlsbDojMTAyNjMxO31cclxuICAgICAgICAgICAgLnN0MjB7ZmlsbDokc2Vjb25kYXJ5Q29sb3I7fVxyXG4gICAgICAgICAgICAuc3QyMXtmaWxsOiNGMzlDODE7fVxyXG4gICAgICAgICAgICAuc3QyMntmaWxsOiM1RkJCQTQ7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VzdG9tLWJ1dHRvbi1iYWNreyBcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDsgcGFkZGluZy1yaWdodDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuZGFya3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvck9uZTsgcGFkZGluZy1ib3R0b206IDEyM3B4O1xyXG4gICAgICAgICY6YmVmb3JleyBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAzNDQ2OyBjb250ZW50OiBcIlwiOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLGF1dG8sMTIycHgsYXV0byk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXJ7IFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxcHg7IGJhY2tncm91bmQtY29sb3I6ICMxMDM0NDY7IGNvbnRlbnQ6IFwiXCI7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsYXV0byxhdXRvLDEyMnB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0OyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctbGVmdDogMTIzcHg7IHBhZGRpbmctcmlnaHQ6IDEyM3B4O1xyXG4gICAgICAgICAgICAmOmJlZm9yZXsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4OyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQtY29sb3I6ICMxMDM0NDY7IGNvbnRlbnQ6IFwiXCI7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsYXV0bywwLGF1dG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDsgaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAzNDQ2OyBjb250ZW50OiBcIlwiOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDAsMCxhdXRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3BhbjF7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLGF1dG8sMCxhdXRvKTsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogIzEwMzQ0NjsgY29udGVudDogXCJcIjsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCxhdXRvLC0xMjNweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogIzEwMzQ0NjsgY29udGVudDogXCJcIjsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCxhdXRvLGF1dG8sLTEyM3B4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3BhbjJ7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDAsMCxhdXRvKTsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogIzEwMzQ0NjsgY29udGVudDogXCJcIjsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCxhdXRvLC0xMjNweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogIzEwMzQ0NjsgY29udGVudDogXCJcIjsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCxhdXRvLGF1dG8sLTEyM3B4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGV0YWlsc3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0OyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctbGVmdDogMzMuMTIzJTtcclxuICAgICAgICAgICAgICAgIC5pbWFnZS1iYWNre1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOC4zMDElOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsYXV0bywwLGF1dG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbkNvbG9yOyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAyMnB4OyBtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7IGhlaWdodDogYXV0bzsgZmxvYXQ6IGxlZnQ7IG1hcmdpbi1ib3R0b206IDIwcHg7ICBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jdXN0b20tYnV0dG9uLWJhY2t7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDk0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IGJvcmRlci1jb2xvcjogJGNvbW1vbkNvbG9yOyBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye2JhY2tncm91bmQtY29sb3I6ICRjb21tb25Db2xvcjsgY29sb3I6ICRwcmltYXJ5Q29sb3I7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMzY1cHgpIGFuZCAgKG1pbi13aWR0aDoxMDI0cHgpe1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgICAuYWJvdXQtc2VjdGlvbntcclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTY4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpe1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgICAuZG90LWRlc2lnbnsgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RvbS1oZWFkaW5ne1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5oZWFkaW5neyBmbG9hdDogbm9uZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB0ZXh0LWFsaWduOiBsZWZ0O31cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFib3V0LXNlY3Rpb257XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jdXN0b20tYnV0dG9uLWJhY2t7IGZsb2F0OiBub25lOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2t9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmRhcmt7XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgLmRldGFpbHN7IFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1iYWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDIwMHB4OyBib3JkZXItcmFkaXVzOiAxMDAlOyBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY3VzdG9tLWJ1dHRvbi1iYWNreyAgZmxvYXQ6IG5vbmU7IGRpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICBzZWN0aW9ue1xyXG4gICAgICAgICYuZGFya3tcclxuICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4OyBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjM5cHgpe1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgICAmLmRhcmt7XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJzZWN0aW9uIC5kb3QtZGVzaWduIHtcbiAgbGVmdDogODBweDtcbiAgdG9wOiAxMjNweDtcbn1cbnNlY3Rpb24gLmFib3V0LXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogNDAuODMzMyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbnNlY3Rpb24gLmFib3V0LXNlY3Rpb24gLmFib3V0LWhlYWRpbmctc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbnNlY3Rpb24gLmFib3V0LXNlY3Rpb24gLmFib3V0LWhlYWRpbmctc2VjdGlvbiBoNSB7XG4gIGNvbG9yOiAjZmY2MDNjO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIC5hYm91dC1oZWFkaW5nLXNlY3Rpb24gaDQge1xuICBjb2xvcjogIzNlM2EzOTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzlweDtcbn1cbnNlY3Rpb24gLmFib3V0LXNlY3Rpb24gLmFib3V0LWhlYWRpbmctc2VjdGlvbiBwIHtcbiAgY29sb3I6ICM4ZThkOGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuc2VjdGlvbiAuYWJvdXQtc2VjdGlvbiBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05NXB4O1xuICByaWdodDogYXV0bztcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IC0xNzhweDtcbiAgd2lkdGg6IDg1JTtcbiAgei1pbmRleDogLTE7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxMSB7XG4gIGZpbGw6ICMxMDI2MzE7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxMiB7XG4gIGZpbGw6ICNmZjYwM2M7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxMyB7XG4gIGZpbGw6ICNFOTg5Njk7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxNCB7XG4gIGZpbGw6ICNGMkE4OEQ7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxNSB7XG4gIGZpbGw6ICMxOTQ0NTU7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxNiB7XG4gIGZpbGw6ICNDRDM5RUY7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxNyB7XG4gIGZpbGw6ICMxRTQ5NUE7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxOCB7XG4gIGZpbGw6ICNEQjdCNjE7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QxOSB7XG4gIGZpbGw6ICMxMDI2MzE7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QyMCB7XG4gIGZpbGw6ICNmZGU3NTY7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QyMSB7XG4gIGZpbGw6ICNGMzlDODE7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyAuc3QyMiB7XG4gIGZpbGw6ICM1RkJCQTQ7XG59XG5zZWN0aW9uIC5hYm91dC1zZWN0aW9uIC5jdXN0b20tYnV0dG9uLWJhY2sge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuc2VjdGlvbiAuYWJvdXQtc2VjdGlvbiAuY3VzdG9tLWJ1dHRvbi1iYWNrIGEge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59XG5zZWN0aW9uLmRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAyNjMxO1xuICBwYWRkaW5nLWJvdHRvbTogMTIzcHg7XG59XG5zZWN0aW9uLmRhcms6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAzNDQ2O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IDEyMnB4O1xuICBib3R0b206IGF1dG87XG59XG5zZWN0aW9uLmRhcms6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDM0NDY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAxMjJweDtcbn1cbnNlY3Rpb24uZGFyayAuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTIzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEyM3B4O1xufVxuc2VjdGlvbi5kYXJrIC5jb250ZW50OmJlZm9yZSB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMzQ0NjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG59XG5zZWN0aW9uLmRhcmsgLmNvbnRlbnQ6YWZ0ZXIge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDM0NDY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiBhdXRvO1xufVxuc2VjdGlvbi5kYXJrIC5jb250ZW50IC5zcGFuMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5zZWN0aW9uLmRhcmsgLmNvbnRlbnQgLnNwYW4xOmJlZm9yZSB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMzQ0NjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAtMTIzcHg7XG4gIGJvdHRvbTogYXV0bztcbn1cbnNlY3Rpb24uZGFyayAuY29udGVudCAuc3BhbjE6YWZ0ZXIge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDM0NDY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAtMTIzcHg7XG59XG5zZWN0aW9uLmRhcmsgLmNvbnRlbnQgLnNwYW4yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbnNlY3Rpb24uZGFyayAuY29udGVudCAuc3BhbjI6YmVmb3JlIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAzNDQ2O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IC0xMjNweDtcbiAgYm90dG9tOiBhdXRvO1xufVxuc2VjdGlvbi5kYXJrIC5jb250ZW50IC5zcGFuMjphZnRlciB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMzQ0NjtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IC0xMjNweDtcbn1cbnNlY3Rpb24uZGFyayAuY29udGVudCAuZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzMuMTIzJTtcbn1cbnNlY3Rpb24uZGFyayAuY29udGVudCAuZGV0YWlscyAuaW1hZ2UtYmFjayB7XG4gIHdpZHRoOiAyOC4zMDElO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYwM2M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogMDtcbiAgYm90dG9tOiBhdXRvO1xufVxuc2VjdGlvbi5kYXJrIC5jb250ZW50IC5kZXRhaWxzIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbn1cbnNlY3Rpb24uZGFyayAuY29udGVudCAuZGV0YWlscyB1bCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuc2VjdGlvbi5kYXJrIC5jb250ZW50IC5kZXRhaWxzIHVsIGxpIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5zZWN0aW9uLmRhcmsgLmNvbnRlbnQgLmRldGFpbHMgdWwgbGkgc3BhbiB7XG4gIGNvbG9yOiAjZmRlNzU2O1xufVxuc2VjdGlvbi5kYXJrIC5jb250ZW50IC5kZXRhaWxzIC5jdXN0b20tYnV0dG9uLWJhY2sge1xuICBtYXJnaW4tdG9wOiA5NHB4O1xufVxuc2VjdGlvbi5kYXJrIC5jb250ZW50IC5kZXRhaWxzIC5jdXN0b20tYnV0dG9uLWJhY2sgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuc2VjdGlvbi5kYXJrIC5jb250ZW50IC5kZXRhaWxzIC5jdXN0b20tYnV0dG9uLWJhY2sgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmY2MDNjO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCkgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBzZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyB7XG4gICAgbGVmdDogLTY4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIHNlY3Rpb24gLmRvdC1kZXNpZ24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgc2VjdGlvbiAuY3VzdG9tLWhlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBzZWN0aW9uIC5jdXN0b20taGVhZGluZyAuaGVhZGluZyB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgc2VjdGlvbiAuYWJvdXQtc2VjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBzZWN0aW9uIC5hYm91dC1zZWN0aW9uIHN2ZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBzZWN0aW9uIC5hYm91dC1zZWN0aW9uIC5jdXN0b20tYnV0dG9uLWJhY2sge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBzZWN0aW9uLmRhcmsgLmNvbnRlbnQgLmRldGFpbHMge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgc2VjdGlvbi5kYXJrIC5jb250ZW50IC5kZXRhaWxzIC5pbWFnZS1iYWNrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICBzZWN0aW9uLmRhcmsgLmNvbnRlbnQgLmRldGFpbHMgLmN1c3RvbS1idXR0b24tYmFjayB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIHNlY3Rpb24uZGFyayAuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgc2VjdGlvbi5kYXJrIC5jb250ZW50IC5kZXRhaWxzIHVsIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIiRwcmltYXJ5Q29sb3I6ICNmZjYwM2M7XHJcbiRzZWNvbmRhcnlDb2xvcjogI2ZkZTc1NjtcclxuJGRlZmF1bHRDb2xvcjogIzNlM2EzOTtcclxuJGRlZmF1bHRDb2xvcnR3bzogIzA1MDUwNTtcclxuJG1haW5Db250YWluZXI6IDEyMDBweDtcclxuJGNvbW1vbkNvbG9yOiAjZmZmO1xyXG4kY29tbW9uQ29sb3IyOiAjZmNmY2ZjO1xyXG4kYWRkaXRpb25Db2xvck9uZTogIzEwMjYzMTtcclxuJGFkZGl0aW9uQ29sb3JUd286ICMzNTEwNTU7XHJcbiRhZGRpdGlvbkNvbG9yVGhyZWU6ICM4ZThkOGQ7XHJcblxyXG5cclxuJGhlYWRpbmdGb250dXNlOiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuJHN1YmhlYWRpbmdGb250dXNlOiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJGRlc2NyaWJlRm9udHVzZTogJ0JlbGxvdGEgVGV4dCcsIGN1cnNpdmU7XHJcblxyXG5cclxuJG1haW5Db250YWluZXI6IDEyMDBweDtcclxuXHJcbiRjb2xncmlkLTEwOiAxMCU7XHJcbiRjb2xncmlkLTIwOiAyMCU7XHJcbiRjb2xncmlkLTI1OiAyNSU7XHJcbiRjb2xncmlkLTMwOiAzMCU7XHJcbiRjb2xncmlkLTMzOiAzMy4zMzMzMyU7XHJcbiRjb2xncmlkLTQwOiA0MCU7XHJcbiRjb2xncmlkLTUwOiA1MCU7XHJcbiRjb2xncmlkLTYwOiA2MCU7XHJcbiRjb2xncmlkLTcwOiA3MCU7XHJcbiRjb2xncmlkLTgwOiA4MCU7XHJcbiRjb2xncmlkLTkwOiA5MCU7XHJcbiRjb2xncmlkLTEwMDogMTAwJTtcclxuXHJcbiRQYWRkaW5nVG9wOiAxMjNweDtcclxuJFBhZGRpbmdib3R0b206IDEyM3B4O1xyXG5cclxuJFBhZGRpbmdUb3AyOiA0NHB4O1xyXG4kUGFkZGluZ2JvdHRvbTI6IDQ0cHg7XHJcblxyXG4kZGVmYXVsdC1mb250c2l6ZTogMTZweDtcclxuJGZvbnQtYmlnLWV4dHJhOiAxMTBweDtcclxuJGZvbnQtYmlnLXVsdHJhOiA3MHB4O1xyXG4kZm9udC1iaWc6IDQycHg7XHJcbiRmb250LW1pZGl1bTogMzBweDtcclxuJGZvbnQtc21hbGw6IDIwcHg7IiwiQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbiwkbGVmdCwkcmlnaHQsJHRvcCwkYm90dG9tKXtcclxuICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XHJcbiAgICBsZWZ0OiAkbGVmdDtcclxuICAgIHJpZ2h0OiAkcmlnaHQ7XHJcbiAgICB0b3A6ICR0b3A7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbkBtaXhpbiB2aXNpYmxpdHkoJHZhbHVlKXtcclxuICAgIHZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICAgIC13ZWJraXQtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG4gICAgLW1vei12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtby12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtbXMtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbHVlLXR5cGUsJG9yaWdpbiwkc3R5bGUpe1xyXG4gICAgdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbHVlLXR5cGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogJHN0eWxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiAkc3R5bGU7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxufVxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbiwkZHVyYXRpb24sJGJlaGF2aW91cil7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkYmVoYXZpb3VyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbn1cclxuQG1peGluIGZpbHRlcigkdmFsdWUpe1xyXG4gICAgZmlsdGVyOiAkdmFsdWU7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogJHZhbHVlO1xyXG4gICAgLW1vei1maWx0ZXI6ICR2YWx1ZTtcclxuICAgIC1vLWZpbHRlcjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCgkdmFsdWUpe1xyXG4gICAgZmxleDogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsdWU7XHJcbiAgICAtbW96LWZsZXg6ICR2YWx1ZTtcclxuICAgIC1vLWZsZXg6ICR2YWx1ZTtcclxuICAgIC1tcy1mbGV4OiAkdmFsdWU7XHJcbn1cclxuQG1peGluIG9wYWNpdHkoJHZhbHVlKXtcclxuICAgIG9wYWNpdHk6ICR2YWx1ZTtcclxuICAgIGZpbHRlcjogQWxwaGEob3BhY2l0eT0kdmFsdWUpO1xyXG59XHJcbkBtaXhpbiBhbmltYXRpb24oJG5hbWUsJHRpbWUsJGZpbGxtb2RlKXtcclxuICAgIGFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkbmFtZSAkdGltZSAkZmlsbG1vZGU7XHJcbiAgICAtby1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1tcy1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTsgXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/hero/hero.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/hero/hero.component.ts ***!
    \*********************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppHomeHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HeroComponent =
    /*#__PURE__*/
    function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);

        this.herospan = "Hi there,";
        this.herotitle = "I’m";
        this.herotitleRahul = "rahul";
        this.herosubtitle = "yadav";
        this.jobPositin = "Senior Front-end";
        this.herodrescription = "Developer @";
        this.companyname = "Codearts Solutions PVT. LTD";
        this.buttontext1 = "say hello";
        this.buttontext2 = "about me";
        this.buttontext1Url = "#";
        this.buttontext2Url = "#";
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 52,
      vars: 15,
      consts: [[1, "hero-section"], [1, "icondetails-back"], [1, "icontop-group"], [1, "span1"], [1, "span2"], [1, "purple-iocn-group"], [1, "icontop-group2"], [1, "icontop-group3"], [1, "container"], [1, "hero-content-area"], [1, "image-back"], [1, "jobP"], [1, "comN"], [1, "clear"], [1, "custom-button-back"], [3, "href"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.herospan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.herotitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 11, ctx.herotitleRahul));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 13, ctx.herosubtitle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobPositin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.herodrescription, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.buttontext1Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttontext1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.buttontext2Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttontext2);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: [".hero-section[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding: 215px 0 0 0;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]:after {\n  width: 30%;\n  height: 100%;\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 0;\n  bottom: auto;\n  background-color: #fde756;\n  border-radius: 0 0 0 80px;\n  content: \"\";\n}\n.hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-height: 602px;\n}\n.hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]::before {\n  width: 233px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n  background-color: #fde756;\n  border-radius: 80px 0 0 80px;\n  content: \"\";\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n  padding: 61px 0 0 128px;\n  position: relative;\n  z-index: 2;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 20px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 110px;\n  line-height: 110px;\n  font-weight: 700;\n  text-shadow: rgba(147, 147, 147, 0.75) 1px 0 10px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  letter-spacing: -14px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 42px;\n  color: #ff603c;\n  letter-spacing: 43.5px;\n  padding: 0 0 0 7px;\n  margin: -19px 0 0 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 39px;\n  margin: 15px 0 0 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .jobP[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #726408;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .comN[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #ff603c;\n  letter-spacing: 1px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n  margin: 40px 0 0 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 26px 0 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n  background-color: #fff;\n  color: #3e3a39;\n  border-color: #3e3a39;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #3e3a39;\n  color: #fff;\n  border-color: #3e3a39;\n}\n.hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n  width: 410px;\n  height: 437px;\n  background-color: #ff603c;\n  border-radius: 80px 0 0 80px;\n  position: absolute;\n  left: auto;\n  right: 17px;\n  top: 0;\n  bottom: auto;\n  margin: auto;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30%;\n  height: 100%;\n  z-index: 1;\n  float: left;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%] {\n  position: absolute;\n  left: auto;\n  right: 46px;\n  top: 0;\n  bottom: auto;\n  width: 315px;\n  height: 227px;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: #ff603c 25px solid;\n  border-top: none;\n  float: left;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n  width: 122px;\n  height: 152px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: auto;\n  bottom: -76px;\n  margin: auto;\n  transform: rotate(44deg);\n  -webkit-transform: rotate(44deg);\n  -moz-transform: rotate(44deg);\n  -o-transform: rotate(44deg);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  -moz-transform-style: flat;\n  -o-transform-style: flat;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]   .purple-iocn-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 51px;\n  position: relative;\n  float: left;\n  margin: 0 0 17px 0;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]   .purple-iocn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  float: left;\n  background-color: #351055;\n  margin: 0 18px 0 0;\n  border-radius: 50%;\n  position: relative;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]   .purple-iocn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]   .purple-iocn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  width: 17px;\n  height: 17px;\n  float: left;\n  background-color: #351055;\n  margin: 0 18px 0 0;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  top: 34px;\n  left: 0;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: auto;\n  right: 46px;\n  top: 370px;\n  bottom: auto;\n  width: 342px;\n  height: 94px;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 94px;\n  float: left;\n  border: #351055 15px solid;\n  transform: rotate(44deg);\n  -webkit-transform: rotate(44deg);\n  -moz-transform: rotate(44deg);\n  -o-transform: rotate(44deg);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  -moz-transform-style: flat;\n  -o-transform-style: flat;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 34px solid transparent;\n  border-bottom: 34px solid transparent;\n  border-right: 50px solid #ff603c;\n  position: absolute;\n  left: auto;\n  right: 61px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]::after {\n  width: 0;\n  height: 0;\n  border-top: 34px solid transparent;\n  border-bottom: 34px solid transparent;\n  border-right: 50px solid #fff;\n  position: absolute;\n  left: 61px;\n  right: auto;\n  top: auto;\n  bottom: -34px;\n  content: \"\";\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%] {\n  position: absolute;\n  left: auto;\n  right: 105px;\n  top: auto;\n  bottom: 0;\n  width: 442px;\n  height: 257px;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n  width: 39px;\n  height: 39px;\n  float: left;\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 0;\n  bottom: auto;\n  background-color: #351055;\n  border-radius: 100%;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n  width: 375px;\n  height: 375px;\n  float: left;\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 167px;\n  bottom: auto;\n  border: #fff 25px solid;\n  border-radius: 100%;\n}\n@media only screen and (min-width: 1600px) and (max-width: 1800px) {\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 178px;\n    top: 0;\n    bottom: auto;\n  }\n}\n@media only screen and (min-width: 1366px) and (max-width: 1599px) {\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 300px;\n    top: 0;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -94px;\n    top: 167px;\n    bottom: auto;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1365px) {\n  .hero-section[_ngcontent-%COMP%]:after {\n    width: 36%;\n  }\n  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    min-height: 490px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:before {\n    width: 144px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 300px;\n    top: 0;\n    bottom: auto;\n    width: 300px;\n    height: 354px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n    padding: 61px 0 0 67px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 80px;\n    line-height: 80px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    letter-spacing: 17.5px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n    margin: 9px 0 0 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%] {\n    width: 235px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n    width: 269px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -94px;\n    top: 167px;\n    bottom: auto;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .hero-section[_ngcontent-%COMP%]:after {\n    width: 100%;\n    border-radius: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    min-height: 490px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:before {\n    width: 144px;\n    display: none;\n  }\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 300px;\n    top: 0;\n    bottom: auto;\n    width: 200px;\n    height: 200px;\n    border-radius: 100%;\n    right: 0;\n    left: 0;\n    margin: auto;\n    top: -64px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n    padding: 61px 0 0 67px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 80px;\n    line-height: 80px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    letter-spacing: 17.5px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n    margin: 9px 0 0 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 270px;\n    right: 0;\n    left: 0;\n    margin: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    border-radius: 0 0 500px 500px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n    width: 269px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -94px;\n    top: 167px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -94px;\n    top: 196px;\n    bottom: auto;\n  }\n}\n@media only screen and (min-width: 480px) and (max-width: 639px) {\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 0;\n    top: 370px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 135px;\n    right: auto;\n    top: -90px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform-origin: center center;\n    -webkit-transform-origin: center center;\n    -moz-transform-origin: center center;\n    -o-transform-origin: center center;\n    transform-style: flat;\n    -webkit-transform-style: flat;\n    -moz-transform-style: flat;\n    -o-transform-style: flat;\n    position: absolute;\n    left: auto;\n    right: 61px;\n    top: 0;\n    bottom: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: auto;\n    bottom: 0;\n    margin: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 0;\n    top: -74px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 215px;\n    bottom: auto;\n    margin: auto;\n  }\n}\n@media only screen and (min-width: 360px) and (max-width: 479px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n    padding: 61px 0 0 18px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -12px;\n    top: 370px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 135px;\n    right: auto;\n    top: -90px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform-origin: center center;\n    -webkit-transform-origin: center center;\n    -moz-transform-origin: center center;\n    -o-transform-origin: center center;\n    transform-style: flat;\n    -webkit-transform-style: flat;\n    -moz-transform-style: flat;\n    -o-transform-style: flat;\n    position: absolute;\n    left: auto;\n    right: 61px;\n    top: 0;\n    bottom: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: auto;\n    bottom: 0;\n    margin: auto;\n    width: 100%;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 14px;\n    top: -74px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 215px;\n    bottom: auto;\n    margin: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n@media only screen and (max-width: 359px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 136px 0 0 0;\n    text-align: center;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 60px;\n    line-height: 60px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    letter-spacing: -9px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 0;\n    letter-spacing: 0;\n    text-align: center;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 30px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n    margin: 9px 0 0 0;\n    width: 100%;\n    text-align: center;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    float: none;\n    padding: 0 20px;\n    margin: 0 15px 0 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    top: 0;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZXJvL0k6XFxBTkdVTEFSIFRVVE9SSUFMXFxSYWh1bFlhZGF2XFxSYWh1bC1ZYWRhdi9zcmNcXGFwcFxcaG9tZVxcaGVyb1xcaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9oZXJvL0k6XFxBTkdVTEFSIFRVVE9SSUFMXFxSYWh1bFlhZGF2XFxSYWh1bC1ZYWRhdi9zcmNcXGFzc2V0c1xcY3NzXFx2YXJpYWJsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hlcm8vSTpcXEFOR1VMQVIgVFVUT1JJQUxcXFJhaHVsWWFkYXZcXFJhaHVsLVlhZGF2L3NyY1xcYXNzZXRzXFxjc3NcXG1peGlucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdDMkJVO0VEM0JXLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGdCQUFBO0FFRW5FO0FGREk7RUFDSSxVQUFBO0VBQVksWUFBQTtFR0poQixrQkhJZ0Q7RUdIaEQsVUhHeUQ7RUdGekQsUUhFOEQ7RUdEOUQsTUhDZ0U7RUdBaEUsWUFBQTtFSEF5RSx5QkNKNUQ7RURJK0YseUJBQUE7RUFBMkIsV0FBQTtBRVkzSTtBRlZJO0VBQ0ksa0JBQUE7RUFBb0IsVUFBQTtFQUFZLGlCQUFBO0FFY3hDO0FGYlE7RUFDSSxZQUFBO0VBQWMsWUFBQTtFR1R0QixrQkhTc0Q7RUdSdEQsT0hRK0Q7RUdQL0QsV0hPaUU7RUdOakUsTUhNc0U7RUdMdEUsWUhLd0U7RUFBTyx5QkNUbEU7RURTcUcsNEJBQUE7RUFBOEIsV0FBQTtBRXdCcEo7QUZyQkk7RUFDSSx1QkFBQTtFQUF5QixrQkFBQTtFQUFvQixVQUFBO0FFeUJyRDtBRnhCUTtFQUNJLHVDQ0hRO0VER3lCLGVBQUE7QUUyQjdDO0FGekJRO0VBQ0ksZ0JDb0JLO0VEcEJ1QixrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixpREFBQTtBRThCOUU7QUY3Qlk7RUFBRSxxQkFBQTtBRWdDZDtBRjlCUTtFQUNLLG1CQUFBO0VBQXFCLGVDa0J2QjtFRGxCNkMsY0N2QnpDO0VEdUJnRSxzQkFBQTtFQUF3QixrQkFBQTtFQUFvQixtQkFBQTtBRXFDM0g7QUZuQ1E7RUFDSSxtQkFBQTtFQUFxQixlQ2dCbkI7RURoQjRDLGlCQUFBO0VBQW1CLGtCQUFBO0FFd0M3RTtBRnZDWTtFQUNJLG1CQUFBO0VBQXFCLGNBQUE7QUUwQ3JDO0FGeENZO0VBQ0ksbUJBQUE7RUFBcUIsY0MvQnRCO0VEK0I0QyxtQkFBQTtBRTRDM0Q7QUZ6Q1E7RUFDSSxrQkFBQTtBRTJDWjtBRjFDWTtFQUNJLGtCQUFBO0FFNENoQjtBRjNDZ0I7RUFDSSxTQUFBO0VBQVcsc0JDbENqQjtFRGtDaUQsY0NyQ2hEO0VEcUNzRSxxQkNyQ3RFO0FDcUZmO0FGOUNnQjtFQUNJLHlCQ3hDTDtFRHdDc0MsV0NyQ3ZDO0VEcUM0RCxxQkN4QzNEO0FDMEZmO0FGN0NJO0VBQ0ksWUFBQTtFQUFjLGFBQUE7RUFBZSx5QkNoRHRCO0VEZ0R1RCw0QkFBQTtFRy9DbEUsa0JIK0NrSDtFRzlDbEgsVUg4QzJIO0VHN0MzSCxXSDZDZ0k7RUc1Q2hJLE1INENxSTtFRzNDckksWUgyQ3VJO0VBQU8sWUFBQTtBRXdEbEo7QUZ0REk7RUFDSSxrQkFBQTtFQUFvQixNQUFBO0VBQVEsUUFBQTtFQUFVLFVBQUE7RUFBWSxZQUFBO0VBQWMsVUFBQTtFQUFZLFdBQUE7QUU4RHBGO0FGN0RRO0VHbkRKLGtCSG9EMEI7RUduRDFCLFVIbURtQztFR2xEbkMsV0hrRHdDO0VHakR4QyxNSGlENkM7RUdoRDdDLFlIZ0QrQztFQUFPLFlBQUE7RUFBYyxhQUFBO0FFcUV4RTtBRnBFWTtFQUFRLFdBQUE7RUFBYSxZQUFBO0VBQWMsMEJBQUE7RUFBa0MsZ0JBQUE7RUFBa0IsV0FBQTtBRTJFbkc7QUYxRVk7RUFDSSxZQUFBO0VBQWMsYUFBQTtFR3ZEMUIsa0JIdUQyRDtFR3REM0QsT0hzRG9FO0VHckRwRSxRSHFEc0U7RUdwRHRFLFNIb0R3RTtFR25EeEUsYUhtRDZFO0VBQVEsWUFBQTtFR3JDckYsd0JIcUNzSDtFR3BDdEgsZ0NIb0NzSDtFR25DdEgsNkJIbUNzSDtFR2xDdEgsMkJIa0NzSDtFR2pDdEgsK0JIaUNvSTtFR2hDcEksdUNIZ0NvSTtFRy9CcEksb0NIK0JvSTtFRzlCcEksa0NIOEJvSTtFRzdCcEkscUJINkJrSjtFRzVCbEosNkJINEJrSjtFRzNCbEosMEJIMkJrSjtFRzFCbEosd0JIMEJrSjtBRStGdEo7QUY5RmdCO0VBQ0ksV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7QUVvR2hGO0FGbkdvQjtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMsV0FBQTtFQUFhLHlCQ3BEN0M7RURvRGtGLGtCQUFBO0VBQW1CLGtCQUFBO0VBQW9CLGtCQUFBO0FFMkc1STtBRjFHd0I7RUFBZSxTQUFBO0FFNkd2QztBRjVHd0I7RUFBVSxXQUFBO0VBQWEsWUFBQTtFQUFjLFdBQUE7RUFBYSx5QkN0RHZEO0VEc0Q0RixrQkFBQTtFQUFtQixrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFBb0IsU0FBQTtFQUFXLE9BQUE7QUV3SGxNO0FGbkhRO0VHbEVKLGtCSG1FMEI7RUdsRTFCLFVIa0VtQztFR2pFbkMsV0hpRXdDO0VHaEV4QyxVSGdFNkM7RUcvRDdDLFlIK0RtRDtFQUFPLFlBQUE7RUFBYyxZQUFBO0FFMkg1RTtBRjFIWTtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMsV0FBQTtFQUFhLDBCQUFBO0VHbkRwRCx3QkhtRDZHO0VHbEQ3RyxnQ0hrRDZHO0VHakQ3Ryw2QkhpRDZHO0VHaEQ3RywyQkhnRDZHO0VHL0M3RywrQkgrQzJIO0VHOUMzSCx1Q0g4QzJIO0VHN0MzSCxvQ0g2QzJIO0VHNUMzSCxrQ0g0QzJIO0VHM0MzSCxxQkgyQ3lJO0VHMUN6SSw2QkgwQ3lJO0VHekN6SSwwQkh5Q3lJO0VHeEN6SSx3Qkh3Q3lJO0VHckV6SSxrQkhxRWtLO0VHcEVsSyxPSG9FMks7RUduRTNLLFdIbUU2SztFR2xFN0ssTUhrRWtMO0VHakVsTCxZSGlFb0w7QUVnSnhMO0FGOUlZO0VBQ0ksUUFBQTtFQUFVLFNBQUE7RUFBVyxrQ0FBQTtFQUFtQyxxQ0FBQTtFQUF1QyxnQ0FBQTtFR3hFM0csa0JId0VvSztFR3ZFcEssVUh1RTZLO0VHdEU3SyxXSHNFa0w7RUdyRWxMLE1IcUV1TDtFR3BFdkwsU0hvRXlMO0VBQU0sWUFBQTtBRTBKbk07QUZ6SmdCO0VBQ0ksUUFBQTtFQUFVLFNBQUE7RUFBVyxrQ0FBQTtFQUFtQyxxQ0FBQTtFQUF1Qyw2QkFBQTtFRzFFL0csa0JIMEV1SztFR3pFdkssVUh5RWdMO0VHeEVoTCxXSHdFcUw7RUd2RXJMLFNIdUUwTDtFR3RFMUwsYUhzRStMO0VBQVEsV0FBQTtBRXFLM007QUZqS1E7RUc5RUosa0JIK0UwQjtFRzlFMUIsVUg4RW1DO0VHN0VuQyxZSDZFd0M7RUc1RXhDLFNINEU4QztFRzNFOUMsU0gyRW1EO0VBQUksWUFBQTtFQUFjLGFBQUE7QUV5S3pFO0FGeEtZO0VBQ0ksV0FBQTtFQUFhLFlBQUE7RUFBYyxXQUFBO0VHakZ2QyxrQkhpRnNFO0VHaEZ0RSxVSGdGK0U7RUcvRS9FLFFIK0VvRjtFRzlFcEYsTUg4RXNGO0VHN0V0RixZSDZFd0Y7RUFBTyx5QkMxRWhGO0VEMEVxSCxtQkFBQTtBRW1MeEk7QUZqTFk7RUFDSSxZQUFBO0VBQWMsYUFBQTtFQUFlLFdBQUE7RUdwRnpDLGtCSG9Gd0U7RUduRnhFLFVIbUZpRjtFR2xGakYsUUhrRnNGO0VHakZ0RixVSGlGd0Y7RUdoRnhGLFlIZ0Y4RjtFQUFPLHVCQUFBO0VBQWdDLG1CQUFBO0FFNEx6STtBRnRMQTtFQUVRO0lHNUZKLGtCSDZGMEI7SUc1RjFCLFVINEZtQztJRzNGbkMsWUgyRndDO0lHMUZ4QyxNSDBGOEM7SUd6RjlDLFlIeUZnRDtFRTRMbEQ7QUFDRjtBRnpMQTtFQUVRO0lHbkdKLGtCSG9HMEI7SUduRzFCLFVIbUdtQztJR2xHbkMsWUhrR3dDO0lHakd4QyxNSGlHOEM7SUdoRzlDLFlIZ0dnRDtFRThMbEQ7RUYzTFU7SUFDSSxlQUFBO0VFNkxkO0VGeExjO0lHN0daLGtCSDhHa0M7SUc3R2xDLFVINkcyQztJRzVHM0MsWUg0R2dEO0lHM0doRCxVSDJHc0Q7SUcxR3RELFlIMEc0RDtFRThMOUQ7QUFDRjtBRnZMQTtFQUVRO0lBQ0ksVUFBQTtFRXdMVjtFRnRMTTtJQUNJLGlCQUFBO0VFd0xWO0VGdkxVO0lBQVUsWUFBQTtFRTBMcEI7RUZ4TE07SUcvSEosa0JIZ0kwQjtJRy9IMUIsVUgrSG1DO0lHOUhuQyxZSDhId0M7SUc3SHhDLE1INkg4QztJRzVIOUMsWUg0SGdEO0lBQU8sWUFBQTtJQUFrQixhQUFBO0VFZ00zRTtFRjlMTTtJQUNJLHNCQUFBO0VFZ01WO0VGL0xVO0lBQ0ksZUFBQTtJQUFpQixTQUFBO0VFa00vQjtFRmhNVTtJQUFJLGVBQUE7SUFBaUIsaUJBQUE7RUVvTS9CO0VGbk1VO0lBQUksc0JBQUE7RUVzTWQ7RUZyTVU7SUFDSSxpQkFBQTtFRXVNZDtFRm5NVTtJQUNJLFlBQUE7RUVxTWQ7RUZuTVU7SUFDSSxZQUFBO0VFcU1kO0VGbE1jO0lHckpaLGtCSHNKa0M7SUdySmxDLFVIcUoyQztJR3BKM0MsWUhvSmdEO0lHbkpoRCxVSG1Kc0Q7SUdsSnRELFlIa0o0RDtFRXdNOUQ7QUFDRjtBRi9MQTtFQUVRO0lBQ0ksV0FBQTtJQUFZLGdCQUFBO0VFaU10QjtFRi9MTTtJQUNJLGlCQUFBO0VFaU1WO0VGaE1VO0lBQVUsWUFBQTtJQUFjLGFBQUE7RUVvTWxDO0VGbE1NO0lHektKLGtCSDBLMEI7SUd6SzFCLFVIeUttQztJR3hLbkMsWUh3S3dDO0lHdkt4QyxNSHVLOEM7SUd0SzlDLFlIc0tnRDtJQUFPLFlBQUE7SUFBYyxhQUFBO0lBQWUsbUJBQUE7SUFBcUIsUUFBQTtJQUFVLE9BQUE7SUFBUyxZQUFBO0lBQWMsVUFBQTtFRStNNUk7RUY3TU07SUFDSSxzQkFBQTtFRStNVjtFRjlNVTtJQUNJLGVBQUE7SUFBaUIsU0FBQTtFRWlOL0I7RUYvTVU7SUFBSSxlQUFBO0lBQWlCLGlCQUFBO0VFbU4vQjtFRmxOVTtJQUFJLHNCQUFBO0VFcU5kO0VGcE5VO0lBQ0ksaUJBQUE7RUVzTmQ7RUZuTk07SUFDSSxXQUFBO0VFcU5WO0VGcE5VO0lBQ0ksVUFBQTtJQUFZLGFBQUE7SUFBZSxRQUFBO0lBQVUsT0FBQTtJQUFTLFlBQUE7RUUwTjVEO0VGek5jO0lBQVEsYUFBQTtFRTROdEI7RUYzTmM7SUFBTyw4QkFBQTtFRThOckI7RUY1TlU7SUFDSSxZQUFBO0VFOE5kO0VGM05jO0lHbE1aLGtCSG1Na0M7SUdsTWxDLFVIa00yQztJR2pNM0MsWUhpTWdEO0lHaE1oRCxVSGdNc0Q7SUcvTHRELFlIK0w0RDtFRWlPOUQ7RUYvTmM7SUFBUSxTQUFBO0VFa090QjtBQUNGO0FGN05BO0VBSWdCO0lHL01aLGtCSGdOa0M7SUcvTWxDLFVIK00yQztJRzlNM0MsWUg4TWdEO0lHN01oRCxVSDZNc0Q7SUc1TXRELFlINE00RDtFRWdPOUQ7QUFDRjtBRnpOQTtFQUdZO0lHM05SLGtCSDROOEI7SUczTjlCLFVIMk51QztJRzFOdkMsUUgwTjRDO0lHek41QyxVSHlOOEM7SUd4TjlDLFlId05vRDtFRTZOdEQ7RUY1TmM7SUc3Tlosa0JIOE5rQztJRzdObEMsV0g2TjJDO0lHNU4zQyxXSDROaUQ7SUczTmpELFVIMk5zRDtJRzFOdEQsWUgwTjREO0VFa085RDtFRmhPYztJRzlNWix3QkgrTW1DO0lHOU1uQyxnQ0g4TW1DO0lHN01uQyw2Qkg2TW1DO0lHNU1uQywyQkg0TW1DO0lHM01uQywrQkgyTWlEO0lHMU1qRCx1Q0gwTWlEO0lHek1qRCxvQ0h5TWlEO0lHeE1qRCxrQ0h3TWlEO0lHdk1qRCxxQkh1TStEO0lHdE0vRCw2QkhzTStEO0lHck0vRCwwQkhxTStEO0lHcE0vRCx3QkhvTStEO0lHak8vRCxrQkhrT2tDO0lHak9sQyxVSGlPMkM7SUdoTzNDLFdIZ09nRDtJRy9OaEQsTUgrTnFEO0lHOU5yRCxTSDhOdUQ7RUVpUHpEO0VGOU9VO0lHck9SLGtCSHNPOEI7SUdyTzlCLE9IcU91QztJR3BPdkMsUUhvT3lDO0lHbk96QyxTSG1PMkM7SUdsTzNDLFNIa09nRDtJQUFJLFlBQUE7RUVxUHREO0VGcFBjO0lHdk9aLGtCSHdPa0M7SUd2T2xDLFVIdU8yQztJR3RPM0MsUUhzT2dEO0lHck9oRCxVSHFPa0Q7SUdwT2xELFlIb093RDtFRTBQMUQ7RUZ4UGM7SUcxT1osa0JIMk9rQztJRzFPbEMsT0gwTzJDO0lHek8zQyxRSHlPNkM7SUd4TzdDLFVId08rQztJR3ZPL0MsWUh1T3FEO0lBQU8sWUFBQTtFRStQOUQ7QUFDRjtBRnhQQTtFQUVRO0lBQ0ksc0JBQUE7RUV5UFY7RUZ0UFU7SUFDSSxVQUFBO0VFd1BkO0VGdFBVO0lHNVBSLGtCSDZQOEI7SUc1UDlCLFVINFB1QztJRzNQdkMsWUgyUDRDO0lHMVA1QyxVSDBQa0Q7SUd6UGxELFlIeVB3RDtFRTRQMUQ7RUYzUGM7SUc5UFosa0JIK1BrQztJRzlQbEMsV0g4UDJDO0lHN1AzQyxXSDZQaUQ7SUc1UGpELFVINFBzRDtJRzNQdEQsWUgyUDREO0VFaVE5RDtFRi9QYztJRy9PWix3QkhnUG1DO0lHL09uQyxnQ0grT21DO0lHOU9uQyw2Qkg4T21DO0lHN09uQywyQkg2T21DO0lHNU9uQywrQkg0T2lEO0lHM09qRCx1Q0gyT2lEO0lHMU9qRCxvQ0gwT2lEO0lHek9qRCxrQ0h5T2lEO0lHeE9qRCxxQkh3TytEO0lHdk8vRCw2Qkh1TytEO0lHdE8vRCwwQkhzTytEO0lHck8vRCx3QkhxTytEO0lHbFEvRCxrQkhtUWtDO0lHbFFsQyxVSGtRMkM7SUdqUTNDLFdIaVFnRDtJR2hRaEQsTUhnUXFEO0lHL1ByRCxTSCtQdUQ7RUVnUnpEO0VGN1FVO0lHdFFSLGtCSHVROEI7SUd0UTlCLE9Ic1F1QztJR3JRdkMsUUhxUXlDO0lHcFF6QyxTSG9RMkM7SUduUTNDLFNIbVFnRDtJQUFJLFlBQUE7SUFBYyxXQUFBO0VFcVJwRTtFRnBSYztJR3hRWixrQkh5UWtDO0lHeFFsQyxVSHdRMkM7SUd2UTNDLFdIdVFnRDtJR3RRaEQsVUhzUXFEO0lHclFyRCxZSHFRMkQ7RUUwUjdEO0VGeFJjO0lHM1FaLGtCSDRRa0M7SUczUWxDLE9IMlEyQztJRzFRM0MsUUgwUTZDO0lHelE3QyxVSHlRK0M7SUd4US9DLFlId1FxRDtJQUFPLFlBQUE7RUUrUjlEO0VGM1JNO0lBQ0ksWUFBQTtJQUFjLGFBQUE7RUU4UnhCO0FBQ0Y7QUZ4UkE7RUFDSTtJQUNJLG9CQUFBO0lBQXNCLGtCQUFBO0VFMlI1QjtFRjFSTTtJQUNJLFVBQUE7RUU0UlY7RUYzUlU7SUFDSSxlQUFBO0lBQWlCLGlCQUFBO0VFOFIvQjtFRjdSYztJQUFHLG9CQUFBO0VFZ1NqQjtFRjlSVTtJQUFJLGVBQUE7SUFBaUIsVUFBQTtJQUFZLGlCQUFBO0lBQW1CLGtCQUFBO0VFb1M5RDtFRm5TVTtJQUFJLGVBQUE7SUFBaUIsaUJBQUE7RUV1Uy9CO0VGdFNVO0lBQ0ksaUJBQUE7SUFBbUIsV0FBQTtJQUFhLGtCQUFBO0VFMFM5QztFRnpTYztJQUFHLHFCQUFBO0lBQXVCLFdBQUE7SUFBYSxlQUFBO0lBQWlCLGtCQUFBO0VFK1N0RTtFRjVTTTtJQUNJLGFBQUE7RUU4U1Y7RUY1U007SUFDSSxZQUFBO0lBQWMsYUFBQTtJQUFlLGtCQUFBO0lBQW9CLE1BQUE7SUFBUSxtQkFBQTtFRWtUbkU7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvdmFyaWFibGVzLmNvbXBvbmVudC5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvY3NzL21peGlucy5jb21wb25lbnQuc2Nzc1wiO1xyXG4uaGVyby1zZWN0aW9ue1xyXG4gICAgd2lkdGg6ICRjb2xncmlkLTEwMDsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nOiAyMTVweCAwIDAgMDsgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDMwJTsgaGVpZ2h0OiAxMDAlOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDAsMCxhdXRvKTsgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUNvbG9yOyBib3JkZXItcmFkaXVzOiAwIDAgMCA4MHB4OyBjb250ZW50OiBcIlwiO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcnsgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAxOyBtaW4taGVpZ2h0OiA2MDJweDtcclxuICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMzNweDsgaGVpZ2h0OiAxMDAlOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLGF1dG8sMCxhdXRvKTsgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUNvbG9yOyBib3JkZXItcmFkaXVzOiA4MHB4IDAgMCA4MHB4OyBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZXJvLWNvbnRlbnQtYXJlYXtcclxuICAgICAgICBwYWRkaW5nOiA2MXB4IDAgMCAxMjhweDsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAyO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc3ViaGVhZGluZ0ZvbnR1c2U7IGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtYmlnLWV4dHJhOyBsaW5lLWhlaWdodDogMTEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtc2hhZG93OiByZ2JhKDE0NywxNDcsMTQ3LC43NSkgMXB4IDAgMTBweDtcclxuICAgICAgICAgICAgYntsZXR0ZXItc3BhY2luZzogLTE0cHg7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogJGZvbnQtYmlnOyBjb2xvcjogJHByaW1hcnlDb2xvcjsgIGxldHRlci1zcGFjaW5nOiA0My41cHg7IHBhZGRpbmc6IDAgMCAwIDdweDsgbWFyZ2luOiAtMTlweCAwIDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogJGZvbnQtbWlkaXVtOyBsaW5lLWhlaWdodDogMzlweDsgbWFyZ2luOiAxNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAuam9iUHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IGNvbG9yOiAjNzI2NDA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb21Oe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgY29sb3I6ICRwcmltYXJ5Q29sb3I7IGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RvbS1idXR0b24tYmFja3tcclxuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgMCAwO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDI2cHggMCAwO1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDsgYmFja2dyb3VuZC1jb2xvcjogJGNvbW1vbkNvbG9yOyBjb2xvcjogJGRlZmF1bHRDb2xvcjsgYm9yZGVyLWNvbG9yOiAkZGVmYXVsdENvbG9yOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHRDb2xvcjsgY29sb3I6ICRjb21tb25Db2xvcjsgYm9yZGVyLWNvbG9yOiAkZGVmYXVsdENvbG9yOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbWFnZS1iYWNre1xyXG4gICAgICAgIHdpZHRoOiA0MTBweDsgaGVpZ2h0OiA0MzdweDsgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlDb2xvcjsgYm9yZGVyLXJhZGl1czogODBweCAwIDAgODBweDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywxN3B4LDAsYXV0byk7IG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5pY29uZGV0YWlscy1iYWNreyBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgcmlnaHQ6IDA7IHdpZHRoOiAzMCU7IGhlaWdodDogMTAwJTsgei1pbmRleDogMTsgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgLmljb250b3AtZ3JvdXB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sNDZweCwwLGF1dG8pOyB3aWR0aDogMzE1cHg7IGhlaWdodDogMjI3cHg7XHJcbiAgICAgICAgICAgIC5zcGFuMXsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYm9yZGVyOiAkcHJpbWFyeUNvbG9yIDI1cHggc29saWQ7IGJvcmRlci10b3A6IG5vbmU7IGZsb2F0OiBsZWZ0O31cclxuICAgICAgICAgICAgLnNwYW4yeyBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjJweDsgaGVpZ2h0OiAxNTJweDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCwwLGF1dG8sLTc2cHgpOyBtYXJnaW46IGF1dG87IEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoNDRkZWcpLGNlbnRlciBjZW50ZXIsZmxhdCk7XHJcbiAgICAgICAgICAgICAgICAucHVycGxlLWlvY24tZ3JvdXB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDUxcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZmxvYXQ6IGxlZnQ7IG1hcmdpbjogMCAwIDE3cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTdweDsgaGVpZ2h0OiAxN3B4OyBmbG9hdDogbGVmdDsgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287IG1hcmdpbjowIDE4cHggMCAwOyBib3JkZXItcmFkaXVzOiA1MCU7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkeyAgbWFyZ2luOiAwO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7IHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7IGZsb2F0OiBsZWZ0OyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvclR3bzsgbWFyZ2luOjAgMThweCAwIDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgY29udGVudDogXCJcIjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDM0cHg7IGxlZnQ6IDA7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbnRvcC1ncm91cDJ7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sNDZweCwzNzBweCxhdXRvKTsgd2lkdGg6IDM0MnB4OyBoZWlnaHQ6IDk0cHg7XHJcbiAgICAgICAgICAgIC5zcGFuMXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NHB4OyBoZWlnaHQ6IDk0cHg7IGZsb2F0OiBsZWZ0OyBib3JkZXI6ICRhZGRpdGlvbkNvbG9yVHdvIDE1cHggc29saWQ7IEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoNDRkZWcpLGNlbnRlciBjZW50ZXIsZmxhdCk7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsYXV0bywwLGF1dG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zcGFuMntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBoZWlnaHQ6IDA7IGJvcmRlci10b3A6IDM0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbTogMzRweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OjUwcHggc29saWQgJHByaW1hcnlDb2xvcjsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0byw2MXB4LDAsMCk7ICAgbWFyZ2luOiBhdXRvOyBcclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBoZWlnaHQ6IDA7IGJvcmRlci10b3A6IDM0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbTogMzRweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJpZ2h0OjUwcHggc29saWQgJGNvbW1vbkNvbG9yOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSw2MXB4LGF1dG8sYXV0bywtMzRweCk7IGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb250b3AtZ3JvdXAze1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDEwNXB4LGF1dG8sMCk7IHdpZHRoOiA0NDJweDsgaGVpZ2h0OiAyNTdweDtcclxuICAgICAgICAgICAgLnNwYW4xe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM5cHg7IGhlaWdodDogMzlweDsgZmxvYXQ6IGxlZnQ7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMCwwLGF1dG8pOyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvclR3bzsgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3BhbjJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzc1cHg7IGhlaWdodDogMzc1cHg7IGZsb2F0OiBsZWZ0OyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDAsMTY3cHgsYXV0byk7IGJvcmRlcjokY29tbW9uQ29sb3IgMjVweCBzb2xpZDsgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE2MDBweCkgYW5kIChtYXgtd2lkdGg6MTgwMHB4KXtcclxuICAgIC5oZXJvLXNlY3Rpb257XHJcbiAgICAgICAgLmltYWdlLWJhY2t7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMTc4cHgsMCxhdXRvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEzNjZweCkgYW5kIChtYXgtd2lkdGg6MTU5OXB4KXtcclxuICAgIC5oZXJvLXNlY3Rpb257XHJcbiAgICAgICAgLmltYWdlLWJhY2t7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMzAwcHgsMCxhdXRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlcm8tY29udGVudC1hcmVhe1xyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbmRldGFpbHMtYmFja3sgXHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3VwM3tcclxuICAgICAgICAgICAgICAgIC5zcGFuMntcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLC05NHB4LDE2N3B4LGF1dG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTM2NXB4KXtcclxuICAgIC5oZXJvLXNlY3Rpb257XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgd2lkdGg6MzYlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0OTBweDtcclxuICAgICAgICAgICAgJjpiZWZvcmV7IHdpZHRoOiAxNDRweDt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZS1iYWNre1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDMwMHB4LDAsYXV0byk7IHdpZHRoOiAzMDBweDsgICAgIGhlaWdodDogMzU0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZXJvLWNvbnRlbnQtYXJlYXtcclxuICAgICAgICAgICAgcGFkZGluZzogNjFweCAwIDAgNjdweDtcclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7IG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMnsgZm9udC1zaXplOiA4MHB4OyBsaW5lLWhlaWdodDogODBweH1cclxuICAgICAgICAgICAgaDN7IGxldHRlci1zcGFjaW5nOiAxNy41cHg7fVxyXG4gICAgICAgICAgICAuY3VzdG9tLWJ1dHRvbi1iYWNre1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb25kZXRhaWxzLWJhY2t7XHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAuaWNvbnRvcC1ncm91cDJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjY5cHg7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3VwM3tcclxuICAgICAgICAgICAgICAgIC5zcGFuMntcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLC05NHB4LDE2N3B4LGF1dG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgIC5oZXJvLXNlY3Rpb257XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTsgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDkwcHg7XHJcbiAgICAgICAgICAgICY6YmVmb3JleyB3aWR0aDogMTQ0cHg7IGRpc3BsYXk6IG5vbmU7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2UtYmFja3tcclxuICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywzMDBweCwwLGF1dG8pOyB3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7IGJvcmRlci1yYWRpdXM6IDEwMCU7IHJpZ2h0OiAwOyBsZWZ0OiAwOyBtYXJnaW46IGF1dG87IHRvcDogLTY0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZXJvLWNvbnRlbnQtYXJlYXtcclxuICAgICAgICAgICAgcGFkZGluZzogNjFweCAwIDAgNjdweDtcclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7IG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMnsgZm9udC1zaXplOiA4MHB4OyBsaW5lLWhlaWdodDogODBweH1cclxuICAgICAgICAgICAgaDN7IGxldHRlci1zcGFjaW5nOiAxNy41cHg7fVxyXG4gICAgICAgICAgICAuY3VzdG9tLWJ1dHRvbi1iYWNre1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb25kZXRhaWxzLWJhY2t7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAuaWNvbnRvcC1ncm91cHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7IGhlaWdodDogMjcwcHg7IHJpZ2h0OiAwOyBsZWZ0OiAwOyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAuc3BhbjJ7IGRpc3BsYXk6IG5vbmU7fVxyXG4gICAgICAgICAgICAgICAgLnNwYW4xe2JvcmRlci1yYWRpdXM6IDAgMCA1MDBweCA1MDBweDt9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3VwMntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNjlweDtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXAze1xyXG4gICAgICAgICAgICAgICAgLnNwYW4ye1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sLTk0cHgsMTY3cHgsYXV0byk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3BhbjF7IHRvcDogNjBweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCl7XHJcbiAgICAuaGVyby1zZWN0aW9ue1xyXG4gICAgICAgIC5pY29uZGV0YWlscy1iYWNre1xyXG4gICAgICAgICAgICAuaWNvbnRvcC1ncm91cDN7XHJcbiAgICAgICAgICAgICAgICAuc3BhbjJ7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywtOTRweCwxOTZweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0ODBweCkgYW5kIChtYXgtd2lkdGg6NjM5cHgpe1xyXG4gICAgLmhlcm8tc2VjdGlvbntcclxuICAgICAgICAuaWNvbmRldGFpbHMtYmFja3tcclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXAye1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywwLDM3MHB4LGF1dG8pO1xyXG4gICAgICAgICAgICAgICAgLnNwYW4xe1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDEzNXB4LGF1dG8sLTkwcHgsYXV0byk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3BhbjJ7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSg5MGRlZyksY2VudGVyIGNlbnRlcixmbGF0KTtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDYxcHgsMCwwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbnRvcC1ncm91cDN7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLDAsYXV0bywwKTsgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgLnNwYW4xe1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMCwtNzRweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zcGFuMntcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLDAsMjE1cHgsYXV0byk7IG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozNjBweCkgYW5kIChtYXgtd2lkdGg6NDc5cHgpe1xyXG4gICAgLmhlcm8tc2VjdGlvbnsgICAgICAgIFxyXG4gICAgICAgIC5oZXJvLWNvbnRlbnQtYXJlYXtcclxuICAgICAgICAgICAgcGFkZGluZzogNjFweCAwIDAgMThweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAuaWNvbmRldGFpbHMtYmFja3tcclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXAye1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywtMTJweCwzNzBweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIC5zcGFuMXtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwxMzVweCxhdXRvLC05MHB4LGF1dG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNwYW4ye1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoOTBkZWcpLGNlbnRlciBjZW50ZXIsZmxhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0byw2MXB4LDAsMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXAze1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCwwLGF1dG8sMCk7IG1hcmdpbjogYXV0bzsgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAuc3BhbjF7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywxNHB4LC03NHB4LGF1dG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNwYW4ye1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsMCwyMTVweCxhdXRvKTsgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLWJhY2t7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDsgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNTlweCl7XHJcbiAgICAuaGVyby1zZWN0aW9ueyAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDEzNnB4IDAgMCAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICBcclxuICAgICAgICAuaGVyby1jb250ZW50LWFyZWF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGgyeyBcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDsgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBieyBsZXR0ZXItc3BhY2luZzogLTlweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7IGZvbnQtc2l6ZTogMjBweDsgcGFkZGluZzogMDsgbGV0dGVyLXNwYWNpbmc6IDA7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgICAgICAgIGg0eyBmb250LXNpemU6IDE4cHg7IGxpbmUtaGVpZ2h0OiAzMHB4O31cclxuICAgICAgICAgICAgLmN1c3RvbS1idXR0b24tYmFja3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogOXB4IDAgMCAwOyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYXsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogbm9uZTsgcGFkZGluZzogMCAyMHB4OyBtYXJnaW46IDAgMTVweCAwIDA7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLmljb25kZXRhaWxzLWJhY2t7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZS1iYWNre1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7IGhlaWdodDogMTUwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAwOyBtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG5cclxufSIsIiRwcmltYXJ5Q29sb3I6ICNmZjYwM2M7XHJcbiRzZWNvbmRhcnlDb2xvcjogI2ZkZTc1NjtcclxuJGRlZmF1bHRDb2xvcjogIzNlM2EzOTtcclxuJGRlZmF1bHRDb2xvcnR3bzogIzA1MDUwNTtcclxuJG1haW5Db250YWluZXI6IDEyMDBweDtcclxuJGNvbW1vbkNvbG9yOiAjZmZmO1xyXG4kY29tbW9uQ29sb3IyOiAjZmNmY2ZjO1xyXG4kYWRkaXRpb25Db2xvck9uZTogIzEwMjYzMTtcclxuJGFkZGl0aW9uQ29sb3JUd286ICMzNTEwNTU7XHJcbiRhZGRpdGlvbkNvbG9yVGhyZWU6ICM4ZThkOGQ7XHJcblxyXG5cclxuJGhlYWRpbmdGb250dXNlOiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuJHN1YmhlYWRpbmdGb250dXNlOiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJGRlc2NyaWJlRm9udHVzZTogJ0JlbGxvdGEgVGV4dCcsIGN1cnNpdmU7XHJcblxyXG5cclxuJG1haW5Db250YWluZXI6IDEyMDBweDtcclxuXHJcbiRjb2xncmlkLTEwOiAxMCU7XHJcbiRjb2xncmlkLTIwOiAyMCU7XHJcbiRjb2xncmlkLTI1OiAyNSU7XHJcbiRjb2xncmlkLTMwOiAzMCU7XHJcbiRjb2xncmlkLTMzOiAzMy4zMzMzMyU7XHJcbiRjb2xncmlkLTQwOiA0MCU7XHJcbiRjb2xncmlkLTUwOiA1MCU7XHJcbiRjb2xncmlkLTYwOiA2MCU7XHJcbiRjb2xncmlkLTcwOiA3MCU7XHJcbiRjb2xncmlkLTgwOiA4MCU7XHJcbiRjb2xncmlkLTkwOiA5MCU7XHJcbiRjb2xncmlkLTEwMDogMTAwJTtcclxuXHJcbiRQYWRkaW5nVG9wOiAxMjNweDtcclxuJFBhZGRpbmdib3R0b206IDEyM3B4O1xyXG5cclxuJFBhZGRpbmdUb3AyOiA0NHB4O1xyXG4kUGFkZGluZ2JvdHRvbTI6IDQ0cHg7XHJcblxyXG4kZGVmYXVsdC1mb250c2l6ZTogMTZweDtcclxuJGZvbnQtYmlnLWV4dHJhOiAxMTBweDtcclxuJGZvbnQtYmlnLXVsdHJhOiA3MHB4O1xyXG4kZm9udC1iaWc6IDQycHg7XHJcbiRmb250LW1pZGl1bTogMzBweDtcclxuJGZvbnQtc21hbGw6IDIwcHg7IiwiLmhlcm8tc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIxNXB4IDAgMCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhlcm8tc2VjdGlvbjphZnRlciB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGU3NTY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDgwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4uaGVyby1zZWN0aW9uIC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDYwMnB4O1xufVxuLmhlcm8tc2VjdGlvbiAuY29udGFpbmVyOjpiZWZvcmUge1xuICB3aWR0aDogMjMzcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGU3NTY7XG4gIGJvcmRlci1yYWRpdXM6IDgwcHggMCAwIDgwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSB7XG4gIHBhZGRpbmc6IDYxcHggMCAwIDEyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGgyIHtcbiAgZm9udC1zaXplOiAxMTBweDtcbiAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXNoYWRvdzogcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjc1KSAxcHggMCAxMHB4O1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDIgYiB7XG4gIGxldHRlci1zcGFjaW5nOiAtMTRweDtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGgzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBjb2xvcjogI2ZmNjAzYztcbiAgbGV0dGVyLXNwYWNpbmc6IDQzLjVweDtcbiAgcGFkZGluZzogMCAwIDAgN3B4O1xuICBtYXJnaW46IC0xOXB4IDAgMCAwO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDQge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOXB4O1xuICBtYXJnaW46IDE1cHggMCAwIDA7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoNCAuam9iUCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNzI2NDA4O1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDQgLmNvbU4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI2ZmNjAzYztcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIC5jdXN0b20tYnV0dG9uLWJhY2sge1xuICBtYXJnaW46IDQwcHggMCAwIDA7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSAuY3VzdG9tLWJ1dHRvbi1iYWNrIGEge1xuICBtYXJnaW46IDAgMjZweCAwIDA7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSAuY3VzdG9tLWJ1dHRvbi1iYWNrIGE6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzZTNhMzk7XG4gIGJvcmRlci1jb2xvcjogIzNlM2EzOTtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIC5jdXN0b20tYnV0dG9uLWJhY2sgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTNhMzk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMzZTNhMzk7XG59XG4uaGVyby1zZWN0aW9uIC5pbWFnZS1iYWNrIHtcbiAgd2lkdGg6IDQxMHB4O1xuICBoZWlnaHQ6IDQzN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MDNjO1xuICBib3JkZXItcmFkaXVzOiA4MHB4IDAgMCA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBmbG9hdDogbGVmdDtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiA0NnB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgd2lkdGg6IDMxNXB4O1xuICBoZWlnaHQ6IDIyN3B4O1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCAuc3BhbjEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6ICNmZjYwM2MgMjVweCBzb2xpZDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwIC5zcGFuMiB7XG4gIHdpZHRoOiAxMjJweDtcbiAgaGVpZ2h0OiAxNTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IC03NnB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ0ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDRkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLW8tdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCAuc3BhbjIgLnB1cnBsZS1pb2NuLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDAgMTdweCAwO1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCAuc3BhbjIgLnB1cnBsZS1pb2NuLWdyb3VwIHNwYW4ge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbiAgbWFyZ2luOiAwIDE4cHggMCAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAgLnNwYW4yIC5wdXJwbGUtaW9jbi1ncm91cCBzcGFuOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4uaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwIC5zcGFuMiAucHVycGxlLWlvY24tZ3JvdXAgc3Bhbjo6YWZ0ZXIge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbiAgbWFyZ2luOiAwIDE4cHggMCAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNHB4O1xuICBsZWZ0OiAwO1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiA0NnB4O1xuICB0b3A6IDM3MHB4O1xuICBib3R0b206IGF1dG87XG4gIHdpZHRoOiAzNDJweDtcbiAgaGVpZ2h0OiA5NHB4O1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDIgLnNwYW4xIHtcbiAgd2lkdGg6IDk0cHg7XG4gIGhlaWdodDogOTRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogIzM1MTA1NSAxNXB4IHNvbGlkO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDRkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ0ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDRkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC1vLXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG59XG4uaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMiAuc3BhbjIge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAzNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAzNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgI2ZmNjAzYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogNjFweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIC5zcGFuMjo6YWZ0ZXIge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAzNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAzNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MXB4O1xuICByaWdodDogYXV0bztcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IC0zNHB4O1xuICBjb250ZW50OiBcIlwiO1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAxMDVweDtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA0NDJweDtcbiAgaGVpZ2h0OiAyNTdweDtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMSB7XG4gIHdpZHRoOiAzOXB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMiB7XG4gIHdpZHRoOiAzNzVweDtcbiAgaGVpZ2h0OiAzNzVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTY3cHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYm9yZGVyOiAjZmZmIDI1cHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSBhbmQgKG1heC13aWR0aDogMTgwMHB4KSB7XG4gIC5oZXJvLXNlY3Rpb24gLmltYWdlLWJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxNzhweDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjZweCkgYW5kIChtYXgtd2lkdGg6IDE1OTlweCkge1xuICAuaGVyby1zZWN0aW9uIC5pbWFnZS1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMzAwcHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoNCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IC05NHB4O1xuICAgIHRvcDogMTY3cHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xuICAuaGVyby1zZWN0aW9uOmFmdGVyIHtcbiAgICB3aWR0aDogMzYlO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogNDkwcHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuY29udGFpbmVyOmJlZm9yZSB7XG4gICAgd2lkdGg6IDE0NHB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmltYWdlLWJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAzMDBweDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDM1NHB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIHtcbiAgICBwYWRkaW5nOiA2MXB4IDAgMCA2N3B4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGg0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGgyIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDMge1xuICAgIGxldHRlci1zcGFjaW5nOiAxNy41cHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgLmN1c3RvbS1idXR0b24tYmFjayB7XG4gICAgbWFyZ2luOiA5cHggMCAwIDA7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCB7XG4gICAgd2lkdGg6IDIzNXB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIHtcbiAgICB3aWR0aDogMjY5cHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDMgLnNwYW4yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogLTk0cHg7XG4gICAgdG9wOiAxNjdweDtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5oZXJvLXNlY3Rpb246YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA0OTBweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5jb250YWluZXI6YmVmb3JlIHtcbiAgICB3aWR0aDogMTQ0cHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pbWFnZS1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMzAwcHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogLTY0cHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEge1xuICAgIHBhZGRpbmc6IDYxcHggMCAwIDY3cHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDIge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoMyB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDE3LjVweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSAuY3VzdG9tLWJ1dHRvbi1iYWNrIHtcbiAgICBtYXJnaW46IDlweCAwIDAgMDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMjcwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCAuc3BhbjIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCAuc3BhbjEge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MDBweCA1MDBweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMiB7XG4gICAgd2lkdGg6IDI2OXB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IC05NHB4O1xuICAgIHRvcDogMTY3cHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMSB7XG4gICAgdG9wOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IC05NHB4O1xuICAgIHRvcDogMTk2cHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMzcwcHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIC5zcGFuMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEzNXB4O1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogLTkwcHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIC5zcGFuMiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiA2MXB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAtNzRweDtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDMgLnNwYW4yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDIxNXB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSB7XG4gICAgcGFkZGluZzogNjFweCAwIDAgMThweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogLTEycHg7XG4gICAgdG9wOiAzNzBweDtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDIgLnNwYW4xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTM1cHg7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiAtOTBweDtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDIgLnNwYW4yIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDYxcHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDMgLnNwYW4xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMTRweDtcbiAgICB0b3A6IC03NHB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyAuc3BhbjIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMjE1cHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pbWFnZS1iYWNrIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuaGVyby1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxMzZweCAwIDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDIge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoMiBiIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLTlweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgLmN1c3RvbS1idXR0b24tYmFjayB7XG4gICAgbWFyZ2luOiA5cHggMCAwIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIC5jdXN0b20tYnV0dG9uLWJhY2sgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pbWFnZS1iYWNrIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn0iLCJAbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uLCRsZWZ0LCRyaWdodCwkdG9wLCRib3R0b20pe1xyXG4gICAgcG9zaXRpb246ICRwb3NpdGlvbjtcclxuICAgIGxlZnQ6ICRsZWZ0O1xyXG4gICAgcmlnaHQ6ICRyaWdodDtcclxuICAgIHRvcDogJHRvcDtcclxuICAgIGJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuQG1peGluIHZpc2libGl0eSgkdmFsdWUpe1xyXG4gICAgdmlzaWJpbGl0eTogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtbW96LXZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICAgIC1vLXZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICAgIC1tcy12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsdWUtdHlwZSwkb3JpZ2luLCRzdHlsZSl7XHJcbiAgICB0cmFuc2Zvcm06ICR2YWx1ZS10eXBlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR2YWx1ZS10eXBlO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICR2YWx1ZS10eXBlO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiAkc3R5bGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogJHN0eWxlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxuICAgIC1vLXRyYW5zZm9ybS1zdHlsZTogJHN0eWxlO1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLCRkdXJhdGlvbiwkYmVoYXZpb3VyKXtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkYmVoYXZpb3VyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxufVxyXG5AbWl4aW4gZmlsdGVyKCR2YWx1ZSl7XHJcbiAgICBmaWx0ZXI6ICR2YWx1ZTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiAkdmFsdWU7XHJcbiAgICAtbW96LWZpbHRlcjogJHZhbHVlO1xyXG4gICAgLW8tZmlsdGVyOiAkdmFsdWU7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCR2YWx1ZSl7XHJcbiAgICBmbGV4OiAkdmFsdWU7XHJcbiAgICAtd2Via2l0LWZsZXg6ICR2YWx1ZTtcclxuICAgIC1tb3otZmxleDogJHZhbHVlO1xyXG4gICAgLW8tZmxleDogJHZhbHVlO1xyXG4gICAgLW1zLWZsZXg6ICR2YWx1ZTtcclxufVxyXG5AbWl4aW4gb3BhY2l0eSgkdmFsdWUpe1xyXG4gICAgb3BhY2l0eTogJHZhbHVlO1xyXG4gICAgZmlsdGVyOiBBbHBoYShvcGFjaXR5PSR2YWx1ZSk7XHJcbn1cclxuQG1peGluIGFuaW1hdGlvbigkbmFtZSwkdGltZSwkZmlsbG1vZGUpe1xyXG4gICAgYW5pbWF0aW9uOiAkbmFtZSAkdGltZSAkZmlsbG1vZGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlO1xyXG4gICAgLW1vei1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1vLWFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlOyBcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/home/hero/hero.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/home/about/about.component.ts");
    /* harmony import */


    var _work_process_work_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./work-process/work-process.component */
    "./src/app/home/work-process/work-process.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 4,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-work-process");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ">\n");
        }
      },
      directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _work_process_work_process_component__WEBPACK_IMPORTED_MODULE_3__["WorkProcessComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/passion/passion.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/passion/passion.component.ts ***!
    \***************************************************/

  /*! exports provided: PassionComponent */

  /***/
  function srcAppHomePassionPassionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PassionComponent", function () {
      return PassionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PassionComponent =
    /*#__PURE__*/
    function () {
      function PassionComponent() {
        _classCallCheck(this, PassionComponent);
      }

      _createClass(PassionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PassionComponent;
    }();

    PassionComponent.ɵfac = function PassionComponent_Factory(t) {
      return new (t || PassionComponent)();
    };

    PassionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PassionComponent,
      selectors: [["app-passion"]],
      decls: 2,
      vars: 0,
      template: function PassionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "passion works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFzc2lvbi9wYXNzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-passion',
          templateUrl: './passion.component.html',
          styleUrls: ['./passion.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/work-process/work-process.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/work-process/work-process.component.ts ***!
    \*************************************************************/

  /*! exports provided: WorkProcessComponent */

  /***/
  function srcAppHomeWorkProcessWorkProcessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkProcessComponent", function () {
      return WorkProcessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WorkProcessComponent_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }
    }

    function WorkProcessComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "symbol", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "symbol", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "symbol", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "symbol", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "symbol", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "symbol", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WorkProcessComponent_ng_template_3_Template(rf, ctx) {}

    function WorkProcessComponent_li_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var work_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon-back ", work_r18.iconclass, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", work_r18.iconname, null, "xlink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", work_r18.id, ". ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, work_r18.title), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r18.drescription);
      }
    }

    var WorkProcessComponent =
    /*#__PURE__*/
    function () {
      function WorkProcessComponent(db) {
        var _this = this;

        _classCallCheck(this, WorkProcessComponent);

        this.title = "How I Work";
        this.main = "Work Process";
        this.drescription = "Reach your business goals with excellent user experience. Let’s start working on your awesome web or iOS app.";
        this.havesvg = true;
        db.list('/workprocessdata').valueChanges().subscribe(function (workprocessdata) {
          _this.workprocessdata = workprocessdata;
          console.log(_this.workprocessdata);
        });
      }
      /*workprocess: any =[
        {
          "workContent":[
            {
              "iconclass":"icon1",
              "iconname":"#icon1",
              "id":"01",
              "title":"strategy",
              "drescription":"Ask first. De dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus. Lorem iupsum",
            },
            {
              "iconclass":"icon2",
              "iconname":"#icon2",
              "id":"02",
              "title":"mockup",
              "drescription":"Ask first. De dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus. Lorem iupsum",
            },
            {
              "iconclass":"icon3",
              "iconname":"#icon3",
              "id":"03",
              "title":"design",
              "drescription":"Ask first. De dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus. Lorem iupsum",
            }
            ]
      },
      {
        "workContent":[
          {
            "iconclass":"icon4",
            "iconname":"#icon4",
            "id":"04",
            "title":"development",
            "drescription":"Ask first. De dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus. Lorem iupsum",
          },
          {
            "iconclass":"icon5",
            "iconname":"#icon5",
            "id":"05",
            "title":"quality qssurance",
            "drescription":"Ask first. De dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus. Lorem iupsum",
          },
          {
            "iconclass":"icon6",
            "iconname":"#icon6",
            "id":"06",
            "title":"project support",
            "drescription":"Ask first. De dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus. Lorem iupsum",
          }
          ]
      },
      ];*/


      _createClass(WorkProcessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WorkProcessComponent;
    }();

    WorkProcessComponent.ɵfac = function WorkProcessComponent_Factory(t) {
      return new (t || WorkProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
    };

    WorkProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkProcessComponent,
      selectors: [["app-work-process"]],
      decls: 20,
      vars: 7,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["test1", ""], ["test2", ""], [1, "p-t", "p-b"], [1, "container"], [1, "custom-heading"], [1, "heading"], [1, "clear"], [1, "work-process-back"], [1, "details"], [4, "ngFor", "ngForOf"], [1, "none"], ["viewBox", "0 0 162 162", "id", "icon1"], ["transform", "matrix(1,0,0,1,-3876,-913)"], ["transform", "matrix(4.16667,0,0,4.16667,0,0)"], ["d", "M948.13,238.783C947.432,238.273 946.575,237.968 945.646,237.968C943.317,237.968 941.423,239.861 941.423,242.189C941.423,244.519 943.317,246.412 945.646,246.412C947.974,246.412 949.869,244.519 949.869,242.189C949.869,241.261 949.563,240.403 949.052,239.705L952.16,236.598C953.453,238.102 954.237,240.056 954.237,242.189C954.237,246.928 950.383,250.781 945.646,250.781C940.908,250.781 937.054,246.928 937.054,242.189C937.054,237.453 940.908,233.599 945.646,233.599C947.78,233.599 949.734,234.383 951.237,235.676L948.13,238.783ZM945.185,242.65C945.312,242.778 945.479,242.842 945.646,242.842C945.813,242.842 945.979,242.778 946.106,242.65L948.115,240.643C948.398,241.092 948.564,241.621 948.564,242.189C948.564,243.799 947.255,245.107 945.646,245.107C944.037,245.107 942.728,243.799 942.728,242.189C942.728,240.581 944.037,239.272 945.646,239.272C946.214,239.272 946.744,239.438 947.193,239.721L945.185,241.729C944.93,241.983 944.93,242.396 945.185,242.65ZM959.887,242.189C959.887,250.042 953.498,256.432 945.646,256.432C937.793,256.432 931.404,250.042 931.404,242.189C931.404,234.337 937.793,227.948 945.646,227.948C949.338,227.948 952.706,229.361 955.239,231.674L952.162,234.752C950.42,233.224 948.14,232.294 945.646,232.294C940.189,232.294 935.75,236.733 935.75,242.189C935.75,247.646 940.189,252.086 945.646,252.086C951.103,252.086 955.542,247.646 955.542,242.189C955.542,239.695 954.612,237.416 953.084,235.674L956.162,232.597C958.474,235.129 959.887,238.498 959.887,242.189ZM961.147,219.677C961.018,219.341 960.64,219.174 960.304,219.304C959.968,219.434 959.801,219.812 959.931,220.147L961.818,225.019C961.825,225.036 961.838,225.05 961.846,225.067L960.458,226.456L958.753,221.916C958.627,221.579 958.252,221.408 957.913,221.534C957.576,221.661 957.405,222.037 957.532,222.374L959.418,227.398C959.427,227.421 959.442,227.438 959.453,227.46L956.161,230.752C953.391,228.203 949.697,226.644 945.646,226.644C937.074,226.644 930.1,233.617 930.1,242.189C930.1,250.762 937.074,257.735 945.646,257.735C954.218,257.735 961.191,250.762 961.191,242.189C961.191,238.138 959.632,234.444 957.083,231.675L960.009,228.748C960.113,228.895 960.275,228.999 960.468,229.021L966.592,229.693C966.616,229.696 966.64,229.697 966.664,229.697C966.992,229.697 967.275,229.45 967.312,229.116C967.351,228.759 967.092,228.437 966.734,228.396L960.992,227.766L962.675,226.082C962.703,226.09 962.73,226.098 962.759,226.101L968.883,226.773C968.907,226.775 968.931,226.777 968.955,226.777C969.283,226.777 969.565,226.53 969.602,226.196C969.642,225.838 969.383,225.516 969.025,225.477L963.85,224.908L966.994,221.765C967.248,221.51 967.248,221.097 966.994,220.842C966.739,220.588 966.326,220.588 966.071,220.842L962.848,224.066L961.147,219.677Z"], ["viewBox", "0 0 162 162", "id", "icon2"], ["transform", "matrix(1,0,0,1,-3072,-647)"], ["d", "M756.622,165.212C760.654,165.212 763.935,168.493 763.935,172.525C763.935,173.535 763.872,174.42 763.561,175.711C762.984,178.059 761.522,181.4 761.021,182.513L752.223,182.513C751.721,181.4 750.26,178.061 749.683,175.714C749.371,174.42 749.309,173.535 749.309,172.525C749.309,168.493 752.589,165.212 756.622,165.212ZM761.395,189.823C761.229,189.984 760.988,190.085 760.729,190.072L753.004,189.97C752.532,189.964 752.15,189.648 752.154,189.266C752.157,188.973 752.392,188.713 752.738,188.621C753.035,188.542 753.236,188.266 753.222,187.959C753.208,187.653 752.98,187.398 752.678,187.347C752.28,187.281 751.982,186.985 751.986,186.658C751.989,186.38 752.208,186.126 752.533,186.025C752.805,185.941 752.991,185.69 752.992,185.405C752.993,185.121 752.81,184.868 752.539,184.781C752.206,184.674 751.983,184.411 751.986,184.125C751.987,184 752.031,183.899 752.083,183.818L761.229,183.818C761.348,183.939 761.422,184.09 761.42,184.253C761.418,184.531 761.199,184.785 760.875,184.885C760.603,184.969 760.417,185.22 760.415,185.504C760.414,185.789 760.598,186.042 760.869,186.129C761.202,186.236 761.424,186.5 761.42,186.786C761.418,187.079 761.184,187.338 760.838,187.43C760.542,187.509 760.34,187.784 760.355,188.091C760.369,188.397 760.595,188.652 760.898,188.704C761.295,188.77 761.592,189.066 761.589,189.393C761.587,189.593 761.482,189.737 761.395,189.823ZM748.004,172.525C748.004,173.63 748.073,174.601 748.415,176.022C749.025,178.501 750.51,181.892 751.03,183.044C750.808,183.359 750.686,183.728 750.682,184.112C750.677,184.593 750.858,185.045 751.172,185.4C750.867,185.743 750.687,186.179 750.682,186.645C750.676,187.19 750.906,187.691 751.291,188.058C751.015,188.391 750.854,188.806 750.85,189.253C750.839,190.352 751.798,191.259 752.987,191.275L760.712,191.376L760.743,191.376C761.333,191.376 761.901,191.151 762.306,190.755C762.68,190.391 762.888,189.911 762.894,189.406C762.899,188.861 762.669,188.36 762.284,187.993C762.561,187.66 762.721,187.245 762.725,186.798C762.73,186.317 762.549,185.865 762.235,185.511C762.541,185.167 762.721,184.731 762.725,184.266C762.73,183.782 762.547,183.335 762.24,182.985C762.782,181.78 764.228,178.46 764.828,176.02C765.17,174.601 765.239,173.63 765.239,172.525C765.239,167.774 761.373,163.908 756.622,163.908C751.87,163.908 748.004,167.774 748.004,172.525Z"], ["d", "M750.953,162.993C750.934,163.007 750.913,163.015 750.889,163.016C750.856,163.021 750.822,163.002 750.8,162.975L746.912,158.036C746.889,158.007 746.887,157.977 746.889,157.957C746.891,157.94 746.899,157.908 746.93,157.884C746.953,157.866 746.977,157.861 746.996,157.861L747.009,157.861C747.025,157.864 747.057,157.872 747.082,157.902L750.971,162.84C750.994,162.87 750.996,162.9 750.994,162.92C750.992,162.937 750.983,162.968 750.953,162.993ZM747.594,157.499C747.468,157.339 747.288,157.238 747.086,157.214C746.886,157.189 746.686,157.246 746.526,157.372C746.366,157.498 746.265,157.678 746.242,157.88C746.217,158.082 746.274,158.281 746.399,158.44L750.289,163.378C750.433,163.561 750.655,163.668 750.886,163.668L750.913,163.668C751.075,163.662 751.228,163.605 751.356,163.505C751.516,163.379 751.617,163.199 751.641,162.997C751.665,162.795 751.609,162.596 751.483,162.437L747.594,157.499Z"], ["d", "M762.016,162.791L765.223,157.965C765.245,157.933 765.275,157.923 765.292,157.919C765.308,157.917 765.34,157.914 765.373,157.935C765.405,157.958 765.416,157.988 765.419,158.005C765.423,158.025 765.424,158.055 765.403,158.086L762.195,162.911C762.167,162.953 762.125,162.958 762.108,162.959C762.087,162.959 762.065,162.954 762.046,162.941C762.013,162.919 762.003,162.888 762,162.872C761.997,162.856 761.994,162.824 762.016,162.791ZM761.684,163.484L761.685,163.484C761.811,163.568 761.955,163.611 762.104,163.611L762.131,163.611C762.376,163.603 762.604,163.476 762.739,163.272L765.946,158.447C766.059,158.278 766.099,158.075 766.059,157.875C766.019,157.677 765.903,157.505 765.734,157.393C765.565,157.28 765.362,157.24 765.163,157.28C764.963,157.321 764.792,157.436 764.68,157.605L761.473,162.43C761.36,162.599 761.32,162.802 761.36,163.001C761.4,163.2 761.516,163.372 761.684,163.484Z"], ["d", "M756.387,161.592L756.657,155.184C756.659,155.144 756.68,155.119 756.692,155.108C756.707,155.094 756.733,155.08 756.77,155.08C756.807,155.082 756.832,155.1 756.845,155.115C756.857,155.127 756.875,155.154 756.874,155.193L756.604,161.601C756.602,161.658 756.556,161.704 756.496,161.706L756.491,161.706C756.454,161.704 756.429,161.686 756.416,161.67C756.404,161.658 756.386,161.632 756.387,161.592ZM756.464,162.357C756.475,162.357 756.485,162.358 756.495,162.358C756.504,162.358 756.514,162.357 756.521,162.357C756.916,162.344 757.238,162.025 757.255,161.629L757.526,155.22C757.534,155.017 757.463,154.823 757.326,154.674C757.188,154.524 757,154.437 756.799,154.429C756.595,154.421 756.402,154.49 756.252,154.626C756.102,154.764 756.014,154.952 756.006,155.157L755.736,161.565C755.727,161.768 755.798,161.962 755.935,162.112C756.073,162.261 756.26,162.349 756.463,162.357L756.464,162.357Z"], ["d", "M752.002,171.307C752.393,171.331 752.737,171.034 752.764,170.641C752.776,170.452 752.805,170.272 752.85,170.093C753.149,168.911 754.106,168.449 754.856,168.268C755.208,168.184 755.467,168.174 755.494,168.173C755.888,168.164 756.201,167.836 756.192,167.443C756.184,167.056 755.864,166.742 755.462,166.742C754.121,166.771 751.532,167.603 751.335,170.546C751.309,170.939 751.608,171.281 752.002,171.307Z"], ["viewBox", "0 0 162 162", "id", "icon3"], ["transform", "matrix(1,0,0,1,-1207,-3885)"], ["d", "M301.674,945.153C301.564,944.994 301.444,944.843 301.317,944.696L306.758,940.95C306.871,941.107 306.992,941.259 307.121,941.403L301.674,945.153ZM306.803,954.333C306.689,954.488 306.583,954.649 306.486,954.817L301.503,951.389C301.621,951.236 301.73,951.076 301.831,950.911L306.803,954.333ZM311.078,953.459C313.282,953.459 315.076,955.252 315.076,957.457C315.076,959.661 313.282,961.455 311.078,961.455C308.874,961.455 307.08,959.661 307.08,957.457C307.08,955.252 308.874,953.459 311.078,953.459ZM297.309,952.154C295.104,952.154 293.311,950.361 293.311,948.157C293.311,945.952 295.104,944.159 297.309,944.159C299.513,944.159 301.307,945.952 301.307,948.157C301.307,950.361 299.513,952.154 297.309,952.154ZM311.078,933.889C313.282,933.889 315.076,935.682 315.076,937.886C315.076,940.091 313.282,941.885 311.078,941.885C308.874,941.885 307.08,940.091 307.08,937.886C307.08,935.682 308.874,933.889 311.078,933.889ZM311.078,943.188C314.001,943.188 316.38,940.811 316.38,937.886C316.38,934.963 314.001,932.584 311.078,932.584C308.154,932.584 305.776,934.963 305.776,937.886C305.776,938.56 305.907,939.201 306.136,939.794L300.321,943.799C299.465,943.205 298.427,942.854 297.309,942.854C294.385,942.854 292.006,945.233 292.006,948.157C292.006,951.08 294.385,953.459 297.309,953.459C298.539,953.459 299.669,953.034 300.569,952.329L305.972,956.047C305.848,956.496 305.776,956.968 305.776,957.457C305.776,960.381 308.154,962.759 311.078,962.759C314.001,962.759 316.38,960.381 316.38,957.457C316.38,954.533 314.001,952.154 311.078,952.154C309.798,952.154 308.622,952.611 307.705,953.369L302.379,949.706C302.529,949.215 302.611,948.695 302.611,948.157C302.611,947.511 302.49,946.895 302.277,946.322L308.13,942.291C308.974,942.857 309.988,943.188 311.078,943.188Z"], ["viewBox", "0 0 162 162", "id", "icon4"], ["transform", "matrix(1,0,0,1,-2266,-2506)"], ["d", "M566.713,637.644C566.56,636.659 566.275,635.47 565.748,634.303C565.938,633.994 566.123,633.743 566.273,633.563C568.368,634.922 570.604,634.288 571.865,633.548C572.982,634.845 573.267,636.687 573.338,637.643L566.713,637.644ZM552.561,639.274C552.791,635.795 554.384,633.613 555.113,632.786C558.502,635.148 561.959,633.509 563.203,632.761C565.125,634.827 565.497,637.947 565.566,639.272L552.561,639.274ZM574.664,638.316C574.669,638.157 574.765,634.395 572.396,632.224C572.163,632.012 571.81,631.997 571.559,632.187C571.454,632.266 568.961,634.112 566.606,632.194C566.36,631.994 566.006,631.999 565.767,632.207C565.733,632.237 565.429,632.51 565.048,633.017C564.684,632.456 564.25,631.923 563.728,631.446C563.496,631.232 563.143,631.218 562.892,631.409C562.735,631.528 559.004,634.302 555.458,631.413C555.211,631.213 554.857,631.218 554.618,631.426C554.483,631.544 551.31,634.364 551.23,639.918C551.228,640.092 551.295,640.261 551.418,640.385C551.541,640.509 551.708,640.579 551.882,640.579L566.232,640.576C566.583,640.576 566.872,640.297 566.884,639.946C566.885,639.89 566.895,639.52 566.857,638.948L574.013,638.947C574.364,638.947 574.653,638.668 574.664,638.316Z"], ["d", "M570.125,613.188L570.125,610.653L573.174,610.653C573.435,610.653 573.647,610.865 573.647,611.125L573.647,616.86C573.647,617.121 573.435,617.333 573.174,617.333L570.321,617.333C570.185,617.333 570.055,617.391 569.962,617.49C569.87,617.591 569.823,617.725 569.833,617.861L569.847,618.029L569.388,617.502C569.295,617.395 569.161,617.333 569.019,617.333L564.273,617.333C564.012,617.333 563.8,617.121 563.8,616.86L563.8,615.333L567.979,615.333C569.163,615.333 570.125,614.371 570.125,613.188ZM567.908,615.259L562.822,615.259L562.822,616.86C562.822,617.661 563.473,618.312 564.273,618.312L568.796,618.312L570.082,619.79C570.176,619.899 570.312,619.958 570.451,619.958C570.514,619.958 570.578,619.946 570.639,619.92C570.834,619.839 570.955,619.642 570.938,619.431L570.85,618.312L573.174,618.312C573.974,618.312 574.625,617.661 574.625,616.86L574.625,611.125C574.625,610.325 573.974,609.675 573.174,609.675L570.008,609.675L570.008,613.159C570.008,614.316 569.065,615.259 567.908,615.259Z"], ["d", "M551.375,604.78C551.375,604.243 551.813,603.806 552.349,603.806L567.908,603.806C568.445,603.806 568.881,604.243 568.881,604.78L568.881,613.159C568.881,613.695 568.445,614.132 567.908,614.132L560.685,614.132C560.521,614.132 560.366,614.203 560.259,614.326L559.092,615.668L559.165,614.739C559.177,614.583 559.124,614.428 559.017,614.313C558.91,614.198 558.76,614.132 558.603,614.132L552.349,614.132C551.813,614.132 551.375,613.695 551.375,613.159L551.375,604.78ZM550.249,613.159C550.249,614.316 551.191,615.259 552.349,615.259L557.994,615.259L557.835,617.283C557.816,617.525 557.955,617.753 558.179,617.847C558.25,617.876 558.324,617.891 558.397,617.891C558.556,617.891 558.712,617.822 558.822,617.697L560.941,615.259L567.908,615.259C569.065,615.259 570.008,614.316 570.008,613.159L570.008,609.675L570.008,604.78C570.008,603.622 569.065,602.679 567.908,602.679L552.349,602.679C551.191,602.679 550.249,603.622 550.249,604.78L550.249,613.159Z"], ["d", "M562.475,628.175C561.562,629.089 560.348,629.593 559.059,629.593L559.058,629.593C556.392,629.593 554.223,627.425 554.222,624.76C554.222,623.471 554.725,622.256 555.64,621.342C556.554,620.427 557.768,619.923 559.058,619.923C561.722,619.923 563.892,622.091 563.893,624.757C563.894,626.046 563.39,627.26 562.475,628.175ZM566.748,625.446C567.35,624.844 568.149,624.512 568.998,624.512C570.752,624.512 572.181,625.939 572.181,627.694C572.182,628.542 571.85,629.341 571.248,629.944C570.646,630.546 569.848,630.878 569,630.878L568.998,630.878C567.244,630.878 565.815,629.451 565.815,627.697C565.815,626.848 566.146,626.048 566.748,625.446ZM568.998,632.182L569,632.182C570.196,632.182 571.323,631.715 572.17,630.866C573.019,630.017 573.486,628.891 573.486,627.694C573.484,625.22 571.471,623.208 568.998,623.208C567.801,623.208 566.674,623.675 565.826,624.524C565.569,624.78 565.353,625.065 565.167,625.367C565.188,625.165 565.198,624.961 565.198,624.756C565.196,621.372 562.441,618.618 559.058,618.618C557.419,618.618 555.877,619.258 554.717,620.42C553.557,621.581 552.917,623.122 552.917,624.761C552.919,628.145 555.673,630.897 559.058,630.897L559.059,630.897C560.697,630.897 562.238,630.258 563.398,629.097C563.856,628.639 564.229,628.12 564.518,627.561C564.516,627.606 564.51,627.651 564.51,627.697C564.512,630.17 566.525,632.182 568.998,632.182Z"], ["viewBox", "0 0 162 162", "id", "icon5"], ["transform", "matrix(1,0,0,1,-1716,-3589)"], ["d", "M425.836,883.949C426.163,883.85 426.515,883.76 426.876,883.675L427.335,887.762C426.803,887.651 426.299,887.526 425.836,887.385C423.854,886.779 423.148,886.101 423.148,885.667C423.148,885.233 423.854,884.555 425.836,883.949ZM429.795,873.159L431.487,888.232C430.875,888.202 430.206,888.153 429.401,888.082C429.285,888.054 429.169,888.04 429.055,888.04C429.029,888.04 429.004,888.04 428.979,888.042L428.737,888.02C428.632,888.011 428.527,888.001 428.431,887.992L426.803,873.495L429.795,873.159ZM427.474,870.061L428.38,869.959L429.188,871.74L427.081,871.978L427.474,870.061ZM433.325,889.462C437.321,889.462 441.002,888.797 442.994,887.722L442.988,900.43C442.896,901.021 441.832,901.668 440.139,902.16C438.25,902.71 435.798,903.013 433.235,903.013C430.673,903.013 428.221,902.71 426.332,902.16C424.64,901.668 423.574,901.021 423.483,900.428L423.477,887.619C425.404,888.741 429.24,889.462 433.325,889.462ZM433.325,883.014C433.341,883.014 433.356,883.015 433.372,883.015L433.372,888.319C433.356,888.319 433.341,888.32 433.325,888.32C433.069,888.32 432.818,888.314 432.565,888.31L431.974,883.042C432.419,883.024 432.868,883.014 433.325,883.014ZM434.249,863.428C434.249,863.07 434.54,862.779 434.898,862.779L440.889,862.779C441.247,862.779 441.538,863.07 441.538,863.428L441.538,867.916L439.122,867.916C439.009,867.916 438.913,867.958 438.845,868.037C438.786,868.105 438.754,868.197 438.754,868.295C438.754,868.482 438.88,868.674 439.122,868.674L441.538,868.674L441.538,870.215L439.122,870.215C439.009,870.215 438.913,870.257 438.845,870.336C438.786,870.405 438.754,870.496 438.754,870.594C438.754,870.782 438.88,870.973 439.122,870.973L441.538,870.973L441.538,872.514L439.122,872.514C439.009,872.514 438.913,872.556 438.845,872.636C438.786,872.704 438.754,872.796 438.754,872.893C438.754,873.081 438.88,873.271 439.122,873.271L441.538,873.271L441.538,874.813L437.378,874.813C437.265,874.813 437.169,874.855 437.101,874.935C437.042,875.003 437.009,875.095 437.009,875.192C437.009,875.381 437.136,875.571 437.378,875.571L441.538,875.571L441.538,877.112L439.122,877.112C439.009,877.112 438.913,877.154 438.845,877.233C438.786,877.303 438.754,877.395 438.754,877.491C438.754,877.68 438.88,877.87 439.122,877.87L441.538,877.87L441.538,879.412L439.122,879.412C439.009,879.412 438.913,879.454 438.845,879.533C438.786,879.602 438.754,879.693 438.754,879.791C438.754,879.979 438.88,880.169 439.122,880.169L441.538,880.169L441.538,881.711L439.122,881.711C439.009,881.711 438.913,881.753 438.845,881.832C438.786,881.901 438.754,881.992 438.754,882.09C438.754,882.278 438.88,882.469 439.122,882.469L441.538,882.469L441.538,884.01L437.378,884.01C437.265,884.01 437.169,884.052 437.101,884.132C437.042,884.2 437.009,884.292 437.009,884.39C437.009,884.577 437.136,884.768 437.378,884.768L441.538,884.768L441.538,886.31L439.122,886.31C439.009,886.31 438.913,886.352 438.845,886.431C438.786,886.499 438.754,886.591 438.754,886.688C438.754,886.877 438.88,887.066 439.122,887.066L441.538,887.066L441.538,887.156C441.33,887.215 441.123,887.279 440.915,887.343C440.362,887.514 439.79,887.69 439.191,887.77C439.024,887.792 438.867,887.835 438.728,887.896C437.284,888.122 435.818,888.246 434.249,888.274L434.249,863.428ZM442.415,884.581C443.191,884.989 443.501,885.382 443.501,885.667C443.501,885.952 443.191,886.345 442.415,886.753L442.415,884.581ZM422.351,901.088L422.506,901.088C423.516,903.193 428.759,904.153 433.235,904.153C437.712,904.153 442.955,903.193 443.964,901.088L444.135,901.088L444.135,886.866C444.472,886.49 444.643,886.087 444.643,885.667C444.643,884.722 443.783,883.943 442.415,883.343L442.415,863.428C442.415,862.587 441.73,861.902 440.889,861.902L434.898,861.902C434.057,861.902 433.372,862.587 433.372,863.428L433.372,881.872L433.325,881.872C432.833,881.872 432.339,881.883 431.847,881.904L430.781,872.414C430.756,872.189 430.625,871.99 430.444,871.897L428.065,866.656C427.945,866.393 427.732,866.244 427.507,866.271C427.282,866.295 427.107,866.487 427.048,866.771L425.893,872.399C425.854,872.431 425.818,872.473 425.782,872.527L425.769,872.547C425.689,872.668 425.658,872.819 425.676,872.986L426.75,882.548C424,883.175 422.007,884.227 422.007,885.667C422.007,886.002 422.118,886.329 422.335,886.641L422.335,900.52L422.351,901.088Z"], ["d", "M437.894,864.99C438.104,864.99 438.275,865.161 438.275,865.372C438.275,865.582 438.104,865.753 437.894,865.753C437.683,865.753 437.512,865.582 437.512,865.372C437.512,865.161 437.683,864.99 437.894,864.99ZM437.894,866.63C438.587,866.63 439.151,866.065 439.151,865.372C439.151,864.678 438.587,864.113 437.894,864.113C437.2,864.113 436.636,864.678 436.636,865.372C436.636,865.892 436.953,866.34 437.404,866.53C437.555,866.594 437.72,866.63 437.894,866.63Z"], ["viewBox", "0 0 162 162", "id", "icon6"], ["transform", "matrix(1,0,0,1,-3883,-3605)"], ["d", "M939.483,870.188C940.127,870.015 940.829,869.923 941.558,869.923C944.287,869.923 947.395,871.216 949.252,874.443C949.377,874.66 949.61,874.794 949.859,874.79C950.109,874.788 950.339,874.651 950.46,874.432C952.581,870.587 956.935,869.412 960.138,870.237C963.265,871.042 965.132,873.5 965.132,876.809C965.132,884.412 952.296,894.178 949.853,895.968C947.41,894.178 934.574,884.412 934.574,876.809C934.574,873.484 936.409,871.009 939.483,870.188ZM949.455,897.391C949.574,897.475 949.714,897.517 949.853,897.517C949.992,897.517 950.132,897.475 950.251,897.391C950.915,896.925 966.519,885.887 966.519,876.809C966.519,872.886 964.206,869.853 960.484,868.894C957.043,868.008 952.462,869.108 949.845,872.805C947.029,868.879 942.426,867.966 939.125,868.848C935.463,869.827 933.188,872.877 933.188,876.809C933.188,885.887 948.791,896.925 949.455,897.391Z"], ["d", "M945.888,885.055L945.888,883.192L948.978,883.192L948.978,879.974L950.728,879.974L950.728,883.192L953.817,883.192L953.817,885.055L950.728,885.055L950.728,888.275L948.978,888.275L948.978,885.055L945.888,885.055ZM948.053,889.2L951.652,889.2L951.652,885.98L954.741,885.98L954.741,882.268L951.652,882.268L951.652,879.049L948.053,879.049L948.053,882.268L944.964,882.268L944.964,885.98L948.053,885.98L948.053,889.2Z"], [1, "portion"]],
      template: function WorkProcessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkProcessComponent_span_0_Template, 1, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkProcessComponent_ng_template_1_Template, 40, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkProcessComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WorkProcessComponent_li_19_Template, 11, 9, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.havesvg)("ngIfThen", _r13)("ngIfElse", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.main);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.drescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workprocessdata);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
      styles: [".custom-heading[_ngcontent-%COMP%] {\n  margin-bottom: calc(46px + 46px);\n}\n\n.none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.work-process-back[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  float: left;\n  margin: 0 -25px;\n  padding: 0;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 25px;\n  margin-bottom: 50px;\n  width: 33.33333%;\n  list-style: none;\n  float: left;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .portion[_ngcontent-%COMP%]:before {\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -o-transform: scale(1);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .portion[_ngcontent-%COMP%]   .icon-back[_ngcontent-%COMP%] {\n  transition-delay: 0.5s;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 1px;\n  float: left;\n  padding: 44px 20px 44px 44px;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 13px 54px;\n  border: #ddd 1px solid;\n  border-radius: 90px 0 90px 0;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  background-color: #f7f7f7;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]:before {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n  content: \"\";\n  background-color: transparent;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  z-index: -1;\n  transform: scale(0);\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -o-transform: scale(0);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: preserve-3d;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back[_ngcontent-%COMP%] {\n  width: 115px;\n  height: 115px;\n  border-radius: 100%;\n  position: relative;\n  margin-bottom: 44px;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 60px;\n  height: 60px;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon1[_ngcontent-%COMP%] {\n  background-color: #ff603c;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon1[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #fff;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon2[_ngcontent-%COMP%] {\n  background-color: #fde756;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #3e3a39;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon3[_ngcontent-%COMP%] {\n  background-color: #351055;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #fff;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon4[_ngcontent-%COMP%] {\n  background-color: #351055;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon4[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #fff;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon5[_ngcontent-%COMP%] {\n  background-color: #3e3a39;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon5[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #fff;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon6[_ngcontent-%COMP%] {\n  background-color: #ff603c;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back.icon6[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #fff;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #3e3a39;\n  font-size: 25px;\n  font-weight: 700;\n  margin-bottom: 24px;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 31px;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n+2) {\n  margin-top: 50px;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:hover   .portion[_ngcontent-%COMP%]:before {\n  background-color: #ff603c;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:hover   .portion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:hover   .portion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:hover   .portion[_ngcontent-%COMP%]   .icon-back.icon1[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: rgba(165, 38, 10, 0.2) 0 0 0 10px, rgba(165, 38, 10, 0.1) 0 0 0 20px, rgba(165, 38, 10, 0.1) 0 0 0 30px;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:hover   .portion[_ngcontent-%COMP%]   .icon-back.icon1[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ff603c;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]:before {\n  background-color: #fde756;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #3e3a39;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #3e3a39;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon2[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: rgba(155, 136, 9, 0.2) 0 0 0 10px, rgba(155, 136, 9, 0.1) 0 0 0 20px, rgba(155, 136, 9, 0.1) 0 0 0 30px;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #3e3a39;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]:before {\n  background-color: #351055;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon3[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: rgba(138, 36, 226, 0.2) 0 0 0 10px, rgba(138, 36, 226, 0.1) 0 0 0 20px, rgba(138, 36, 226, 0.1) 0 0 0 30px;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #351055;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(1):hover   .portion[_ngcontent-%COMP%]:before {\n  background-color: #351055;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(1):hover   .portion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(1):hover   .portion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(1):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon4[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: rgba(138, 36, 226, 0.2) 0 0 0 10px, rgba(138, 36, 226, 0.1) 0 0 0 20px, rgba(138, 36, 226, 0.1) 0 0 0 30px;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(1):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon4[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #351055;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]:before {\n  background-color: #3e3a39;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon5[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: rgba(12, 11, 10, 0.2) 0 0 0 10px, rgba(12, 11, 10, 0.1) 0 0 0 20px, rgba(12, 11, 10, 0.1) 0 0 0 30px;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(2):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon5[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #3e3a39;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]:before {\n  background-color: #ff603c;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon6[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: rgba(165, 38, 10, 0.2) 0 0 0 10px, rgba(165, 38, 10, 0.1) 0 0 0 20px, rgba(165, 38, 10, 0.1) 0 0 0 30px;\n}\n\n.work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:nth-child(2)   li[_ngcontent-%COMP%]:nth-child(3):hover   .portion[_ngcontent-%COMP%]   .icon-back.icon6[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ff603c;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  .work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    width: 100%;\n  }\n  .work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 0;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 0;\n  }\n  .work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 45px 30px;\n  }\n  .work-process-back[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .portion[_ngcontent-%COMP%]   .icon-back[_ngcontent-%COMP%] {\n    float: none;\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS93b3JrLXByb2Nlc3MvSTpcXEFOR1VMQVIgVFVUT1JJQUxcXFJhaHVsWWFkYXZcXFJhaHVsLVlhZGF2L3NyY1xcYXBwXFxob21lXFx3b3JrLXByb2Nlc3NcXHdvcmstcHJvY2Vzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS93b3JrLXByb2Nlc3Mvd29yay1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3dvcmstcHJvY2Vzcy9JOlxcQU5HVUxBUiBUVVRPUklBTFxcUmFodWxZYWRhdlxcUmFodWwtWWFkYXYvc3JjXFxhc3NldHNcXGNzc1xcbWl4aW5zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3dvcmstcHJvY2Vzcy9JOlxcQU5HVUxBUiBUVVRPUklBTFxcUmFodWxZYWRhdlxcUmFodWwtWWFkYXYvc3JjXFxhc3NldHNcXGNzc1xcdmFyaWFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0NBQUE7QUNESjs7QURHQTtFQUFPLGFBQUE7QUNDUDs7QURBQTtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMsV0FBQTtBQ0svQjs7QURKSTtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMsV0FBQTtFQUFjLGVBQUE7RUFBaUIsVUFBQTtBQ1VsRTs7QURUUTtFQUNJLGVBQUE7RUFBZ0IsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsV0FBQTtBQ2VwRjs7QURab0I7RUVLaEIsbUJGSnVDO0VFS3ZDLDJCRkx1QztFRU12Qyx3QkZOdUM7RUVPdkMsc0JGUHVDO0VFUXZDLCtCRlJnRDtFRVNoRCx1Q0ZUZ0Q7RUVVaEQsb0NGVmdEO0VFV2hELGtDRlhnRDtFRVloRCw0QkZaOEQ7RUVhOUQsb0NGYjhEO0VFYzlELGlDRmQ4RDtFRWU5RCwrQkZmOEQ7QUN5QmxFOztBRHZCb0I7RUFDSSxzQkFBQTtBQ3lCeEI7O0FEckJZO0VBQ0ksV0FBQTtFQUFhLGVBQUE7RUFBaUIsV0FBQTtFQUFjLDRCQUFBO0VBQThCLDRDQUFBO0VBQTBDLHNCQUFBO0VBQXdCLDRCQUFBO0VFVXhKLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUZkZ08sa0JBQUE7RUFBb0IsVUFBQTtFQUFZLGdCQUFBO0VBQWtCLHlCQUFBO0FDc0N0Ujs7QURyQ2dCO0VBQ0ksV0FBQTtFQUFhLFlBQUE7RUV4QjdCLGtCRndCNkQ7RUV2QjdELE9GdUJzRTtFRXRCdEUsV0ZzQndFO0VFckJ4RSxNRnFCNkU7RUVwQjdFLFlGb0IrRTtFQUFPLFdBQUE7RUFBYSw2QkFBQTtFRVFuRyxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VGWjRLLFdBQUE7RUVONUssbUJGTTRNO0VFTDVNLDJCRks0TTtFRUo1TSx3QkZJNE07RUVINU0sc0JGRzRNO0VFRjVNLCtCRkVxTjtFRURyTix1Q0ZDcU47RUVBck4sb0NBQUE7RUFDQSxrQ0ZEcU47RUVFck4sNEJGRm1PO0VFR25PLG9DRkhtTztFRUluTyxpQ0ZKbU87RUVLbk8sK0JGTG1PO0FDaUV2Tzs7QUQvRGdCO0VBQ0ksWUFBQTtFQUFjLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixrQkFBQTtFQUFvQixtQkFBQTtFRUt0RixnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FEaUVKOztBRHpFb0I7RUFBSyxrQkFBQTtFQUFvQixNQUFBO0VBQVEsT0FBQTtFQUFTLFNBQUE7RUFBVyxRQUFBO0VBQVUsWUFBQTtFQUFjLFdBQUE7RUFBWSxZQUFBO0FDbUY3Rzs7QURqRm9CO0VBQ0kseUJHaENUO0FGbUhmOztBRGxGd0I7RUFBSSxVRzVCZDtFRDRCVixnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FEc0ZKOztBRHhGb0I7RUFDSSx5QkduQ1A7QUY2SGpCOztBRHpGd0I7RUFBSSxhR25DYjtFRCtCWCxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FEaUdKOztBRC9Gb0I7RUFDSSx5QkdoQ0w7QUZpSW5COztBRGhHd0I7RUFBSSxVR3BDZDtFRDRCVixnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FENEdKOztBRHRHb0I7RUFDSSx5QkdwQ0w7QUY0SW5COztBRHZHd0I7RUFBSSxVR3hDZDtFRDRCVixnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FEdUhKOztBRDdHb0I7RUFDSSx5Qkc5Q1Q7QUY2SmY7O0FEOUd3QjtFQUFJLFVHNUNkO0VENEJWLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QURrSUo7O0FEcEhvQjtFQUNJLHlCR3BEVDtBRjBLZjs7QURySHdCO0VBQUksVUdoRGQ7RUQ0QlYsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtBRDZJSjs7QUQxSGdCO0VBQ0ksY0d2REw7RUh1RDJCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsbUJBQUE7RUV4QnpFLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUR3Sko7O0FEbElnQjtFQUNJLGVBQUE7RUFBaUIsaUJBQUE7RUUzQmpDLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QURpS0o7O0FEcklZO0VBQ0ksZ0JBQUE7QUN1SWhCOztBRG5Jb0I7RUFDSSx5Qkd2RVQ7QUY0TWY7O0FEbklvQjtFQUNJLFdHckVWO0FGME1kOztBRG5Jb0I7RUFDSSxXR3hFVjtBRjZNZDs7QURsSXdCO0VBQ0ksc0JHNUVkO0VINkVjLG1IQUFBO0FDb0k1Qjs7QURuSTRCO0VBQ0ksYUdwRmpCO0FGeU5mOztBRDdIb0I7RUFDSSx5Qkc1RlA7QUYyTmpCOztBRDdIb0I7RUFDSSxjRzlGVDtBRjZOZjs7QUQ3SG9CO0VBQ0ksY0dqR1Q7QUZnT2Y7O0FENUh3QjtFQUNJLHNCR2xHZDtFSG1HYyxtSEFBQTtBQzhINUI7O0FEN0g0QjtFQUNJLGFHeEdqQjtBRnVPZjs7QUR0SG9CO0VBQ0kseUJHNUdMO0FGb09uQjs7QUR0SG9CO0VBQ0ksV0dsSFY7QUYwT2Q7O0FEdEhvQjtFQUNJLFdHckhWO0FGNk9kOztBRHJId0I7RUFDSSxzQkd6SGQ7RUgwSGMsc0hBQUE7QUN1SDVCOztBRHRINEI7RUFDSSxhR3pIYjtBRmlQbkI7O0FEMUd3QjtFQUNJLHlCR3hJVDtBRm9QbkI7O0FEMUd3QjtFQUNJLFdHOUlkO0FGMFBkOztBRDFHd0I7RUFDSSxXR2pKZDtBRjZQZDs7QUR6RzRCO0VBQ0ksc0JHckpsQjtFSHNKa0Isc0hBQUE7QUMyR2hDOztBRDFHZ0M7RUFDSSxhR3JKakI7QUZpUW5COztBRHBHd0I7RUFDSSx5QkdwS2I7QUYwUWY7O0FEcEd3QjtFQUNJLFdHcEtkO0FGMFFkOztBRHBHd0I7RUFDSSxXR3ZLZDtBRjZRZDs7QURuRzRCO0VBQ0ksc0JHM0tsQjtFSDRLa0IsZ0hBQUE7QUNxR2hDOztBRHBHZ0M7RUFDSSxhR2pMckI7QUZ1UmY7O0FEOUZ3QjtFQUNJLHlCRzVMYjtBRjRSZjs7QUQ5RndCO0VBQ0ksV0cxTGQ7QUYwUmQ7O0FEOUZ3QjtFQUNJLFdHN0xkO0FGNlJkOztBRDdGNEI7RUFDSSxzQkdqTWxCO0VIa01rQixtSEFBQTtBQytGaEM7O0FEOUZnQztFQUNJLGFHek1yQjtBRnlTZjs7QUQ5RUE7RUFHWTtJQUNJLFVBQUE7RUMrRWQ7RUQ5RWM7SUFBYyxXQUFBO0VDaUY1QjtFRGhGYztJQUFnQixhQUFBO0VDbUY5QjtBQUNGOztBRDlFQTtFQUVRO0lBQ0ksU0FBQTtFQytFVjtFRDlFVTtJQUNJLFdBQUE7RUNnRmQ7RUQvRWM7SUFBZ0IsYUFBQTtFQ2tGOUI7RURqRmM7SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0VDbUZsQjtFRGxGa0I7SUFDSSxXQUFBO0lBQWEscUJBQUE7RUNxRm5DO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3dvcmstcHJvY2Vzcy93b3JrLXByb2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL2Nzcy92YXJpYWJsZXMuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvbWl4aW5zLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5jdXN0b20taGVhZGluZ3tcclxuICAgIG1hcmdpbi1ib3R0b206Y2FsYyg0NnB4ICsgNDZweCk7XHJcbn1cclxuLm5vbmV7IGRpc3BsYXk6IG5vbmU7fVxyXG4ud29yay1wcm9jZXNzLWJhY2t7XHJcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBmbG9hdDogbGVmdDtcclxuICAgIC5kZXRhaWxze1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0OyAgbWFyZ2luOiAwIC0yNXB4OyBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAgMjVweDsgbWFyZ2luLWJvdHRvbTogNTBweDsgd2lkdGg6MzMuMzMzMzMlOyBsaXN0LXN0eWxlOiBub25lOyBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIC5wb3J0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMSksY2VudGVyIGNlbnRlcixwcmVzZXJ2ZS0zZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pY29uLWJhY2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC41czsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wb3J0aW9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDFweDsgZmxvYXQ6IGxlZnQ7ICBwYWRkaW5nOiA0NHB4IDIwcHggNDRweCA0NHB4OyBib3gtc2hhZG93OiByZ2JhKDAsMCwwLC4xKSAxcHggMTNweCA1NHB4OyBib3JkZXI6ICNkZGQgMXB4IHNvbGlkOyBib3JkZXItcmFkaXVzOiA5MHB4IDAgOTBweCAwOyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuNXMsZWFzZS1pbi1vdXQpOyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDE7IG92ZXJmbG93OiBoaWRkZW47IGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLGF1dG8sMCxhdXRvKTsgY29udGVudDogXCJcIjsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLC41cyxlYXNlLWluLW91dCk7IHotaW5kZXg6IC0xOyBAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoMCksY2VudGVyIGNlbnRlcixwcmVzZXJ2ZS0zZCk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmljb24tYmFja3sgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4OyBoZWlnaHQ6IDExNXB4OyBib3JkZXItcmFkaXVzOiAxMDAlOyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1ib3R0b206IDQ0cHg7IEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLC41cyxlYXNlLWluLW91dCk7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzdmd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBib3R0b206IDA7IHJpZ2h0OiAwOyBtYXJnaW46IGF1dG87IHdpZHRoOjYwcHg7IGhlaWdodDogNjBweDsgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICYuaWNvbjF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdmd7ZmlsbDogJGNvbW1vbkNvbG9yOyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuNXMsZWFzZS1pbi1vdXQpO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5pY29uMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUNvbG9yOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Zne2ZpbGw6ICRkZWZhdWx0Q29sb3I7IEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLC41cyxlYXNlLWluLW91dCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgJi5pY29uM3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Z3tmaWxsOiAkY29tbW9uQ29sb3I7IEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLC41cyxlYXNlLWluLW91dCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgJi5pY29uNHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdmd7ZmlsbDogJGNvbW1vbkNvbG9yOyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuNXMsZWFzZS1pbi1vdXQpO31cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICYuaWNvbjV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Z3tmaWxsOiAkY29tbW9uQ29sb3I7IEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLC41cyxlYXNlLWluLW91dCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgJi5pY29uNntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Zne2ZpbGw6ICRjb21tb25Db2xvcjsgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsLjVzLGVhc2UtaW4tb3V0KTt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRlZmF1bHRDb2xvcjsgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiAyNHB4OyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuNXMsZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7IGxpbmUtaGVpZ2h0OiAzMXB4OyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuNXMsZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgybisyKXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgLnBvcnRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb25Db2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb25Db2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmljb24tYmFja3sgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaWNvbjF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tbW9uQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE2NSwzOCwxMCwuMikgMCAwIDAgMTBweCwgcmdiYSgxNjUsMzgsMTAsLjEpIDAgMCAwIDIwcHgsIHJnYmEoMTY1LDM4LDEwLC4xKSAwIDAgMCAzMHB4OyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6JHByaW1hcnlDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKTpob3ZlcntcclxuICAgICAgICAgICAgICAgIC5wb3J0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5Q29sb3I7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1iYWNreyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5pY29uMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21tb25Db2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTU1LDEzNiw5LC4yKSAwIDAgMCAxMHB4LCByZ2JhKDE1NSwxMzYsOSwuMSkgMCAwIDAgMjBweCwgcmdiYSgxNTUsMTM2LDksLjEpIDAgMCAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDokZGVmYXVsdENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgzKTpob3ZlcntcclxuICAgICAgICAgICAgICAgIC5wb3J0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvclR3bzsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1iYWNreyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5pY29uM3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21tb25Db2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTM4LDM2LDIyNiwuMikgMCAwIDAgMTBweCwgcmdiYSgxMzgsMzYsMjI2LC4xKSAwIDAgMCAyMHB4LCByZ2JhKDEzOCwzNiwyMjYsLjEpIDAgMCAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDokYWRkaXRpb25Db2xvclR3bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAucG9ydGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvclR3bzsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uLWJhY2t7ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5pY29uNHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tbW9uQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxMzgsMzYsMjI2LC4yKSAwIDAgMCAxMHB4LCByZ2JhKDEzOCwzNiwyMjYsLjEpIDAgMCAwIDIwcHgsIHJnYmEoMTM4LDM2LDIyNiwuMSkgMCAwIDAgMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6JGFkZGl0aW9uQ29sb3JUd287XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMik6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHRDb2xvcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uLWJhY2t7ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5pY29uNXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tbW9uQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxMiwxMSwxMCwuMikgMCAwIDAgMTBweCwgcmdiYSgxMiwxMSwxMCwuMSkgMCAwIDAgMjBweCwgcmdiYSgxMiwxMSwxMCwuMSkgMCAwIDAgMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6JGRlZmF1bHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAucG9ydGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUNvbG9yOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29tbW9uQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29tbW9uQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmljb24tYmFja3sgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmljb242e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21tb25Db2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE2NSwzOCwxMCwuMikgMCAwIDAgMTBweCwgcmdiYSgxNjUsMzgsMTAsLjEpIDAgMCAwIDIwcHgsIHJnYmEoMTY1LDM4LDEwLC4xKSAwIDAgMCAzMHB4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiRwcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEzNjVweCl7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7XHJcbiAgICAud29yay1wcm9jZXNzLWJhY2t7XHJcbiAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkeyB3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKXsgbWFyZ2luLXRvcDogMDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAud29yay1wcm9jZXNzLWJhY2t7XHJcbiAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMil7IG1hcmdpbi10b3A6IDA7fVxyXG4gICAgICAgICAgICAgICAgLnBvcnRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1iYWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTsgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jdXN0b20taGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoNDZweCArIDQ2cHgpO1xufVxuXG4ubm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi53b3JrLXByb2Nlc3MtYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAtMjVweDtcbiAgcGFkZGluZzogMDtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6aG92ZXIgLnBvcnRpb246YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW8tdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaTpob3ZlciAucG9ydGlvbiAuaWNvbi1iYWNrIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA0NHB4IDIwcHggNDRweCA0NHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDEzcHggNTRweDtcbiAgYm9yZGVyOiAjZGRkIDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogOTBweCAwIDkwcHggMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW8tdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbiAuaWNvbi1iYWNrIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpIC5wb3J0aW9uIC5pY29uLWJhY2sgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbiAuaWNvbi1iYWNrLmljb24xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAzYztcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbiAuaWNvbi1iYWNrLmljb24xIHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpIC5wb3J0aW9uIC5pY29uLWJhY2suaWNvbjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlNzU2O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpIC5wb3J0aW9uIC5pY29uLWJhY2suaWNvbjIgc3ZnIHtcbiAgZmlsbDogIzNlM2EzOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGkgLnBvcnRpb24gLmljb24tYmFjay5pY29uMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGkgLnBvcnRpb24gLmljb24tYmFjay5pY29uMyBzdmcge1xuICBmaWxsOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbiAuaWNvbi1iYWNrLmljb240IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbiAuaWNvbi1iYWNrLmljb240IHN2ZyB7XG4gIGZpbGw6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpIC5wb3J0aW9uIC5pY29uLWJhY2suaWNvbjUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzYTM5O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpIC5wb3J0aW9uIC5pY29uLWJhY2suaWNvbjUgc3ZnIHtcbiAgZmlsbDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGkgLnBvcnRpb24gLmljb24tYmFjay5pY29uNiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYwM2M7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGkgLnBvcnRpb24gLmljb24tYmFjay5pY29uNiBzdmcge1xuICBmaWxsOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbiBoMiB7XG4gIGNvbG9yOiAjM2UzYTM5O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpIC5wb3J0aW9uIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaTpudGgtY2hpbGQoMm4rMikge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpOmZpcnN0LWNoaWxkOmhvdmVyIC5wb3J0aW9uOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYwM2M7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6Zmlyc3QtY2hpbGQ6aG92ZXIgLnBvcnRpb24gaDIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaTpmaXJzdC1jaGlsZDpob3ZlciAucG9ydGlvbiBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6Zmlyc3QtY2hpbGQ6aG92ZXIgLnBvcnRpb24gLmljb24tYmFjay5pY29uMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTY1LCAzOCwgMTAsIDAuMikgMCAwIDAgMTBweCwgcmdiYSgxNjUsIDM4LCAxMCwgMC4xKSAwIDAgMCAyMHB4LCByZ2JhKDE2NSwgMzgsIDEwLCAwLjEpIDAgMCAwIDMwcHg7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6Zmlyc3QtY2hpbGQ6aG92ZXIgLnBvcnRpb24gLmljb24tYmFjay5pY29uMSBzdmcge1xuICBmaWxsOiAjZmY2MDNjO1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpOm50aC1jaGlsZCgyKTpob3ZlciAucG9ydGlvbjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlNzU2O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpOm50aC1jaGlsZCgyKTpob3ZlciAucG9ydGlvbiBoMiB7XG4gIGNvbG9yOiAjM2UzYTM5O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpOm50aC1jaGlsZCgyKTpob3ZlciAucG9ydGlvbiBwIHtcbiAgY29sb3I6ICMzZTNhMzk7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6bnRoLWNoaWxkKDIpOmhvdmVyIC5wb3J0aW9uIC5pY29uLWJhY2suaWNvbjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDE1NSwgMTM2LCA5LCAwLjIpIDAgMCAwIDEwcHgsIHJnYmEoMTU1LCAxMzYsIDksIDAuMSkgMCAwIDAgMjBweCwgcmdiYSgxNTUsIDEzNiwgOSwgMC4xKSAwIDAgMCAzMHB4O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpOm50aC1jaGlsZCgyKTpob3ZlciAucG9ydGlvbiAuaWNvbi1iYWNrLmljb24yIHN2ZyB7XG4gIGZpbGw6ICMzZTNhMzk7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6bnRoLWNoaWxkKDMpOmhvdmVyIC5wb3J0aW9uOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6bnRoLWNoaWxkKDMpOmhvdmVyIC5wb3J0aW9uIGgyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6bnRoLWNoaWxkKDMpOmhvdmVyIC5wb3J0aW9uIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaTpudGgtY2hpbGQoMyk6aG92ZXIgLnBvcnRpb24gLmljb24tYmFjay5pY29uMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTM4LCAzNiwgMjI2LCAwLjIpIDAgMCAwIDEwcHgsIHJnYmEoMTM4LCAzNiwgMjI2LCAwLjEpIDAgMCAwIDIwcHgsIHJnYmEoMTM4LCAzNiwgMjI2LCAwLjEpIDAgMCAwIDMwcHg7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6bnRoLWNoaWxkKDMpOmhvdmVyIC5wb3J0aW9uIC5pY29uLWJhY2suaWNvbjMgc3ZnIHtcbiAgZmlsbDogIzM1MTA1NTtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlsczpudGgtY2hpbGQoMikgbGk6bnRoLWNoaWxkKDEpOmhvdmVyIC5wb3J0aW9uOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHM6bnRoLWNoaWxkKDIpIGxpOm50aC1jaGlsZCgxKTpob3ZlciAucG9ydGlvbiBoMiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzOm50aC1jaGlsZCgyKSBsaTpudGgtY2hpbGQoMSk6aG92ZXIgLnBvcnRpb24gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzOm50aC1jaGlsZCgyKSBsaTpudGgtY2hpbGQoMSk6aG92ZXIgLnBvcnRpb24gLmljb24tYmFjay5pY29uNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTM4LCAzNiwgMjI2LCAwLjIpIDAgMCAwIDEwcHgsIHJnYmEoMTM4LCAzNiwgMjI2LCAwLjEpIDAgMCAwIDIwcHgsIHJnYmEoMTM4LCAzNiwgMjI2LCAwLjEpIDAgMCAwIDMwcHg7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHM6bnRoLWNoaWxkKDIpIGxpOm50aC1jaGlsZCgxKTpob3ZlciAucG9ydGlvbiAuaWNvbi1iYWNrLmljb240IHN2ZyB7XG4gIGZpbGw6ICMzNTEwNTU7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHM6bnRoLWNoaWxkKDIpIGxpOm50aC1jaGlsZCgyKTpob3ZlciAucG9ydGlvbjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzYTM5O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzOm50aC1jaGlsZCgyKSBsaTpudGgtY2hpbGQoMik6aG92ZXIgLnBvcnRpb24gaDIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlsczpudGgtY2hpbGQoMikgbGk6bnRoLWNoaWxkKDIpOmhvdmVyIC5wb3J0aW9uIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlsczpudGgtY2hpbGQoMikgbGk6bnRoLWNoaWxkKDIpOmhvdmVyIC5wb3J0aW9uIC5pY29uLWJhY2suaWNvbjUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDEyLCAxMSwgMTAsIDAuMikgMCAwIDAgMTBweCwgcmdiYSgxMiwgMTEsIDEwLCAwLjEpIDAgMCAwIDIwcHgsIHJnYmEoMTIsIDExLCAxMCwgMC4xKSAwIDAgMCAzMHB4O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzOm50aC1jaGlsZCgyKSBsaTpudGgtY2hpbGQoMik6aG92ZXIgLnBvcnRpb24gLmljb24tYmFjay5pY29uNSBzdmcge1xuICBmaWxsOiAjM2UzYTM5O1xufVxuLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzOm50aC1jaGlsZCgyKSBsaTpudGgtY2hpbGQoMyk6aG92ZXIgLnBvcnRpb246YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAzYztcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlsczpudGgtY2hpbGQoMikgbGk6bnRoLWNoaWxkKDMpOmhvdmVyIC5wb3J0aW9uIGgyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHM6bnRoLWNoaWxkKDIpIGxpOm50aC1jaGlsZCgzKTpob3ZlciAucG9ydGlvbiBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHM6bnRoLWNoaWxkKDIpIGxpOm50aC1jaGlsZCgzKTpob3ZlciAucG9ydGlvbiAuaWNvbi1iYWNrLmljb242IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogcmdiYSgxNjUsIDM4LCAxMCwgMC4yKSAwIDAgMCAxMHB4LCByZ2JhKDE2NSwgMzgsIDEwLCAwLjEpIDAgMCAwIDIwcHgsIHJnYmEoMTY1LCAzOCwgMTAsIDAuMSkgMCAwIDAgMzBweDtcbn1cbi53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlsczpudGgtY2hpbGQoMikgbGk6bnRoLWNoaWxkKDMpOmhvdmVyIC5wb3J0aW9uIC5pY29uLWJhY2suaWNvbjYgc3ZnIHtcbiAgZmlsbDogI2ZmNjAzYztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaTpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLndvcmstcHJvY2Vzcy1iYWNrIC5kZXRhaWxzIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC53b3JrLXByb2Nlc3MtYmFjayAuZGV0YWlscyBsaSAucG9ydGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ1cHggMzBweDtcbiAgfVxuICAud29yay1wcm9jZXNzLWJhY2sgLmRldGFpbHMgbGkgLnBvcnRpb24gLmljb24tYmFjayB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59IiwiQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbiwkbGVmdCwkcmlnaHQsJHRvcCwkYm90dG9tKXtcclxuICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XHJcbiAgICBsZWZ0OiAkbGVmdDtcclxuICAgIHJpZ2h0OiAkcmlnaHQ7XHJcbiAgICB0b3A6ICR0b3A7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbkBtaXhpbiB2aXNpYmxpdHkoJHZhbHVlKXtcclxuICAgIHZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICAgIC13ZWJraXQtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG4gICAgLW1vei12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtby12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtbXMtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbHVlLXR5cGUsJG9yaWdpbiwkc3R5bGUpe1xyXG4gICAgdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbHVlLXR5cGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogJHN0eWxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiAkc3R5bGU7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxufVxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbiwkZHVyYXRpb24sJGJlaGF2aW91cil7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkYmVoYXZpb3VyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbn1cclxuQG1peGluIGZpbHRlcigkdmFsdWUpe1xyXG4gICAgZmlsdGVyOiAkdmFsdWU7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogJHZhbHVlO1xyXG4gICAgLW1vei1maWx0ZXI6ICR2YWx1ZTtcclxuICAgIC1vLWZpbHRlcjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCgkdmFsdWUpe1xyXG4gICAgZmxleDogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsdWU7XHJcbiAgICAtbW96LWZsZXg6ICR2YWx1ZTtcclxuICAgIC1vLWZsZXg6ICR2YWx1ZTtcclxuICAgIC1tcy1mbGV4OiAkdmFsdWU7XHJcbn1cclxuQG1peGluIG9wYWNpdHkoJHZhbHVlKXtcclxuICAgIG9wYWNpdHk6ICR2YWx1ZTtcclxuICAgIGZpbHRlcjogQWxwaGEob3BhY2l0eT0kdmFsdWUpO1xyXG59XHJcbkBtaXhpbiBhbmltYXRpb24oJG5hbWUsJHRpbWUsJGZpbGxtb2RlKXtcclxuICAgIGFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkbmFtZSAkdGltZSAkZmlsbG1vZGU7XHJcbiAgICAtby1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1tcy1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTsgXHJcbn1cclxuIiwiJHByaW1hcnlDb2xvcjogI2ZmNjAzYztcclxuJHNlY29uZGFyeUNvbG9yOiAjZmRlNzU2O1xyXG4kZGVmYXVsdENvbG9yOiAjM2UzYTM5O1xyXG4kZGVmYXVsdENvbG9ydHdvOiAjMDUwNTA1O1xyXG4kbWFpbkNvbnRhaW5lcjogMTIwMHB4O1xyXG4kY29tbW9uQ29sb3I6ICNmZmY7XHJcbiRjb21tb25Db2xvcjI6ICNmY2ZjZmM7XHJcbiRhZGRpdGlvbkNvbG9yT25lOiAjMTAyNjMxO1xyXG4kYWRkaXRpb25Db2xvclR3bzogIzM1MTA1NTtcclxuJGFkZGl0aW9uQ29sb3JUaHJlZTogIzhlOGQ4ZDtcclxuXHJcblxyXG4kaGVhZGluZ0ZvbnR1c2U6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4kc3ViaGVhZGluZ0ZvbnR1c2U6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kZGVzY3JpYmVGb250dXNlOiAnQmVsbG90YSBUZXh0JywgY3Vyc2l2ZTtcclxuXHJcblxyXG4kbWFpbkNvbnRhaW5lcjogMTIwMHB4O1xyXG5cclxuJGNvbGdyaWQtMTA6IDEwJTtcclxuJGNvbGdyaWQtMjA6IDIwJTtcclxuJGNvbGdyaWQtMjU6IDI1JTtcclxuJGNvbGdyaWQtMzA6IDMwJTtcclxuJGNvbGdyaWQtMzM6IDMzLjMzMzMzJTtcclxuJGNvbGdyaWQtNDA6IDQwJTtcclxuJGNvbGdyaWQtNTA6IDUwJTtcclxuJGNvbGdyaWQtNjA6IDYwJTtcclxuJGNvbGdyaWQtNzA6IDcwJTtcclxuJGNvbGdyaWQtODA6IDgwJTtcclxuJGNvbGdyaWQtOTA6IDkwJTtcclxuJGNvbGdyaWQtMTAwOiAxMDAlO1xyXG5cclxuJFBhZGRpbmdUb3A6IDEyM3B4O1xyXG4kUGFkZGluZ2JvdHRvbTogMTIzcHg7XHJcblxyXG4kUGFkZGluZ1RvcDI6IDQ0cHg7XHJcbiRQYWRkaW5nYm90dG9tMjogNDRweDtcclxuXHJcbiRkZWZhdWx0LWZvbnRzaXplOiAxNnB4O1xyXG4kZm9udC1iaWctZXh0cmE6IDExMHB4O1xyXG4kZm9udC1iaWctdWx0cmE6IDcwcHg7XHJcbiRmb250LWJpZzogNDJweDtcclxuJGZvbnQtbWlkaXVtOiAzMHB4O1xyXG4kZm9udC1zbWFsbDogMjBweDsiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkProcessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-work-process',
          templateUrl: './work-process.component.html',
          styleUrls: ['./work-process.component.scss']
        }]
      }], function () {
        return [{
          type: angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyBg2BwQZ5KGOgQngHp9fuq-hSxabYIHw2g",
        authDomain: "rahulyadav-3688b.firebaseapp.com",
        databaseURL: "https://rahulyadav-3688b.firebaseio.com",
        projectId: "rahulyadav-3688b",
        storageBucket: "rahulyadav-3688b.appspot.com",
        messagingSenderId: "905067788809",
        appId: "1:905067788809:web:496facfa96b13fb91216d8",
        measurementId: "G-YGC0TLJR29"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! I:\ANGULAR TUTORIAL\RahulYadav\Rahul-Yadav\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map