import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdetailComponent } from './empdetail.component';
import { EmpService } from './emp.service';
import { SampleService } from './Mock/sample.service';

describe('EmpdetailComponent', () => {
  let comp: EmpdetailComponent;
  let fixture: ComponentFixture<EmpdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpdetailComponent ],
      providers:[
        {
          provide: EmpService,
          useClass: SampleService
        }
      ]
    })
    .compileComponents().then(()=>{
      fixture=TestBed.createComponent(EmpdetailComponent);
      comp=fixture.componentInstance;
    });
  }));

  // it('should have recieved to be true',async(()=>{
  //   expect(comp.recieved).toBeTruthy();
  // }));
  it('should have title as Emp Detail Page',async(()=>{
    expect(comp.text).toContain('Emp Detail Page');
  }));
  it('should create component',async(()=>{
    expect(comp).toBeTruthy();
  }));
  it('should have one Empdetail',async(()=>{
    expect(comp.emp.length).toEqual(5)
  }));
  it('html should render one detail',async(()=>{
    fixture.detectChanges();
    const el=fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('CS');
  }));
  it('html should render one detail',async(()=>{
    fixture.detectChanges();
    const el=fixture.nativeElement.querySelector('h2');
    expect(el.innerText).toContain('Employee Details');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdetailComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
