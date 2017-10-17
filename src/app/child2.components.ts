import {Component} from "@angular/core";

@Component ({
  selector: 'app-child2',
  template: '<h3>{{ value }}</h3>',
  styleUrls: ['./app.component.css']
})

export class ChildComponent2{
  value = 0;
}
