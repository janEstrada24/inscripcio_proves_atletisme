import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

let component: RegistrationComponent;
let fixture: ComponentFixture<RegistrationComponent>;
let compiled: HTMLElement;

function getNthLabel(index:number) {
  return compiled.querySelectorAll("label")[index]; 
}

function getInputFromLabel(labelIndex:number) {
  return getNthLabel(labelIndex)!.querySelector("input");
}

describe('RegistrationComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has identity data', () => {
    expect(getNthLabel(0).textContent).toBe("DNI: ");

  });
});
