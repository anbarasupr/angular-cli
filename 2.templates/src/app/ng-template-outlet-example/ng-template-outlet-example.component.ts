import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-example',
  templateUrl: './ng-template-outlet-example.component.html',
  styleUrls: ['./ng-template-outlet-example.component.css']
})
export class NgTemplateOutletExampleComponent implements OnInit {
  myContext = { $implicit: 'World', localSk: 'Svet' };

  testContext = { test: 'India' };
  constructor() { }

  ngOnInit() {
  }

}
