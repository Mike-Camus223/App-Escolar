import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../../../core/services/curso.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalleCursoDialogComponent } from '../../components/detalle-curso-dialog/detalle-curso-dialog.component';
import { ConfirmacionInscripcionDialogComponent } from '../../components/confirmacion-inscripcion-dialog/confirmacion-inscripcion-dialog.component';

@Component({
  selector: 'app-ver-cursos-user',
  templateUrl: './ver-cursos-user.component.html',
  styleUrl: './ver-cursos-user.component.scss'
})
export class VerCursosUserComponent implements OnInit {

  cursos: any[] = [];

  constructor(
    private cursoService: CursoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  verDetalles(curso: any): void {
    const dialogRef = this.dialog.open(DetalleCursoDialogComponent, {
      width: '500px',
      data: curso
    });
  }

  inscribirse(curso: any): void {
    const dialogRef = this.dialog.open(ConfirmacionInscripcionDialogComponent, {
      width: '400px',
      data: { nombreCurso: curso.nombreCurso }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {}
    });
  }
}
