import {Component} from '@angular/core';
import {SigninService} from './signin.service';

@Component({
  selector: 'app-signin',
  template: '<form (ngSubmit)="submitForm(FormSignin)" #FormSignin="ngForm"><p *ngIf="txtEmail.touched && txtEmail.errors?.required">Email is required</p><p *ngIf="txtEmail.touched && txtEmail.errors?.email">Email is not valid</p><input placeholder="email" ngModel #txtEmail="ngModel" name="email" required email/><input type="password" name="password" placeholder="password" ngModel #txtPassword="ngModel" minlength="6" patern="[a-z]*"/><div ngModelGroup="group"><label><input type="checkbox" [ngModel]="false" name="NodeJS"/> Node JS</label><label><input type="checkbox" [ngModel]="false" name="ReactJS"/> ReactJS</label><label><input type="checkbox" [ngModel]="false" name="AngularJS"/> AngularJS</label></div><button [disabled]="FormSignin.invalid">Submit</button></form><p>{{txtEmail.errors | json}}</p><p>{{txtPassword.errors | json}}</p><p>{{FormSignin.value | json}}</p>',
  providers: [SigninService]
})

export class SigninComponent{
  constructor(private signinService: SigninService){}
  submitForm(FormSignin){
    this.signinService.sendPos(FormSignin.value)
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }
}
