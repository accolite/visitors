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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginScreenBgImg\">\r\n  <div class=\"centerDiv\">\r\n    <div class=\"loginInner\">\r\n      <img class=\"accoliteLogoImg\" src=\"../assets/images/accolite.jpg\">\r\n      <button class=\"googleLoginBtn\">Login Via Google</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/main.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"mainToolbar\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n      <div class=\"nav-section\">\r\n          <div class=\"nav-section-left\">\r\n              <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n              </button>\r\n              <span class=\"span-img\"><img id=\"img\" src=\"../assets/images/accolite-new.png\"/></span>\r\n            </div>\r\n            <div class=\"nav-section-right\">\r\n              <mat-icon class=\"toolbar-icon\" *ngIf=\"showNotification\"  (click)=\"showToggle = !showToggle\" matBadgePosition=\"after\" matBadgeColor=\"accent\">notifications</mat-icon>\r\n              <div *ngIf=\"showNotification && showToggle\" class=\"notification-popup\">\r\n                <div class=\"notification-item\">\r\n                  <div class=\"initial-title\">\r\n                  <mat-icon style=\"vertical-align: middle\">info</mat-icon>\r\n                  Notifications</div>\r\n                </div>\r\n                <div class=\"notification-item\">\r\n                  <div class=\"notification-subject\">Birthday Notification</div>\r\n                  <div class=\"notification-comment\">Its you friend Tim John's birthday today.</div>\r\n                </div>\r\n                <div class=\"notification-item\">\r\n                  <div class=\"notification-subject\">Birthday Notification</div>\r\n                  <div class=\"notification-comment\">Its you friend Tim John's birthday today.</div>\r\n                </div>\r\n                <div class=\"notification-item\">\r\n                  <div class=\"notification-subject\">Birthday Notification</div>\r\n                  <div class=\"notification-comment\">Its you friend Tim John's birthday today.</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container id=\"sidenavContainer\" fullscreen>\r\n  <mat-sidenav mode=\"side\" #sidenav id=\"sidenav\" opened>\r\n      <mat-nav-list class=\"matNavList\">\r\n          <a mat-list-item [routerLink]=\"['/visitor']\" routerLinkActive=\"active\" [queryParams]=\"{ loc: val }\">\r\n              <div class=\"icon-content\">\r\n                  <mat-icon>group</mat-icon>\r\n                  <span>Visitor</span>\r\n              </div>\r\n          </a>\r\n          <a mat-list-item [routerLink]=\"['/report']\" routerLinkActive=\"active\" [queryParams]=\"{ loc:val }\">\r\n              <div class=\"icon-content\">\r\n                  <mat-icon>insert_invitation</mat-icon>\r\n                  <span>Report</span>\r\n              </div>\r\n          </a>\r\n      </mat-nav-list>\r\n      <!-- <drop-down class=\"locSelect\" [data]=\"location\" label=\"Location\" [selectedValue]=\"val\"\r\n          (selectedValueChange)=\"selectedValue($event)\"></drop-down> -->\r\n\r\n          <mat-form-field>\r\n              <mat-label>Location</mat-label>\r\n              <mat-select [ngModel]=\"accLocation\" (ngModelChange)=\"accLocation = $event;selectedValue($event)\" name=\"val\"  multiple>\r\n                <mat-option *ngFor=\"let accLocation of location\" [value]=\"accLocation\">{{accLocation}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n  </mat-sidenav>\r\n  <mat-sidenav-content [ngStyle]=\"{ 'margin-left.px': contentMargin }\">\r\n      <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/no-page-found/no-page-found.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/no-page-found/no-page-found.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>The page you are looking for is not found.</h3>"

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

module.exports = "<mat-form-field>\r\n  <mat-label>{{label}}</mat-label>\r\n  <mat-select [(ngModel)]=\"selectedValue\" (ngModelChange)=\"emitChanges()\" name=\"dropDown\">\r\n    <mat-option *ngFor=\"let obj of data\" [value]=\"id ? obj[id] : obj\">\r\n      {{id ? obj[id] : obj}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n"

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

module.exports = "<card cardTitle=\"Approved Request\" [loading]=\"loading\">\r\n  <mat-form-field>\r\n    <input\r\n      matInput\r\n      (keyup)=\"applyFilter($event.target.value)\"\r\n      placeholder=\"Filter\"\r\n    />\r\n  </mat-form-field>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table matSort [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"badgeNo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Badge No</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.visitSummary.badgeNo }}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.firstName }} {{ element.lastName }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"inTime\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>In Time</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.visitSummary.inTime | date: \"medium\" }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Actions</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <mat-checkbox [disabled]=\"clicked\">Badge returned</mat-checkbox>\r\n          <button\r\n            mat-raised-button\r\n            class=\"md-small\"\r\n            color=\"secondary\"\r\n            type=\"button\"\r\n            (click)=\"exit(element)\"\r\n          >\r\n            Exit\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"remarks\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Remarks</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <textarea matInput>{{element.visitSummary.remarks}}</textarea>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator\r\n      [pageSizeOptions]=\"[5, 10, 15]\"\r\n      showFirstLastButtons\r\n    ></mat-paginator>\r\n  </div>\r\n</card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/dialog-overview/dialog-overview.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/dialog-overview/dialog-overview.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n  <table>\r\n    <tr>\r\n      <td>\r\n        <mat-form-field>\r\n          <input\r\n            name=\"firstName\"\r\n            [(ngModel)]=\"data.firstName\"\r\n            matInput\r\n            placeholder=\"First Name\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"column\">\r\n          <input\r\n            name=\"lastName\"\r\n            [(ngModel)]=\"data.lastName\"\r\n            matInput\r\n            placeholder=\"Last Name\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <mat-form-field>\r\n          <input\r\n            name=\"badgeNo\"\r\n            [(ngModel)]=\"data.badgeNo\"\r\n            matInput\r\n            placeholder=\"Badge No\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"column\">\r\n          <input\r\n            name=\"comingFrom\"\r\n            [(ngModel)]=\"data.comingFrom\"\r\n            matInput\r\n            placeholder=\"Coming From\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <mat-form-field>\r\n          <input\r\n            name=\"phoneNumber\"\r\n            [(ngModel)]=\"data.phoneNumber\"\r\n            matInput\r\n            placeholder=\"Phone Number\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"column\">\r\n          <input\r\n            name=\"emailId\"\r\n            [(ngModel)]=\"data.emailId\"\r\n            matInput\r\n            placeholder=\"email Id\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <mat-form-field>\r\n          <input\r\n            name=\"contactPerson\"\r\n            [(ngModel)]=\"data.contactPerson\"\r\n            matInput\r\n            placeholder=\"Contact Person\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"column\">\r\n          <input\r\n            name=\"purpose\"\r\n            [(ngModel)]=\"data.purpose\"\r\n            matInput\r\n            placeholder=\"purpose\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <mat-form-field>\r\n          <input\r\n            name=\"inTime\"\r\n            [(ngModel)]=\"data.inTime\"\r\n            matInput\r\n            placeholder=\"In Time\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"column\">\r\n          <input\r\n            name=\"scheduledTime\"\r\n            [(ngModel)]=\"data.scheduledTime\"\r\n            matInput\r\n            placeholder=\"Scheduled time\"\r\n          />\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td><button mat-button (click)=\"onNoClick(data)\">Submit</button></td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-approved-request\r\n  [pending]=\"pending\"\r\n  [preApproved]=\"preApproved\"\r\n  [ofcLocation]=\"ofcLocation\"\r\n></app-approved-request>\r\n<app-pending-request\r\n  [approved]=\"approved\"\r\n  [preApproved]=\"preApproved\"\r\n  [ofcLocation]=\"ofcLocation\"\r\n\r\n></app-pending-request>\r\n<app-pre-approved-request\r\n  [pending]=\"pending\"\r\n  [approved]=\"approved\"\r\n  [ofcLocation]=\"ofcLocation\"\r\n\r\n></app-pre-approved-request>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/pending-request/pending-request.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/pending-request/pending-request.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card cardTitle=\"Pending Request\" [loading]=\"loading\">\r\n  <mat-form-field>\r\n    <input\r\n      matInput\r\n      (keyup)=\"applyFilter($event.target.value)\"\r\n      placeholder=\"Filter\"\r\n    />\r\n  </mat-form-field>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table matSort [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"badgeNo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Badge No</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.visitSummary.badgeNo }}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.firstName }} {{ element.lastName }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"inTime\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>In Time</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.visitSummary.inTime | date: \"medium\" }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Actions</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button\r\n            mat-raised-button\r\n            color=\"secondary\"\r\n            type=\"button\"\r\n            (click)=\"approveVisitor(element)\"\r\n          >\r\n            Approve\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"remarks\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Remarks</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <textarea matInput>{{element.visitSummary.remarks}}</textarea>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator\r\n      [pageSizeOptions]=\"[5, 10, 15]\"\r\n      showFirstLastButtons\r\n    ></mat-paginator>\r\n  </div>\r\n</card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/pre-approved-request/pre-approved-request.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/pre-approved-request/pre-approved-request.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card cardTitle=\"Pre-Approved Visits\" [loading]=\"loading\">\r\n  <mat-form-field>\r\n    <input\r\n      matInput\r\n      (keyup)=\"applyFilter($event.target.value)\"\r\n      placeholder=\"Filter\"\r\n    />\r\n  </mat-form-field>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table matSort [dataSource]=\"dataSource\">\r\n      <ng-container matColumnDef=\"badgeNo\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Badge No</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button\r\n            mat-raised-button\r\n            color=\"secondary\"\r\n            type=\"button\"\r\n            *ngIf=\"!element.visitSummary.badgeNo; else displayBadgeNo\"\r\n            (click)=\"assignBadge(element)\"\r\n          >\r\n            Assign Badge\r\n          </button>\r\n          <ng-template #displayBadgeNo>{{\r\n            element.visitSummary.badgeNo\r\n          }}</ng-template>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"Name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.firstName }} {{ element.lastName }}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"contactPerson\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n          Contact Person\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{ element.visitSummary.contactPerson }}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button\r\n            mat-raised-button\r\n            color=\"secondary\"\r\n            type=\"button\"\r\n            (click)=\"cancelled(element)\"\r\n          >\r\n            Cancel\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"remarks\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Remarks</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <textarea matInput>{{ element.visitSummary.remarks }}</textarea>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator\r\n      [pageSizeOptions]=\"[5, 10, 15]\"\r\n      showFirstLastButtons\r\n    ></mat-paginator>\r\n  </div>\r\n</card>\r\n"

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

