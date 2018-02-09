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
var CustomComponent = (function () {
    function CustomComponent(modalService) {
        this.modalService = modalService;
    }
    CustomComponent.prototype.show = function () {
        var _this = this;
        this.modalService.open(this.contentTemplate).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CustomComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return CustomComponent;
}());
__decorate([
    core_1.ViewChild('content'),
    __metadata("design:type", core_1.TemplateRef)
], CustomComponent.prototype, "contentTemplate", void 0);
__decorate([
    core_1.ViewChild('content'),
    __metadata("design:type", CustomComponent)
], CustomComponent.prototype, "content", void 0);
CustomComponent = __decorate([
    core_1.Component({
        selector: 'custom-selector',
        template: " \n    <ng-template #content>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Dropdownlist Sample</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n    </button>\n  </div>\n  <div class=\"modal-body\"> \n    <ng-content select=\".modal-body\"> </ng-content>\n  \n  </div>\n\n</ng-template> "
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], CustomComponent);
exports.CustomComponent = CustomComponent;
//# sourceMappingURL=custom.component.js.map