webpackJsonp([7],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createprofile_createprofile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, navCtrl, alertCtrl, afDatabase, formbuilder) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afDatabase = afDatabase;
        this.formbuilder = formbuilder;
        this.user = {};
        this.formgroup = formbuilder.group({
            email: [
                '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email
                ])
            ],
            password: [
                '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
                ])
            ],
        });
        this.email = this.formgroup.controls['email'];
        this.password = this.formgroup.controls['password'];
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                if (this.user.email == null || this.user.password == null) {
                    this.alertCtrl.create({
                        title: 'Please Enter Email and Password',
                        subTitle: 'The Email or Password are Empty',
                        buttons: ['Dismiss']
                    }).present();
                }
                try {
                    result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                    /*if (result) {
                      this.navCtrl.push(CreateprofilePage)
                    }*/
                    this.afAuth.authState
                        .first()
                        .subscribe(function (data) {
                        if (data && data.email && data.uid) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createprofile_createprofile__["a" /* CreateprofilePage */]);
                        }
                    });
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/login/login.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>\n      login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="back"  padding id="page1">\n\n  <form id="login-form1" [formGroup]= "formgroup"  (ngSubmit)="login(user)">\n    <ion-item class="input" id="login-input1">\n      <ion-label  style="color: blueviolet" floating >\n      Email\n      </ion-label>\n      <ion-input type="text"   formControlName="email"  [(ngModel)]="user.email" \n      style="color: black" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="email.hasError(\'required\') && email.touched" style="background-color: transparent">\n      <p> *email is required</p>\n      </ion-item>\n      <ion-item *ngIf="email.hasError(\'email\')" style="background-color: transparent">\n        <p> *email is invalid </p>\n        </ion-item>\n    <br> <br> \n    <ion-item  class="input" id="login-input2">\n      <ion-label  style="color:rgb(166, 68, 247)" floating>\n        Password\n      </ion-label >\n      <ion-input type="password" formControlName="password" [(ngModel)]="user.password" \n      style="color: black" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="password.hasError(\'required\') && password.touched" style="background-color: transparent">\n      <p> *password is required</p>\n      </ion-item> \n      <ion-item *ngIf="password.hasError(\'pattern\')" style="background-color: transparent">\n        <p> *please reenter your password </p>\n          \n        </ion-item>\n    <br> <br>\n    <button type="submit" class="button2"  id="login-button2" ion-button  round outline>\n      login\n    </button>\n  </form>\n\n<br>\n  \n</ion-content>'/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timetable_timetable__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CoursesPage = /** @class */ (function () {
    function CoursesPage(navCtrl, navParams, afAuth, afDatabase, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        if (!__WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default.a.apps.length) {
            __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default.a.initializeApp({});
        }
    }
    CoursesPage.prototype.ngOnInit = function () {
        this.subjectarr = [
            { val: 'تفاضل وتكامل 2', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'معادلات تفاضليه عاديه', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'نظريه احصائيه', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'أساسيات برمجد هيكلية', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'نظم قواعد بيانات', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'بناء حاسب', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'تفاضل وتكامل 2', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'تفاضل وتكامل 2', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'تفاضل وتكامل 2', CreditHours: '3', Code: '221ر', isChecked: false },
        ];
        this.selectedArray = [];
    };
    CoursesPage.prototype.Courses = function () {
        var _this = this;
        for (var i = 0; i < this.subjectarr.length; i++) {
            if (this.subjectarr[i].isChecked == true) {
                this.selectedArray.push(this.subjectarr[i]);
                if (this.subjectarr.length > 5) {
                    this.alertCtrl.create({
                        title: 'Please Enter Email and Password',
                        subTitle: 'The Email or Password are Empty',
                        buttons: ['Dismiss']
                    }).present();
                }
            }
            //  for (let j =0; j < this.selectedArray.length; j++){
            // if (this.selectedArray.length > 5) {
            //  this.subjectarr[i].isChecked == false 
            //  }
            //  console.log(this.Courses)
            // // }
        }
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("courses/" + auth.uid).update(_this.selectedArray)
                .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__timetable_timetable__["a" /* TimetablePage */]); });
        });
    };
    CoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/courses/courses.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>courses</ion-title>\n  </ion-navbar > \n\n</ion-header>\n\n\n<ion-content   class="back" padding>\n\n    <table id="subjects"  >\n\n        <tr >\n          <th>Code</th>\n          <th>Course name</th>\n          <th>credit hours</th>\n          <th>choose</th>\n\n        </tr>\n\n        <tr *ngFor="let entry of subjectarr" >\n         \n          <td>{{entry.Code}}</td>\n          <td>{{entry.val}}</td>\n          <td>{{entry.CreditHours}} </td>\n          \n          <td>\n              <ion-checkbox slot="end"  item-right  [(ngModel)]="entry.isChecked"></ion-checkbox>\n              </td>\n \n        </tr>\n        </table> \n\n<br> <br>\n<button ion-button (click)="Courses()" style="color: rgb(207, 32, 32)">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/courses/courses.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], CoursesPage);
    return CoursesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { auth } from 'firebase';
