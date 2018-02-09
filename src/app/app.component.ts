import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

import {CustomComponent} from './custom.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  closeResult: string;
 
  @ViewChild('content') content :CustomComponent;
  constructor(private viewContainerRef: ViewContainerRef, private modalService: NgbModal) {
  }
 //bind the DataManager instance to dataSource property
  public data: DataManager = new DataManager({
    url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  // maps the appropriate column to fields property
  public fields: Object = { value: 'ContactName' };
  //bind the Query instance to query property
  public query: Query = new Query().select(['ContactName', 'CustomerID']);
  //set the placeholder to dropdownlist input
  public text: string = "Find a customer";
  public width: string = "300px";
  // bind the open event handler
  onOpen(args: any) {
    // To fetch the available child elements in body
    let elements: Element[] = <NodeListOf<Element> & Element[]>document.querySelectorAll('body > *');
    let value: string[] = [];
    for (let i = 0; i < elements.length; i++) {
      let element = document.defaultView.getComputedStyle(elements[i], null);
      if (element.getPropertyValue('position') !== 'static') {
        value.push(element.getPropertyValue('z-index') || element.getPropertyValue('zIndex'));// fetching z-index values 
      }
    }
    // fetching maximum z-index value
    let index: any = parseInt(Math.max.apply(Math, value));
    // setting z-index to calendar popup element
    args.popup.element.style.zIndex = index + 1;
  }

}