import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  encapsulation:ViewEncapsulation.Emulated //Emulated - Styles is the default which applies only to the specific component
                                          //None - Styles are shared among components
                                          //Native - native to browser

})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
