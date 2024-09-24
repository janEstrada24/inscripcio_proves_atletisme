import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  dni!: string;
  dniLetter!: string;
  codiFederat!: number;
  nomICognoms!: string;
  telefon!: string;
  email!: string;

  setDniLetter() {
    const dniNumber = parseInt(this.dni, 10);
    const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    this.dniLetter = letters.charAt(dniNumber % 23);
  }
}
