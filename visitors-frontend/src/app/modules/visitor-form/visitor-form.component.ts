import { VisitorService } from "src/app/services/visitor.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { timestamp } from "rxjs/operators";
import { observable, Observable } from "rxjs";

@Component({
  selector: "app-visitor-form",
  templateUrl: "./visitor-form.component.html",
  styleUrls: ["./visitor-form.component.css"]
})
export class VisitorFormComponent {
  constructor(public service: VisitorService, private http: HttpClient) {}
  visitorType = ["Guest", "Employee"];

  ids = ["Voter Id", "PAN", "Adhaar"];
  now;
  purposes = [
    { id: 1, value: "Interviewing" },
    { id: 2, value: "Meeting" },
    { id: 3, value: "New Joinee" }
  ];
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  form: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    employeeId: new FormControl("", Validators.required),
    inTime: new FormControl(),
    contactPerson: new FormControl(""),
    emailId: new FormControl("", [Validators.email, Validators.required]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.pattern(this.mobnumPattern)
    ]),
    comingFrom: new FormControl(""),
    idType: new FormControl(""),
    purpose: new FormControl(""),
    idNumber: new FormControl(""),
    officeLocation: new FormControl(""),
    visitorType: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      firstName: "",
      lastName: "",
      emailId: "",
      idType: "",
      contactPerson: "",
      phoneNumber: "",
      comingFrom: "",
      purpose: "",
      inTime: "",
      idNumber: "",
      officeLocation: "",
      visitorType: "",
      employeeId: " "
    });
  }

  ngDoCheck(): void {
    setTimeout(() => {
      this.now = new Date();
    }, 2000);
  }

  onClear() {
    this.form.reset();
  }
  onSubmit() {
    this.form.controls["employeeId"].setValue(0);
    console.log(this.form.controls["employeeId"].invalid);
    this.service.createNewVisitor(this.form.value).subscribe(val => {
      console.log(val);
    });
    this.form.reset();
    //  this.initializeFormGroup();
  }
  onSubmitEmployeeData() {
    this.service.createNewVisitor(this.form.value).subscribe(val => {
      console.log(val);
    });
    this.form.reset();
  }

  ngOnInit() {}
}
