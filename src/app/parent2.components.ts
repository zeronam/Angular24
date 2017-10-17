import {Component, ViewChild} from "@angular/core";
import {ChildComponent2} from './child2.components';

@Component ({
  selector: 'app-parent2',
  template: '<button (click)="onAddForChild()">Add for child</button><button (click)="onSubForChild()">Sub for child</button><app-child2></app-child2>',
  styleUrls: ['./app.component.css']
})

export class ParentComponent2{
  @ViewChild(ChildComponent2)
  myChild: ChildComponent2;

  onAddForChild(){
    this.myChild.value ++;
  }
  onSubForChild(){
    this.myChild.value --;
  }
}
