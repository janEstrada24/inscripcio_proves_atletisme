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
  smoothMeters100: boolean = false;
  smoothMeters200: boolean = false;
  smoothMeters400: boolean = false;
  smoothMeters800: boolean = false;
  smoothMeters1000: boolean = false;

  setDniLetter() {
    const dniNumber = parseInt(this.dni, 10);
    const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    this.dniLetter = letters.charAt(dniNumber % 23);
  }

  setSmoothMettersChecked() {
    console.log(this.smoothMeters100);
    console.log(this.smoothMeters200);
    console.log(this.smoothMeters400);
    console.log(this.smoothMeters800);
    console.log(this.smoothMeters1000);
  }
}
