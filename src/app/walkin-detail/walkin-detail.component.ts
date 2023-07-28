import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-walkin-detail',
  templateUrl: './walkin-detail.component.html',
  styleUrls: ['./walkin-detail.component.scss']
})
export class WalkinDetailComponent implements OnInit {
  url:string='../../assets/icons/zeus-logo.svg';
  showContent = false;
  showUI=false;
  showSE=false;
  showQA=false;
  rolesOffered:[any];
  walkinData: any; // To store the selected card's data
  userForm: any;
  jobs = [
    { label: 'Instructional Designer', value: 'Instructional Designer' },
    { label: 'Software Engineer', value: 'Software Engineer' },
    { label: 'Software Quality Engineer', value: 'Software Quality Engineer' }
  ];

  constructor(private route: ActivatedRoute,private fb: FormBuilder, private formDataService: FormDataService) {
    this.userForm=fb.group({
      selectedTime: [''],
      resume:[''],
      jobRoles: fb.array([])
    })
   }

  ngOnInit() {
    // Access the card data from the query parameters
    this.route.queryParams.subscribe(params => {
      this.walkinData = JSON.parse(params['walkinData']); // Use square brackets notation

      this.rolesOffered=this.walkinData.roles;
      this.formDataService.selectedWalkin=this.walkinData;
      console.log(this.formDataService.selectedWalkin)
    });
  }

  get fc(){
    return this.userForm.controls;
  }

  onResumeSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0] || null;
    
    if (file) {
      this.userForm.get('resume')?.setValue(file);
      
    }
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }
  

  get jobRolesArray() {
    return this.userForm.get('jobRoles') as FormArray;
  }
  
  getFormControl(value: string): FormControl {
    return this.fb.control(this.jobRolesArray.value.includes(value));
  }

  onCheckboxChange(value: string, event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.jobRolesArray.push(this.fb.control(value));
    } else {
      const index = this.jobRolesArray.value.findIndex((role: string) => role === value);
      this.jobRolesArray.removeAt(index);
    }
    
  }

  checkLabelExist(labelToCheck: string): boolean {
    return this.rolesOffered.some(role => role.label === labelToCheck);
  }

  apply(){
    this.formDataService.userFormData=this.userForm.value;
    console.log(this.formDataService.userFormData)
  }

}
