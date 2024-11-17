import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myForm!: FormGroup;
  submitted = false;
  constructor(private http: HttpClient, private fb: FormBuilder, private toastr:ToastrService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    delete this.myForm.value.terms
    let data = {
      ...this.myForm.value
    }
    console.log(data)
    return this.http.post<any>(`https://real-state-project-pearl.vercel.app/api/book-visit`,
      data, { headers }).subscribe((res: any) => {
     
        if(res?.success==true){
          this.toastr.success('Request Sent Successfully')
          this.submitted = false;
          this.myForm.reset()
        }else{
          this.toastr.error(res?.message)
        }
        console.log(res)
      });
  }
}