module.exports = "<div style=\"width: 50%;display: inline-block;\">\r\n    <h3>{{data.firstName}} {{data.lastName}}</h3>\r\n    <img mat-card-sm-image src=\"../assets/images/profile.jpg\" style=\"height: 300px; width: 300px;border: 1px solid;\"\r\n        alt=\"Photo of {{data.firstName}} {{data.lastName}}\">\r\n</div>\r\n\r\n<div style=\"width:50%; display: inline-block;margin-top: 40px;position: absolute;\">\r\n    <div class=\"padding10\">\r\n        <label class=\"inline-block-label width150\"><b>First Name : </b></label>\r\n        {{data.firstName}}\r\n    </div>\r\n    <div class=\"padding10\">\r\n        <label class=\"inline-block-label width150\"><b>Last Name : </b></label>\r\n        {{data.lastName}}\r\n    </div>\r\n    <div class=\"padding10\">\r\n        <label class=\"inline-block-label width150\"><b>Visit Type : </b></label>\r\n        {{data.visitorType}}\r\n    </div>\r\n    <div class=\"padding10\">\r\n        <label class=\"inline-block-label width150\"><b>Email-Id : </b></label>\r\n        {{data.emailId}}\r\n    </div>\r\n    <div class=\"padding10\">\r\n        <label class=\"inline-block-label width150\"><b>Phone Number : </b></label>\r\n        {{data.phoneNumber}}\r\n    </div>\r\n    <div class=\"padding10\">\r\n        <label class=\"inline-block-label width150\"><b>Id : </b></label>\r\n        {{data.id}}\r\n    </div>\r\n    <div class=\"padding10\">\r\n        <label class=\"inline-block-label width150\"><b>Id Type : </b></label>\r\n        {{data.idType}}\r\n    </div>\r\n    <div class=\"padding10\">\r\n        <label class=\"inline-block-label width150\"><b>Govt. Id Number : </b></label>\r\n        {{data.idNumber}}\r\n    </div>\r\n</div>"

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

module.exports = "<card cardTitle='Report'>\r\n\r\n    <div class=\"report-loading-shade\"   *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n    </div>\r\n    <div class=\"mat-elevation-z8\">   \r\n<table mat-table matSort [dataSource]=\"dataSource\">\r\n\r\n <!--- Note that these columns can be defined in any order.\r\n       The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n <!-- Position Column -->\r\n <ng-container matColumnDef=\"firstName\" >\r\n   <th  mat-header-cell *matHeaderCellDef mat-sort-header>First Name </th>\r\n   <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\r\n </ng-container>\r\n <ng-container matColumnDef=\"lastName\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n   </ng-container>     \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"phoneNumber\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.phoneNumber}} </td>\r\n   </ng-container>      \r\n   <!-- Weight Column -->\r\n   <ng-container matColumnDef=\"purpose\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header>Visit Purpose </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.visitSummary.purpose}} </td>\r\n   </ng-container>\r\n\r\n   <!-- Symbol Column -->\r\n   <ng-container matColumnDef=\"contactPerson\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact Person </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.visitSummary.contactPerson}} </td>\r\n   </ng-container>\r\n\r\n     <!-- Symbol Column -->\r\n   <ng-container matColumnDef=\"inTime\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header> In Time </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.visitSummary.inTime | date:'short'}} </td>\r\n   </ng-container>\r\n\r\n   <ng-container matColumnDef=\"idType\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header> Id Type </th>\r\n       <td mat-cell *matCellDef=\"let element\"> {{element.idType }} </td>\r\n   </ng-container>\r\n\r\n   <ng-container matColumnDef=\"idNumber\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header> Id Number </th>\r\n       <td mat-cell *matCellDef=\"let element\"> {{element.idNumber }} </td>\r\n   </ng-container>\r\n   <!-- <ng-container matColumnDef=\"actions\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\r\n       <td mat-cell *matCellDef=\"let element\"> </td>\r\n   </ng-container> -->\r\n   <!-- Search Columns-->\r\n   <ng-container matColumnDef=\"firstName-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"firstNameFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"lastName-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"lastNameFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n <ng-container matColumnDef=\"phoneNumber-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"phoneNumberFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"purpose-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"purposeFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"contactPerson-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"contactPersonFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"inTime-search\">\r\n     <th mat-header-cell *matHeaderCellDef>\r\n       <mat-form-field class=\"filter\" floatLabel=\"never\">\r\n           <mat-label>Search</mat-label>\r\n           <input matInput [formControl]=\"inTimeFilter\">\r\n         </mat-form-field>\r\n      </th>\r\n   </ng-container>\r\n   <ng-container matColumnDef=\"idType-search\">\r\n     <th mat-header-cell *matHeaderCellDef></th>\r\n   </ng-container>\r\n   <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"first-header-row\"></tr>\r\n   <tr mat-header-row *matHeaderRowDef=\"displayedSearchBoxes\" ></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"openDialog(row)\"></tr>\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5,10,15]\"  [length]=\"resultsLength\" [pageSize]=\"pageSize\"  showFirstLastButtons></mat-paginator>\r\n</div>\r\n</card>\r\n<br>"

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

