import { Component, inject } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { VehiculosService } from '../../services/vehiculos.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulario-edit',
  standalone: true,
  imports: [FormularioComponent,FormsModule],
  templateUrl: './formulario-edit.component.html',
  styleUrl: './formulario-edit.component.css'
})
export class FormularioEditComponent {
 

id:any
placa:any;
anio:any;
precio:any;
descripcion:any;

servicio=inject(VehiculosService)




editar(datos:any){

  this.servicio.putMotosEdit(datos.value).subscribe()

 
}

guardar( datos: any){
    
  this.servicio.postMoto(datos.value).subscribe()

  
  window.location.reload()

}

}
