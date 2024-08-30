import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../../../../../core/services/curso.service';
import { AlertModalComponent } from '../../../components/alert-modal/alert-modal.component'; 
import { MatDialog } from '@angular/material/dialog';
import { Curso } from '../../../../../core/models/curso.interface';

@Component({
  selector: 'app-panel-de-cursos',
  templateUrl: './panel-de-cursos.component.html',
  styleUrls: ['./panel-de-cursos.component.scss']
})
export class PanelDeCursosComponent implements OnInit {

  cursoForm: FormGroup;
  cursos: Curso[] = [];

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private dialog: MatDialog
  ) {
    this.cursoForm = this.fb.group({

      idCurso: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombreProfesor: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
      genero: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombreCurso: ['', Validators.required],
      fecha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tiempo: ['', Validators.required],
      precioCurso: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      tipoCurso: ['', Validators.required],
      salon: ['', Validators.required],
      Descri: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCursos(); 
  }

  loadCursos(): void {
    this.cursoService.guardarCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
  }

  onSubmit(): void {
    if (this.cursoForm.valid) {
      this.cursoService.saveCurso(this.cursoForm.value).subscribe(() => {
        this.dialog.open(AlertModalComponent, {
          data: { nombreCurso: this.cursoForm.value.nombreCurso }
        });
        this.cursoForm.reset();
        this.loadCursos();
      });
    }
  }
}
