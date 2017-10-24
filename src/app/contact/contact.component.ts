import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = [{id:1, name: 'Nam Nguyen', phone: '0903622688'},{id:2, name: 'Huong Nguyen', phone: '0903699699'}, {id:3, name: 'Thy Nguyen', phone: '0916965677'}]
  constructor() { }

  ngOnInit() {
  }

}
