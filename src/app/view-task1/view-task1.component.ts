import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-task',
  templateUrl: './view-task1.component.html',
  styleUrls: ['./view-task1.component.css']
})
export class ViewTask1Component implements OnInit {
  @Input() public task;
  @Input() public uname;
  @Output() id= new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  remove(id){
    this.id.next(id);
  }
}
