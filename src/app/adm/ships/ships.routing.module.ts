import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsComponent } from './ships.component';

const routes: Routes = [
    { 
        path: 'ships', component: ShipsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShipsRoutingModule { }
