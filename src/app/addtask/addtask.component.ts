import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  public today=new Date();
  public min_day: string = this.today.getFullYear()+'-'+this.today.getMonth()+'-'+this.today.getDate();
  public name="";
  public details="";
  public priority="";
  public date="";
  public assignto="";
  @Output() data= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    if(this.name!="" && this.details!="" && this.date!="" && this.assignto!=""){
    if(confirm("Please Confirm")){
      this.data.next({"id":0,"name":this.name,"desc":this.details,"date":this.date,"priority":this.priority,"assignto":this.assignto,"status":"true"});
    }}
    if(this.name==""){
      confirm("Please Enter a Name")
    }
    else if(this.details==""){
      confirm("Please Enter Details")
    }
    else if(this.date==""){
      confirm("Please Enter a Due Date")
    }
    else if(this.assignto==""){
      confirm("Please It to someone")
    }
    
  }

}
