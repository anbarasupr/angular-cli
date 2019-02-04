import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'tab-container',
  templateUrl: './tab-container.component.html'
})
export class TabContainerComponent implements OnInit {

  @Input()
  headerTemplate: TemplateRef<any>;

  constructor() {

  }

  ngOnInit() {

  }

}