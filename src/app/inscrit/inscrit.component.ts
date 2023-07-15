import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent {

error:Boolean=false;
name="";
lastName="";
ddn="";
pName="";
email="";
tel="";
pass="";
repass="";
wileya=[{esm:"monastir"},{esm:"tun"},];
lvl=[{esm:"7eme"},{esm:"8eme"},{esm:"9eme"},];
link="";
i="";
f="";




user ={
name :"",//nom de eleve
lastName:"",// nom de famille 
ddn:"",//date de nessance
pName:"",//le nom de parent 
email:"",
pass:"",
tel:"",
wileya:"",
lvl:"",
link:"",
}
clicked(){
  this.error=!this.error
}

step=1;
next1(){
this.user.name=this.name;
this.user.lastName=this.lastName;
this.user.ddn=this.ddn;
this.user.pName=this.pName;
if (this.user.name=="" ||this.user.lastName==""||this.user.ddn==""  ) {
  this.error=true;
}
else{
  this.step=this.step+1;

}

}
next2(){
  this.user.email=this.email;
  this.user.tel=this.tel;
  this.user.pass=this.pass;
 
  if (this.user.email=="" && this.user.tel=="" ||this.user.pass=="" ||this.user.pass!==this.repass) {
    this.error=true;
  }
  else{
    this.step=this.step+1;
 
  }
  
  }
  next3(){
    this.user.wileya=this.i;
    this.user.lvl=this.f;
   
    if (this.user.wileya=="" ||this.user.lvl=="" ) {
      this.error=true;
    }
    else{
      this.step=this.step+1;
    }
    
  }
  previous(){
    this.step=this.step-1
  }

}
//jawna behi barra shouf el responsive ken dja responsive et3ada nayek khir 