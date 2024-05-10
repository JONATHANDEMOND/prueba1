import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  id:any;
  placa:any;
  anio:any;
  precio:any;
  descripcion:any;

  servicio = inject(VehiculosService)

  guardar( datos: any){
    
    this.servicio.postMoto(datos.value).subscribe()

    
    window.location.reload()

  }
}
