
import { VisitorService } from 'src/app/services/visitor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component( {

  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
} )
export class VisitorFormComponent {

  constructor(public service: VisitorService, private http: HttpClient) { }
  visitorType = ['Guest','Employee'];

  ids = ['Voter Id', 'PAN', 'Adhaar'];
  now;
  purposes = [
    { id: 1, value: 'Interviewing' },
    { id: 2, value: 'Meeting' },
    { id: 3, value: 'New Joinee' }
  ];
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    employeeId: new FormControl('', Validators.required),
    inTime: new FormControl(),
    contactPerson: new FormControl(''),
    emailId: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(this.mobnumPattern)
    ]),
    comingFrom: new FormControl(''),
    idType: new FormControl(''),
    purpose: new FormControl(''),
    idNumber: new FormControl(''),
    officeLocation: new FormControl(''),
    visitorType: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      firstName: '',
      lastName: '',
      emailId: '',
      idType: '',
      contactPerson: '',
      phoneNumber: '',
      comingFrom: '',
      purpose: '',
      inTime: '',
      idNumber: '',
      officeLocation: '',
      visitorType: ''
    });
  }
  ngDoCheck(): void {

    setTimeout(() => { this.now = new Date();
    }, 2000)
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }
  onSubmit() {
     this.service.createNewVisitor(this.form.value).subscribe(
       (val) => {
             console.log(val);
       }
     );
  }
  onSubmitEmployeeData(){

  }

  ngOnInit() {
  }

}