module.exports = "<div id=\"visitor-home\">\r\n  <mat-tab-group>\r\n    <mat-tab label=\"Home\">\r\n      <app-home (approvedChange)=\"approved = $event\"  (preapprovedChange)=\"preApproved = $event\" (pendingChange)=\"pending = $event\"></app-home>\r\n    </mat-tab>\r\n    \r\n    <mat-tab label=\"Create\">\r\n      <visitor-search-or-create></visitor-search-or-create>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper [linear]=\"true\" #stepper>\r\n    <mat-step>\r\n        <ng-template matStepLabel>Visitor search</ng-template>\r\n\r\n        <div class=\"example-container\">\r\n              \r\n          <mat-form-field class=\"set-width\">\r\n            <span class=\"span\" matPrefix><mat-icon class=\"span-maticon\">mail</mat-icon>&nbsp;</span>\r\n            <input matInput type=\"string\" placeholder=\"Email\" [(ngModel)]=\"user.emailId\" (keyup)=\"searchValues($event.target.value,'email');\" class=\"example-right-align\">\r\n          </mat-form-field>\r\n\r\n          <mat-spinner *ngIf=\"showLoading\"></mat-spinner>\r\n\r\n          <!-- <h3 class=\"setMiddle\"> OR </h3>\r\n          \r\n          <mat-form-field class=\"set-width\">\r\n            <input matInput type=\"number\" placeholder=\"Mobile number\" [(ngModel)]=\"user.phoneNumber\" (keyup)=\"searchValues($event.target.value,'phoneNumber');\" #phoneNumber>\r\n            <span class=\"span\" matPrefix><mat-icon class=\"span-maticon\">smartphone</mat-icon>&nbsp;</span>\r\n          </mat-form-field> -->\r\n\r\n          <mat-list role=\"list\" *ngIf=\"(data && data.idNumber) || !isEmailPresent\">\r\n            <mat-list-item *ngIf=\"visitStatus && isEmailPresent\" class=\"list {{visitStatus.toLowerCase()}}\" role=\"listitem\">\r\n                <span >Status -</span>\r\n                 {{visitStatus}}\r\n            </mat-list-item>\r\n            <mat-list-item class=\"list new\" role=\"listitem\" *ngIf=\"!isEmailPresent\">\r\n                <span>New visitor</span>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div> \r\n        \r\n        <div style=\"margin-top:10px;\">\r\n            <button  *ngIf=\"data && isEmailPresent\" mat-raised-button matStepperNext>Next</button>\r\n            <button *ngIf=\"!isEmailPresent\" mat-raised-button matStepperNext>Create</button>\r\n        </div>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"heroForm\">\r\n        <ng-template matStepLabel>Visitor Details</ng-template>\r\n        <form #heroForm=\"ngForm\">\r\n        <div class=\"flex-container-wrapper\">\r\n\r\n          <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                <input [disabled]=\"data\" id=\"input\" name=\"firstName\" [(ngModel)]=\"user.firstName\" matInput placeholder=\"First Name\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input [disabled]=\"data\" id=\"input\" name=\"lastName\" [(ngModel)]=\"user.lastName\" matInput placeholder=\"Last Name\" required>\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-container\">\r\n            <mat-form-field>\r\n              <mat-select [disabled]=\"data\"  [(ngModel)]=\"user.idType\" name=\"idType\" placeholder=\"Govt Id Type\" required>\r\n                <mat-option value=\"{{id}}\" *ngFor=\"let id of idTypes\">{{id}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n              <input [disabled]=\"data\" id=\"input\"  name=\"idNumber\" [(ngModel)]=\"user.idNumber\" matInput placeholder=\"Id number\" required>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n          <div class=\"flex-container\"> \r\n              <mat-form-field>\r\n                <mat-select [(ngModel)]=\"user.visitSummary[0].purpose\" name=\"purpose\" placeholder=\"Purpose\" required>\r\n                  <mat-option value=\"{{purpose}}\" *ngFor=\"let purpose of visitPurposes\">{{purpose}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <mat-form-field> \r\n                <input id=\"input\"  name=\"comingFrom\" [(ngModel)]=\"user.visitSummary[0].comingFrom\" matInput placeholder=\"Coming From\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                  <input  id=\"input\"  name=\"badgeNo\" [(ngModel)]=\"user.visitSummary[0].badgeNo\" matInput placeholder=\"Temporary badge number\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input  [readonly]=\"data\" matInput type=\"number\" placeholder=\"Mobile number\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"user.phoneNumber\" name=\"phoneNumber\" #phoneNumber required>\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                <input  name=\"contactPerson\" [(ngModel)]=\"user.visitSummary[0].contactPerson\"\r\n                 matInput placeholder=\"Contact Person\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input  type=\"email\" pattern=\"[^@]+@[^\\.]+\\..+\" name=\"contactPersonEmailId\" [(ngModel)]=\"user.visitSummary[0].contactPersonEmailId\"\r\n                matInput placeholder=\"Contact Person Email Id\" required>\r\n              </mat-form-field>\r\n\r\n              <!-- <button mat-button>Add Contact Person</button> -->\r\n          </div>\r\n            <div class=\"flex-container\">\r\n              <mat-form-field>\r\n                <input name=\"contactPersonPhone\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"user.visitSummary[0].contactPersonPhone\"\r\n                matInput placeholder=\"Contact Person Phone Number\" required>\r\n              </mat-form-field>\r\n\r\n              <!-- <button mat-button>Add Contact Person</button> -->\r\n            </div>\r\n            \r\n          <!-- <div>\r\n            <button mat-button matStepperPrevious>Request Approval</button>\r\n            <button mat-button (click)=\"stepper.reset()\">Notify</button>\r\n          </div> -->\r\n          <div>\r\n            <button mat-raised-button matStepperNext>Next</button>\r\n          </div>\r\n        </div>\r\n      </form>  \r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Approval State</ng-template>\r\n      <mat-list role=\"list\" *ngIf=\"data && data.idNumber\" style=\"margin-top:10px; \">\r\n        <mat-list-item class=\"list {{data?.visitSummary[data?.visitSummary?.length - 1]?.status ? data?.visitSummary[data?.visitSummary?.length - 1]?.status?.toLowerCase(): data?.idNumber ? 'pending': null}}\" role=\"listitem\">\r\n          <span *ngIf=\"data && data.idNumber\">Status -</span>\r\n               {{ data?.visitSummary[0]?.status ? data?.visitSummary[0]?.status : data?.idNumber ? 'PENDING' : null}}\r\n        </mat-list-item>\r\n      </mat-list>\r\n\r\n      <div style=\"margin-top:10px;\">\r\n        <button style=\"margin-right:5px;\" mat-raised-button matStepperPrevious>Previous</button>\r\n        <button style=\"margin-right:5px;\" *ngIf=\"!data\" mat-raised-button (click)=\"stepper.reset()\">Reset</button>\r\n        <button style=\"margin-right:5px;\" *ngIf=\"!data\" mat-raised-button (click)=\"onSubmit()\">Finish</button>\r\n        <button style=\"margin-right:5px;\" *ngIf=\"isAddVisit\" mat-raised-button (click)=\"onAddVisit()\">Add Visit</button>\r\n        <button style=\"margin-right:5px;\" *ngIf=\"data?.visitSummary[0]?.status =='SCHEDULED'\" mat-raised-button (click)=\"onUpdateVisit()\">Update Visit Details</button>\r\n        <button style=\"margin-right:5px;\" *ngIf=\"data?.visitSummary[0]?.status =='SCHEDULED'\" mat-raised-button (click)=\"onNotify()\">Notify Contact Person</button>\r\n\r\n      </div>\r\n    </mat-step>\r\n  </mat-vertical-stepper>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _modules_report_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/report/report.component */ "./src/app/modules/report/report.component.ts");
/* harmony import */ var _modules_visitor_form_visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/visitor-form/visitor-home/visitor-home.component */ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/no-page-found/no-page-found.component */ "./src/app/components/no-page-found/no-page-found.component.ts");









