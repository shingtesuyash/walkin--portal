import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  pageOneData: any;
  pageTwoData: any;
  userFormData: any;
  selectedWalkin: any;
  profilePicVisible: boolean=false;
  
  constructor() { }

  createUser(){
    // Merge pageOneData and pageTwoData into a single object
    const userData = { ...this.pageOneData, ...this.pageTwoData };

    // Store the merged data in local storage
    localStorage.setItem('userAccountData', JSON.stringify(userData));

    // Console log the local storage data for verification
    console.log('Stored Data in Local Storage:', JSON.parse(localStorage.getItem('userAccountData')));
    this.profilePicVisible=true;
  }
}
