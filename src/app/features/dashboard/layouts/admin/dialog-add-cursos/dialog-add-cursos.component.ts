import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SweetalertService } from '../../../../../core/services/sweetalert.service';
import { CursoService } from '../../../../../core/services/curso.service';
import { Curso } from '../../../../../core/models/curso.interface';

@Component({
  selector: 'app-dialog-add-cursos',
  templateUrl: './dialog-add-cursos.component.html',
  styleUrls: ['./dialog-add-cursos.component.scss']
})
export class DialogAddCursosComponent implements OnInit {
  cursoForm: FormGroup;
  isEditMode: boolean = false;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private dialogRef: MatDialogRef<DialogAddCursosComponent>,
    private sweetalertService: SweetalertService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Curso
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
      precioCurso: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      tipoCurso: ['', Validators.required],
      salon: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(1500)]]
    });

  }

  ngOnInit(): void {
    if (this.data) {
      this.isEditMode = true;
      this.cursoForm.patchValue(this.data);
      if (this.data.fecha) {
        this.cursoForm.controls['fecha'].setValue(new Date(this.data.fecha).toISOString().split('T')[0]);
      }
    }
  }

  onSubmit(): void {
    if (this.cursoForm.valid) {
      const cursoData = { ...this.cursoForm.value };
      if (cursoData.fecha) {
        cursoData.fecha = new Date(cursoData.fecha).toISOString().split('T')[0];
      }

      if (this.isEditMode) {
        this.sweetalertService.ConfirmNotify(
          {
            title: '¿Estás seguro de actualizar ' + cursoData.nombreCurso + '?',
            text: 'Esta acción actualizará los datos del curso.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, actualizar'
          },
          {
            title: 'Curso actualizado',
            text: 'Se ha actualizado el curso ' + cursoData.nombreCurso + ' exitosamente',
            icon: 'success'
          }
        ).then((result) => {
          if (result.isConfirmed) {
            this.cursoService.updateCurso(cursoData.idCurso, cursoData).subscribe(() => {
              this.dialogRef.close(cursoData);
            }, (error) => {
              this.sweetalertService.ErrorNotify({
                title: 'Error',
                text: 'No se pudo actualizar el curso. Inténtelo de nuevo más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
            });
          }
        });
      } else {
        this.sweetalertService.ConfirmNotify(
          {
            title: '¿Estás seguro de agregar ' + cursoData.nombreCurso + '?',
            text: 'Esta acción no se puede deshacer.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, agregar'
          },
          {
            title: 'Curso agregado',
            text: 'El curso ' + cursoData.nombreCurso + ' ha sido agregado exitosamente.',
            icon: 'success'
          }
        ).then((result) => {
          if (result.isConfirmed) {
            this.cursoService.saveCurso(cursoData).subscribe(() => {
              this.dialogRef.close(cursoData);
            }, (error) => {
              this.sweetalertService.ErrorNotify({
                title: 'Error',
                text: 'No se pudo agregar el curso. Inténtelo de nuevo más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
            });
          }
        });
      }
    }
  }


  onCancel(): void {
    this.dialogRef.close();
  }
}
