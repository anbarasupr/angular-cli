import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'ng-template-test',
  templateUrl: './ng-template-test.component.html',
  styleUrls: ['./ng-template-test.component.css']
})
export class NgTemplateTestComponent implements OnInit {

  loginText = 'Login';
  signUpText = 'Sign Up';

  lessons = ['Lesson 1', 'Lessons 2'];

  totalEstimate = 10;

  templateCtx = { estimate: this.totalEstimate };


  @ViewChild('defaultTabButtons')
  private defaultTabButtonsTpl: TemplateRef<any>;


  ngOnInit() {
    console.log(this.defaultTabButtonsTpl);
  }

  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }


}
