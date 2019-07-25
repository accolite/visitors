(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button\r\n      type=\"button\"\r\n      aria-label=\"Toggle sidenav\"\r\n      mat-icon-button\r\n      (click)=\"drawer.toggle()\"\r\n    >\r\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n    </button>\r\n    <span><img id=\"img\" src=\"../assets/images/accolite.jpg\"/></span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<mat-sidenav-container class=\"example-container\">\r\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\r\n    <mat-nav-list class=\"matNavList\">\r\n      <a mat-list-item routerLinkActive=\"active\" [routerLink]=\"['/visitor']\" routerLinkActive=\"active\" [queryParams]=\"{ loc: val }\">Visitor</a>\r\n      <a mat-list-item routerLinkActive=\"active\" [routerLink]=\"['/report']\" routerLinkActive=\"active\" [queryParams]=\"{ loc: val }\">Report</a>\r\n    </mat-nav-list>\r\n    <drop-down class=\"locSelect\" [data]=\"location\" label=\"Location\" [selectedValue]=\"val\" (selectedValueChange)=\"selectedValue($event)\" ></drop-down>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n    </button>\r\n    <span><img id=\"img\" src=\"../assets/images/accolite.jpg\"></span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar> -->\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>Login</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n      <form [formGroup]=\"form\" class=\"normal-form \" (ngSubmit)=\"login()\">\r\n          <table class=\"example-full-width\" cellspacing=\"0\">\r\n        <tr>\r\n          <td>\r\n              <div class=\"form-group\">\r\n            <mat-form-field class=\"full-width\">\r\n                <span class=\"span\" matPrefix><mat-icon class=\"span-maticon\">person</mat-icon>&nbsp;</span>\r\n\r\n            <input matInput formControlName=\"userName\"  placeholder=\"Username\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\">\r\n            <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.userName.errors.required\">UserName is required</div> \r\n            </div>\r\n            <!-- <mat-error>This field is mandatory.</mat-error>  -->\r\n          </mat-form-field>\r\n              </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n        <td>\r\n            <div class=\"form-group\">\r\n          <mat-form-field class=\"full-width\">\r\n            <span class=\"span\" matPrefix><mat-icon class=\"span-maticon\">lock</mat-icon>&nbsp;</span>\r\n\r\n          <input matInput formControlName=\"Password\" placeholder=\"Password\" type=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.Password.errors }\">\r\n          <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.Password.errors.required\">Password is required</div> \r\n          </div>\r\n          <!-- <mat-error>This field is mandatory.</mat-error> -->\r\n        </mat-form-field>\r\n      </div>  \r\n      </td>\r\n      </tr></table>\r\n    \r\n    <!-- <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner> -->\r\n  \r\n  <mat-card-actions>\r\n      <div class=\"form-group\">\r\n    <button mat-raised-button color=\"primary\">Login</button>\r\n    </div>\r\n  </mat-card-actions>\r\n</form>\r\n</mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/card/card.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui-components/card/card.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [class.fullscreen]=\"enableFullScreen\">\r\n  <mat-card-header *ngIf=\"cardTitle\">\r\n    <div class=\"title\">\r\n      <mat-card-title *ngIf=\"cardTitle\" class=\"card-title\">{{\r\n        cardTitle\r\n      }}</mat-card-title>\r\n      <mat-card-subtitle *ngIf=\"cardSubTitle\">{{\r\n        cardSubTitle\r\n      }}</mat-card-subtitle>\r\n    </div>\r\n    <div class=\"actions\">\r\n      <mat-icon\r\n        *ngIf=\"enableFullScreen\"\r\n        (click)=\"enableFullScreen = !enableFullScreen\"\r\n        class=\"icon action ng-star-inserted\"\r\n        title=\"Toggle full screen\"\r\n        >fullscreen</mat-icon\r\n      >\r\n      <mat-icon\r\n        *ngIf=\"!enableFullScreen\"\r\n        (click)=\"enableFullScreen = !enableFullScreen\"\r\n        class=\"icon action ng-star-inserted\"\r\n        title=\"Toggle full screen\"\r\n        >fullscreen_exit</mat-icon\r\n      >\r\n      <mat-icon\r\n        *ngIf=\"!expandCard\"\r\n        (click)=\"expandCard = !expandCard\"\r\n        class=\"icon action ng-star-inserted\"\r\n        title=\"Hide\"\r\n        >expand_less</mat-icon\r\n      >\r\n      <mat-icon\r\n        *ngIf=\"expandCard\"\r\n        (click)=\"expandCard = !expandCard\"\r\n        class=\"icon action ng-star-inserted\"\r\n        title=\"Show\"\r\n        >expand_more</mat-icon\r\n      >\r\n    </div>\r\n  </mat-card-header>\r\n\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\r\n\r\n  <mat-card-content class=\"mat-content\" *ngIf=\"expandCard\">\r\n    <!-- Add Css to get exact spinner -->\r\n    <!-- <mat-spinner *ngIf=\"loading\"></mat-spinner> -->\r\n    <ng-content></ng-content>\r\n  </mat-card-content>\r\n  <!-- This tag is for images  -->\r\n  <!-- <img mat-card-image>\tCard image. Stretches the image to the container width -->\r\n\r\n  <!-- below tag is for actions -->\r\n  <!-- <mat-card-actions *ngIf=\"expandCard\" align=\"end\">\r\n    <button mat-button>A</button>\r\n    <button mat-button>B</button>\r\n  </mat-card-actions> -->\r\n  <!-- <mat-card-footer>\tSection anchored to the bottom of the cardSimple card</mat-card-footer> -->\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/data-table/data-table.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui-components/data-table/data-table.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<table mat-table matSort [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  \r\n  <ng-container *ngFor=\"let key of displayedColumns;let i = index\" matColumnDef=\"{{key}}\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{tableHelpers?.length > 0 ? tableHelpers[i]?.title : key?.toUpperCase()}}</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element[key]}} </td>\r\n  </ng-container>\r\n  \r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n</table>\r\n<mat-paginator [ngClass]=\"usePagination ? 'show':'hide'\" [pageSizeOptions]=\"paginationTypes\" showFirstLastButtons></mat-paginator>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/drop-down/drop-down.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui-components/drop-down/drop-down.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <mat-label>{{label}}</mat-label>\r\n  <mat-select [(ngModel)]=\"selectedValue\" (ngModelChange)=\"emitChanges($event)\" name=\"dropDown\">\r\n    <mat-option *ngFor=\"let obj of data\" [value]=\"id ? obj[id] : obj\">\r\n      {{id ? obj[id] : obj}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/snack-bar/snack-bar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui-components/snack-bar/snack-bar.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"snack-bar\">\r\n  <div class=\"message\">\r\n    <span class=\"{{data?.class}} message-text\"><mat-icon>{{data?.icon}}</mat-icon> {{data?.message}}</span>\r\n  </div>\r\n  <div class=\"dismiss\">\r\n    <button mat-icon-button (click)=\"snackBarRef.dismiss()\">\r\n      <mat-icon class=\"button-icon\">{{data?.action}}</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/approved-request/approved-request.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/approved-request/approved-request.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card cardTitle=\"Approved Request\" [loading]=\"loading\">\r\n  <mat-form-field>\r\n    <input\r\n      matInput\r\n      (keyup)=\"applyFilter($event.target.value)\"\r\n      placeholder=\"Filter\"\r\n    />\r\n  </mat-form-field>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table matSort [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"badgeNo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Badge No</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.badgeNo }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.firstName }} {{ element.lastName }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"inTime\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>In Time</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.inTime | date: \"short\" }}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"outTime\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Out Time</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.outTime | date: \"short\" }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Actions</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <mat-checkbox>Badge returned</mat-checkbox>\r\n          <button\r\n            mat-raised-button\r\n            class=\"md-small\"\r\n            color=\"secondary\"\r\n            type=\"button\"\r\n          >\r\n            Exit\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"remarks\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Remarks</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <textarea matInput></textarea>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator\r\n      [pageSizeOptions]=\"[5, 10, 15]\"\r\n      showFirstLastButtons\r\n    ></mat-paginator>\r\n  </div>\r\n</card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-approved-request></app-approved-request>\r\n<app-pending-request></app-pending-request>\r\n<app-pre-approved-request></app-pre-approved-request>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/pending-request/pending-request.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/pending-request/pending-request.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card cardTitle=\"Pending Request\" [loading]=\"loading\">\r\n  <mat-form-field>\r\n    <input\r\n      matInput\r\n      (keyup)=\"applyFilter($event.target.value)\"\r\n      placeholder=\"Filter\"\r\n    />\r\n  </mat-form-field>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table matSort [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"badgeNo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Badge No</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.badgeNo }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.firstName }} {{ element.lastName }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"inTime\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>In Time</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.inTime | date: \"short\" }}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"outTime\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Out Time</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.outTime | date: \"short\" }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Actions</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button mat-raised-button color=\"secondary\" type=\"button\">\r\n            Approve\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"remarks\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Remarks</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <textarea matInput></textarea>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator\r\n      [pageSizeOptions]=\"[5, 10, 15]\"\r\n      showFirstLastButtons\r\n    ></mat-paginator>\r\n  </div>\r\n</card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/pre-approved-request/pre-approved-request.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/pre-approved-request/pre-approved-request.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card cardTitle=\"Pre Approved Request\" [loading]=\"loading\">\r\n  <mat-form-field>\r\n    <input\r\n      matInput\r\n      (keyup)=\"applyFilter($event.target.value)\"\r\n      placeholder=\"Filter\"\r\n    />\r\n  </mat-form-field>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table matSort [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"badgeNo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Badge No</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button mat-raised-button color=\"secondary\" type=\"button\">\r\n            Assign Badge\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.firstName }} {{ element.lastName }}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"contactPerson\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n          Contact Person\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.contactPerson }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button mat-raised-button color=\"secondary\" type=\"button\">\r\n            Cancel\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"remarks\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Remarks</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <textarea matInput></textarea>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator\r\n      [pageSizeOptions]=\"[5, 10, 15]\"\r\n      showFirstLastButtons\r\n    ></mat-paginator>\r\n  </div>\r\n</card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/report/components/visit-summary/visit-summary.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/report/components/visit-summary/visit-summary.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"badgeNo\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> Badge # </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.badgeNo}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"contactPerson\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> Contact Person </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.contactPerson}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"inTime\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> In Time </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.inTime | date:'short'}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"outTime\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> Out Time </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.outTime | date:'short' }} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"officeLocation\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> Office Location </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.officeLocation }} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"purpose\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> Purpose </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.purpose}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"scheduledTime\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> Scheduled Time </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.scheduledTime }} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> Status </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"visitNumber\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"width150\"> Visit # </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.visitNumber}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/report/components/visitor-profile/visitor-profile.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/report/components/visitor-profile/visitor-profile.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 50%;display: inline-block;margin-top:30px;\">\r\n    <h6>{{data.firstName}} {{data.lastName}}</h6>\r\n    <img mat-card-sm-image src=\"../assets/images/profile.jpg\" style=\"height: 300px; width: 300px;border: 1px solid;\"\r\n        alt=\"Photo of Yash\">\r\n</div>\r\n\r\n<div style=\"width:50%; display: inline-block;margin-top: 30px;position: absolute;\">\r\n    <div class=\"padding5\">\r\n        <label class=\"width150\"><b>First Name : </b></label>\r\n        {{data.firstName}}\r\n    </div>\r\n    <div class=\"padding5\">\r\n        <label class=\"width150\"><b>Last Name : </b></label>\r\n        {{data.lastName}}\r\n    </div>\r\n    <div class=\"padding5\">\r\n        <label class=\"width150\"><b>Visit Type : </b></label>\r\n        {{data.visitorType}}\r\n    </div>\r\n    <div class=\"padding5\">\r\n        <label class=\"width150\"><b>Email-Id : </b></label>\r\n        {{data.emailId}}\r\n    </div>\r\n    <div class=\"padding5\">\r\n        <label class=\"width150\"><b>Phone Number : </b></label>\r\n        {{data.phoneNumber}}\r\n    </div>\r\n    <div class=\"padding5\">\r\n        <label class=\"width150\"><b>Id : </b></label>\r\n        {{data.id}}\r\n    </div>\r\n    <div class=\"padding5\">\r\n        <label class=\"width150\"><b>Id Type : </b></label>\r\n        {{data.idType}}\r\n    </div>\r\n    <div class=\"padding5\">\r\n        <label class=\"width150\"><b>Govt. Id Number : </b></label>\r\n        {{data.idNumber}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/report/components/visitor/visitor.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/report/components/visitor/visitor.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content style=\"height:500px;\">\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Profile\">\r\n            <app-visitor-profile [data]=\"dialogData\"></app-visitor-profile>\r\n        </mat-tab>\r\n        <mat-tab label=\"Visit Summary\">\r\n            <app-visit-summary [data]=\"dialogData\"></app-visit-summary>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close (click)=\"onClickClose()\">Close</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/report/report.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/report/report.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card cardTitle='Report'>\r\n<div class=\"mat-elevation-z8\">\r\n    <div class=\"report-loading-shade\"   *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n</div>\r\n<table mat-table matSort [dataSource]=\"dataSource\">\r\n\r\n <!--- Note that these columns can be defined in any order.\r\n       The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n <!-- Position Column -->\r\n <ng-container matColumnDef=\"firstName\" >\r\n   <th  mat-header-cell *matHeaderCellDef mat-sort-header>First Name </th>\r\n   <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\r\n </ng-container>\r\n <ng-container matColumnDef=\"lastName\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n   </ng-container>     \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"phoneNumber\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.phoneNumber}} </td>\r\n   </ng-container>      \r\n   <!-- Weight Column -->\r\n   <ng-container matColumnDef=\"purpose\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header>Visit Purpose </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.visitSummary.purpose}} </td>\r\n   </ng-container>\r\n\r\n   <!-- Symbol Column -->\r\n   <ng-container matColumnDef=\"contactPerson\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact Person </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.visitSummary.contactPerson}} </td>\r\n   </ng-container>\r\n\r\n     <!-- Symbol Column -->\r\n   <ng-container matColumnDef=\"inTime\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header> In Time </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.visitSummary.inTime | date:'short'}} </td>\r\n   </ng-container>\r\n\r\n   <ng-container matColumnDef=\"idType\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header> Id Type </th>\r\n       <td mat-cell *matCellDef=\"let element\"> {{element.idType }} </td>\r\n   </ng-container>\r\n\r\n   <ng-container matColumnDef=\"idNumber\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header> Id Number </th>\r\n       <td mat-cell *matCellDef=\"let element\"> {{element.idNumber }} </td>\r\n   </ng-container>\r\n   <!-- <ng-container matColumnDef=\"actions\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\r\n       <td mat-cell *matCellDef=\"let element\"> </td>\r\n   </ng-container> -->\r\n   <!-- Search Columns-->\r\n   <ng-container matColumnDef=\"firstName-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"firstNameFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"lastName-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"lastNameFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n<!--    <ng-container matColumnDef=\"phoneNumber-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"phoneNumberFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container> -->\r\n   <ng-container matColumnDef=\"purpose-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"purposeFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"contactPerson-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"contactPersonFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"inTime-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"inTimeFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"idType-search\">\r\n     <th mat-header-cell *matHeaderCellDef></th>\r\n   </ng-container>\r\n   <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"first-header-row\"></tr>\r\n   <tr mat-header-row *matHeaderRowDef=\"displayedSearchBoxes\" ></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"openDialog(row)\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[2,5,10,15]\"  [length]=\"resultsLength\" [pageSize]=\"pageSize\"  showFirstLastButtons></mat-paginator>\r\n</div>\r\n</card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/visitor-form/visitor-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form [formGroup]=\"form\" class=\"normal-form \">\r\n        <mat-grid-list cols=\"2\" rowHeight=\"500\">\r\n          <div class=\"header table-div\">\r\n              <mat-form-field class=\"col-md-4 visitorInput\">\r\n                  <mat-select formControlName=\"visitorType\" placeholder=\"Visitor type\">\r\n                    <ng-container *ngFor=\"let type of visitorType\">\r\n                      <mat-option value=\"{{ type }}\">{{ type }}</mat-option>\r\n                    </ng-container>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n          </div>\r\n\r\n\r\n          <div *ngIf=\" form.get('visitorType').value == 'Guest' || form.get('visitorType').value == ''; else second\">\r\n            <table width=\"700\" class=\"table-div\">\r\n              <tr>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      formControlName=\"firstName\"\r\n                      autocomplete=\"off\"\r\n                      matInput\r\n                      placeholder=\"Firstname\"\r\n                    />\r\n                    <mat-error>This field is mandatory.</mat-error>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"lastName\"\r\n                      matInput\r\n                      placeholder=\"lastname\"\r\n                    />\r\n                    <mat-error>This field is mandatory.</mat-error>\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <mat-select formControlName=\"idType\" placeholder=\"ID type\">\r\n                      <mat-option>None</mat-option>\r\n                      <ng-container *ngFor=\"let type of ids\">\r\n                        <mat-option value=\"{{ type }}\">{{ type }}</mat-option>\r\n                      </ng-container>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"idNumber\"\r\n                      matInput\r\n                      placeholder=\"ID Number\"\r\n                    />\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"emailId\"\r\n                      matInput\r\n                      placeholder=\"Email Id\"\r\n                    />\r\n                    <mat-error>Invalid email address.</mat-error>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"phoneNumber\"\r\n                      matInput\r\n                      placeholder=\"Mobile*\"\r\n                    />\r\n                    <mat-error *ngIf=\"form.controls['phoneNumber'].errors?.required\"\r\n                      >This field is mandatory.</mat-error\r\n                    >\r\n                    <mat-error *ngIf=\"form.controls['phoneNumber'].errors?.pattern\">\r\n                      Invalid mobile number\r\n                    </mat-error>\r\n                    <!-- <mat-error *ngIf=\"service.form.controls['mobile'].errors?.maxlength\">Max 10 digit required</mat-error> -->\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"comingFrom\"\r\n                      matInput\r\n                      placeholder=\"Coming From\"\r\n                    />\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"contactPerson\"\r\n                      matInput\r\n                      placeholder=\"Contact person\"\r\n                    />\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"inTime\"\r\n                      matInput\r\n                      placeholder=\"In time\"\r\n                      value=\"{{ now | date: 'medium' }}\"\r\n                    />\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <mat-select formControlName=\"purpose\" placeholder=\"Purpose\">\r\n                      <mat-option>None</mat-option>\r\n                      <ng-container *ngFor=\"let pur of purposes\">\r\n                        <mat-option value=\"{{ pur.value }}\">{{\r\n                          pur.value\r\n                        }}</mat-option>\r\n                      </ng-container>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"2\" class=\"full-width\">\r\n                  <div class=\"button-row\" style=\"display:inline\">\r\n                    <button\r\n                      mat-raised-button\r\n                      color=\"primary\"\r\n                      type=\"submit\"\r\n                      (click)=\"onSubmit()\"\r\n                    >\r\n\r\n                      Submit\r\n                    </button>\r\n                  </div>\r\n                  <div style=\"display:inline ;margin-left: 3%\" >\r\n                    <button mat-raised-button color=\"warn\" (click)=\"onClear()\">\r\n                      Clear\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n            <!-- <mat-grid-tile>\r\n                <div class=\"controles-container secondGrid\">\r\n                  <mat-form-field>\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"lastName\"\r\n                      matInput\r\n                      placeholder=\"lastname\"\r\n                    />\r\n                    <mat-error>This field is mandatory.</mat-error>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"idNumber\"\r\n                      matInput\r\n                      placeholder=\"ID Number\"\r\n                    />\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"phoneNumber\"\r\n                      matInput\r\n                      placeholder=\"Mobile*\"\r\n                    />\r\n                    <mat-error\r\n                      *ngIf=\"form.controls['phoneNumber'].errors?.required\"\r\n                      >This field is mandatory.</mat-error\r\n                    >\r\n                    <mat-error\r\n                      *ngIf=\"form.controls['phoneNumber'].errors?.pattern\"\r\n                    >\r\n                      Invalid mobile number\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"service.form.controls['mobile'].errors?.maxlength\">Max 10 digit required</mat-error>\r\n                  </mat-form-field>\r\n\r\n                  <mat-form-field>\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"contactPerson\"\r\n                      matInput\r\n                      placeholder=\"Contact person\"\r\n                    />\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <mat-select formControlName=\"purpose\" placeholder=\"Purpose\">\r\n                      <mat-option>None</mat-option>\r\n                      <ng-container *ngFor=\"let pur of purposes\">\r\n                        <mat-option value=\"{{ pur.value }}\">{{ pur.value }}</mat-option>\r\n                      </ng-container>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </mat-grid-tile> -->\r\n          </div>\r\n\r\n          <ng-template #second  >\r\n            <table  width=\"700\" class=\"table-div\">\r\n              <tr>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      formControlName=\"employeeId\"\r\n                      autocomplete=\"off\"\r\n                      matInput\r\n                      placeholder=\"Employee Id\"\r\n                    />\r\n                    <mat-error>This field is mandatory.</mat-error>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"inTime\"\r\n                      matInput\r\n                      placeholder=\"In time\"\r\n                      value=\"{{ now | date: 'medium' }}\"\r\n                    />\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"emailId\"\r\n                      matInput\r\n                      placeholder=\"Email Id\"\r\n                    />\r\n                    <mat-error>Invalid email address.</mat-error>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"phoneNumber\"\r\n                      matInput\r\n                      placeholder=\"Mobile*\"\r\n                    />\r\n                    <mat-error *ngIf=\"form.controls['phoneNumber'].errors?.required\"\r\n                      >This field is mandatory.</mat-error\r\n                    >\r\n                    <mat-error *ngIf=\"form.controls['phoneNumber'].errors?.pattern\">\r\n                      Invalid mobile number\r\n                    </mat-error>\r\n                    <!-- <mat-error *ngIf=\"service.form.controls['mobile'].errors?.maxlength\">Max 10 digit required</mat-error> -->\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      formControlName=\"firstName\"\r\n                      autocomplete=\"off\"\r\n                      matInput\r\n                      placeholder=\"Firstname\"\r\n                    />\r\n                    <mat-error>This field is mandatory.</mat-error>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input\r\n                      autocomplete=\"off\"\r\n                      formControlName=\"lastName\"\r\n                      matInput\r\n                      placeholder=\"lastname\"\r\n                    />\r\n                    <mat-error>This field is mandatory.</mat-error>\r\n                  </mat-form-field>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td> <div class=\"button-row\">\r\n                    <button\r\n                      mat-raised-button\r\n                      color=\"primary\"\r\n                      type=\"submit\"\r\n                      (click)=\"onSubmitEmployeeData()\"\r\n                    >\r\n                      Submit\r\n                    </button>\r\n                  </div></td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          </ng-template>\r\n        </mat-grid-list>\r\n      </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-home/visitor-home.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/visitor-form/visitor-home/visitor-home.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"Home\">\r\n    <app-home></app-home>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Create\">\r\n    <visitor-search-or-create></visitor-search-or-create>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper [linear]=\"true\" #stepper>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Visitor search or create</ng-template>\r\n\r\n        <div class=\"example-container\">\r\n              \r\n          <mat-form-field class=\"set-width\">\r\n            <span class=\"span\" matPrefix><mat-icon class=\"span-maticon\">mail</mat-icon>&nbsp;</span>\r\n            <input matInput type=\"string\" placeholder=\"Email\" [(ngModel)]=\"user.emailId\" (keyup)=\"searchValues($event.target.value,'email');\" class=\"example-right-align\">\r\n          </mat-form-field>\r\n\r\n          <!-- <h3 class=\"setMiddle\"> OR </h3>\r\n          \r\n          <mat-form-field class=\"set-width\">\r\n            <input matInput type=\"number\" placeholder=\"Mobile number\" [(ngModel)]=\"user.phoneNumber\" (keyup)=\"searchValues($event.target.value,'phoneNumber');\" #phoneNumber>\r\n            <span class=\"span\" matPrefix><mat-icon class=\"span-maticon\">smartphone</mat-icon>&nbsp;</span>\r\n          </mat-form-field> -->\r\n\r\n          <mat-list role=\"list\" *ngIf=\"data && data.idNumber\">\r\n            <mat-list-item class=\"list {{data?.visitSummary[data?.visitSummary?.length - 1]?.status?.toLowerCase()}}\" role=\"listitem\">\r\n                <span *ngIf=\"data && data.idNumber && data.visitSummary[0]?.status\">Status -</span>\r\n                 {{data?.visitSummary[data?.visitSummary?.length - 1]?.status}}\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div> \r\n        <div>\r\n            <button *ngIf=\"data\" mat-button matStepperNext>Next</button>\r\n            <button *ngIf=\"!data\" mat-button matStepperNext>Create</button>\r\n        </div>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"heroForm\">\r\n        <ng-template [ngIf]=\"data\" matStepLabel>{{ !data ? 'Create Visitor': 'View Visitor' }}</ng-template>\r\n        <form #heroForm=\"ngForm\">\r\n        <div class=\"flex-container-wrapper\">\r\n\r\n          <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                <input [readonly]=\"data\" id=\"input\" name=\"firstName\" [(ngModel)]=\"user.firstName\" matInput placeholder=\"First Name\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input [readonly]=\"data\" id=\"input\" name=\"lastName\" [(ngModel)]=\"user.lastName\" matInput placeholder=\"Last Name\" required>\r\n              </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                <input [readonly]=\"data\" id=\"input\" name=\"purpose\" [(ngModel)]=\"user.visitSummary[0].purpose\"  matInput placeholder=\"Purpose\" required>\r\n              </mat-form-field>\r\n              <mat-form-field> \r\n                  <input [readonly]=\"data\" id=\"input\"  name=\"comingFrom\" [(ngModel)]=\"user.visitSummary[0].comingFrom\" matInput placeholder=\"Coming From\" required>\r\n              </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                <mat-select [(ngModel)]=\"user.idType\" name=\"idType\" placeholder=\"Govt Id Type\" required>\r\n                  <mat-option value=\"{{id}}\" *ngFor=\"let id of idTypes\">{{id}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                <input [readonly]=\"data\" id=\"input\"  name=\"idNumber\" [(ngModel)]=\"user.idNumber\" matInput placeholder=\"Id number\" required>\r\n              </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                  <input [readonly]=\"data\" id=\"input\"  name=\"badgeNo\" [(ngModel)]=\"user.visitSummary[0].badgeNo\" matInput placeholder=\"Temporary batch number\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input  [readonly]=\"data\" matInput type=\"number\" placeholder=\"Mobile number\" minlength=\"8\" maxlength=\"10\" [(ngModel)]=\"user.phoneNumber\" name=\"phoneNumber\" #phoneNumber required>\r\n              </mat-form-field>\r\n          </div>\r\n            <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                <input [readonly]=\"data\" name=\"contactPerson\" [(ngModel)]=\"user.visitSummary[0].contactPerson\"\r\n                 matInput placeholder=\"Contact Person\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input [readonly]=\"data\" type=\"email\" pattern=\"[^@]+@[^\\.]+\\..+\" name=\"contactPersonEmailId\" [(ngModel)]=\"user.visitSummary[0].contactPersonEmailId\"\r\n                matInput placeholder=\"Contact Person Email Id\" required>\r\n              </mat-form-field>\r\n\r\n              <!-- <button mat-button>Add Contact Person</button> -->\r\n            </div>\r\n            <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                <input [readonly]=\"data\" name=\"contactPersonPhone\" minlength=\"8\" maxlength=\"10\" [(ngModel)]=\"user.visitSummary[0].contactPersonPhone\"\r\n                matInput placeholder=\"Contact Person Phone Number\" required>\r\n              </mat-form-field>\r\n\r\n              <!-- <button mat-button>Add Contact Person</button> -->\r\n            </div>\r\n            \r\n          <!-- <div>\r\n            <button mat-button matStepperPrevious>Request Approval</button>\r\n            <button mat-button (click)=\"stepper.reset()\">Notify</button>\r\n          </div> -->\r\n          <div>\r\n            <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n        </div>\r\n      </form>  \r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Approval</ng-template>\r\n      <h6 *ngIf=\"user && user?.firstName \">Name - {{user?.firstName +' '+ user?.lastName }} </h6>\r\n      <h6 *ngIf=\"user && user?.visitSummary[user?.visitSummary?.length - 1]?.purpose\">Purpose - {{user?.visitSummary[user?.visitSummary?.length - 1]?.purpose }} </h6>\r\n      <h6 *ngIf=\"user && user?.visitSummary[user?.visitSummary?.length - 1]?.contactPerson\">Contact Person Name - {{user?.visitSummary[user?.visitSummary?.length - 1]?.contactPerson }} </h6>\r\n      <h6 *ngIf=\"user && user?.visitSummary[user?.visitSummary?.length - 1]?.contactPersonEmailId\">Contact Person Email - {{user?.visitSummary[user?.visitSummary?.length - 1]?.contactPersonEmailId }} </h6>\r\n      <h6 *ngIf=\"user && user?.visitSummary[user?.visitSummary?.length - 1]?.contactPersonPhone\">Contact Person Contact - {{user?.visitSummary[user?.visitSummary?.length - 1]?.contactPersonPhone }} </h6>\r\n      <mat-list role=\"list\" *ngIf=\"data && data.idNumber\">\r\n        <mat-list-item class=\"list {{data?.visitSummary[data?.visitSummary?.length - 1]?.status ? data?.visitSummary[data?.visitSummary?.length - 1]?.status?.toLowerCase(): data?.idNumber ? 'pending': null}}\" role=\"listitem\">\r\n          <span *ngIf=\"data && data.idNumber\">Status -</span>\r\n               {{ data?.visitSummary[data?.visitSummary?.length - 1]?.status ? data?.visitSummary[data?.visitSummary?.length - 1]?.status : data?.idNumber ? 'PENDING' : null}}\r\n        </mat-list-item>\r\n      </mat-list>\r\n\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button *ngIf=\"!data\" mat-button (click)=\"stepper.reset()\">Reset</button>\r\n        <button *ngIf=\"!data\" mat-button (click)=\"onSubmit()\">Finish</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-vertical-stepper>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_report_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/report/report.component */ "./src/app/modules/report/report.component.ts");
/* harmony import */ var _modules_visitor_form_visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/visitor-form/visitor-home/visitor-home.component */ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.ts");





