import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  url:string='../../assets/icons/zeus-logo.svg';
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  contactRegEx = "[789][0-9]{9}"
  jobs = [
    { label: 'Instructional Designer', value: 'Instructional Designer' },
    { label: 'Software Engineer', value: 'Software Engineer' },
    { label: 'Software Quality Engineer', value: 'Software Quality Engineer' }
  ];

  pageOneForm: any;
  selectedFile: File | null = null;
  selectedFileURL: any;

  constructor(private fb: FormBuilder, private formDataService: FormDataService){
    this.pageOneForm=fb.group({
      fname: ['',Validators.required],
      lname: ['',Validators.required],
      email:['',[Validators.required, Validators.pattern(this.emailRegEx)]],
      profilePic: [''],
      phone: ['',[Validators.required, Validators.pattern(this.contactRegEx)]],
      resume:[''],
      portfolio:[''],
      referral:[],
      sendUpdate:[false],
      jobRoles: fb.array([])
    })
  }

  get fc(){
    return this.pageOneForm.controls;
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0] || null;

    if (file) {
      // Update the selectedFile and selectedFileURL variables
      this.selectedFile = file;
      this.selectedFileURL = URL.createObjectURL(file);

      // Update the profilePic form control with the selected file
      this.pageOneForm.get('profilePic')?.setValue(this.selectedFileURL);
      
    }
  }

  onResumeSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0] || null;
    
    if (file) {
      this.pageOneForm.get('resume')?.setValue(file);
      
    }
  }

  get jobRolesArray() {
    return this.pageOneForm.get('jobRoles') as FormArray;
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

  nextButton(){
    this.formDataService.pageOneData=this.pageOneForm.value;
    console.log(this.formDataService.pageOneData)
  }

}
