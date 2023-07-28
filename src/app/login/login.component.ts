import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  togglePassword(){
    var password: HTMLInputElement|null = document.querySelector('#id_password');
    var type = password?.getAttribute('type') === 'password' ? 'text' : 'password';
    password?.setAttribute('type', type);
  }

  form:any;
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  url:string='../../assets/icons/logo_header.svg';

  constructor(fb:FormBuilder){
    this.form=fb.group({
      email:['',[Validators.required, Validators.pattern(this.emailRegEx)]],
      password:['',[Validators.required]],
      remember:[false,]
    }
    )
  }

  get fc(){
    return this.form.controls;
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset();
  }
}