var routes = [
    { path: '', pathMatch: 'full', component: _modules_visitor_form_visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_4__["VisitorComponent"] },
    // { path: 'login', pathMatch: 'full', component: loginComponent },
    { path: 'visitor', pathMatch: 'full', component: _modules_visitor_form_visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_4__["VisitorComponent"] },
    { path: 'report', pathMatch: 'full', component: _modules_report_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  height: 50%;\r\n  margin: 10px;\r\n}\r\n.mat-sidenav-content{\r\nheight: 539px !important;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\nheight: 81px;\r\nmargin-top: 9px;\r\n}\r\n#img {\r\nwidth: 10em !important;\r\nmargin: 0 1rem;\r\n}\r\nmat-toolbar-row{\r\nmargin: 0 !important;\r\n}\r\n.mat-drawer.mat-drawer-side{\r\nz-index: 1 !important;\r\n}\r\n.matNavList{\r\n  height: 86%;\r\n}\r\n.locSelect{\r\n  margin-top: 5px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFFQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2Y7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2Q7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLm1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbmhlaWdodDogNTM5cHggIWltcG9ydGFudDtcclxufSAgXHJcblxyXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbmhlaWdodDogODFweDtcclxubWFyZ2luLXRvcDogOXB4O1xyXG59XHJcblxyXG4jaW1nIHtcclxud2lkdGg6IDEwZW0gIWltcG9ydGFudDtcclxubWFyZ2luOiAwIDFyZW07XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLXJvd3tcclxubWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItc2lkZXtcclxuei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0TmF2TGlzdHtcclxuICBoZWlnaHQ6IDg2JTtcclxufVxyXG5cclxuLmxvY1NlbGVjdHtcclxuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_helpers_static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/helpers/static-data */ "./src/app/helpers/static-data.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, auth) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.title = 'visitor-frontend';
        this.location = _app_helpers_static_data__WEBPACK_IMPORTED_MODULE_3__["accoliteLocation"];
        this.val = 'Bangalore';
        if (window.location.href.indexOf('?loc') > -1) {
            this.val = window.location.href.split("=")[1];
        }
        else {
            this.val = 'Bangalore';
            this.selectedValue(this.val);
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.activatedRoute.paramMap.subscribe( params => {
        //   console.log( params.get( 'login' ) )
        // } )
        var _this = this;
        this.auth.subject$.subscribe(function (data) { return _this.active = data; });
        console.log(window.location.href);
        if (window.location.href.indexOf('login') > -1) {
            console.log("login route");
            this.auth.subject$.next(false);
        }
        else {
            this.auth.subject$.next(true);
        }
        // console.log( this.router.url );
        // if ( this.router.url.indexOf( 'login' ) > -1 ) {
        //   this.active = 0;
        //   console.log( "Active " + this.active )
        // }
    };
    // searchUrl: string = "?"
    AppComponent.prototype.selectedValue = function (selectedval) {
        this.val = selectedval;
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { loc: this.val },
            queryParamsHandling: 'merge',
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_report_report_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/report/report.module */ "./src/app/modules/report/report.module.ts");
/* harmony import */ var _modules_visitor_form_visitors_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/visitor-form/visitors.module */ "./src/app/modules/visitor-form/visitors.module.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login.component */ "./src/app/components/login.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_login_component__WEBPACK_IMPORTED_MODULE_12__["loginComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _modules_visitor_form_visitors_module__WEBPACK_IMPORTED_MODULE_10__["VisitorsModule"],
                _modules_report_report_module__WEBPACK_IMPORTED_MODULE_9__["ReportModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _modules_home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/base/data-obtainer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/base/data-obtainer.component.ts ***!
  \************************************************************/
/*! exports provided: DataObtainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataObtainer", function() { return DataObtainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_models_service_search_params_input_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/models/service-search-params-input.model */ "./src/app/helpers/models/service-search-params-input.model.ts");

/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives Flexiblity for all Component to reuse all methodwith loader and subscription functionality.
 * extend Component to enhance this feature.
 *
 */


var DataObtainer = /** @class */ (function () {
    function DataObtainer(zones) {
        this.zones = zones;
        this.loading = false;
        this.parameters = new src_app_helpers_models_service_search_params_input_model__WEBPACK_IMPORTED_MODULE_2__["ServiceSearchParamsInputModel"]();
        this.refreshOnInit = true;
    }
    DataObtainer.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refreshOnInit) {
            this.zones.run(function () { return _this.refreshData(); });
        }
    };
    DataObtainer.prototype.refreshData = function () {
        var _this = this;
        this.onBeforeUpdateData();
        this.loading = true;
        this.getDataObservable(this.parameters).subscribe(function (data) {
            _this.data = JSON.parse(JSON.stringify(data));
            _this.onAfterUpdateData(data);
            _this.onNextStage(data);
            _this.loading = false;
            console.log(_this.data);
        }, function (error) {
            _this.onErrorStage(error);
        }, function () {
            _this.onCompleteStage();
        });
    };
    DataObtainer.prototype.onBeforeUpdateData = function () { };
    DataObtainer.prototype.onAfterUpdateData = function (data) { };
    DataObtainer.prototype.onCompleteStage = function () { };
    DataObtainer.prototype.onNextStage = function (data) { };
    DataObtainer.prototype.onErrorStage = function (error) { };
    DataObtainer.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    DataObtainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "data-obtainer",
            template: ""
        })
    ], DataObtainer);
    return DataObtainer;
}());



