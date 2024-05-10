import { Component } from '@angular/core';
import { LaboralComponent } from '../../components/laboral/laboral.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [LaboralComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
