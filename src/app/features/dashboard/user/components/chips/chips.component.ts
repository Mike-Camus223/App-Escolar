import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoService } from '../../../../../core/services/curso.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent implements OnInit {
  
  @Input() tipoCurso!: string; 
  DataCurso: any;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(cursos => {
      this.DataCurso = cursos.find(chip => chip.tipoCurso === this.tipoCurso);
    });
  }
}
