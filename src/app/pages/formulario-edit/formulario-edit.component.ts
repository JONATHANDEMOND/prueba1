import { Component, inject } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { VehiculosService } from '../../services/vehiculos.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { subscribe } from 'diagnostics_channel';


@Component({
  selector: 'app-formulario-edit',
  standalone: true,
  imports: [FormularioComponent,FormsModule],
  templateUrl: './formulario-edit.component.html',
  styleUrl: './formulario-edit.component.css'
})
export class FormularioEditComponent {
 
motos:any
id:any
placa:any;
anio:any;
precio:any;
descripcion:any;

servicio=inject(VehiculosService)


ngOnInit(): void {
  this.servicio.getDatosVer(this.id).subscribe(p=>{
    this.motos=p;
  })
 
}
  





editar(datos:any){
  
  this.servicio.putMotosEdit(datos.value).subscribe()


}


}
