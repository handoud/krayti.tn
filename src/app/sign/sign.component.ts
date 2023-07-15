import { Component } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
rotate:Boolean = false;
stud(){
  this.rotate=true;
}
wali(){
  this.rotate=false;
}
}
