import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl:'./databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
//string,number,boolean,date
courseName:string="Angular 18";

stateName:string="Goa";

inputType="radio";

myClassName:string="bg-primary";

rollNo:number=123;

isIndian:boolean=true;

currentDate:Date=new Date();

constructor(){

this.courseName="Java Full Stack Development";

this.firstName.set("Rahul Kumar Yadav");  

}

firstName=signal("Rahul Kumar Shantirao");

changeCourseName(){

  this.courseName="React Js";
}

showAlert(message:string){
  
  alert(message);
}


}
