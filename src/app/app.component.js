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
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ej2_data_1 = require("@syncfusion/ej2-data");
var custom_component_1 = require("./custom.component");
var AppComponent = (function () {
    function AppComponent(viewContainerRef, modalService) {
        this.viewContainerRef = viewContainerRef;
        this.modalService = modalService;
        //bind the DataManager instance to dataSource property
        this.data = new ej2_data_1.DataManager({
            url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
            adaptor: new ej2_data_1.ODataV4Adaptor,
            crossDomain: true
        });
        // maps the appropriate column to fields property
        this.fields = { value: 'ContactName' };
        //bind the Query instance to query property
        this.query = new ej2_data_1.Query().select(['ContactName', 'CustomerID']);
        //set the placeholder to dropdownlist input
        this.text = "Find a customer";
        this.width = "300px";
    }
    // bind the open event handler
    AppComponent.prototype.onOpen = function (args) {
        // To fetch the available child elements in body
        var elements = document.querySelectorAll('body > *');
        var value = [];
        for (var i = 0; i < elements.length; i++) {
            var element = document.defaultView.getComputedStyle(elements[i], null);
            if (element.getPropertyValue('position') !== 'static') {
                value.push(element.getPropertyValue('z-index') || element.getPropertyValue('zIndex')); // fetching z-index values 
            }
        }
        // fetching maximum z-index value
        var index = parseInt(Math.max.apply(Math, value));
        // setting z-index to calendar popup element
        args.popup.element.style.zIndex = index + 1;
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('content'),
    __metadata("design:type", custom_component_1.CustomComponent)
], AppComponent.prototype, "content", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, ng_bootstrap_1.NgbModal])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map