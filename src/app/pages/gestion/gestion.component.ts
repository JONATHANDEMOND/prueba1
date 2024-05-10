import { Component, inject } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [TablaComponent,FormularioComponent,CommonModule],
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
