import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-div',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-div.component.html',
  styleUrl: './structural-div.component.css'
})
export class StructuralDivComponent {

  isDiv1Visiable:boolean=false;
  isDiv2Visiable:boolean=false;

  num1:string='';
  num2:string='';

  isActive:boolean=false;
  selectedState:string='';

  cityArray:string[]=['Pune','Mumbai','Nagpur','Thane'];

  studentList:any[]=[
    {studId:12,name:'AAA',city:'Pune',isActive:true},
    {studId:22,name:'BBB',city:'Mumbai',isActive:false},
    {studId:32,name:'CCC',city:'Patna',isActive:true},
    {studId:56,name:'DDD',city:'Ranchi',isActive:false},
    {studId:34,name:'EEE',city:'Kanpur',isActive:true},
    {studId:76,name:'FFF',city:'Gaya',isActive:false}
  ]
  showDiv1(){
    this.isDiv1Visiable=true;
  }
  hideDiv1(){
    this.isDiv1Visiable=false;
  }

  toggleDiv2(){

    this.isDiv2Visiable=!this.isDiv2Visiable;

    // if(this.isDiv2Visiable==false){
    //   this.isDiv2Visiable=true;
    // }else{
    //   this.isDiv2Visiable=false;
    // }

  }
}
