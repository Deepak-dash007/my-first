import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() public view  = new EventEmitter();
  @Output() public add = new EventEmitter();
  @Output() public authentication = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  view_task(){
    this.view.emit(true);
    this.add.emit(false);
  }
  add_task(){
    this.add.emit(true);
    this.view.emit(false);
  }
  logout(){
    this.add.emit(false);
    this.view.emit(false);
    this.authentication.emit(false);
  }
}
