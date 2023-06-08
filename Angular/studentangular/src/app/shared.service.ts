import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

 readonly APIUrl= "http://127.0.0.1:8000/"

  constructor(private http:HttpClient) { }

  getStudentList():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+'studentAPI/')
  }

  addNewStudent(val:any){
    return this.http.post(this.APIUrl+ '/studentAPI/', val)
  }

  updateStudent(val:any){
    return this.http.put(this.APIUrl+'/studentAPI/', val)
  }

  deleteStudent(val:any){
    return this.http.delete(this.APIUrl+ '/studentAPI/'+ val)
  }





}