var CreateprofilePage = /** @class */ (function () {
    function CreateprofilePage(afAuth, afDatabase, navCtrl, navParams, formbuilder) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.profile = {};
        this.formgroup = formbuilder.group({
            fullname: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ].{10,15}$'),
                ])],
            level: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
        });
        this.fullname = this.formgroup.controls['fullname'];
        this.level = this.formgroup.controls['level'];
        this.gender = this.formgroup.controls['gender'];
    }
    CreateprofilePage.prototype.createprofile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid).set(_this.profile)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); });
        });
    };
    CreateprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-createprofile',template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/createprofile/createprofile.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>Createprofile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content   class="back" padding>\n<form [formGroup]= "formgroup" class="form">\n    <ion-item class="input1" >\n        <ion-label style="color:rgb(61, 140, 243)" floating>Full Name</ion-label>\n        <ion-input style="color: black"  formControlName="fullname"  [(ngModel)]="profile.fullName"></ion-input>\n      </ion-item>  \n      <ion-item *ngIf="fullname.hasError(\'required\') && fullname.touched" style="background-color: transparent">\n      <p> *fullName is required</p>\n      </ion-item>\n      <ion-item *ngIf="fullname.hasError(\'pattern\') " style="background-color: transparent">\n        <p> *fullName is At least 10 characters in length  </p>\n        </ion-item>\n  \n      <ion-item class="input2" >\n        <ion-label style="color:rgb(61, 140, 243)" floating>Level</ion-label>\n        <ion-input  type="number" style="color: black" maxlength="1"  formControlName="level" [(ngModel)]="profile.level"   ></ion-input>\n      </ion-item> \n\n      <ion-item *ngIf="level.hasError(\'required\') && level.touched" style="background-color: transparent">\n        <p> *level is required</p>\n        </ion-item>\n  \n            <ion-item class="input3">\n                <ion-label style="color:rgb(61, 140, 243)" >Gender</ion-label>\n                <ion-select style="color: black" formControlName="gender" [(ngModel)]="profile.gender" >\n                  <ion-option value="f">Female</ion-option>\n                  <ion-option value="m">Male</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item *ngIf="gender.hasError(\'required\') && gender.touched" style="background-color: transparent">\n                <p> *gender is required</p>\n                </ion-item>\n\n            </form>\n  <br> <br>\n      \n\n         \n        <button ion-button  (click)="createprofile()" >\n          <ion-icon name="color-wand"></ion-icon>\n          createprofile\n        </button>\n        \n     \n\n</ion-content>\n'/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/createprofile/createprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], CreateprofilePage);
    return CreateprofilePage;
}());

//# sourceMappingURL=createprofile.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timetable_timetable__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GradesPage = /** @class */ (function () {
    function GradesPage(navCtrl, navParams, afAuth, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        if (!__WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default.a.apps.length) {
            __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default.a.initializeApp({});
        }
    }
    GradesPage.prototype.ngOnInit = function () {
        this.subjectarr = [
            { val: 'تفاضل وتكامل 2', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'معادلات تفاضليه عاديه', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'نظريه احصائيه', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'أساسيات برمجد هيكلية', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'نظم قواعد بيانات', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'بناء حاسب', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'تفاضل وتكامل 2', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'تفاضل وتكامل 2', CreditHours: '3', Code: '221ر', isChecked: false },
            { val: 'تفاضل وتكامل 2', CreditHours: '3', Code: '221ر', isChecked: false },
        ];
        this.selectedArray = [];
    };
    /*ionViewDidLoad() {
      console.log('ionViewDidLoad GradesPage');
    }*/
    GradesPage.prototype.Courses = function () {
        var _this = this;
        for (var i = 0; i < this.subjectarr.length; i++) {
            if (this.subjectarr[i].isChecked == true) {
                this.selectedArray.push(this.subjectarr[i]);
            }
            for (var j = 0; j < this.selectedArray.length; j++) {
                if (this.selectedArray.length > 5) {
                    this.subjectarr[i].isChecked == false;
                }
            }
        }
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.list("courses/" + auth.uid).push(_this.selectedArray)
                .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__timetable_timetable__["a" /* TimetablePage */]); });
        });
    };
    GradesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-grades',template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/grades/grades.html"*/'<ion-header  no-border>\n\n  <ion-navbar transparent>\n    <ion-title>grades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="back"  padding>\n  \n    </ion-content>\n\n\n '/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/grades/grades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], GradesPage);
    return GradesPage;
}());