const routes = [
    {
        path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]],
        children: [
            { path: '', redirectTo: 'report', pathMatch: 'full' },
            { path: 'report', component: _modules_report_report_component__WEBPACK_IMPORTED_MODULE_5__["ReportComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
            { path: 'visitor', component: _modules_visitor_form_visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_6__["VisitorComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] }
        ]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', component: _components_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_8__["NoPageFoundComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _modules_report_report_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/report/report.module */ "./src/app/modules/report/report.module.ts");
/* harmony import */ var _modules_visitor_form_visitors_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/visitor-form/visitors.module */ "./src/app/modules/visitor-form/visitors.module.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _modules_home_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/home/dialog-overview/dialog-overview.component */ "./src/app/modules/home/dialog-overview/dialog-overview.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/no-page-found/no-page-found.component */ "./src/app/components/no-page-found/no-page-found.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"], _components_no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_15__["NoPageFoundComponent"]],
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
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_modules_home_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_12__["DialogOverviewComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_helpers_models_service_search_params_input_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/models/service-search-params-input.model */ "./src/app/helpers/models/service-search-params-input.model.ts");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives Flexiblity for all Component to reuse all methodwith loader and subscription functionality.
 * extend Component to enhance this feature.
 *
 */


class DataObtainer {
    constructor(zones) {
        this.zones = zones;
        this.loading = false;
        this.parameters = new src_app_helpers_models_service_search_params_input_model__WEBPACK_IMPORTED_MODULE_1__["ServiceSearchParamsInputModel"]();
        this.refreshOnInit = true;
    }
    ngOnInit() {
        if (this.refreshOnInit) {
            this.zones.run(() => this.refreshData());
        }
    }
    refreshData() {
        this.onBeforeUpdateData();
        this.loading = true;
        this.getDataObservable(this.parameters).subscribe(data => {
            this.data = JSON.parse(JSON.stringify(data));
            this.onAfterUpdateData(data);
            this.onNextStage(data);
            this.loading = false;
        }, (error) => {
            this.onErrorStage(error);
        }, () => {
            this.onCompleteStage();
        });
    }
    onBeforeUpdateData() { }
    onAfterUpdateData(data) { }
    onCompleteStage() { }
    onNextStage(data) { }
    onErrorStage(error) { }
}
DataObtainer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginScreenBgImg {\r\n  background-image: url('accolite-bg.png');\r\n  background-size: 100% 100vh;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n}\r\n\r\n.centerDiv {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background-color: white;\r\n    width: 300px;\r\n    height: 200px;\r\n    margin: auto;\r\n    border-radius: 20px;\r\n    border:1px solid grey;\r\n  }\r\n\r\n.loginInner {\r\n    padding: 30px;\r\n  }\r\n\r\n.googleLoginBtn {\r\n    width: 240px;\r\n    height: 25px;\r\n    background-color: #6ca3d8;\r\n    border: none;\r\n    border-radius: 3px;\r\n    color: white;\r\n    margin-top: 40px;\r\n  }\r\n\r\n.googleLoginBtn:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n.accoliteLogoImg {\r\n    width:180px;\r\n    height:54px;\r\n    display:block;\r\n    margin:auto;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  \r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQStEO0VBQy9ELDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpblNjcmVlbkJnSW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWNjb2xpdGUtYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMHZoO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jZW50ZXJEaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JleTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luSW5uZXIge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdvb2dsZUxvZ2luQnRuIHtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Y2EzZDg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuZ29vZ2xlTG9naW5CdG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuYWNjb2xpdGVMb2dvSW1nIHtcclxuICAgIHdpZHRoOjE4MHB4O1xyXG4gICAgaGVpZ2h0OjU0cHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() { }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  height: 50%;\r\n  margin: 10px;\r\n}\r\n.mat-sidenav-content{\r\n  height: 100% !important;\r\n  padding: 1.5rem;\r\n}\r\n.mat-toolbar-row {\r\n  background: #000;\r\n}\r\n.initial-title{\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.notification-popup {\r\n  color: #000;\r\n  position: absolute;\r\n  border-radius: 4px;\r\n  right: 1rem;\r\n  z-index: 5;\r\n  background: #fff;\r\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.20);\r\n  max-width: 250px;\r\n  text-align: left;\r\n  font-size: 12px;\r\n}\r\n.notification-item {\r\n  padding: 10px;\r\n  border-bottom: #ddd 1px solid;\r\n  cursor: pointer;\r\n}\r\n.notification-subject {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  font-weight: 500;\r\n}\r\n.notification-comment {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  font-style: italic;\r\n}\r\n/* .set-position{\r\n  position: absolute;\r\n  right: 2rem;\r\n} */\r\n.nav-section-left {\r\n  -webkit-box-flex: 7;\r\n          flex: 7;\r\n}\r\n.nav-section-right{\r\n  -webkit-box-flex:3;\r\n          flex:3;\r\n  text-align: right;\r\n  padding-right: 2rem;\r\n  position: relative;\r\n}\r\n.nav-section-right .toolbar-icon{\r\n  vertical-align: bottom;\r\n}\r\n/* .mat-toolbar-row, .mat-toolbar-single-row {\r\nheight: 81px;\r\nmargin-top: 9px;\r\n} */\r\n.span-img{\r\n  display: inline-block;\r\n  \r\n}\r\n.icon-content{\r\n  padding-left: 0.5rem;\r\n}\r\n.icon-content mat-icon{\r\n  vertical-align: bottom;\r\n}\r\n.icon-content span{\r\n  padding-left: 0.5rem;\r\n  font-size: 17px;\r\n  color: #696969;\r\n}\r\n#img {\r\n  width: 11rem !important;\r\n  margin: 0px 1rem;\r\n  padding-top: 0.65rem;\r\n  vertical-align: bottom;\r\n}\r\n.nav-section{\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n.active{\r\n  font-weight: 700;\r\n  color: #ff3d00!important;\r\n  background: rgba(0,0,0,.04);\r\n}\r\n.active span{\r\n  color: #ff3d00!important;\r\n\r\n}\r\nmat-toolbar-row{\r\nmargin: 0 !important;\r\n}\r\n.mat-drawer.mat-drawer-side{\r\nz-index: 1 !important;\r\n}\r\n.matNavList{\r\n  height: 86%;\r\n}\r\n.locSelect{\r\n  margin-top: 5px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTs7O0dBR0c7QUFFSDtFQUNFLG1CQUFPO1VBQVAsT0FBTztBQUNUO0FBRUE7RUFDRSxrQkFBTTtVQUFOLE1BQU07RUFDTixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7OztHQUdHO0FBRUg7RUFDRSxxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHdCQUF3Qjs7QUFFMUI7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4ubWF0LXNpZGVuYXYtY29udGVudHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci1yb3cge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi5pbml0aWFsLXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLXBvcHVwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taXRlbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAjZGRkIDFweCBzb2xpZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tc3ViamVjdCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tY29tbWVudCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4vKiAuc2V0LXBvc2l0aW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMnJlbTtcclxufSAqL1xyXG5cclxuLm5hdi1zZWN0aW9uLWxlZnQge1xyXG4gIGZsZXg6IDc7XHJcbn1cclxuXHJcbi5uYXYtc2VjdGlvbi1yaWdodHtcclxuICBmbGV4OjM7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXYtc2VjdGlvbi1yaWdodCAudG9vbGJhci1pY29ue1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi8qIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuaGVpZ2h0OiA4MXB4O1xyXG5tYXJnaW4tdG9wOiA5cHg7XHJcbn0gKi9cclxuXHJcbi5zcGFuLWltZ3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgXHJcbn1cclxuLmljb24tY29udGVudHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxufVxyXG4uaWNvbi1jb250ZW50IG1hdC1pY29ue1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi5pY29uLWNvbnRlbnQgc3BhbntcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICM2OTY5Njk7XHJcbn1cclxuXHJcbiNpbWcge1xyXG4gIHdpZHRoOiAxMXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuNjVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuLm5hdi1zZWN0aW9ue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmM2QwMCFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMDQpO1xyXG59XHJcbi5hY3RpdmUgc3BhbntcclxuICBjb2xvcjogI2ZmM2QwMCFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5tYXQtdG9vbGJhci1yb3d7XHJcbm1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXNpZGV7XHJcbnotaW5kZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdE5hdkxpc3R7XHJcbiAgaGVpZ2h0OiA4NiU7XHJcbn1cclxuXHJcbi5sb2NTZWxlY3R7XHJcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/static-data */ "./src/app/helpers/static-data.ts");
/* harmony import */ var src_app_helpers_array_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/array.util */ "./src/app/helpers/array.util.ts");






let MainComponent = class MainComponent {
    constructor(router, activatedRoute, auth) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.title = 'visitor-frontend';
        this.location = src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__["accoliteLocation"];
        this.val = ['Bangalore'];
        this.showToggle = false;
        this.showNotification = false;
        this.accLocation = this.val;
        if (window.location.href.indexOf('?loc') > -1) {
            let value = window.location.href.split("=")[1];
            this.accLocation = this.val = value.split(',');
        }
        else {
            this.val[0] = 'Bangalore';
            this.selectedValue([this.val[0]]);
        }
    }
    selectedValue(selectedval) {
        this.router.navigate([], src_app_helpers_array_util__WEBPACK_IMPORTED_MODULE_5__["ArrayUtil"].isNotEmpty(selectedval) ? {
            relativeTo: this.activatedRoute,
            queryParams: { loc: selectedval.toString() },
            queryParamsHandling: 'merge',
        } : {});
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/no-page-found/no-page-found.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/no-page-found/no-page-found.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm8tcGFnZS1mb3VuZC9uby1wYWdlLWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/no-page-found/no-page-found.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/no-page-found/no-page-found.component.ts ***!
  \*********************************************************************/
/*! exports provided: NoPageFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageFoundComponent", function() { return NoPageFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoPageFoundComponent = class NoPageFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NoPageFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-page-found',
        template: __webpack_require__(/*! raw-loader!./no-page-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/no-page-found/no-page-found.component.html"),
        styles: [__webpack_require__(/*! ./no-page-found.component.css */ "./src/app/components/no-page-found/no-page-found.component.css")]
    })
], NoPageFoundComponent);



/***/ }),

/***/ "./src/app/components/ui-components/card/card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/ui-components/card/card.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  padding: 0;\r\n}\r\n\r\n.card-title {\r\n  font-weight: 700;\r\n}\r\n\r\n.fullscreen {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 997;\r\n  overflow: auto;\r\n  margin-bottom: 0;\r\n}\r\n\r\nmat-card-header,\r\nmat-card-content {\r\n  padding: 1rem;\r\n}\r\n\r\n/* mat-card-header {\r\n  background-color: gainsboro;\r\n} */\r\n\r\n.mat-card-title {\r\n  margin: 0 !important;\r\n}\r\n\r\nmat-card-header {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\nmat-card-header div.title {\r\n  width: 70%;\r\n  float: left;\r\n}\r\n\r\nmat-card-header div.actions {\r\n  width: 30%;\r\n  display: inline-block;\r\n  text-align: right;\r\n}\r\n\r\ndiv.actions mat-icon:hover {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91aS1jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZnVsbHNjcmVlbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTc7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxubWF0LWNhcmQtaGVhZGVyLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi8qIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG59ICovXHJcblxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIgZGl2LnRpdGxlIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIgZGl2LmFjdGlvbnMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5kaXYuYWN0aW9ucyBtYXQtaWNvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives Flexibility to create card component
 */


let CardComponent = class CardComponent {
    constructor() {
        this.loading = false;
        this.enableFullScreen = false;
        this.expandCard = true;
    }
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_helpers_array_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/array.util */ "./src/app/helpers/array.util.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");






/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Gives flexibility to reduce code and create Material design table
 *
 *
 * @property dataSource - to add Array of object
 * @property tableHelpers - flexibility to add title and give sorting access
 *
 */
let DataTableComponent = class DataTableComponent {
    /**
     * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
     * Gives flexibility to reduce code and create Material design table
     *
     *
     * @property dataSource - to add Array of object
     * @property tableHelpers - flexibility to add title and give sorting access
     *
     */
    constructor() {
        this.tableHelpers = [];
        this.usePagination = false;
        this.paginationTypes = [5, 10, 20];
        this.displayedColumns = [];
        this.displayColumns = [];
    }
    ngOnChanges(changes) {
        if (changes.dataSource) {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](changes.dataSource.currentValue);
            this.getDisplayedColumns();
        }
    }
    ngOnInit() {
        this.dataSource.paginator = this.usePagination ? this.paginator : this.dataSource.paginator;
        this.dataSource.sort = this.sort;
    }
    getDisplayedColumns() {
        //this.displayedColumns = this.displayColumns ? this.displayColumns : Object.keys( ArrayUtil.first( this.dataSource.data ) );
        this.displayedColumns = Object.keys(src_app_helpers_array_util__WEBPACK_IMPORTED_MODULE_3__["ArrayUtil"].first(this.dataSource.data));
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives Flexibility to create Material Dropdown component
 */


let DropdownComponent = class DropdownComponent {
    constructor() {
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    emitChanges() {
        this.selectedValueChange.emit(this.selectedValue);
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Gives flexibility to create custom ui for material snackbar
 */



let SnackbarComponent = class SnackbarComponent {
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
};
SnackbarComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] }
];
SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snack-bar',
        template: __webpack_require__(/*! raw-loader!./snack-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui-components/snack-bar/snack-bar.component.html"),
        styles: [__webpack_require__(/*! ./snack-bar.component.css */ "./src/app/components/ui-components/snack-bar/snack-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))
], SnackbarComponent);



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
class ArrayUtil {
    static isEmpty(arr) {
        return arr && arr.length <= 0;
    }
    static isNotEmpty(arr) {
        return arr && arr.length > 0;
    }
    static first(arr) {
        return ArrayUtil.isNotEmpty(arr) ? arr[0] : [];
    }
}


/***/ }),

/***/ "./src/app/helpers/models/notification.model.ts":
/*!******************************************************!*\
  !*** ./src/app/helpers/models/notification.model.ts ***!
  \******************************************************/
/*! exports provided: NotificationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModel", function() { return NotificationModel; });
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Model For getting websocket data
 */
class NotificationModel {
    constructor(jsonObj) {
        Object.assign(this, jsonObj && jsonObj.body ? JSON.parse(jsonObj.body) : {});
    }
}
NotificationModel.ctorParameters = () => [
    { type: undefined }
];


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
class ServiceSearchParamsInputModel {
    constructor() {
        this.size = 10;
    }
}


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
class VisitSummaryModel {
    constructor(jsonObj) {
        Object.assign(this, jsonObj);
    }
}
VisitSummaryModel.ctorParameters = () => [
    { type: undefined }
];


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


