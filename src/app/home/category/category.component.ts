import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendServiceService } from 'src/app/backend-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private db:FormBuilder,private backendservice:BackendServiceService){}
  categoryForm=this.db.group({
    category:['']
  })
onSubmit(){
  //this.backendservice.categoryentry(this.categoryForm.value)
console.log(this.categoryForm.value)
}

}