/***/ }),

/***/ "./src/app/components/login.component.css":
/*!************************************************!*\
  !*** ./src/app/components/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/login.component.ts ***!
  \***********************************************/
/*! exports provided: loginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginComponent", function() { return loginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var loginComponent = /** @class */ (function () {
    function loginComponent(router, auth, formBuilder) {
        this.router = router;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.auth.subject$.next(false);
    }
    // username: string;
    // password: string;
    loginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            userName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(loginComponent.prototype, "f", {
        // initializeFormGroup() {
        //   this.form.setValue( {
        //     userName: "",
        //     Password: "",
        //   } );
        // }
        // login(): void {
        //   if ( this.username == 'admin' && this.password == 'admin' ) {
        //     this.auth.subject$.next( true )
        //     this.router.navigate( [ "visitor" ] );
        //   } else {
        //     this.auth.subject$.next( false )
        //     alert( "Invalid credentials" );
        //   }
        // }
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    loginComponent.prototype.login = function () {
        this.submitted = true;
        if (this.form.value.userName == 'admin' && this.form.value.Password == 'admin') {
            console.log(this.form.value);
            this.auth.subject$.next(true);
            this.router.navigate(["visitor"]);
        }
        else {
            this.auth.subject$.next(false);
            //  alert( "Invalid credentials" );
        }
    };
    loginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    loginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login.component.css")]
        })
    ], loginComponent);
    return loginComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-components/card/card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/ui-components/card/card.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  padding: 0;\r\n}\r\n\r\n.card-title {\r\n  font-weight: 700;\r\n}\r\n\r\n.fullscreen {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 997;\r\n  overflow: auto;\r\n  margin-bottom: 0;\r\n}\r\n\r\nmat-card-header,\r\nmat-card-content {\r\n  padding: 1rem;\r\n}\r\n\r\nmat-card-header {\r\n  background-color: gainsboro;\r\n}\r\n\r\n.mat-card-title {\r\n  margin: 0 !important;\r\n}\r\n\r\nmat-card-header {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\nmat-card-header div.title {\r\n  width: 70%;\r\n  float: left;\r\n}\r\n\r\nmat-card-header div.actions {\r\n  width: 30%;\r\n  display: inline-block;\r\n  text-align: right;\r\n}\r\n\r\ndiv.actions mat-icon:hover {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91aS1jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZnVsbHNjcmVlbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTc7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxubWF0LWNhcmQtaGVhZGVyLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIgZGl2LnRpdGxlIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIgZGl2LmFjdGlvbnMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5kaXYuYWN0aW9ucyBtYXQtaWNvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/ui-components/card/card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/ui-components/card/card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives Flexibility to create card component
 */


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.loading = false;
        this.enableFullScreen = false;
        this.expandCard = true;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "cardTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "cardSubTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "cardContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CardComponent.prototype, "loading", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/components/ui-components/card/card.component.css")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-components/data-table/data-table.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/ui-components/data-table/data-table.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show{\r\n  display: inherit;\r\n}\r\n\r\n.hide{\r\n  display: none;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91aS1jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3d7XHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhpZGV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/ui-components/data-table/data-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ui-components/data-table/data-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var src_app_helpers_array_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/array.util */ "./src/app/helpers/array.util.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");






/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Gives flexibility to reduce code and create Material design table
 *
 *
 * @property dataSource - to add Array of object
 * @property tableHelpers - flexibility to add title and give sorting access
 *
 */
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.tableHelpers = [];
        this.usePagination = false;
        this.paginationTypes = [5, 10, 20];
        this.displayedColumns = [];
        this.displayColumns = [];
    }
    DataTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.dataSource) {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](changes.dataSource.currentValue);
            this.getDisplayedColumns();
        }
    };
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.usePagination ? this.paginator : this.dataSource.paginator;
        this.dataSource.sort = this.sort;
    };
    DataTableComponent.prototype.getDisplayedColumns = function () {
        //this.displayedColumns = this.displayColumns ? this.displayColumns : Object.keys( ArrayUtil.first( this.dataSource.data ) );
        this.displayedColumns = Object.keys(src_app_helpers_array_util__WEBPACK_IMPORTED_MODULE_3__["ArrayUtil"].first(this.dataSource.data));
    };
    DataTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DataTableComponent.prototype, "dataSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DataTableComponent.prototype, "tableHelpers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DataTableComponent.prototype, "usePagination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DataTableComponent.prototype, "paginationTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
    ], DataTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
    ], DataTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DataTableComponent.prototype, "displayColumns", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'data-table',
            template: __webpack_require__(/*! raw-loader!./data-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/components/ui-components/data-table/data-table.component.css")]
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-components/drop-down/drop-down.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/ui-components/drop-down/drop-down.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ui-components/drop-down/drop-down.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/ui-components/drop-down/drop-down.component.ts ***!
  \***************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives Flexibility to create Material Dropdown component
 */


var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropdownComponent.prototype.emitChanges = function () {
        this.selectedValueChange.emit(this.selectedValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownComponent.prototype, "selectedValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DropdownComponent.prototype, "selectedValueChange", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'drop-down',
            template: __webpack_require__(/*! raw-loader!./drop-down.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/drop-down/drop-down.component.html"),
            styles: [__webpack_require__(/*! ./drop-down.component.css */ "./src/app/components/ui-components/drop-down/drop-down.component.css")]
        })
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-components/snack-bar/snack-bar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/ui-components/snack-bar/snack-bar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".snack-bar{\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.error{\r\n  color: lightcoral;\r\n}\r\n\r\ndiv.message{\r\n  -webkit-box-flex: 15;\r\n          flex: 15  \r\n}\r\n\r\ndiv.dismiss{\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  height: 24px;\r\n}\r\n\r\nspan.message-text{\r\n  display: inline-block;\r\n}\r\n\r\nspan.message-text mat-icon{\r\n  vertical-align: middle;\r\n}\r\n\r\nbutton mat-icon.button-icon{\r\n  vertical-align: baseline !important;\r\n}\r\n\r\n.dismiss button{\r\n  width:24px;\r\n  height: 24px;\r\n}\r\n\r\n.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*, \r\n .mat-flat-button .mat-button-wrapper>*, .mat-icon-button .mat-button-wrapper>*,\r\n  .mat-mini-fab .mat-button-wrapper>*, .mat-raised-button .mat-button-wrapper>*,\r\n   .mat-stroked-button .mat-button-wrapper>*{\r\n  vertical-align: baseline !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1jb21wb25lbnRzL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQU87VUFBUDtBQUNGOztBQUVBO0VBQ0UsbUJBQU87VUFBUCxPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdWktY29tcG9uZW50cy9zbmFjay1iYXIvc25hY2stYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc25hY2stYmFye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5lcnJvcntcclxuICBjb2xvcjogbGlnaHRjb3JhbDtcclxufVxyXG5cclxuZGl2Lm1lc3NhZ2V7XHJcbiAgZmxleDogMTUgIFxyXG59XHJcblxyXG5kaXYuZGlzbWlzc3tcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuc3Bhbi5tZXNzYWdlLXRleHR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5zcGFuLm1lc3NhZ2UtdGV4dCBtYXQtaWNvbntcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5idXR0b24gbWF0LWljb24uYnV0dG9uLWljb257XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNtaXNzIGJ1dHRvbntcclxuICB3aWR0aDoyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1hdC1idXR0b24gLm1hdC1idXR0b24td3JhcHBlcj4qLC5tYXQtZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXI+KiwgXHJcbiAubWF0LWZsYXQtYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXI+KiwgLm1hdC1pY29uLWJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyPiosXHJcbiAgLm1hdC1taW5pLWZhYiAubWF0LWJ1dHRvbi13cmFwcGVyPiosIC5tYXQtcmFpc2VkLWJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyPiosXHJcbiAgIC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1idXR0b24td3JhcHBlcj4qe1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/ui-components/snack-bar/snack-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/ui-components/snack-bar/snack-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Gives flexibility to create custom ui for material snackbar
 */



