import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() name: String;
  @Input() age: Number;
  constructor() { }

  ngOnInit() {
  }

}
