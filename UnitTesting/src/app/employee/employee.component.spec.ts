import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmployeeComponent', () => {
  let comp: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(()=>{
      fixture=TestBed.createComponent(EmployeeComponent);
      comp=fixture.componentInstance;
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
    });
  }));

    it(`should have as text 'employee page'`,async(()=>{
      expect(comp.text).toEqual('Employee Details Page');
    }));
    it(`should set submitted to true`,async(()=>{
      comp.onSubmit();
      expect(comp.submitted).toBeTruthy();
    }));
    it(`form should be invalid`,async(()=>{
      comp.employeeForm.controls['firstName'].setValue('');
      comp.employeeForm.controls['lastName'].setValue('');
      comp.employeeForm.controls['salary'].setValue('');
      comp.employeeForm.controls['street1'].setValue('');
      comp.employeeForm.controls['street2'].setValue('');
      comp.employeeForm.controls['location'].setValue('');
      expect(comp.employeeForm.valid).toBeFalsy();
    }));
    it(`form should be valid`,async(()=>{
      comp.employeeForm.controls['firstName'].setValue('Elite');
      comp.employeeForm.controls['lastName'].setValue('Prabu');
      comp.employeeForm.controls['salary'].setValue('15000');
      comp.employeeForm.controls['street1'].setValue('MSM');
      comp.employeeForm.controls['street2'].setValue('Sai');
      comp.employeeForm.controls['location'].setValue('Perambur');
      expect(comp.employeeForm.valid).toBeTruthy();
    }));
    
  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});