class VisitorModel {
    constructor(jsonObj) {
        Object.assign(this, jsonObj);
        if (_array_util__WEBPACK_IMPORTED_MODULE_1__["ArrayUtil"].isNotEmpty(this.visitSummary)) {
            this.visitSummary = this.visitSummary.map((visitSummaryModel) => new _visit_summary_model__WEBPACK_IMPORTED_MODULE_0__["VisitSummaryModel"](visitSummaryModel));
        }
    }
}
VisitorModel.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/helpers/static-data.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/static-data.ts ***!
  \****************************************/
/*! exports provided: accoliteLocation, visitPurposes, addVisitStatus, idType, accoliteSnackbarMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accoliteLocation", function() { return accoliteLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitPurposes", function() { return visitPurposes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVisitStatus", function() { return addVisitStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idType", function() { return idType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accoliteSnackbarMessages", function() { return accoliteSnackbarMessages; });
// Add Accolite related static data
const accoliteLocation = ["Bangalore", "Hyderabad", "Delhi"];
const visitPurposes = ['Interview', 'Meeting', 'New Joinee'];
// If the last status is any one of these status we can add new visit
const addVisitStatus = ['COMPLETED', 'DECLINED', 'CANCELLED'];
const idType = [
    'Voter Id',
    'Aadhar Card',
    'PAN Card',
    'Driving License',
    'Passport'
];
// To Add success or error snackbar message
const accoliteSnackbarMessages = {
    rest: {
        success: {
            'create-visitors': 'Successfully created Visitor details',
            'successfully-approved': 'Successfully approved visitor',
            'successfully-cancelled': 'Scheduled meeting is cancelled',
            'add-visit': 'Added new visit',
            'update-visit-summary': 'Updated visit successfully',
            'notify-email': 'Notification sent successfully'
        },
        error: {
            'create-visitors': 'Failed to create Visitor details',
            'successfully-approved': 'Failed to approve visitor',
            'add-visit': 'Added new visit failed',
            'update-visit-summary': 'Updated visit failed',
            'notify-email': 'Notification failed'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/data-obtainer.component */ "./src/app/components/base/data-obtainer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_base_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/base/rest.service */ "./src/app/services/base/rest.service.ts");








let ApprovedRequestComponent = class ApprovedRequestComponent extends src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__["DataObtainer"] {
    constructor(visitorService, zone, route, rest) {
        super(zone);
        this.visitorService = visitorService;
        this.zone = zone;
        this.route = route;
        this.rest = rest;
        this.pagination = false;
        this.searchObj = {};
        this.clicked = false;
        this.displayedColumns = ["Name", "badgeNo", "inTime", "actions", "remarks"];
    }
    ngOnChanges(changes) {
        if (changes.ofcLocation) {
            this.refreshData();
        }
    }
    getDataObservable(params) {
        this.searchObj = {
            status: "APPROVED",
            officeLocation: this.ofcLocation
        };
        return this.visitorService.searchVisitor(this.searchObj);
    }
    onAfterUpdateData(data) {
        this.visitors = data && data.data ? data.data : null;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.visitors ? this.visitors : []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    exit(data) {
        const reqObj = {
            'firstName': data.firstName,
            'lastName': data.lastName,
            'visitNumber': data.visitSummary.visitNumber,
            'remarks': data.visitSummary.remarks
        };
        this.visitorService.updateExitTime(data.id, reqObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(this.rest.createNotifySnackbar("successfully-exited")))
            .subscribe(val => {
            this.refreshData();
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
ApprovedRequestComponent.ctorParameters = () => [
    { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_base_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApprovedRequestComponent.prototype, "pending", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApprovedRequestComponent.prototype, "preApproved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], ApprovedRequestComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], ApprovedRequestComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApprovedRequestComponent.prototype, "dataSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApprovedRequestComponent.prototype, "ofcLocation", void 0);
ApprovedRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-approved-request",
        template: __webpack_require__(/*! raw-loader!./approved-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/approved-request/approved-request.component.html"),
        styles: [__webpack_require__(/*! ./approved-request.component.css */ "./src/app/modules/home/approved-request/approved-request.component.css")]
    })
], ApprovedRequestComponent);



/***/ }),

/***/ "./src/app/modules/home/dialog-overview/dataModel.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/dialog-overview/dataModel.ts ***!
  \***********************************************************/
/*! exports provided: dataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataModel", function() { return dataModel; });
class dataModel {
    constructor(jsonObj) {
        Object.assign(this, jsonObj);
    }
}
dataModel.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/modules/home/dialog-overview/dialog-overview.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/dialog-overview/dialog-overview.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column {\r\n  margin-left: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9kaWFsb2ctb3ZlcnZpZXcvZGlhbG9nLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uIHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/dialog-overview/dialog-overview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/home/dialog-overview/dialog-overview.component.ts ***!
  \***************************************************************************/
/*! exports provided: DialogOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewComponent", function() { return DialogOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dataModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataModel */ "./src/app/modules/home/dialog-overview/dataModel.ts");




let DialogOverviewComponent = class DialogOverviewComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() { }
    onNoClick(element) {
        this.dialogRef.close({ data: element });
    }
};
DialogOverviewComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _dataModel__WEBPACK_IMPORTED_MODULE_3__["dataModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dialog-overview",
        template: __webpack_require__(/*! raw-loader!./dialog-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/dialog-overview/dialog-overview.component.html"),
        styles: [__webpack_require__(/*! ./dialog-overview.component.css */ "./src/app/modules/home/dialog-overview/dialog-overview.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogOverviewComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _approved_request_approved_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approved-request/approved-request.component */ "./src/app/modules/home/approved-request/approved-request.component.ts");
/* harmony import */ var _pending_request_pending_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pending-request/pending-request.component */ "./src/app/modules/home/pending-request/pending-request.component.ts");
/* harmony import */ var _pre_approved_request_pre_approved_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-approved-request/pre-approved-request.component */ "./src/app/modules/home/pre-approved-request/pre-approved-request.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_helpers_array_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/array.util */ "./src/app/helpers/array.util.ts");








let HomeComponent = class HomeComponent {
    constructor(route) {
        this.route = route;
        this.pagination = false;
        this.approvedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.preapprovedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pendingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayedColumns = ["badgeNo", "Name", "inTime", "actions", "remarks"];
        this.changeParamData();
    }
    // ngOnInit() {
    //   this.route.queryParams.subscribe( params => {
    //     this.approved.ofcLocation = JSON.parse( JSON.stringify( this.ofcLocation ) );
    //     this.approved.refreshData();
    //     this.pending.ofcLocation = JSON.parse( JSON.stringify( this.ofcLocation ) );
    //     this.pending.refreshData();
    //     this.preApproved.ofcLocation = JSON.parse( JSON.stringify( this.ofcLocation ) );
    //     this.preApproved.refreshData();
    //   } );
    // }
    ngDoCheck() {
        let localUrl = this.checkUrl() && this.getLocation() ? this.getLocation() : [];
        if (src_app_helpers_array_util__WEBPACK_IMPORTED_MODULE_7__["ArrayUtil"].isNotEmpty(localUrl) && localUrl.sort().toString() != this.ofcLocation.sort().toString()) {
            this.ofcLocation = JSON.parse(JSON.stringify(localUrl));
        }
    }
    ngAfterViewInit() {
        this.preapprovedChange.emit(this.preApproved);
        this.approvedChange.emit(this.approved);
        this.pendingChange.emit(this.pending);
    }
    changeParamData() {
        if (this.checkUrl()) {
            this.ofcLocation = this.getLocation();
        }
        else {
            this.ofcLocation = ['Bangalore'];
        }
    }
    checkUrl() {
        return window.location.href.indexOf('?loc') > -1;
    }
    getLocation() {
        let value = window.location.href.split("=")[1];
        return value.split(',');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], HomeComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], HomeComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_approved_request_approved_request_component__WEBPACK_IMPORTED_MODULE_3__["ApprovedRequestComponent"], { static: true })
], HomeComponent.prototype, "approved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_pending_request_pending_request_component__WEBPACK_IMPORTED_MODULE_4__["PendingRequestComponent"], { static: true })
], HomeComponent.prototype, "pending", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_pre_approved_request_pre_approved_request_component__WEBPACK_IMPORTED_MODULE_5__["PreApprovedRequestComponent"], { static: true })
], HomeComponent.prototype, "preApproved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomeComponent.prototype, "approvedChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomeComponent.prototype, "preapprovedChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomeComponent.prototype, "pendingChange", void 0);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _approved_request_approved_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approved-request/approved-request.component */ "./src/app/modules/home/approved-request/approved-request.component.ts");
/* harmony import */ var _pending_request_pending_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-request/pending-request.component */ "./src/app/modules/home/pending-request/pending-request.component.ts");
/* harmony import */ var _pre_approved_request_pre_approved_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pre-approved-request/pre-approved-request.component */ "./src/app/modules/home/pre-approved-request/pre-approved-request.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog-overview/dialog-overview.component */ "./src/app/modules/home/dialog-overview/dialog-overview.component.ts");










let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
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
            _pre_approved_request_pre_approved_request_component__WEBPACK_IMPORTED_MODULE_6__["PreApprovedRequestComponent"],
            _dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_9__["DialogOverviewComponent"]
        ]
    })
], HomeModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/data-obtainer.component */ "./src/app/components/base/data-obtainer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_base_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/base/rest.service */ "./src/app/services/base/rest.service.ts");







