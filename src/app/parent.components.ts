import {Component} from "@angular/core";

@Component ({
  selector: 'app-parent',
  template: '<h3>{{ value }}</h3><app-child (myClick)="changeValue($event)" [data]="arrPeople"></app-child>',
  styleUrls: ['./app.component.css']
})

export class ParentComponent{
  arrPeople = [1,2,3];
  value = 0;
  changeValue(isAdding: boolean){
    if(isAdding){
      this.value = this.value + 1;
    } else {
      this.value = this.value - 1;
    }
  }
}