var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    SnackbarComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] }
    ]; };
    SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'snack-bar',
            template: __webpack_require__(/*! raw-loader!./snack-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/snack-bar/snack-bar.component.html"),
            styles: [__webpack_require__(/*! ./snack-bar.component.css */ "./src/app/components/ui-components/snack-bar/snack-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/helpers/array.util.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/array.util.ts ***!
  \***************************************/
/*! exports provided: ArrayUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtil", function() { return ArrayUtil; });
var ArrayUtil = /** @class */ (function () {
    function ArrayUtil() {
    }
    ArrayUtil.isEmpty = function (arr) {
        return arr && arr.length <= 0;
    };
    ArrayUtil.isNotEmpty = function (arr) {
        return arr && arr.length > 0;
    };
    ArrayUtil.first = function (arr) {
        return ArrayUtil.isNotEmpty(arr) ? arr[0] : [];
    };
    return ArrayUtil;
}());



/***/ }),

/***/ "./src/app/helpers/models/service-search-params-input.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/helpers/models/service-search-params-input.model.ts ***!
  \*********************************************************************/
/*! exports provided: ServiceSearchParamsInputModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSearchParamsInputModel", function() { return ServiceSearchParamsInputModel; });
/**
 *  @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *  Helper For Http params to be used by lower level components
 */