let PendingRequestComponent = class PendingRequestComponent extends src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__["DataObtainer"] {
    constructor(visitorService, zone, rest) {
        super(zone);
        this.visitorService = visitorService;
        this.zone = zone;
        this.rest = rest;
        this.pagination = false;
        this.displayedColumns = ["Name", "badgeNo", "inTime", "actions", "remarks"];
    }
    ngOnChanges(changes) {
        if (changes.ofcLocation) {
            this.refreshData();
        }
    }
    getDataObservable(params) {
        this.searchObj = {
            status: "PENDING",
            officeLocation: this.ofcLocation
        };
        return this.visitorService.searchVisitor(this.searchObj);
    }
    onAfterUpdateData(data) {
        this.visitors = data.data;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.visitors);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    approveVisitor(event) {
        this.visitorSummaryObj = {
            visitNumber: event["visitSummary"].visitNumber,
            badgeNo: event["visitSummary"].badgeNo,
            comingFrom: event["visitSummary"].comingFrom,
            contactPerson: event["visitSummary"].contactPerson,
            contactPersonEmailId: event["visitSummary"].contactPersonEmailId,
            contactPersonPhone: event["visitSummary"].contactPersonPhone,
            purpose: event["visitSummary"].purpose,
            officeLocation: event["visitSummary"].officeLocation,
            inTime: event["visitSummary"].inTime,
            outTime: event["visitSummary"].outTime,
            status: "APPROVED",
            scheduledTime: event["visitSummary"].scheduledTime,
            remarks: event["visitSummary"].remarks
        };
        this.visitorService
            .updateVisitSummary(event.id, this.visitorSummaryObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(this.rest.createNotifySnackbar("successfully-approved")))
            .subscribe(() => {
            this.refreshData();
            if (this.approved) {
                this.approved.refreshData();
            }
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
PendingRequestComponent.ctorParameters = () => [
    { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_base_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PendingRequestComponent.prototype, "approved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PendingRequestComponent.prototype, "preApproved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], PendingRequestComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], PendingRequestComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PendingRequestComponent.prototype, "dataSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PendingRequestComponent.prototype, "ofcLocation", void 0);
PendingRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pending-request",
        template: __webpack_require__(/*! raw-loader!./pending-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/pending-request/pending-request.component.html"),
        styles: [__webpack_require__(/*! ./pending-request.component.css */ "./src/app/modules/home/pending-request/pending-request.component.css")]
    })
], PendingRequestComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/data-obtainer.component */ "./src/app/components/base/data-obtainer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var src_app_services_base_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/base/rest.service */ "./src/app/services/base/rest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog-overview/dialog-overview.component */ "./src/app/modules/home/dialog-overview/dialog-overview.component.ts");
/* harmony import */ var _dialog_overview_dataModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog-overview/dataModel */ "./src/app/modules/home/dialog-overview/dataModel.ts");









let PreApprovedRequestComponent = class PreApprovedRequestComponent extends src_app_components_base_data_obtainer_component__WEBPACK_IMPORTED_MODULE_2__["DataObtainer"] {
    constructor(visitorService, zone, rest, dialog) {
        super(zone);
        this.visitorService = visitorService;
        this.zone = zone;
        this.rest = rest;
        this.dialog = dialog;
        this.pagination = false;
        this.displayedColumns = ["Name", "badgeNo", "contactPerson", "actions", "remarks"];
    }
    ngOnChanges(changes) {
        if (changes.ofcLocation) {
            this.refreshData();
        }
    }
    ngOnInit() {
        this.refreshData();
    }
    getDataObservable(params) {
        this.searchObj = {
            status: "SCHEDULED",
            officeLocation: this.ofcLocation
        };
        return this.visitorService.searchVisitor(this.searchObj);
    }
    onAfterUpdateData(data) {
        this.visitors = data && data.data ? data.data : null;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.visitors ? this.visitors : []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    cancelled(event) {
        this.visitorSummaryObj = {
            visitNumber: event["visitSummary"].visitNumber,
            badgeNo: event["visitSummary"].badgeNo,
            comingFrom: event["visitSummary"].comingFrom,
            contactPerson: event["visitSummary"].contactPerson,
            contactPersonEmailId: event["visitSummary"].contactPersonEmailId,
            contactPersonPhone: event["visitSummary"].contactPersonPhone,
            purpose: event["visitSummary"].purpose,
            officeLocation: event["visitSummary"].officeLocation,
            inTime: event["visitSummary"].inTime,
            outTime: event["visitSummary"].outTime,
            status: "CANCELLED",
            scheduledTime: event["visitSummary"].scheduledTime,
            remarks: event["visitSummary"].remarks
        };
        this.visitorService
            .updateVisitSummary(event.id, this.visitorSummaryObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(this.rest.createNotifySnackbar("successfully-cancelled")))
            .subscribe(() => {
            this.refreshData();
        });
    }
    assignBadge(event) {
        this.visitor = {
            firstName: event.firstName,
            lastName: event.lastName,
            badgeNo: event.visitSummary.badgeNo,
            phoneNumber: event.phoneNumber,
            contactPerson: event.visitSummary.contactPerson,
            comingFrom: event.visitSummary.comingFrom,
            purpose: event.visitSummary.purpose,
            inTime: event.visitSummary.inTime,
            scheduledTime: event.visitSummary.scheduledTime,
            emailId: event.emailId
        };
        const dialogRef = this.dialog.open(_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_7__["DialogOverviewComponent"], {
            width: "500px",
            data: this.visitor
        });
        dialogRef.afterClosed().subscribe(result => {
            let dialogRefModel = new _dialog_overview_dataModel__WEBPACK_IMPORTED_MODULE_8__["dataModel"](result.data);
            let putVisitor = this.visitors.filter((data) => dialogRefModel.phoneNumber == data.phoneNumber)[0];
            putVisitor.visitSummary.badgeNo = dialogRefModel.badgeNo;
            this.visitorService
                .updateVisitSummary(putVisitor.id, putVisitor.visitSummary)
                .subscribe();
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
PreApprovedRequestComponent.ctorParameters = () => [
    { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_base_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PreApprovedRequestComponent.prototype, "approved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PreApprovedRequestComponent.prototype, "pending", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], PreApprovedRequestComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], PreApprovedRequestComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PreApprovedRequestComponent.prototype, "dataSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PreApprovedRequestComponent.prototype, "ofcLocation", void 0);
PreApprovedRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pre-approved-request",
        template: __webpack_require__(/*! raw-loader!./pre-approved-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/pre-approved-request/pre-approved-request.component.html"),
        styles: [__webpack_require__(/*! ./pre-approved-request.component.css */ "./src/app/modules/home/pre-approved-request/pre-approved-request.component.css")]
    })
], PreApprovedRequestComponent);



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_ui_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui-components/data-table/data-table.component */ "./src/app/components/ui-components/data-table/data-table.component.ts");
/* harmony import */ var _components_ui_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui-components/card/card.component */ "./src/app/components/ui-components/card/card.component.ts");
/* harmony import */ var _components_ui_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui-components/drop-down/drop-down.component */ "./src/app/components/ui-components/drop-down/drop-down.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ui-components/snack-bar/snack-bar.component */ "./src/app/components/ui-components/snack-bar/snack-bar.component.ts");
/**
 *
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives the flexibility to add all Material declarations and imports inside this module
 */










const componentDeclarations = [
    _components_ui_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_4__["DataTableComponent"],
    _components_ui_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
    _components_ui_components_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"],
    _components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__["SnackbarComponent"]
];
const moduleDeclarations = [
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
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [...componentDeclarations],
        imports: [...moduleDeclarations],
        exports: [...moduleDeclarations, ...componentDeclarations],
        entryComponents: [_components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__["SnackbarComponent"]]
    })
], MaterialModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");




let VisitSummaryComponent = class VisitSummaryComponent {
    constructor(visitService) {
        this.visitService = visitService;
        this.displayedColumns = [
            'badgeNo', 'contactPerson', 'inTime', 'outTime', 'officeLocation', 'purpose', 'scheduledTime',
            'status', 'visitNumber'
        ];
    }
    ngOnInit() {
        const emailId = this.data.emailId || '';
        if (emailId.length > 0) {
            this.visitService.searchVisitor({ 'emailId': emailId }, 0, 500).subscribe((resp) => {
                const total = resp.total || 0;
                if (total > 0) {
                    const visitSummary = [];
                    for (let i = 0; i < total; i++) {
                        visitSummary.push(resp.data[i].visitSummary);
                    }
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](visitSummary);
                }
            });
        }
    }
};
VisitSummaryComponent.ctorParameters = () => [
    { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_3__["VisitorService"] }
];
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



/***/ }),

