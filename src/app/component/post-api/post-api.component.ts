import { HttpClient } from '@angular/common/http';
import { assertPlatform, Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

    studObj:any={
       "name":"",
       "email":"",
       "mobile":""
    };

    http=inject(HttpClient);

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
}
