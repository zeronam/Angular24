import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {WordComponent} from './word/word.component';
import { BooksComponent } from './books/books.component';
import {UserFormComponent} from './user-form/user-form.component';
import {ParentComponent} from './parent.components';
import {ChildComponent} from './child.components';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BooksComponent,
    UserFormComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
