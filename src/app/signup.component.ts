import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  template: '<form (ngSubmit)="onSubmit()" [formGroup]="FormSignUp"><input placeholder="Email" formControlName="email"/><p  *ngIf="FormSignUp.controls.email.invalid && FormSignUp.controls.email.touched">Email is required</p><input type="password" placeholder="password" formControlName="password"/><button [disabled]="FormSignUp.invalid">Submit</button><div formGroupName="subject"><label><input type="checkbox" name="NodeJS" formControlName="node"/> Node JS</label><label><input type="checkbox" name="ReactJS" formControlName="react"/> ReactJS</label><label><input type="checkbox" name="AngularJS" formControlName="angular"/> AngularJS</label></div></form>'
})

export class SignupComponent implements OnInit{
  FormSignUp : FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit():void{
    this.FormSignUp = this.fb.group({
      email : ['', Validators.required],
      password: '',
      subject: this.fb.group({
        node: false,
        react: false,
        angular: true
      })

    })
  }
  onSubmit(){
    console.log(this.FormSignUp.value);
  }
}
