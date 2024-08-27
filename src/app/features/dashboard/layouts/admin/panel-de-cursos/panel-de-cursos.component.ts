import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../../../../../core/services/curso.service';
import { AlertModalComponent } from '../../../components/alert-modal/alert-modal.component'; 
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-panel-de-cursos',
  templateUrl: './panel-de-cursos.component.html',
  styleUrls: ['./panel-de-cursos.component.scss']
})
export class PanelDeCursosComponent implements OnInit {

  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private dialog: MatDialog){
    this.cursoForm = this.fb.group({
      nombreProfesor: ['', [Validators.required, Validators.pattern('^[a-zA-Z\s]+$')]],
      genero: ['', Validators.required],
      id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombreCurso: ['', Validators.required],
      idCurso: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fecha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tiempo: ['', Validators.required],
      precioCurso: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      tipoCurso: ['', Validators.required],
      salon: ['', Validators.required],
      Descri: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.cursoForm.valid) {
      const cursosGuardados = localStorage.getItem('cursos');
      let cursos = cursosGuardados ? JSON.parse(cursosGuardados) : [];
      cursos.push(this.cursoForm.value);
      localStorage.setItem('cursos', JSON.stringify(cursos));

      this.dialog.open(AlertModalComponent, {
        data: { nombreCurso: this.cursoForm.value.nombreCurso }
      });
      this.cursoForm.reset();
    }
  }
}