/***/ "./src/app/modules/report/components/visitor-profile/visitor-profile.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/report/components/visitor-profile/visitor-profile.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .padding10 {\r\n      padding: 10px;\r\n  }\r\n  \r\n  .width150 {\r\n      width: 150px;\r\n  }\r\n  \r\n  .inline-block-label {\r\n    display: inline-block;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvY29tcG9uZW50cy92aXNpdG9yLXByb2ZpbGUvdmlzaXRvci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCOztFQUVBO01BQ0ksYUFBYTtFQUNqQjs7RUFFQTtNQUNJLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3JlcG9ydC9jb21wb25lbnRzL3Zpc2l0b3ItcHJvZmlsZS92aXNpdG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmcxMCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAud2lkdGgxNTAge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5saW5lLWJsb2NrLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VisitorProfileComponent = class VisitorProfileComponent {
    constructor() { }
    ngOnInit() {
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let VisitorComponent = class VisitorComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.dialogData = this.data;
    }
    onClickClose() {
        this.dialogRef.close();
    }
};
VisitorComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
VisitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor',
        template: __webpack_require__(/*! raw-loader!./visitor.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/report/components/visitor/visitor.component.html"),
        styles: [__webpack_require__(/*! ./visitor.component.css */ "./src/app/modules/report/components/visitor/visitor.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], VisitorComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/visitor/visitor.component */ "./src/app/modules/report/components/visitor/visitor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let ReportComponent = class ReportComponent {
    constructor(visitorService, dialog, route) {
        this.visitorService = visitorService;
        this.dialog = dialog;
        this.route = route;
        this.isLoadingResults = true;
        this.resultsLength = 0;
        this.pageSize = 10;
        this.firstNameFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.lastNameFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.phoneNumberFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
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
            'firstName-search', 'lastName-search', 'phoneNumber-search', 'purpose-search',
            'contactPerson-search', 'inTime-search', 'idType-search'
        ];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.filterValues['officeLocation'] = params.loc;
            this.paginator.pageIndex = 0;
        });
        this.firstNameFilter.valueChanges.subscribe(firstName => {
            this.filterValues['firstName'] = firstName;
            this.paginator.pageIndex = 0;
        });
        this.lastNameFilter.valueChanges.subscribe(lastName => {
            this.filterValues['lastName'] = lastName;
            this.paginator.pageIndex = 0;
        });
        /* this.phoneNumberFilter.valueChanges.subscribe(
          phoneNumber => {
            if ( phoneNumber.length == 10 ) {
              console.log( 'HIT' );
              this.paginator.pageIndex = 0;
            }
            this.filterValues[ 'phoneNumber' ] = phoneNumber;
    
          }
        ); */
        this.purposeFilter.valueChanges.subscribe(purpose => {
            this.filterValues['purpose'] = purpose;
            this.paginator.pageIndex = 0;
        });
        this.contactPersonFilter.valueChanges.subscribe(contactPerson => {
            this.filterValues['contactPerson'] = contactPerson;
            this.paginator.pageIndex = 0;
        });
        this.inTimeFilter.valueChanges.subscribe(inTime => {
            this.filterValues['inTime'] = inTime;
            this.paginator.pageIndex = 0;
        });
        this.idTypeFilter.valueChanges.subscribe(idType => {
            this.filterValues['idType'] = idType;
            this.paginator.pageIndex = 0;
        });
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.firstNameFilter.valueChanges, this.lastNameFilter.valueChanges, 
        // this.phoneNumberFilter.valueChanges,
        this.purposeFilter.valueChanges, this.contactPersonFilter.valueChanges, this.inTimeFilter.valueChanges, this.idTypeFilter.valueChanges, this.route.queryParams, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => {
            /*if ( ( this.filterValues[ 'phoneNumber' ] && this.filterValues[ 'phoneNumber' ].length == 10 ) ||
              !this.filterValues[ 'phoneNumber' ] ) {*/
            this.isLoadingResults = true;
            return this.visitorService.searchVisitor(this.filterValues, this.paginator.pageIndex, this.paginator.pageSize);
            // }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(data => {
            // Flip flag to show that loading has finished.
            this.resultsLength = data['total'];
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(() => {
            this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]);
        })).subscribe(data => {
            this.visitors = data['data'] ? data['data'] : [];
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.visitors);
            this.isLoadingResults = false;
            this.dataSource.sort = this.sort;
        });
    }
    openDialog(row) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = row;
        dialogConfig.height = '600px';
        dialogConfig.width = '1000px';
        const matDialogRef = this.dialog.open(_components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__["VisitorComponent"], dialogConfig);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ReportComponent.ctorParameters = () => [
    { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_2__["VisitorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ "./src/app/modules/report/report.component.ts");
/* harmony import */ var _components_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/visitor/visitor.component */ "./src/app/modules/report/components/visitor/visitor.component.ts");
/* harmony import */ var _components_visitor_profile_visitor_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/visitor-profile/visitor-profile.component */ "./src/app/modules/report/components/visitor-profile/visitor-profile.component.ts");
/* harmony import */ var _components_visit_summary_visit_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/visit-summary/visit-summary.component */ "./src/app/modules/report/components/visit-summary/visit-summary.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let ReportModule = class ReportModule {
};
ReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let VisitorFormComponent = class VisitorFormComponent {
    constructor(service, http) {
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
    initializeFormGroup() {
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
    }
    ngDoCheck() {
        setTimeout(() => {
            this.now = new Date();
        }, 2000);
    }
    onClear() {
        this.form.reset();
        this.initializeFormGroup();
    }
    onSubmit() {
        this.service.createNewVisitor(this.form.value).subscribe(val => {
            console.log(val);
        });
        this.form.reset();
        this.initializeFormGroup();
    }
    onSubmitEmployeeData() {
        this.service.createNewVisitor(this.form.value).subscribe(val => {
            console.log(val);
        });
        this.form.reset();
    }
    ngOnInit() { }
};
VisitorFormComponent.ctorParameters = () => [
    { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_1__["VisitorService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
VisitorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-visitor-form",
        template: __webpack_require__(/*! raw-loader!./visitor-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-form.component.html"),
        styles: [__webpack_require__(/*! ./visitor-form.component.css */ "./src/app/modules/visitor-form/visitor-form.component.css")]
    })
], VisitorFormComponent);



/***/ }),

/***/ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/visitor-form/visitor-home/visitor-home.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* \r\n.span{\r\n    display: inline-block\r\n}\r\n.span-maticon{\r\n    vertical-align: bottom\r\n}\r\n\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > mat-form-field{\r\n    display: block;\r\n    width:23rem;\r\n  }\r\n  \r\n  h2.setMiddle{\r\n    padding-left: 10rem; \r\n  }\r\n\r\n  div.flex-container-wrapper{\r\n    padding: 1rem;\r\n  }\r\n\r\n  div.flex-container-wrapper >  div.flex-container{\r\n    display: flex;\r\n  }\r\n\r\n  div.flex-container-wrapper >  div.flex-container > mat-form-field{\r\n    flex:1;\r\n    padding-right: 2rem;\r\n  } */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXNpdG9yLWZvcm0vdmlzaXRvci1ob21lL3Zpc2l0b3ItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUNLIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92aXNpdG9yLWZvcm0vdmlzaXRvci1ob21lL3Zpc2l0b3ItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIFxyXG4uc3BhbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcbi5zcGFuLW1hdGljb257XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tXHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gbWF0LWZvcm0tZmllbGR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOjIzcmVtO1xyXG4gIH1cclxuICBcclxuICBoMi5zZXRNaWRkbGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtOyBcclxuICB9XHJcblxyXG4gIGRpdi5mbGV4LWNvbnRhaW5lci13cmFwcGVye1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4gIGRpdi5mbGV4LWNvbnRhaW5lci13cmFwcGVyID4gIGRpdi5mbGV4LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICBkaXYuZmxleC1jb250YWluZXItd3JhcHBlciA+ICBkaXYuZmxleC1jb250YWluZXIgPiBtYXQtZm9ybS1maWVsZHtcclxuICAgIGZsZXg6MTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgfSAqL1xyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var src_app_helpers_models_notification_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/models/notification.model */ "./src/app/helpers/models/notification.model.ts");
/* harmony import */ var src_app_services_base_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/base/rest.service */ "./src/app/services/base/rest.service.ts");





let VisitorComponent = class VisitorComponent {
    constructor(notification, restService) {
        this.notification = notification;
        this.restService = restService;
    }
    showSnackbarAndRefreshData(data) {
        console.clear();
        this.restService.createSnackbar(data.message, 'close', 2000, 'success', 'info');
        switch (data.action) {
            case 'PENDING':
                this.pending.refreshData();
                break;
            case 'APPROVED':
                this.approved.refreshData();
                break;
            case 'SCHEDULED':
                this.preApproved.refreshData();
                break;
        }
    }
    ngAfterViewInit() {
        this.notification.messages$.subscribe((data) => {
            this.notificationData = new src_app_helpers_models_notification_model__WEBPACK_IMPORTED_MODULE_3__["NotificationModel"](data);
            this.showSnackbarAndRefreshData(this.notificationData);
        });
    }
};
VisitorComponent.ctorParameters = () => [
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
    { type: src_app_services_base_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
];
VisitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'visitor-home',
        template: __webpack_require__(/*! raw-loader!./visitor-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/visitor-form/visitor-home/visitor-home.component.html"),
        styles: [__webpack_require__(/*! ./visitor-home.component.css */ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.css")]
    })
], VisitorComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/static-data */ "./src/app/helpers/static-data.ts");
/* harmony import */ var src_app_helpers_models_visitors_visitors_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/models/visitors/visitors.model */ "./src/app/helpers/models/visitors/visitors.model.ts");
/* harmony import */ var src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/visitor.service */ "./src/app/services/visitor.service.ts");
/* harmony import */ var src_app_helpers_models_visitors_visit_summary_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/models/visitors/visit-summary.model */ "./src/app/helpers/models/visitors/visit-summary.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * gives flexibility to search or create visitor details
 */









