import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  isFavorite = true;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  //below is not recomended way - angular renders the templates in not real dom. so we might not have accessed the real dom since we dont have access to the dom.
  // It also provider a helper class called render2 used to render the templates and it will check the access of doms
  showBoring_not_recomended(element: HTMLElement) {
    if (element.style.display == 'none')
      element.style.display = 'block';
    else
      element.style.display = 'none';
  }
  //recomended way for above
  showBoring(element: HTMLElement) {
    this.renderer.setStyle(element, 'display', 'block');
  }
}
