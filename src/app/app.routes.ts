import { Routes } from '@angular/router';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DetallesMotosComponent } from './pages/detalles-motos/detalles-motos.component';
import { DetallesEmpleadosComponent } from './pages/detalles-empleados/detalles-empleados.component';
import { Error404Component } from './pages/error404/error404.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioEditComponent } from './pages/formulario-edit/formulario-edit.component';

export const routes: Routes = [
    { path: 'vehiculos', component: VehiculoComponent },
    { path: 'gestion', component:GestionComponent},
    { path: 'contactos', component:ContactosComponent},
    { path: 'empleados', component:EmpleadosComponent},
    { path: 'vehiculos/:idVehiculos', component: DetallesMotosComponent},
    { path: 'formulario/:idfomrulario',component:FormularioEditComponent},
    { path: 'empleados/:idempleados', component: DetallesEmpleadosComponent},

    

    { path: '', redirectTo: 'vehiculos', pathMatch: 'full'},
    { path: '**', component: Error404Component}

];
