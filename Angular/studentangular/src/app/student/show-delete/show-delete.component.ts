import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent {


  constructor(private service:SharedService){}
  StudentList:any=[];

  ModalTitle:any;
  ActivateAddEditStud:boolean=false;
  stud:any;

  ngOnInit():void{
    this.refreshStudList();

  }
  addClick(){
    this.stud={
      studentID:0,
      studentName:"",
      age:"",
      place:""
    }
    this.ModalTitle="Add New Student";
    this.ActivateAddEditStud=true;
  }


  editClick(dataid:any){
    this.stud=dataid;
    this.ModalTitle="Edit student Details"
    this.ActivateAddEditStud=true
  }

  deleteClick(dataid:any){
    if(confirm('Are you sure....?')){
    this.service.deleteStudent(dataid.studentID).subscribe(data=>{
      alert(data.toString())
      this.refreshStudList()
    })
  }
  }


  closeClick(){
    this.ActivateAddEditStud=false;
    this.refreshStudList();
}

  refreshStudList(){
    this.service.getStudentList().subscribe(data=>{
      this.StudentList=data
    })
  }



}
