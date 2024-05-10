import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio=inject(VehiculosService)
  moto:any

ngOnInit(){
  this.servicio.getMotos().subscribe(p=>{
    this.moto=p
  })
}

eliminar(id:any){
  this.servicio.deleteMoto(id).subscribe()
  window.location.reload()
}
}
