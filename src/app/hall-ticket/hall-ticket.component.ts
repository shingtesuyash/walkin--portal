import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-hall-ticket',
  templateUrl: './hall-ticket.component.html',
  styleUrls: ['./hall-ticket.component.scss']
})
export class HallTicketComponent implements OnInit {

  url:string='../../assets/icons/zeus-logo.svg';
  userPreferredData: any;
  userSelectedWalkin: any;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.userPreferredData=this.formDataService.userFormData;
    this.userSelectedWalkin=this.formDataService.selectedWalkin;
  }
}
