import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public x={}
  public task=[{"id":1,"name":"Sample Angular","desc":"Create an sample Angular App","date":"2020-06-3","priority":"High","assignto":"Deepak","status":"true"},
  {"id":2,"name":"Angular","desc":"Create an sample Angular App","date":"2020-06-3","priority":"Medium","assignto":"Deepak","status":"false"} ]
  public id=10;
  title = 'test';
  public auth=false;
  public view=false;
  public add=false;
  public uname="";
  public logout=false;
  task_add(data){
    data.id=this.id;
    this.task.push(data);
    this.id+=1;
    this.add=false;
    console.log(data);
  }
  remove_id(id){
    for(let i=0;i<this.task.length;i++){
      if (this.task[i].id==id){
        this.task[i].status="false";
        console.log(id);
      }
    }
  }
}
