import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css').toString() ] ,
})
export class AppComponent {}
