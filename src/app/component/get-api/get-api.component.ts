import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { core } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  // This is using injection
  // http=inject(HttpClient);
  // This is using dependency injection
  constructor(private http:HttpClient){

  }
  userList:any[]=[];

  studObj:any={
    "name":"",
    "email":"",
    "mobile":""
  }

  
  // http=inject(HttpClient);

  onSave(){

     this.http.post("http://localhost:8080/api/v1/registration",this.studObj).subscribe((res:any)=>{
    debugger;
      if(res.save){
        alert("Your registration added");
      }else{
        alert(res.message);
      }
     })
  }

  getAllUser(){
    debugger; 
    this.http.get("http://localhost:8080/api/v1/registration").subscribe((res:any)=>{

      this.userList=res;
    },error=>{
      debugger;
          })
  }
  onEdit( data:any){
    this.studObj=data;
  }
}
