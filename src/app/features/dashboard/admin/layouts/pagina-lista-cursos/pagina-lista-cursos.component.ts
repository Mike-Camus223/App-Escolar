import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../../../core/services/curso.service'; 
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogListaComponent } from '../../components/delete-dialog-lista/delete-dialog-lista.component';

@Component({
  selector: 'app-pagina-lista-cursos',
  templateUrl: './pagina-lista-cursos.component.html',
  styleUrls: ['./pagina-lista-cursos.component.scss']
})
export class PaginaListaCursosComponent implements OnInit {

  cursos: any[] = [];
  columnasMostrar: string[] = [
    'idCurso', 
    'nombreCurso', 
    'nombreProfesor', 
    'genero', 
    'idProfesor', 
    'telefono', 
    'fecha', 
    'email', 
    'tiempo', 
    'salon',
    'Descri', 
    'acciones'
  ];

  constructor(
    private cursoService: CursoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  borrarCurso(curso: any): void {
    const dialogRef = this.dialog.open(DeleteDialogListaComponent, {
      width: '400px',
      data: { nombreCurso: curso.nombreCurso }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cursos = this.cursos.filter(c => c !== curso);
        localStorage.setItem('cursos', JSON.stringify(this.cursos));
      }
    });
  }
}
