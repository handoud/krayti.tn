import { Component } from '@angular/core';

@Component({
  selector: 'app-login-sud',
  templateUrl: './login-sud.component.html',
  styleUrls: ['./login-sud.component.css']
})
export class LoginSudComponent {
  visible :boolean =true;
  changetype:boolean =true;
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  email="";
  password="";
  user ={
    email:"",
    password:"",
  }
  getInfo(){
    this.user.email=this.email;
    this.user.password=this.password;
  }
}
