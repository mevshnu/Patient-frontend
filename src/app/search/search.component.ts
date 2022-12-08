import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  ids=""
  searchData:any=[]
  
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data ={"ids":this.ids}
    console.log(data)
    this.api.searchData(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("invalid")
        }
        else
        {
          this.searchData = response;
        }
      }
    )
  }
  deletebtnclick=(id:any)=>
{
  let data:any={"id":id}
  this.api.deletepatient(data).subscribe(
    (generater:any)=>
    {
      console.log=generater;
    }
  )
}

}
