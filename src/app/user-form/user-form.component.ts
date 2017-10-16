import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  filterStatus = 'viewall';
  isHighLight=true;
  newEn = '';
  newVn = '';
  isShowForm = false;
  evenStyle = {color: 'red', fontSize:'20px'};
  oddStyle = {color: 'blue', fontSize:'40px'};
  currentClass = {square: this.isHighLight, circle: !this.isHighLight};
  arrObject = ['Angular', 'React', 'NodeJS'];
  arrWords = [{id:1, en: 'run', vn: 'chay', memorized: true},{id:2, en: 'morning', vn: 'buoi sang', memorized: false},{id:3, en: 'car', vn: 'xe hoi', memorized: true}];
  arrBooks = [{name: "Sách ngữ văn", price: "38.000"},
              {name: "Sách toán học", price: "45.000"},
              {name: "Sách địa lý", price: "55.000"}];
  constructor() { }

  ngOnInit() {
  }

  addWord(){
    this.arrWords.push({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.isShowForm = false;
    this.newEn = '';
    this.newVn = '';
  }
  removeWord(id: number){
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }
  showStatusFilter(memorized:boolean){
    const viewAllSelect = this.filterStatus === 'viewall';
    const viewAllGreen = this.filterStatus === 'viewgreen' && memorized;
    const viewAllRed = this.filterStatus === 'viewred' && !memorized;
    return viewAllSelect || viewAllGreen || viewAllRed;
  }
}
