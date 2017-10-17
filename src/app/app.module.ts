import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {WordComponent} from './word/word.component';
import { BooksComponent } from './books/books.component';
import {UserFormComponent} from './user-form/user-form.component';
import {ParentComponent} from './parent.components';
import {ChildComponent} from './child.components';
import {ParentComponent2} from './parent2.components';
import {ChildComponent2} from './child2.components';
import {CardComponent} from './card.components';
import {LearnPipeComponent} from './learn-pipe/learn-pipe.component';
import {RoundPipe} from './round-pipe';
import {IpComponent} from './ip.component';
import {IpService} from './ip.service';
import {WeatherComponent} from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BooksComponent,
    UserFormComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent2,
    ChildComponent2,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
