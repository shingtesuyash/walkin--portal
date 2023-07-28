import { Component,Input } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() imgUrl:string;
  storedData:any;
  profileVisible:boolean= this.formDataService.profilePicVisible;

  constructor(private formDataService: FormDataService){
    console.log(this.imgUrl);

      // Retrieve the data from local storage and parse it
      this.storedData = JSON.parse(localStorage.getItem('userAccountData'));
  }
}
