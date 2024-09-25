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
  smoothMeters: number = 0;
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
    if(this.smoothMeters100) {
      this.smoothMeters += 100;
    } else {
      this.smoothMeters -= 100;
    }

    if(this.smoothMeters200) {
      this.smoothMeters += 200;
    } else {
      this.smoothMeters -= 200;
    }

    if(this.smoothMeters400) {
      this.smoothMeters += 400;
    } else {
      this.smoothMeters -= 400;
    }

    if(this.smoothMeters800) {
      this.smoothMeters += 800;
    } else {
      this.smoothMeters -= 800;
    }

    if(this.smoothMeters1000) {
      this.smoothMeters += 1000;
    } else {
      this.smoothMeters -= 1000;
    }

    console.log(this.smoothMeters);
  }
}
