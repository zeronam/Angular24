import { Component } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent {
  listItems = ['Angular', 'React', 'NodeJS', 'BackboneJS', 'VueJS'];
  newItem = '';
  pushItem(){
    this.listItems.push(this.newItem);
    this.newItem = '';
  }
  removeItem(index){
    this.listItems.splice(index,1);
  }
}
