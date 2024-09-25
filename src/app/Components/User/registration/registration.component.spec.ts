import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

let component: RegistrationComponent;
let fixture: ComponentFixture<RegistrationComponent>;
let compiled: HTMLElement;
const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
const regNumbers = new RegExp('^[0-9]+$');

function getNthHeading(index:number) {
  return compiled.querySelectorAll("h1")[index]; 
}

function getNthLabel(index:number) {
  return compiled.querySelectorAll("label")[index]; 
}

function getInputFromLabel(labelIndex:number) {
  return getNthLabel(labelIndex)!.querySelector("input");
}

function getParagraphFromLabel(labelIndex:number) {
  return getNthLabel(labelIndex)!.querySelector("p");
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

  it('should render title Inscripcio proves atletisme', () => {
    fixture.detectChanges();
    expect(getNthHeading(0).textContent).toContain('Inscripció proves atletisme');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has identity data', () => {
    expect(compiled.querySelectorAll("div")[0].style.border).toBe("1px solid black");

    const inputDni:HTMLInputElement = getInputFromLabel(0)!;
    const inputFederationCode:HTMLInputElement = getInputFromLabel(1)!;
    const inputNomICognoms:HTMLInputElement = getInputFromLabel(2)!;
    const inputPhone:HTMLInputElement = getInputFromLabel(3)!;
    const inputEmail:HTMLInputElement = getInputFromLabel(4)!;

    expect(getNthHeading(1).textContent).toContain('Dades identificatives');

    expect(getNthLabel(0).textContent).toBe("DNI: ");
    expect(getNthLabel(1).textContent).toBe("Codi de federat: ");
    expect(getNthLabel(2).textContent).toBe("Nom i cognoms: ");
    expect(getNthLabel(3).textContent).toBe("Telèfon: ");
    expect(getNthLabel(4).textContent).toBe("Email: ");

    expect(inputDni).toBeTruthy();
    expect(inputFederationCode).toBeTruthy();
    expect(inputNomICognoms).toBeTruthy();
    expect(inputPhone).toBeTruthy();
    expect(inputEmail).toBeTruthy();

    expect(getParagraphFromLabel(0)).toBeTruthy();

    inputDni.value = "12345678";
    inputFederationCode.value = "31";
    inputNomICognoms.value = "John Doe";
    inputPhone.value = "999 999 999"; 
    inputEmail.value = "johnDoe@gmail.com";

    inputDni.dispatchEvent(new Event("input"));
    inputEmail.dispatchEvent(new Event("input"));
    inputFederationCode.dispatchEvent(new Event("input"));
    inputNomICognoms.dispatchEvent(new Event("input"));
    inputPhone.dispatchEvent(new Event("input"));
    fixture.detectChanges();
  });

  it('Register smooth meters data', () => {
    expect(compiled.querySelectorAll("div")[1].style.border).toBe("1px solid black");
    expect(getNthHeading(2).textContent).toContain('Inscripció');
    
    expect(getNthLabel(5).textContent).toBe(" 100 smooth meters ");
    expect(getNthLabel(6).textContent).toBe(" 200 smooth meters ");
    expect(getNthLabel(7).textContent).toBe(" 400 smooth meters ");
    expect(getNthLabel(8).textContent).toBe(" 800 smooth meters ");
    expect(getNthLabel(9).textContent).toBe(" 1000 smooth meters ");

    expect(getInputFromLabel(5)?.type).toBe("checkbox");
    expect(getInputFromLabel(6)?.type).toBe("checkbox");
    expect(getInputFromLabel(7)?.type).toBe("checkbox");
    expect(getInputFromLabel(8)?.type).toBe("checkbox");
    expect(getInputFromLabel(9)?.type).toBe("checkbox");
  });

  it('Has a register button', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('button')?.textContent).toContain('Inscripció');
  });
});
