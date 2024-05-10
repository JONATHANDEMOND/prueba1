import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-laboral',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './laboral.component.html',
  styleUrl: './laboral.component.css'
})
export class LaboralComponent {
  constructor(private servicio:EmpleadosService){}

ruta=inject(ActivatedRoute)
empleado:any
id:any

ngOnInit(): void {
this.servicio.getEmpelado().subscribe(e=>{
  this.empleado=e;
})
}


}
