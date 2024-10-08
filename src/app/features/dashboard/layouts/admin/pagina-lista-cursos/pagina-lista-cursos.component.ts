import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../../../core/services/curso.service';
import { MatDialog } from '@angular/material/dialog';
import { confirmAlertsweet, confirmsuccessweet } from '../../../../../core/models/confirmsweet.interface';
import { SweetAlertResult } from 'sweetalert2';
import { SweetalertService } from '../../../../../core/services/sweetalert.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment.prod';
import { Curso } from '../../../../../core/models/curso.interface';
import { DialogAddCursosComponent } from '../dialog-add-cursos/dialog-add-cursos.component';

@Component({
  selector: 'app-pagina-lista-cursos',
  templateUrl: './pagina-lista-cursos.component.html',
  styleUrls: ['./pagina-lista-cursos.component.scss']
})
export class PaginaListaCursosComponent implements OnInit {

  estaCargando = false;

  cursos: Curso[] = [];
  columnasMostrar: string[] = [
    'vercurso',
    'idCurso',
    'nombreCurso',
    'nombreProfesor',
    'genero',
    'telefono',
    'fecha',
    'email',
    'tiempo',
    'precio',
    'tipoCurso',
    'salon',
    'descripcion',
    'acciones'
  ];

  constructor(
    private cursoService: CursoService,
    private dialog: MatDialog,
    private sweetalertService: SweetalertService,
    private httpclient: HttpClient
  ) { }

  ngOnInit(): void {
    this.actualizarCursos();
  }

  actualizarCursos(): void {
    this.estaCargando = true;
    this.cursoService.guardarCursos().subscribe(cursos => {
      this.cursos = cursos;
      localStorage.setItem('cursos', JSON.stringify(this.cursos));
      this.estaCargando = false;
    }, () => {
      this.estaCargando = false;
    });
  }

  agregarCurso(): void {
    const dialogRef = this.dialog.open(DialogAddCursosComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actualizarCursos(); 
      }
    });
  }

  openEditDialog(curso: Curso): void {
    const dialogRef = this.dialog.open(DialogAddCursosComponent, {
      width: '800px',
      data: curso
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actualizarCursos(); 
      }
    });
  }

  borrarCurso(curso: Curso): void {
    const alertOptions: confirmAlertsweet = {
      title: '¿Estás seguro?',
      text: `¿Realmente quieres eliminar el curso ${curso.nombreCurso}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡elimínalo!',
    };

    const secondOption: confirmsuccessweet = {
      title: 'Eliminación exitosa',
      text: `El curso ${curso.nombreCurso} ha sido eliminado con éxito.`,
      icon: 'success'
    };

    this.sweetalertService.ConfirmNotify(alertOptions, secondOption)
      .then((result: SweetAlertResult<any>) => {
        if (result.isConfirmed) {
          this.estaCargando = true;
          this.httpclient.delete<void>(`${environment.apiUrl}/cursos/${curso.idCurso}`)
            .subscribe({
              next: () => {
                this.actualizarCursos(); 
              },
              error: (err) => {
                this.sweetalertService.ErrorNotify({
                  title: 'Error',
                  text: 'Error al eliminar el curso',
                  icon: 'error',
                  confirmButtonText: 'Confirmar'
                });
                this.estaCargando = false;
              }
            });
        }
      })
      .catch(() => {
        this.sweetalertService.ErrorNotify({
          title: 'Error',
          text: 'Error en la confirmación',
          icon: 'error',
          confirmButtonText: 'Confirmar'
        });
      })
      .finally(() => {
        this.estaCargando = false;
      });
  }
}
