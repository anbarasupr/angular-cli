import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