var ServiceSearchParamsInputModel = /** @class */ (function () {
    function ServiceSearchParamsInputModel() {
        this.size = 10;
    }
    return ServiceSearchParamsInputModel;
}());



/***/ }),

/***/ "./src/app/helpers/models/visitors/visit-summary.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/helpers/models/visitors/visit-summary.model.ts ***!
  \****************************************************************/
/*! exports provided: VisitSummaryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitSummaryModel", function() { return VisitSummaryModel; });
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Visit Summary Model used in Visitor Model
 */
var VisitSummaryModel = /** @class */ (function () {
    function VisitSummaryModel(jsonObj) {
        Object.assign(this, jsonObj);
    }
    VisitSummaryModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return VisitSummaryModel;
}());



/***/ }),

/***/ "./src/app/helpers/models/visitors/visitors.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/helpers/models/visitors/visitors.model.ts ***!
  \***********************************************************/
/*! exports provided: VisitorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorModel", function() { return VisitorModel; });
/* harmony import */ var _visit_summary_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visit-summary.model */ "./src/app/helpers/models/visitors/visit-summary.model.ts");
/* harmony import */ var _array_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../array.util */ "./src/app/helpers/array.util.ts");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Visitor Model
 */


var VisitorModel = /** @class */ (function () {
    function VisitorModel(jsonObj) {
        Object.assign(this, jsonObj);
        if (_array_util__WEBPACK_IMPORTED_MODULE_1__["ArrayUtil"].isNotEmpty(this.visitSummary)) {
            this.visitSummary = this.visitSummary.map(function (visitSummaryModel) { return new _visit_summary_model__WEBPACK_IMPORTED_MODULE_0__["VisitSummaryModel"](visitSummaryModel); });
        }
    }
    VisitorModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return VisitorModel;
}());



/***/ }),

/***/ "./src/app/helpers/static-data.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/static-data.ts ***!
  \****************************************/
/*! exports provided: accoliteLocation, idType, accoliteSnackbarMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accoliteLocation", function() { return accoliteLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idType", function() { return idType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accoliteSnackbarMessages", function() { return accoliteSnackbarMessages; });
// Add Accolite related static data 
var accoliteLocation = ['Bangalore', 'Hyderabad', 'Delhi'];
var idType = ['Voter Id', 'Aadhar Card', 'PAN Card', 'Driving License', 'Passport'];
// To Add success or error snackbar message
var accoliteSnackbarMessages = {
    rest: {
        success: {
            'create-visitors': "Successfully created Visitor details"
        },
        error: {
            'create-visitors': "Failed to create Visitor details"
        }
    }
};


/***/ }),

/***/ "./src/app/modules/home/approved-request/approved-request.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/approved-request/approved-request.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  min-width: 2px;\r\n  max-height: 30px;\r\n\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2FwcHJvdmVkLXJlcXVlc3QvYXBwcm92ZWQtcmVxdWVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjs7RUFFaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2FwcHJvdmVkLXJlcXVlc3QvYXBwcm92ZWQtcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1pbi13aWR0aDogMnB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/approved-request/approved-request.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home/approved-request/approved-request.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApprovedRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedRequestComponent", function() { return ApprovedRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/data-obtainer.component */ "./src/app/components/base/data-obtainer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");





var ApprovedRequestComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApprovedRequestComponent, _super);
    function ApprovedRequestComponent(visitorService, zone) {
        var _this = _super.call(this, zone) || this;
        _this.visitorService = visitorService;
        _this.zone = zone;
        _this.pagination = false;
        _this.displayedColumns = [
            "badgeNo",
            "Name",
            "inTime",
            "outTime",
            "actions",
            "remarks"
        ];
        return _this;
    }
    ApprovedRequestComponent.prototype.getDataObservable = function (params) {
        console.log(this.visitorService.fetchAllVisitors());
        return this.visitorService.fetchAllVisitors();
    };
    ApprovedRequestComponent.prototype.onAfterUpdateData = function (data) {
        this.visitors = data;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.visitors);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ApprovedRequestComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ApprovedRequestComponent.ctorParameters = function () { return [
        { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], ApprovedRequestComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], ApprovedRequestComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ApprovedRequestComponent.prototype, "dataSource", void 0);
    ApprovedRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-approved-request",
            template: __webpack_require__(/*! raw-loader!./approved-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/approved-request/approved-request.component.html"),
            styles: [__webpack_require__(/*! ./approved-request.component.css */ "./src/app/modules/home/approved-request/approved-request.component.css")]
        })
    ], ApprovedRequestComponent);
    return ApprovedRequestComponent;
}(src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__["DataObtainer"]));



/***/ }),

/***/ "./src/app/modules/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/modules/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(visitorService, zone) {
        this.visitorService = visitorService;
        this.zone = zone;
        this.pagination = false;
        this.displayedColumns = ["badgeNo", "Name", "inTime", "actions", "remarks"];
    }
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_2__["VisitorService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], HomeComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], HomeComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HomeComponent.prototype, "dataSource", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/modules/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _approved_request_approved_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approved-request/approved-request.component */ "./src/app/modules/home/approved-request/approved-request.component.ts");
/* harmony import */ var _pending_request_pending_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-request/pending-request.component */ "./src/app/modules/home/pending-request/pending-request.component.ts");
/* harmony import */ var _pre_approved_request_pre_approved_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pre-approved-request/pre-approved-request.component */ "./src/app/modules/home/pre-approved-request/pre-approved-request.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _approved_request_approved_request_component__WEBPACK_IMPORTED_MODULE_4__["ApprovedRequestComponent"],
                _pending_request_pending_request_component__WEBPACK_IMPORTED_MODULE_5__["PendingRequestComponent"],
                _pre_approved_request_pre_approved_request_component__WEBPACK_IMPORTED_MODULE_6__["PreApprovedRequestComponent"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _approved_request_approved_request_component__WEBPACK_IMPORTED_MODULE_4__["ApprovedRequestComponent"],
                _pending_request_pending_request_component__WEBPACK_IMPORTED_MODULE_5__["PendingRequestComponent"],
                _pre_approved_request_pre_approved_request_component__WEBPACK_IMPORTED_MODULE_6__["PreApprovedRequestComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/pending-request/pending-request.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/pending-request/pending-request.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BlbmRpbmctcmVxdWVzdC9wZW5kaW5nLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wZW5kaW5nLXJlcXVlc3QvcGVuZGluZy1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/home/pending-request/pending-request.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/home/pending-request/pending-request.component.ts ***!
  \***************************************************************************/
/*! exports provided: PendingRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingRequestComponent", function() { return PendingRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/data-obtainer.component */ "./src/app/components/base/data-obtainer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");





var PendingRequestComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PendingRequestComponent, _super);
    function PendingRequestComponent(visitorService, zone) {
        var _this = _super.call(this, zone) || this;
        _this.visitorService = visitorService;
        _this.zone = zone;
        _this.pagination = false;
        _this.displayedColumns = [
            "badgeNo",
            "Name",
            "inTime",
            "outTime",
            "actions",
            "remarks"
        ];
        return _this;
    }
    PendingRequestComponent.prototype.getDataObservable = function (params) {
        console.log(this.visitorService.fetchAllVisitors());
        return this.visitorService.fetchAllVisitors();
    };
    PendingRequestComponent.prototype.onAfterUpdateData = function (data) {
        this.visitors = data;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.visitors);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PendingRequestComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PendingRequestComponent.ctorParameters = function () { return [
        { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], PendingRequestComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], PendingRequestComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PendingRequestComponent.prototype, "dataSource", void 0);
    PendingRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pending-request",
            template: __webpack_require__(/*! raw-loader!./pending-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/pending-request/pending-request.component.html"),
            styles: [__webpack_require__(/*! ./pending-request.component.css */ "./src/app/modules/home/pending-request/pending-request.component.css")]
        })
    ], PendingRequestComponent);
    return PendingRequestComponent;
}(src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__["DataObtainer"]));



