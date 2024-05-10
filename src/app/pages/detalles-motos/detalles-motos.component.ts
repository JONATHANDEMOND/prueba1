import { Component, inject } from '@angular/core';
import { VehiculosService } from '../../services/vehiculos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles-motos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalles-motos.component.html',
  styleUrl: './detalles-motos.component.css'
})
export class DetallesMotosComponent {
  constructor(private servico:VehiculosService){}
  motos:any
  id:any
  
  ruta = inject(ActivatedRoute)

    ngOnInit(){
  this.ruta.params.subscribe(m=>{
    this.id=m['idVehiculos']

    this.servico.getDatos(this.id).subscribe(d=>{
      this.motos=d;
    })
    
  }) 
    }
}