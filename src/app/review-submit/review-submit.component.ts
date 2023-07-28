import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.scss']
})
export class ReviewSubmitComponent implements OnInit{
  url:string='../../assets/icons/zeus-logo.svg';
  pageOneData: any; 
  pageTwoData: any;
  constructor(private fb: FormBuilder, private formDataService: FormDataService){}

  ngOnInit() {
    // Retrieve data from the service to display in the review page
    this.pageOneData = this.formDataService.pageOneData;
    this.pageTwoData = this.formDataService.pageTwoData;
    console.log(this.pageOneData)
    console.log(this.pageTwoData)
  }
}
