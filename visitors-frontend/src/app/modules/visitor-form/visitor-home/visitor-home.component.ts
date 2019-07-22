import {Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'visitor-home',
  templateUrl: 'visitor-home.component.html',
  styleUrls: ['visitor-home.component.css'],
})
export class VisitorComponent {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    model:{[propName:string] :any} = {}
  
    constructor(private _formBuilder: FormBuilder) {}
  
    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        email: ['', [Validators.required,Validators.email]],
        phoneNumber: ['', [Validators.required]]
      });

      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }
}