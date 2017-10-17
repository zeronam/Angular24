import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  person = {name: 'Nam Nguyen', age:30};
  birthday = new Date(2017,10,5);
  address = Promise.resolve('01 Tong Duy Tan');
  constructor() { }

  ngOnInit() {
  }

}

//https://angular.io/api/?type=pipe
