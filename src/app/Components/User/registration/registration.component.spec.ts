import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

let component: RegistrationComponent;
let fixture: ComponentFixture<RegistrationComponent>;
let compiled: HTMLElement;
const letters = "TRWAGMYFPDXBNJZSQVHLCKE";

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

function getDNILetter(dni: string) {
  const dniNumber = parseInt(dni, 10);
  const letter = letters.charAt(dniNumber % 23);
  return letter;
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
    fixture.detectChanges();
    expect(getNthHeading(1).textContent).toContain('Dades identificatives');

    expect(getNthLabel(0).textContent).toBe("DNI: ");
    expect(getNthLabel(1).textContent).toBe("Codi de federat: ");
    expect(getNthLabel(2).textContent).toBe("Nom i cognoms: ");
    expect(getNthLabel(3).textContent).toBe("Telèfon: ");
    expect(getNthLabel(4).textContent).toBe("Email: ");

    expect(getInputFromLabel(0)).toBeTruthy();
    expect(getInputFromLabel(1)).toBeTruthy();
    expect(getInputFromLabel(2)).toBeTruthy();
    expect(getInputFromLabel(3)).toBeTruthy();
    expect(getInputFromLabel(4)).toBeTruthy();

    expect(getParagraphFromLabel(0)).toBeTruthy();
  });

  it('Register smooth meters data', () => {
    expect(getNthHeading(2).textContent).toContain('Inscripció');
  });

  it('Has a register button', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('button')?.textContent).toContain('Inscripció');
  });
});
