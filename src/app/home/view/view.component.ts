import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendServiceService } from 'src/app/backend-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  constructor(private datepipe:DatePipe,private fb:FormBuilder,private backendservice:BackendServiceService){}
  DataArray:any
  TrasfromedTime:any
  DArray:any=[]
  searchform=this.fb.group({
    datestart:[''],
    dateend:['']
  })
  onSubmit(){
this.backendservice.searchdate(this.searchform.value.datestart,this.searchform.value.dateend).subscribe((res) => {
   this.DataArray=res
  // console.log(this.DataArray)
  // console.log(this.DataArray.date)
  
  this.DataArray.forEach((element: any) => {
     this.TrasfromedTime =this.datepipe.transform(element.date, 'EEEE, MMMM d, y');
this.DArray.push(this.TrasfromedTime)
    // console.log(this.TrasfromedTime)
  });
  })
  console.log(this.DArray)
// console.log(this.searchform.value.dateend)
// console.log(this.searchform.value.datestart)
console.log(this.searchform.value)
  }

}
