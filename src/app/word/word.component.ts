import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['../app.component.css']
})

export class WordComponent implements OnInit{
  name = '';
  constructor(){

  }
  ngOnInit(){
  }
  showKey(event){
    this.name = event.target.value;
  }

}
