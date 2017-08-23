import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { BlackboardContentComponent } from './blackboard-content/blackboard-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    BlackboardContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
