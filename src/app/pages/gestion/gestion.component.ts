import { Component, inject } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';

import { CommonModule } from '@angular/common';
import { VehiculosService } from '../../services/vehiculos.service';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [TablaComponent,CommonModule,FormularioComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

servicio=inject(VehiculosService)
motos:any
ngOnInit() {
  this.servicio.getMotos().subscribe(p=>{
    this.motos=p
  })
 
}

}
