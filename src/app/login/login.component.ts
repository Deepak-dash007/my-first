import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dbname= [{"id":"Deepak","pass":"12345"},{"id":"Krish","pass":'12345'},{"id":"Sreesha","pass":'12345'},{"id":"Farhana","pass":'12345'}];
  public username="";
  public password="";
  public message=false;
  @Output() public authentication= new EventEmitter();
  @Output() public uname= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  check(){
    let auth=false;
    this.dbname.forEach(element => {
      
      if (this.username==element.id && this.password == element.pass){
        auth=true;
        this.authentication.emit(true);
        this.uname.emit(this.username);
      }
    });  
    if (auth==false){
      this.message=true
    }
    console.log(this.authentication);
  }

}