//# sourceMappingURL=grades.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';


//import {storage , initializeApp} from 'firebase';
//import { FIRBASE_cREDENTIALS } from '../../app/firbase.credentials';


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, afDatabase, toast, afAuth, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.afAuth = afAuth;
        this.camera = camera;
        if (!__WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default.a.apps.length) {
            __WEBPACK_IMPORTED_MODULE_5__node_modules_firebase___default.a.initializeApp({});
        }
    }
    ProfilePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: " Welcome to Cs_App, " + data.email,
                    duration: 3000
                }).present();
                _this.profileData = _this.afDatabase.object("profile/" + data.uid).valueChanges();
            }
            else {
                _this.toast.create({
                    message: ' could not find authentication details.',
                    duration: 3000
                }).present();
            }
        });
    };
    ProfilePage.prototype.selectPhoto = function (sourceType) {
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ProfilePage.prototype.getDataFromFireBase = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.profileData = _this.afDatabase.object("profile/" + data.uid).valueChanges();
                _this.profData = _this.afDatabase.object("profile/" + data.uid);
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/profile/profile.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back" padding>\n\n  <div class="avatar-upload">\n    <div class="avatar-edit">\n      \n      <!-- <input type=\'file\' id="imageUpload" accept=".png, .jpg, .jpeg" /> -->\n      <button   (click)="selectPhoto()" ion-button >\n        </button>\n        <label for="imageUpload" stacked > \n        </label>\n    </div>\n    <div class="avatar-preview">\n        <div id="imagePreview" >\n        </div>\n    </div>\n</div>\n<div class="bar-header">\n    <h3 class="title">student information</h3>\n  </div>\n  <br> <br>\n<div class="pdiv">  \n<p class= "pname"> Fullname: {{ (profileData | async)?.fullName }} </p>\n\n<p class= "pgender"> Gender: {{ (profileData | async)?.gender }} </p>\n</div>\n<div class="pdiv"> \n<p class= "plevel" > Level: {{ (profileData | async)?.level }} </p>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/courses/courses.module": [
		723,
		6
	],
	"../pages/createprofile/createprofile.module": [
		724,
		5
	],
	"../pages/grades/grades.module": [
		725,
		4
	],
	"../pages/profile/profile.module": [
		726,
		3
	],
	"../pages/sign/sign.module": [
		727,
		2
	],
	"../pages/tabs/tabs.module": [
		728,
		1
	],
	"../pages/timetable/timetable.module": [
		729,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import {AngularFireDatabase} from  'angularfire2/database';




var SignPage = /** @class */ (function () {
    function SignPage(afAuth, navCtrl, navParams, alertCtrl, formbuilder) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formbuilder = formbuilder;
        this.user = {};
        this.formgroup = formbuilder.group({
            email: [
                '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                ])
            ],
            password: [
                '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                ])
            ],
        });
        this.email = this.formgroup.controls['email'];
        this.password = this.formgroup.controls['password'];
    }
    SignPage.prototype.Register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.alertCtrl.create({
                            title: 'Success',
                            subTitle: "registered Successfully",
                            buttons: ['Dismiss']
                        }).present();
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        //alert(e.message);
                        this.alertCtrl.create({
                            title: 'Error',
                            subTitle: e_1.message,
                            buttons: ['Dismiss']
                        }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sign',template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/sign/sign.html"*/'\n<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content  class="back" padding> \n<form (ngSubmit)="Register(user)" [formGroup]= "formgroup" >\n  <ion-item class="input" >\n      <ion-label   style="color:rgb(61, 140, 243)" floating>Email</ion-label>\n      <ion-input style="color: black"  type="email" formControlName="email" [(ngModel)]="user.email"></ion-input>\n    </ion-item> \n    <ion-item *ngIf="email.hasError(\'required\') && email.touched" style="background-color: transparent">\n      <p> *email is required</p>\n      </ion-item>\n      <ion-item *ngIf="email.hasError(\'email\')" style="background-color: transparent">\n          <p> *email is invalid </p>\n          </ion-item>\n\n    <ion-item  class="input">\n        <ion-label  style="color:rgb(61, 140, 243)" floating>\n          Password\n        </ion-label >\n        <ion-input type="password"  formControlName="password" style="color: black" [(ngModel)]="user.password" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.hasError(\'required\') && password.touched" style="background-color: transparent">\n        <p> *password is required</p>\n        </ion-item> \n        <ion-item *ngIf="password.hasError(\'pattern\')" style="background-color: transparent">\n          <p> *password is \n              At least 8 characters in length</p>\n              <p>  Lowercase letters</p>\n                  <p> Uppercase letters</p>\n                      <p> Numbers</p>\n                          <p>Special characters</p>\n          </ion-item>\n      <br> <br>\n      <button  class="button1" type="submit" id="button1" ion-button  round outline [disabled]="formgroup.invalid">\n        Register\n      </button> \n </form> \n</ion-content>\n<!--[ngModelOptions]="{standalone: true}" required password-->\n<!--[ngModelOptions]="{standalone: true}" required email-->'/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/sign/sign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], SignPage);
    return SignPage;
}());

//# sourceMappingURL=sign.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_sign__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_courses_courses__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_timetable_timetable__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_grades_grades__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_createprofile_createprofile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__firbase_credentials__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_sign__["a" /* SignPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_timetable_timetable__["a" /* TimetablePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_grades_grades__["a" /* GradesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_createprofile_createprofile__["a" /* CreateprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createprofile/createprofile.module#CreateprofilePageModule', name: 'CreateprofilePage', segment: 'createprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grades/grades.module#GradesPageModule', name: 'GradesPage', segment: 'grades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign/sign.module#SignPageModule', name: 'SignPage', segment: 'sign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timetable/timetable.module#TimetablePageModule', name: 'TimetablePage', segment: 'timetable', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_15__firbase_credentials__["a" /* FIRBASE_cREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_sign__["a" /* SignPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_timetable_timetable__["a" /* TimetablePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_grades_grades__["a" /* GradesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_createprofile_createprofile__["a" /* CreateprofilePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimetablePage = /** @class */ (function () {
    function TimetablePage(navCtrl, navParams, afDatabase, toast, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.afAuth = afAuth;
        if (!__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.apps.length) {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({});
        }
    }
    TimetablePage.prototype.ngOnInit = function () {
        this.getDataFromFireBase();
    };
    TimetablePage.prototype.getDataFromFireBase = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
                console.log(data);
                _this.coursesData = _this.afDatabase.list("courses/" + data.uid).valueChanges();
                _this.coursData = _this.afDatabase.list("courses/" + data.uid);
            }
        });
        console.log('coursesData', this.coursesData);
    };
    TimetablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimetablePage');
    };
    TimetablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-timetable',template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/timetable/timetable.html"*/'\n<ion-header no-border>\n\n  <ion-navbar transparent>\n    <ion-title>timetable</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="back"  padding>\n    <table id="courses"  >\n\n        <tr >\n          <th>Code</th>\n          <th>Course name</th>\n          <th>credit hours</th>\n          <th>choose</th>\n\n        </tr>\n\n        <tr *ngFor="let display of subjectarr" >\n            \n          <td>{{(coursesData | async)?.val }}</td>\n          <td>{{(coursesData | async)?.CreditHours}} </td>\n          <td>{{(coursesData | async)?.Code}}</td>\n        </tr>\n        </table> \n</ion-content>\n'/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/timetable/timetable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], TimetablePage);
    return TimetablePage;
}());

//# sourceMappingURL=timetable.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, db) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.authors = db.object('/authors/1').valueChanges();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIRBASE_cREDENTIALS; });
var FIRBASE_cREDENTIALS = {
    apiKey: "AIzaSyBlIcvnYZ4bnTdqwdJ9z972MPNhHHZZS_A",
    authDomain: "csapp-5cd5c.firebaseapp.com",
    databaseURL: "https://csapp-5cd5c.firebaseio.com",
    projectId: "csapp-5cd5c",
    storageBucket: "csapp-5cd5c.appspot.com",
    messagingSenderId: "693947801627"
};
//# sourceMappingURL=firbase.credentials.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_courses__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timetable_timetable__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grades_grades__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__courses_courses__["a" /* CoursesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__timetable_timetable__["a" /* TimetablePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__grades_grades__["a" /* GradesPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/tabs/tabs.html"*/'<ion-tabs >\n  <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Courses" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Exams Timetable" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Grades" tabIcon="paper"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/ahmedmoorsi/Documents/GitHub/CS2/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map