/***/ }),

/***/ "./src/app/modules/home/pre-approved-request/pre-approved-request.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/pre-approved-request/pre-approved-request.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3ByZS1hcHByb3ZlZC1yZXF1ZXN0L3ByZS1hcHByb3ZlZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcHJlLWFwcHJvdmVkLXJlcXVlc3QvcHJlLWFwcHJvdmVkLXJlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/pre-approved-request/pre-approved-request.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/home/pre-approved-request/pre-approved-request.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PreApprovedRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreApprovedRequestComponent", function() { return PreApprovedRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/data-obtainer.component */ "./src/app/components/base/data-obtainer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");





var PreApprovedRequestComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PreApprovedRequestComponent, _super);
    function PreApprovedRequestComponent(visitorService, zone) {
        var _this = _super.call(this, zone) || this;
        _this.visitorService = visitorService;
        _this.zone = zone;
        _this.pagination = false;
        _this.displayedColumns = ["badgeNo", "Name", "contactPerson", "actions", "remarks"];
        return _this;
    }
    PreApprovedRequestComponent.prototype.getDataObservable = function (params) {
        console.log(this.visitorService.fetchAllVisitors());
        return this.visitorService.fetchAllVisitors();
    };
    PreApprovedRequestComponent.prototype.onAfterUpdateData = function (data) {
        this.visitors = data;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.visitors);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PreApprovedRequestComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PreApprovedRequestComponent.ctorParameters = function () { return [
        { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], PreApprovedRequestComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], PreApprovedRequestComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PreApprovedRequestComponent.prototype, "dataSource", void 0);
    PreApprovedRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pre-approved-request",
            template: __webpack_require__(/*! raw-loader!./pre-approved-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/pre-approved-request/pre-approved-request.component.html"),
            styles: [__webpack_require__(/*! ./pre-approved-request.component.css */ "./src/app/modules/home/pre-approved-request/pre-approved-request.component.css")]
        })
    ], PreApprovedRequestComponent);
    return PreApprovedRequestComponent;
}(src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__["DataObtainer"]));



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_ui_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui-components/data-table/data-table.component */ "./src/app/components/ui-components/data-table/data-table.component.ts");
/* harmony import */ var _components_ui_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui-components/card/card.component */ "./src/app/components/ui-components/card/card.component.ts");
/* harmony import */ var _components_ui_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui-components/drop-down/drop-down.component */ "./src/app/components/ui-components/drop-down/drop-down.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ui-components/snack-bar/snack-bar.component */ "./src/app/components/ui-components/snack-bar/snack-bar.component.ts");
/**
 *
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives the flexibility to add all Material declarations and imports inside this module
 */










var componentDeclarations = [
    _components_ui_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"],
    _components_ui_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
    _components_ui_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"],
    _components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__["SnackbarComponent"]
];
var moduleDeclarations = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](componentDeclarations),
            imports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](moduleDeclarations),
            exports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](moduleDeclarations, componentDeclarations),
            entryComponents: [_components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__["SnackbarComponent"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/report/components/visit-summary/visit-summary.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/report/components/visit-summary/visit-summary.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width150 {\r\n    width: 150px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvY29tcG9uZW50cy92aXNpdC1zdW1tYXJ5L3Zpc2l0LXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydC9jb21wb25lbnRzL3Zpc2l0LXN1bW1hcnkvdmlzaXQtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZHRoMTUwIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/report/components/visit-summary/visit-summary.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/report/components/visit-summary/visit-summary.component.ts ***!
  \************************************************************************************/
/*! exports provided: VisitSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitSummaryComponent", function() { return VisitSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var VisitSummaryComponent = /** @class */ (function () {
    function VisitSummaryComponent() {
        this.visitSummary = [];
        this.displayedColumns = [
            'badgeNo', 'contactPerson', 'inTime', 'outTime', 'officeLocation', 'purpose', 'scheduledTime',
            'status', 'visitNumber'
        ];
    }
    VisitSummaryComponent.prototype.ngOnInit = function () {
        this.visitSummary = this.data.visitSummary || [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.visitSummary);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VisitSummaryComponent.prototype, "data", void 0);
    VisitSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visit-summary',
            template: __webpack_require__(/*! raw-loader!./visit-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/report/components/visit-summary/visit-summary.component.html"),
            styles: [__webpack_require__(/*! ./visit-summary.component.css */ "./src/app/modules/report/components/visit-summary/visit-summary.component.css")]
        })
    ], VisitSummaryComponent);
    return VisitSummaryComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/visitor-profile/visitor-profile.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/report/components/visitor-profile/visitor-profile.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .padding5 {\r\n      padding: 5px;\r\n  }\r\n  \r\n  .width150 {\r\n      width: 150px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvY29tcG9uZW50cy92aXNpdG9yLXByb2ZpbGUvdmlzaXRvci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCOztFQUVBO01BQ0ksWUFBWTtFQUNoQjs7RUFFQTtNQUNJLFlBQVk7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydC9jb21wb25lbnRzL3Zpc2l0b3ItcHJvZmlsZS92aXNpdG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmc1IHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLndpZHRoMTUwIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/report/components/visitor-profile/visitor-profile.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/report/components/visitor-profile/visitor-profile.component.ts ***!
  \****************************************************************************************/
/*! exports provided: VisitorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorProfileComponent", function() { return VisitorProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VisitorProfileComponent = /** @class */ (function () {
    function VisitorProfileComponent() {
    }
    VisitorProfileComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VisitorProfileComponent.prototype, "data", void 0);
    VisitorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitor-profile',
            template: __webpack_require__(/*! raw-loader!./visitor-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/report/components/visitor-profile/visitor-profile.component.html"),
            styles: [__webpack_require__(/*! ./visitor-profile.component.css */ "./src/app/modules/report/components/visitor-profile/visitor-profile.component.css")]
        })
    ], VisitorProfileComponent);
    return VisitorProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/components/visitor/visitor.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/report/components/visitor/visitor.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0L2NvbXBvbmVudHMvdmlzaXRvci92aXNpdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/report/components/visitor/visitor.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/report/components/visitor/visitor.component.ts ***!
  \************************************************************************/
/*! exports provided: VisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorComponent", function() { return VisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var VisitorComponent = /** @class */ (function () {
    function VisitorComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    VisitorComponent.prototype.ngOnInit = function () {
        this.dialogData = this.data;
    };
    VisitorComponent.prototype.onClickClose = function () {
        this.dialogRef.close();
    };
    VisitorComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    VisitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitor',
            template: __webpack_require__(/*! raw-loader!./visitor.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/report/components/visitor/visitor.component.html"),
            styles: [__webpack_require__(/*! ./visitor.component.css */ "./src/app/modules/report/components/visitor/visitor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], VisitorComponent);
    return VisitorComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/report.component.css":
/*!*****************************************************!*\
  !*** ./src/app/modules/report/report.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\ntable tr[mat-row]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.filter {\r\n  display: block;\r\n  width: auto;\r\n  width: 100px;\r\n}\r\n\r\n.header {\r\n  padding: 5px;\r\n}\r\n\r\n.first-header-row th {\r\n  border-bottom: none;\r\n}\r\n\r\n.report-loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLCtCQUErQjtFQUMvQixVQUFVO0VBQ1Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHRyW21hdC1yb3ddOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZpbHRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZmlyc3QtaGVhZGVyLXJvdyB0aCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ucmVwb3J0LWxvYWRpbmctc2hhZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDU2cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/report/report.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/report/report.component.ts ***!
  \****************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/visitor/visitor.component */ "./src/app/modules/report/components/visitor/visitor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var ReportComponent = /** @class */ (function () {
    function ReportComponent(visitorService, dialog, route) {
        this.visitorService = visitorService;
        this.dialog = dialog;
        this.route = route;
        this.isLoadingResults = true;
        this.resultsLength = 0;
        this.pageSize = 10;
        this.firstNameFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.lastNameFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        //phoneNumberFilter = new FormControl( '' );
        this.purposeFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.contactPersonFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.inTimeFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.idTypeFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.filterValues = {};
        this.displayedColumns = [
            'firstName', 'lastName', 'phoneNumber', 'purpose',
            'contactPerson', 'inTime', 'idType', 'idNumber'
        ];
        this.displayedSearchBoxes = [
            'firstName-search', 'lastName-search', 'purpose-search',
            'contactPerson-search', 'inTime-search', 'idType-search'
        ]; //'phoneNumber-search',
    }
    ReportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.filterValues['officeLocation'] = params.loc;
            _this.paginator.pageIndex = 0;
        });
        this.firstNameFilter.valueChanges.subscribe(function (firstName) {
            _this.filterValues['firstName'] = firstName;
            _this.paginator.pageIndex = 0;
        });
        this.lastNameFilter.valueChanges.subscribe(function (lastName) {
            _this.filterValues['lastName'] = lastName;
            _this.paginator.pageIndex = 0;
        });
        /* this.phoneNumberFilter.valueChanges.subscribe(
          phoneNumber => {
            this.filterValues.phoneNumber = phoneNumber;
            this.paginator.pageIndex = 0;
          }
        ); */
        this.purposeFilter.valueChanges.subscribe(function (purpose) {
            _this.filterValues['purpose'] = purpose;
            _this.paginator.pageIndex = 0;
        });
        this.contactPersonFilter.valueChanges.subscribe(function (contactPerson) {
            _this.filterValues['contactPerson'] = contactPerson;
            _this.paginator.pageIndex = 0;
        });
        this.inTimeFilter.valueChanges.subscribe(function (inTime) {
            _this.filterValues['inTime'] = inTime;
            _this.paginator.pageIndex = 0;
        });
        this.idTypeFilter.valueChanges.subscribe(function (idType) {
            _this.filterValues['idType'] = idType;
            _this.paginator.pageIndex = 0;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.firstNameFilter.valueChanges, this.lastNameFilter.valueChanges, 
        // this.phoneNumberFilter.valueChanges,
        this.purposeFilter.valueChanges, this.contactPersonFilter.valueChanges, this.inTimeFilter.valueChanges, this.idTypeFilter.valueChanges, this.route.queryParams, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.visitorService.searchVisitor(_this.filterValues, _this.paginator.pageIndex, _this.paginator.pageSize);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this.resultsLength = data['total'];
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () {
            _this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]);
        })).subscribe(function (data) {
            _this.visitors = data['data'] ? data['data'] : [];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.visitors);
            _this.isLoadingResults = false;
            _this.dataSource.sort = _this.sort;
        });
    };
    ReportComponent.prototype.openDialog = function (row) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = row;
        dialogConfig.height = '600px';
        dialogConfig.width = '1000px';
        var matDialogRef = this.dialog.open(_components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__["VisitorComponent"], dialogConfig);
    };
    ReportComponent.ctorParameters = function () { return [
        { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_2__["VisitorService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], ReportComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], ReportComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ReportComponent.prototype, "dataSource", void 0);
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/modules/report/report.component.css")]
        })
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/report/report.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/report/report.module.ts ***!
  \*************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ "./src/app/modules/report/report.component.ts");
/* harmony import */ var _components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/visitor/visitor.component */ "./src/app/modules/report/components/visitor/visitor.component.ts");
/* harmony import */ var _components_visitor_profile_visitor_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/visitor-profile/visitor-profile.component */ "./src/app/modules/report/components/visitor-profile/visitor-profile.component.ts");
/* harmony import */ var _components_visit_summary_visit_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/visit-summary/visit-summary.component */ "./src/app/modules/report/components/visit-summary/visit-summary.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            exports: [_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"]],
            declarations: [
                _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"],
                _components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__["VisitorComponent"],
                _components_visitor_profile_visitor_profile_component__WEBPACK_IMPORTED_MODULE_5__["VisitorProfileComponent"],
                _components_visit_summary_visit_summary_component__WEBPACK_IMPORTED_MODULE_6__["VisitSummaryComponent"]
            ],
            entryComponents: [_components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__["VisitorComponent"]]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/modules/visitor-form/visitor-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/visitor-form/visitor-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".visitorInput {\r\n width:31%;\r\n margin-left:-1%;\r\n}\r\n\r\n.full-width{\r\n  width: 90%;\r\n}\r\n\r\n.button-size\r\n{\r\n  width: 20px;\r\n  height:50px;\r\n}\r\n\r\n.table-div{\r\n  margin-top: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXNpdG9yLWZvcm0vdmlzaXRvci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxTQUFTO0NBQ1QsZUFBZTtBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92aXNpdG9yLWZvcm0vdmlzaXRvci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlzaXRvcklucHV0IHtcclxuIHdpZHRoOjMxJTtcclxuIG1hcmdpbi1sZWZ0Oi0xJTtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGh7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1zaXplXHJcbntcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6NTBweDtcclxufVxyXG4udGFibGUtZGl2e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/visitor-form/visitor-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/visitor-form/visitor-form.component.ts ***!
  \****************************************************************/
