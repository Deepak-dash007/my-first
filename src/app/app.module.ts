import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { LoginComponent } from './login/login.component';
import { ViewTask1Component } from './view-task1/view-task1.component';
import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './addtask/addtask.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewTask1Component,
    HomeComponent,
    AddtaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