let VisitorSearchOrCreateComponent = class VisitorSearchOrCreateComponent {
    constructor(visitorService, router, route) {
        this.visitorService = visitorService;
        this.router = router;
        this.route = route;
        this.searchVisitor$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.model = {};
        this.idTypes = src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__["idType"];
        this.visitPurposes = src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__["visitPurposes"];
        this.addVisitStatus = src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__["addVisitStatus"];
        this.showLoading = false;
        this.officeLocation = 'Bangalore';
        this.isEmailPresent = true;
        this.isAddVisit = false;
        this.createUser();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.officeLocation = params.loc;
        });
        this.searchVisitor$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((data) => data != ''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            this.showLoading = true;
            return this.visitorService.getVisitorByEmailId(data);
        })).subscribe((data) => {
            this.data = data;
            console.log(this.data);
            this.isAddVisit = false;
            if (data && data.visitSummary[0] && src_app_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__["addVisitStatus"].indexOf(data.visitSummary[0].status) !== -1) {
                this.user = new src_app_helpers_models_visitors_visitors_model__WEBPACK_IMPORTED_MODULE_5__["VisitorModel"](data);
                this.isEmailPresent = true;
                this.isAddVisit = true;
                this.visitStatus = 'NEW';
            }
            else if (data) {
                this.user = new src_app_helpers_models_visitors_visitors_model__WEBPACK_IMPORTED_MODULE_5__["VisitorModel"](data);
                this.isEmailPresent = true;
                this.visitStatus = data.visitSummary[0].status;
            }
            else {
                this.createUser();
                this.user.emailId = this.search;
                this.isEmailPresent = false;
                this.visitStatus = 'NEW';
            }
            this.showLoading = false;
        });
    }
    createUser() {
        this.user = new src_app_helpers_models_visitors_visitors_model__WEBPACK_IMPORTED_MODULE_5__["VisitorModel"]();
        this.user.visitSummary = [];
        const visitSummary = new src_app_helpers_models_visitors_visit_summary_model__WEBPACK_IMPORTED_MODULE_7__["VisitSummaryModel"]();
        visitSummary.officeLocation = this.officeLocation;
        this.user.visitSummary.push(visitSummary);
    }
    addVisitSummary() {
        let visitSummary = Object.assign({}, this.user.visitSummary[0], { officeLocation: this.officeLocation, visitNumber: this.data.visitSummary[0].visitNumber + 1, status: 'PENDING', outTime: null, remarks: null });
        this.user.visitSummary = [];
        this.user.visitSummary.push(visitSummary);
    }
    updateVisitSummary() {
        console.log('visit Summary', this.user.visitSummary);
        let visitSummary = Object.assign({}, this.user.visitSummary[0], { officeLocation: this.officeLocation });
        this.user.visitSummary = [];
        this.user.visitSummary.push(visitSummary);
    }
    searchValues(value, type) {
        this.search = value;
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const data = regex.test(value.toLowerCase());
        if (type === 'email' && data === true) {
            this.searchVisitor$.next(value);
        }
    }
    onSubmit() {
        this.visitorService.createNewVisitor(this.user).subscribe(() => {
            this.createUser();
            this.router.navigateByUrl('/visitor');
        });
    }
    onAddVisit() {
        this.addVisitSummary();
        this.visitorService.addVisitorSummary(this.user.id, this.user.visitSummary[0]).subscribe(() => {
            this.router.navigateByUrl('/visitor');
        });
    }
    onUpdateVisit() {
        this.updateVisitSummary();
        console.log(this.user.id, this.user.visitSummary[0]);
        this.visitorService.updateVisitSummary(this.user.id, this.user.visitSummary[0]).subscribe(() => {
            this.router.navigateByUrl('/visitor');
        });
    }
    onNotify() {
        this.visitorService.sendNotifyMail(this.user).subscribe(() => {
            this.router.navigateByUrl('/visitor');
        });
    }
};
VisitorSearchOrCreateComponent.ctorParameters = () => [
    { type: src_app_services_visitor_service__WEBPACK_IMPORTED_MODULE_6__["VisitorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _visitor_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitor-form.component */ "./src/app/modules/visitor-form/visitor-form.component.ts");
/* harmony import */ var _visitor_home_visitor_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-home/visitor-home.component */ "./src/app/modules/visitor-form/visitor-home/visitor-home.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _visitor_search_or_create_visitor_search_or_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visitor-search-or-create/visitor-search-or-create.component */ "./src/app/modules/visitor-form/visitor-search-or-create/visitor-search-or-create.component.ts");









let VisitorsModule = class VisitorsModule {
};
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



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuardService = class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        // this.router.navigateByUrl('/login');
        return true;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AuthService = class AuthService {
    constructor() {
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _helpers_static_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/static-data */ "./src/app/helpers/static-data.ts");
/* harmony import */ var src_app_components_ui_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/ui-components/snack-bar/snack-bar.component */ "./src/app/components/ui-components/snack-bar/snack-bar.component.ts");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Common Rest Service for all Http calls
 */






let RestService = class RestService {
    constructor(http, snackbarService) {
        this.http = http;
        this.snackbarService = snackbarService;
    }
    get(url, options = {}) {
        return this.http.get(url, options);
    }
    jsonPost(url, body, options = {}) {
        return this.http.post(url, body, options);
    }
    jsonPut(url, body, options = {}) {
        return this.http.put(url, body, options);
    }
    jsonPatch(url, body, options = {}) {
        return this.http.patch(url, body, options);
    }
    delete(url, options = {}) {
        return this.http.delete(url, options);
    }
    createSnackbar(message, action = "close", durationMS = 2000, cssClass, icon) {
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
    }
    createNotifySnackbar(key, action = "close", durationMS = 2000) {
        let message = (key) => (_helpers_static_data__WEBPACK_IMPORTED_MODULE_4__["accoliteSnackbarMessages"]['rest'])[key];
        let observer = {
            next: (data) => {
                this.createSnackbar(message('success')[key] ? message('success')[key] : key, action, durationMS, "success");
            }, error: (error) => {
                this.createSnackbar(message('error')[key] ? message('error')[key] : key, action, durationMS, "error");
            }, complete: () => {
            }
        };
        return observer;
    }
    catchError(obs) {
        obs.subscribe((error) => {
            console.warn(error);
        });
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestService);



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Help to catch the event and send the response recieved from the Server
 */





let NotificationService = class NotificationService {
    constructor() {
        this.serverUrl = 'http://13.233.40.37:8081/visitor';
        this.messages$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.initializeWebSocketConnection();
    }
    initializeWebSocketConnection() {
        let ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__(this.serverUrl);
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_1__["over"](ws);
        let _this = this;
        this.stompClient.connect({}, function (frame) {
            console.clear();
            _this.stompClient.subscribe("/visit/status", (message) => {
                console.clear();
                _this.messages$.next(message);
            });
        });
    }
    sendMessage(data, priority = 5) {
        let value = typeof data === "object" ? JSON.stringify(data) : data;
        try {
            this.stompClient.send("/visit/status", { priority: priority }, value);
        }
        catch (_a) {
            console.warn('Connection is not ready');
        }
    }
};
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/constants */ "./src/config/constants.ts");
/* harmony import */ var _base_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/rest.service */ "./src/app/services/base/rest.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let VisitorService = class VisitorService {
    constructor(restService) {
        this.restService = restService;
    }
    getVisitorByEmailId(emailId) {
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].GET_VISITOR_BY_EMAIL + emailId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        }));
    }
    createNewVisitor(visitorObj) {
        return this.restService
            .jsonPost(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].CREATE_NEW_VISITOR, visitorObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.restService.createNotifySnackbar("create-visitors")));
    }
    addVisitorSummary(visitorId, visitorSummaryObj) {
        return this.restService
            .jsonPut(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].ADD_VISIT_SUMMARY + visitorId, visitorSummaryObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.restService.createNotifySnackbar("add-visit")));
    }
    updateVisitorDetails(visitorId, visitorObj) {
        return this.restService.jsonPatch(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].UPDATE_VISITOR_DETAILS + visitorId, visitorObj);
    }
    updateVisitSummary(visitorId, visitSummaryObj) {
        return this.restService
            .jsonPatch(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].UPDATE_VISITOR_SUMMARY + visitorId, visitSummaryObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.restService.createNotifySnackbar("update-visit-summary")));
    }
    sendApprovalMail(reqObj) {
        return this.restService
            .jsonPost(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].SEND_APPROVAL_MAIL, reqObj);
    }
    sendNotifyMail(reqObj) {
        return this.restService
            .jsonPost(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].SEND_NOTIFY_MAIL, reqObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.restService.createNotifySnackbar("notify-email")));
    }
    fetchAllVisitors() {
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL);
    }
    fetchVisitorsByInTime(startDate, endDate) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params.set("startDate", startDate);
        params.set("endDate", endDate);
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].GET_VISITORS_BY_IN_TIME, {
            params: params
        });
    }
    updateExitTime(visitorId, reqObj) {
        return this.restService.jsonPut(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].EXIT_TIME + visitorId, reqObj);
    }
    fetchVisitor(id) {
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + id);
    }
    searchVisitor(searchObj, page = 0, pageSize = 10) {
        let searchURL = _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + _config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].SEARCH + `?page=${page}&size=${pageSize}`;
        return this.restService.jsonPost(searchURL, searchObj);
    }
    deleteVisitorSummary(visitSummaryId) {
        return this.restService.get(_config_constants__WEBPACK_IMPORTED_MODULE_4__["urls"].BASE_URL + visitSummaryId);
    }
};
VisitorService.ctorParameters = () => [
    { type: _base_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
VisitorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], VisitorService);



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
const urls = {
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
    'SEND_NOTIFY_MAIL': 'sendNotifyMail',
    'APPROVE_ON_BEHALF': 'approveOnBehalf/',
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Accolite\Visitors\visitors-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map