/*! exports provided: VisitorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorFormComponent", function() { return VisitorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var VisitorFormComponent = /** @class */ (function () {
    function VisitorFormComponent(service, http) {
        this.service = service;
        this.http = http;
        this.visitorType = ["Guest", "Employee"];
        this.ids = ["Voter Id", "PAN", "Adhaar"];
        this.purposes = [
            { id: 1, value: "Interviewing" },
            { id: 2, value: "Meeting" },
            { id: 3, value: "New Joinee" }
        ];
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            inTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            contactPerson: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobnumPattern)
            ]),
            comingFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            idType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            idNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            officeLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            visitorType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    }
    VisitorFormComponent.prototype.initializeFormGroup = function () {
        this.form.setValue({
            firstName: "",
            lastName: "",
            emailId: "",
            idType: "",
            contactPerson: "",
            phoneNumber: "",
            comingFrom: "",
            purpose: "",
            inTime: "",
            idNumber: "",
            officeLocation: "",
            visitorType: "",
            employeeId: ""
        });
    };
    VisitorFormComponent.prototype.ngDoCheck = function () {
        var _this = this;
        setTimeout(function () {
            _this.now = new Date();
        }, 2000);
    };
    VisitorFormComponent.prototype.onClear = function () {
        this.form.reset();
        this.initializeFormGroup();
    };
    VisitorFormComponent.prototype.onSubmit = function () {
        this.service.createNewVisitor(this.form.value).subscribe(function (val) {
            console.log(val);
        });
        this.form.reset();
        this.initializeFormGroup();
    };
    VisitorFormComponent.prototype.onSubmitEmployeeData = function () {
        this.service.createNewVisitor(this.form.value).subscribe(function (val) {
            console.log(val);
        });
        this.form.reset();
    };
    VisitorFormComponent.prototype.ngOnInit = function () { };
    VisitorFormComponent.ctorParameters = function () { return [
        { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_1__["VisitorService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    VisitorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "app-visitor-form",
            template: __webpack_require__(/*! raw-loader!./visitor-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-form.component.html"),
            styles: [__webpack_require__(/*! ./visitor-form.component.css */ "./src/app/modules/visitor-form/visitor-form.component.css")]
        })
    ], VisitorFormComponent);
    return VisitorFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/visitor-form/visitor-home/visitor-home.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.span{\r\n    display: inline-block\r\n}\r\n.span-maticon{\r\n    vertical-align: bottom\r\n}\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n.example-container > mat-form-field{\r\n    display: block;\r\n    width:23rem;\r\n  }\r\nh2.setMiddle{\r\n    padding-left: 10rem; \r\n  }\r\ndiv.flex-container-wrapper{\r\n    padding: 1rem;\r\n  }\r\ndiv.flex-container-wrapper >  div.flex-container{\r\n    display: -webkit-box;\r\n    display: flex;\r\n  }\r\ndiv.flex-container-wrapper >  div.flex-container > mat-form-field{\r\n    -webkit-box-flex:1;\r\n            flex:1;\r\n    padding-right: 2rem;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXNpdG9yLWZvcm0vdmlzaXRvci1ob21lL3Zpc2l0b3ItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGtCQUFNO1lBQU4sTUFBTTtJQUNOLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzaXRvci1mb3JtL3Zpc2l0b3ItaG9tZS92aXNpdG9yLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3BhbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcbi5zcGFuLW1hdGljb257XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tXHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gbWF0LWZvcm0tZmllbGR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOjIzcmVtO1xyXG4gIH1cclxuICBcclxuICBoMi5zZXRNaWRkbGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtOyBcclxuICB9XHJcblxyXG4gIGRpdi5mbGV4LWNvbnRhaW5lci13cmFwcGVye1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4gIGRpdi5mbGV4LWNvbnRhaW5lci13cmFwcGVyID4gIGRpdi5mbGV4LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICBkaXYuZmxleC1jb250YWluZXItd3JhcHBlciA+ICBkaXYuZmxleC1jb250YWluZXIgPiBtYXQtZm9ybS1maWVsZHtcclxuICAgIGZsZXg6MTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/visitor-form/visitor-home/visitor-home.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorComponent", function() { return VisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VisitorComponent = /** @class */ (function () {
    function VisitorComponent() {
    }
    VisitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visitor-home',
            template: __webpack_require__(/*! raw-loader!./visitor-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-home/visitor-home.component.html"),
            styles: [__webpack_require__(/*! ./visitor-home.component.css */ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.css")]
        })
    ], VisitorComponent);
    return VisitorComponent;
}());



/***/ }),

