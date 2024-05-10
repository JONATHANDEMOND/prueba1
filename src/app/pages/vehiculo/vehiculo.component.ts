import { Component, inject } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [GaleriaComponent,FormsModule],
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.css'
})
export class VehiculoComponent {
  constructor(private servicio:VehiculosService){}

  filtro = 'seleccione'
  motos:any
  categoria:any
ruta=inject(ActivatedRoute)
ngOnInit(): void {
  this.servicio.getMotos().subscribe(m=>{
    this.motos=m;
  }) 
    }
}
