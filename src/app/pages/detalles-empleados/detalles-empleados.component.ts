import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles-empleados',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalles-empleados.component.html',
  styleUrl: './detalles-empleados.component.css'
})
export class DetallesEmpleadosComponent {

constructor(private servicio:EmpleadosService){}

ruta=inject(ActivatedRoute)
empleado:any
id:any

ngOnInit(): void {

  this.ruta.params.subscribe(parametro =>{
    this.id=parametro['idempleados']

    this.servicio.getEmpleadoUnico(this.id).subscribe(e=>{
      this.empleado=e;
    })
  
  })

 
 
}



}