/***/ "./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.span{\r\n  display: inline-block\r\n}\r\n.span-maticon{\r\n  vertical-align: bottom\r\n}\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n.example-container > mat-form-field{\r\n  display: block;\r\n  width:23rem;\r\n}\r\nh2.setMiddle{\r\n  padding-left: 10rem; \r\n}\r\ndiv.flex-container-wrapper{\r\n  padding: 1rem;\r\n}\r\ndiv.flex-container-wrapper >  div.flex-container{\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\ndiv.flex-container-wrapper >  div.flex-container > mat-form-field{\r\n  -webkit-box-flex:1;\r\n          flex:1;\r\n  padding-right: 2rem;\r\n}\r\n.list {\r\n  display: block;\r\n  padding: 1rem;\r\n}\r\n.completed, .approved{\r\n  color: #155724;\r\n  background-color: #d4edda;\r\n  border-color: #c3e6cb;\r\n  border-left: 5px solid #155724;\r\n}\r\n.declined,.cancelled,.failed{\r\n  color: #721c24;\r\n  background-color: #f8d7da;\r\n  border-color: #f5c6cb;\r\n  border-left: 5px solid #721c24;\r\n}\r\n.scheduled,.new{\r\n  color: #0c5460;\r\n  background-color: #d1ecf1;\r\n  border-color: #bee5eb;\r\n  border-left: 5px solid #0c5460;\r\n}\r\n.pending{\r\n  color: #856404;\r\n  background-color: #fff3cd;\r\n  border-color: #ffeeba;\r\n  border-left: 5px solid #856404;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXNpdG9yLWZvcm0vdmlzaXRvci1zZWFyY2gtb3ItY3JlYXRlL3Zpc2l0b3Itc2VhcmNoLW9yLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGtCQUFNO1VBQU4sTUFBTTtFQUNOLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUdBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92aXNpdG9yLWZvcm0vdmlzaXRvci1zZWFyY2gtb3ItY3JlYXRlL3Zpc2l0b3Itc2VhcmNoLW9yLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zcGFue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcbi5zcGFuLW1hdGljb257XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbVxyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gbWF0LWZvcm0tZmllbGR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6MjNyZW07XHJcbn1cclxuXHJcbmgyLnNldE1pZGRsZXtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcmVtOyBcclxufVxyXG5cclxuZGl2LmZsZXgtY29udGFpbmVyLXdyYXBwZXJ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuZGl2LmZsZXgtY29udGFpbmVyLXdyYXBwZXIgPiAgZGl2LmZsZXgtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmRpdi5mbGV4LWNvbnRhaW5lci13cmFwcGVyID4gIGRpdi5mbGV4LWNvbnRhaW5lciA+IG1hdC1mb3JtLWZpZWxke1xyXG4gIGZsZXg6MTtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuXHJcbi5jb21wbGV0ZWQsIC5hcHByb3ZlZHtcclxuICBjb2xvcjogIzE1NTcyNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gIGJvcmRlci1jb2xvcjogI2MzZTZjYjtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxNTU3MjQ7XHJcbn1cclxuXHJcbi5kZWNsaW5lZCwuY2FuY2VsbGVkLC5mYWlsZWR7XHJcbiAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcclxuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNzIxYzI0O1xyXG59XHJcblxyXG4uc2NoZWR1bGVkLC5uZXd7XHJcbiAgY29sb3I6ICMwYzU0NjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxuICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMGM1NDYwO1xyXG59XHJcblxyXG4ucGVuZGluZ3tcclxuICBjb2xvcjogIzg1NjQwNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM4NTY0MDQ7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VisitorSearchOrCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorSearchOrCreateComponent", function() { return VisitorSearchOrCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/static-data */ "./src/app/helpers/static-data.ts");
/* harmony import */ var src_app_helpers_models_visitors_visitors_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/models/visitors/visitors.model */ "./src/app/helpers/models/visitors/visitors.model.ts");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var src_app_helpers_models_visitors_visit_summary_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/models/visitors/visit-summary.model */ "./src/app/helpers/models/visitors/visit-summary.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var VisitorSearchOrCreateComponent = /** @class */ (function () {
    function VisitorSearchOrCreateComponent(visitorService, router) {
        this.visitorService = visitorService;
        this.router = router;
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.model = {};
        this.idTypes = src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__["idType"];
        this.lastKeyPress = 0;
        this.createUser();
    }
    VisitorSearchOrCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (data) { return data != ''; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.visitorService.getVisitorByEmailId(data); })).subscribe(function (data) {
            _this.data = data;
            if (data) {
                _this.user = new src_app_helpers_models_visitors_visitors_model__WEBPACK_IMPORTED_MODULE_5__["VisitorModel"](data);
            }
            else {
                _this.createUser();
                _this.user.emailId = _this.search;
            }
        });
    };
    VisitorSearchOrCreateComponent.prototype.createUser = function () {
        this.user = new src_app_helpers_models_visitors_visitors_model__WEBPACK_IMPORTED_MODULE_5__["VisitorModel"]();
        this.user.visitSummary = [];
        this.user.visitSummary.push(new src_app_helpers_models_visitors_visit_summary_model__WEBPACK_IMPORTED_MODULE_7__["VisitSummaryModel"]());
    };
    VisitorSearchOrCreateComponent.prototype.searchValues = function (value, type) {
        this.search = value;
        var regex = type === 'phoneNumber' ? "[0-9]+" : "[^@]+@[^.]+..+";
        var data = value.match(regex);
        if (type === 'email' && data) {
            this.search$.next(value);
        }
    };
    VisitorSearchOrCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.visitorService.createNewVisitor(this.user).subscribe(function () {
            _this.createUser();
            _this.router.navigateByUrl('/visitor');
        });
    };
    VisitorSearchOrCreateComponent.ctorParameters = function () { return [
        { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_6__["VisitorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('heroForm', { static: true })
    ], VisitorSearchOrCreateComponent.prototype, "heroForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('step', { static: true })
    ], VisitorSearchOrCreateComponent.prototype, "step", void 0);
    VisitorSearchOrCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visitor-search-or-create',
            template: __webpack_require__(/*! raw-loader!./visitor-search-or-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.html"),
            styles: [__webpack_require__(/*! ./visitor-search-or-create.component.css */ "./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.css")]
        })
    ], VisitorSearchOrCreateComponent);
    return VisitorSearchOrCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/visitor-form/visitors.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/visitor-form/visitors.module.ts ***!
  \*********************************************************/
/*! exports provided: VisitorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsModule", function() { return VisitorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _visitor_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitor-form.component */ "./src/app/modules/visitor-form/visitor-form.component.ts");
/* harmony import */ var _visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-home/visitor-home.component */ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _visitor_search_or_create_visitor_search_or_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visitor-search-or-create/visitor-search-or-create.component */ "./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.ts");









var VisitorsModule = /** @class */ (function () {
    function VisitorsModule() {
    }
    VisitorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_visitor_form_component__WEBPACK_IMPORTED_MODULE_5__["VisitorFormComponent"], _visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_6__["VisitorComponent"], _visitor_search_or_create_visitor_search_or_create_component__WEBPACK_IMPORTED_MODULE_8__["VisitorSearchOrCreateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            exports: [_visitor_form_component__WEBPACK_IMPORTED_MODULE_5__["VisitorFormComponent"], _visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_6__["VisitorComponent"], _visitor_search_or_create_visitor_search_or_create_component__WEBPACK_IMPORTED_MODULE_8__["VisitorSearchOrCreateComponent"]]
        })
    ], VisitorsModule);
    return VisitorsModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AuthService = /** @class */ (function () {
    function AuthService() {
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/base/rest.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/base/rest.service.ts ***!
  \***********************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _helpers_static_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/static-data */ "./src/app/helpers/static-data.ts");
/* harmony import */ var src_app_components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/ui-components/snack-bar/snack-bar.component */ "./src/app/components/ui-components/snack-bar/snack-bar.component.ts");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Common Rest Service for all Http calls
 */






var RestService = /** @class */ (function () {
    function RestService(http, snackbarService) {
        this.http = http;
        this.snackbarService = snackbarService;
    }
    RestService.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.http.get(url, options);
    };
    RestService.prototype.jsonPost = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.http.post(url, body, options);
    };
    RestService.prototype.jsonPut = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.http.put(url, body, options);
    };
    RestService.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.http.delete(url, options);
    };
    RestService.prototype.createSnackbar = function (message, action, durationMS, cssClass, icon) {
        if (action === void 0) { action = "close"; }
        if (durationMS === void 0) { durationMS = 2000; }
        this.snackbarService.openFromComponent(src_app_components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], {
            data: {
                message: message,
                icon: icon ? icon : 'info',
                action: action,
                class: cssClass
            },
            duration: durationMS,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
    };
    RestService.prototype.createNotifySnackbar = function (key, action, durationMS) {
        var _this = this;
        if (action === void 0) { action = "close"; }
        if (durationMS === void 0) { durationMS = 2000; }
        var message = function (key) { return (_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__["accoliteSnackbarMessages"]['rest'])[key]; };
        var observer = {
            next: function (data) {
                _this.createSnackbar(message('success')[key], action, durationMS, "success");
            }, error: function (error) {
                _this.createSnackbar(message('error')[key], action, durationMS, "error");
            }, complete: function () {
            }
        };
        return observer;
    };
    RestService.prototype.catchError = function (obs) {
        obs.subscribe(function (error) {
            console.warn(error);
        });
    };
    RestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/services/visitor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/visitor.service.ts ***!
  \*********************************************/
/*! exports provided: VisitorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorService", function() { return VisitorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/constants */ "./src/config/constants.ts");
/* harmony import */ var _base_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/rest.service */ "./src/app/services/base/rest.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var VisitorService = /** @class */ (function () {
    function VisitorService(restService) {
        this.restService = restService;
    }
    VisitorService.prototype.getVisitorByEmailId = function (emailId) {
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].GET_VISITOR_BY_EMAIL + emailId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        }));
    };
    VisitorService.prototype.createNewVisitor = function (visitorObj) {
        return this.restService
            .jsonPost(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].CREATE_NEW_VISITOR, visitorObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.restService.createNotifySnackbar('create-visitors')));
    };
    VisitorService.prototype.addVisitorSummary = function (visitorId, visitorSummaryObj) {
        return this.restService.jsonPost(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].ADD_VISIT_SUMMARY + visitorId, visitorSummaryObj);
    };
    VisitorService.prototype.updateVisitorDetails = function (visitorId, visitorObj) {
        return this.restService.jsonPost(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].UPDATE_VISITOR_DETAILS + visitorId, visitorObj);
    };
    VisitorService.prototype.updateVisitSummary = function (visitorId, visitSummaryObj) {
        return this.restService.jsonPut(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].UPDATE_VISITOR_SUMMARY + visitorId, visitSummaryObj);
    };
    VisitorService.prototype.sendApprovalMail = function (reqObj) {
        return this.restService.jsonPost(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].SEND_APPROVAL_MAIL, reqObj);
    };
    VisitorService.prototype.sendNotifyMail = function (reqObj) {
        return this.restService.jsonPost(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].SEND_NOTIFY_MAIL, reqObj);
    };
    VisitorService.prototype.fetchAllVisitors = function () {
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL);
    };
    VisitorService.prototype.fetchVisitorsByInTime = function (startDate, endDate) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params.set("startDate", startDate);
        params.set("endDate", endDate);
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].GET_VISITORS_BY_IN_TIME, {
            params: params
        });
    };
    VisitorService.prototype.updateExitTime = function (visitorId, visitNumber, remarks) {
        var reqObj = {
            visitNumber: visitNumber,
            remarks: remarks
        };
        return this.restService.jsonPut(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].EXIT_TIME + visitorId, reqObj);
    };
    VisitorService.prototype.fetchVisitor = function (id) {
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + id);
    };
    VisitorService.prototype.searchVisitor = function (searchObj, page, pageSize) {
        if (page === void 0) { page = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        var searchURL = _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].SEARCH + ("?page=" + page + "&size=" + pageSize);
        return this.restService.jsonPost(searchURL, searchObj);
    };
    VisitorService.prototype.deleteVisitorSummary = function (visitSummaryId) {
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + visitSummaryId);
    };
    VisitorService.ctorParameters = function () { return [
        { type: _base_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
    ]; };
    VisitorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        })
    ], VisitorService);
    return VisitorService;
}());



/***/ }),

/***/ "./src/config/constants.ts":
/*!*********************************!*\
  !*** ./src/config/constants.ts ***!
  \*********************************/
/*! exports provided: urls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urls", function() { return urls; });
var urls = {
    'BASE_URL': 'http://13.233.40.37:8081/api-dev/visitor/',
    'LOCAL_BASE_URL': 'http://localhost:8081/api/visitor/',
    'DEV_BASE_URL': 'http://13.233.40.37:8081/api-dev/visitor/',
    'PROD_BASE_URL': 'http://13.233.40.37:8081/visitors/api/visitor/',
    'CREATE_NEW_VISITOR': 'create/',
    'EXIT_TIME': 'exit/',
    'GET_VISITORS_BY_IN_TIME': 'getVisitorsByInTime/',
    'SEARCH': 'search',
    'GET_VISITOR_BY_EMAIL': 'email/',
    'ADD_VISIT_SUMMARY': 'addVisitSummary/',
    'UPDATE_VISITOR_DETAILS': 'updateVisitorDetails/',
    'UPDATE_VISITOR_SUMMARY': 'updateVisitSummary/',
    'SEND_APPROVAL_MAIL': 'sendApprovalMail/',
    'SEND_NOTIFY_MAIL': 'sendNotifyMail/',
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Accolite\visitors\visitors-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map