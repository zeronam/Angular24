import {Component, EventEmitter, Output, Input} from "@angular/core";

@Component ({
  selector: 'app-child',
  template: '<button (click)="addNum()">Add</button><button (click)="subNum()">Sub</button><div *ngFor="let people of data">{{people}}</div>',
  styleUrls: ['./app.component.css']
})

export class ChildComponent{
  @Input() data: String;
  @Output() myClick = new EventEmitter<boolean>();
  addNum(){
    this.myClick.emit(true);
  }
  subNum(){
    this.myClick.emit(false);
  }
}
