import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchpatient=()=>
  {
    return this.http.get("http://localhost:8080/viewall")
  }
  addpatient=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  searchData=(data:any)=>
  {
    return this.http.post("http://localhost:8080/search",data)
  }
  deletepatient=(datatodelete:any)=>
{
  return this.http.post("http://localhost:8080/delete",datatodelete)
}
}
