import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AgeValidator } from './age-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(15),
        this.forbiddenNameValidator(/bob/i) //自定义验证
      ]),
    surName: new FormControl('',
      [
        Validators.required,
      ]),
    age: new FormControl('',
      [
        Validators.required,
        AgeValidator.ageRange //引用外部自定义验证
      ]),
    email: new FormControl('',
      [
        Validators.required,
        Validators.email,
      ])
  })

  forbiddenNameValidator(nameRe: RegExp){
    return (control: AbstractControl) => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(data => { //监听表单变化
      console.log('Form changes', data)
    });
   }

  get email() {
    return this.form.get('email')
  }

  get name() {
    return this.form.get('name');
  }

  get age() {
    return this.form.get('age');
  }

  get surName() {
    return this.form.get('surName');
  }

  clearInputAreas() {
    this.form.reset();
  }
  
  onSubmit() {
    console.log(this.form.value)
  }
}