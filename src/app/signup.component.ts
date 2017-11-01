import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-signup',
  template: '<p>{{message}}</p><form (ngSubmit)="onSubmit()" [formGroup]="FormSignUp"><input placeholder="Email" formControlName="email"/><p  *ngIf="FormSignUp.controls.email.invalid && FormSignUp.controls.email.touched">Email is required</p><input type="password" placeholder="password" formControlName="password"/><button [disabled]="FormSignUp.invalid">Submit</button><div formGroupName="subject"><label><input type="checkbox" name="NodeJS" formControlName="node"/> Node JS</label><label><input type="checkbox" name="ReactJS" formControlName="react"/> ReactJS</label><label><input type="checkbox" name="AngularJS" formControlName="angular"/> AngularJS</label></div></form>'
})

export class SignupComponent implements OnInit {
  FormSignUp: FormGroup;
  arr = [1,2,5,8];
  message:string = '';
  constructor(private fb: FormBuilder, private http: Http) { }
  ngOnInit(): void {
    this.FormSignUp = this.fb.group({
      email: ['', Validators.required],
      password: '',
      subject: this.fb.group({
        node: false,
        react: false,
        angular: true
      })

    })
    const mapArr = this.arr.map((number, index, arr) => number);
    const filterArr = this.arr.filter((a) => a>1);
    const totalArr = this.arr.reduce( (a,b) => a + b );
    const spliceArr = this.arr.splice(2,2);
    
    console.log("Filter " + filterArr);
    console.log("Total " + totalArr);
    console.log("Splice " + spliceArr);
    console.log("Map " + mapArr);
  }
  onSubmit() {
    const url = 'http://localhost:3000/signup';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(this.FormSignUp.value);
    console.log(body);
    return this.http.post(url, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then(resJson => this.message = resJson.message);
  }
}
