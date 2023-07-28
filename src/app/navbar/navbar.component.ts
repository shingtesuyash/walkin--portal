import { Component, Input } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() visible:boolean;
  @Input() backUrl:string;

  constructor(private formDataService: FormDataService){}

  createAccount(){
    this.formDataService.createUser();
  }

}
