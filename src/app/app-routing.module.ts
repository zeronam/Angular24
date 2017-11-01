import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ContactComponent} from './contact/contact.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'detail/:id/:name/:phone', component: ContactDetailComponent},
  // {path: '', redirectTo: 'words', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routesConfig), CommonModule ],
  declarations: [
    ContactComponent,
    ContactDetailComponent,
    PageNotFoundComponent
  ],
  exports:[RouterModule]
})

export class AppRoutingModule{}
