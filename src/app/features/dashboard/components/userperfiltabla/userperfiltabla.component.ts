import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/UserType.interface';

@Component({
  selector: 'app-userperfiltabla',
  templateUrl: './userperfiltabla.component.html',
  styleUrl: './userperfiltabla.component.scss'
})
export class UserperfiltablaComponent implements OnInit {


  Usuario: User | null = null;
  columnas: string[] = [
    'nombre',
    'apellido', 
    'email'
  ];

  constructor(private authservice: AuthService ,private cd: ChangeDetectorRef) {}  

  ngOnInit(): void {
    this.authservice.ObtenerUsuarioAutenticado().subscribe(user => {
      this.Usuario = user;
    });
  }
}
