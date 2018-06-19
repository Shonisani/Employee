import { Component } from '@angular/core';
import { objname } from '../app/object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

name;
surname;
idnumber;
role;


todolistArray=[];

constructor(){
  this.name=null;
  this.surname=null
  this.idnumber=null;
  this.role=null;
}

add(event){
  this.name=event.target.value;

}
inputname(event){
  this.name=event.target.value;

}
inputsurname(event){
  this.surname=event.target.value;

}
inputidnumber(event){
  this.idnumber=event.target.value;
}
inputrole(event){
  this.role=event.target.value;
}
method(){
  if(this.name!=null && this.surname){
    this.todolistArray.push(this.name +" "+name);

    method(){
    
    if(this.idnumber!=null &&this.role){
      this.todolistArray.push(this.idnumber +" "+this.role);


    }else
    alert('enter value')
    }

  }
addtoarray()
{
  let objinstance =new objname(this.name,this.surname,this.idnumber,this.role);
  if(this.name!=null && this.surname!=null && this.idnumber!=null && this.role!=null){this.todolistArray.push(objinstance);}

  else{alert('enter value');
}



  
}
deleteitem(employee){
  console.log(employee)
  for(var i=0; i<this.todolistArray.length;i++){
     if (this.todolistArray[i["name,surname"]==this.name,this.surname]){
       this.todolistArray.splice(i,1);
     }
  }

}
deletea(a){
  this.todolistArray.splice(a,1);
  }
}
