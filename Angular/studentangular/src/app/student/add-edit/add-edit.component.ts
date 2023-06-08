import { Component, Input,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {


  constructor(private service:SharedService){}

@Input() stud:any;
studentID:any;
studentName:any;
age:any;
place:any;


ngOnInit():void{
  this.studentID=this.stud.studentID
  this.studentName=this.stud.studentName
  this.age=this.stud.age
  this.place=this.stud.place
}
saveStudent(){
  var val={
    studentID:this.studentID,
    studentName:this.studentName,
    age:this.age,
    place:this.place,
  }
  this.service.addNewStudent(val).subscribe(res=>{
    alert(res.toString())
  })
  
}

updateSudent(){
  var val={
    studentID:this.studentID,
    studentName:this.studentName,
    age:this.age,
    place:this.place
  };
  this.service.updateStudent(val).subscribe(res=>{
    alert(res.toString())
  })
}






}
