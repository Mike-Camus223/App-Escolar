import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetalertService } from '../../../../core/services/sweetalert.service';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/UserType.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  ocultar = true;
  ocultar2 = true;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isLoading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private sweetalert: SweetalertService,
    private authService: AuthService,
    private router: Router
  ) {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(40)]],
      apellido: ['', [Validators.required, Validators.maxLength(40)]],
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      contraseña: ['', [Validators.required, Validators.maxLength(60)]]
    });
  }

  isEditable = true;

  Oninput(): void {
    this.secondFormGroup.get('email')?.reset();
  }

  async onSubmit() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      this.isLoading = true;

      const userData: User = {
        nombre: this.firstFormGroup.get('nombre')?.value,
        apellido: this.firstFormGroup.get('apellido')?.value,
        contraseña: this.secondFormGroup.get('contraseña')?.value,  
        rol: 'User',
        email: this.secondFormGroup.get('email')?.value
      };

      try {
        await this.authService.register(userData).toPromise();

        await this.sweetalert.SendNotify({
          title: 'Registro Exitoso',
          text: 'Usted ha sido registrado con éxito!',
          icon: 'success',
          confirmButtonText: 'Confirmar'
        });

        this.router.navigate(['/auth/login']);
      } catch (error) {
        console.error('Error al registrar el usuario', error);
        alert('error de user');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
