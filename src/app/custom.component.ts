import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';


@Component({
    selector: 'custom-selector',
    template: ` 
    <ng-template #content>
  <div class="modal-header">
    <h4 class="modal-title">Dropdownlist Sample</h4>
    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
    </button>
  </div>
  <div class="modal-body"> 
    <ng-content select=".modal-body"> </ng-content>
  
  </div>

</ng-template> `
})
export class CustomComponent {
    closeResult: string;
    @ViewChild('content') contentTemplate: TemplateRef<any>;
    @ViewChild('content')
    public content: CustomComponent;
    constructor(private modalService: NgbModal) {
    }
    show() {
        this.modalService.open(this.contentTemplate).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: ModalDismissReasons): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}