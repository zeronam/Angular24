import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  template: '<p>Name: {{ name }}</p><p>phone: {{ phone }}</p>',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  name = '';
  phone = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      const id = params.get('id');
      this.name = params.get('name');
      this.phone = params.get('phone');
    })
  }

}
