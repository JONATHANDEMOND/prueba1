import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  constructor(private servicio:VehiculosService){}
motos:any


  ngOnInit(): void {
this.servicio.getMotos().subscribe(m=>{
  this.motos=m;
}) 
  }

}
