import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-next-mission',
  templateUrl: './next-mission.component.html',
  styleUrls: ['./next-mission.component.scss']
})
export class NextMissionComponent implements OnInit {

  addUserForm: any;
  candidates: any = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generateCreateForm()
  };

  // ---------- GENERATE FORM -------------
  generateCreateForm() {
    this.addUserForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      weight: [''],
      img: ['']
    });
  };

  // -------- SUBMIT FORM -----------
  onSubmit() {
    const formValue = this.addUserForm.value;
    console.log(formValue);

    this.candidates.push(formValue);
  };
};