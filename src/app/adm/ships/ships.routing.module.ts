import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsComponent } from './ships.component';

const routes: Routes = [
    { 
        path: 'parts', component: ShipsComponent,
        /*children: [ 
          { path: 'list', component: ListPartsComponent },
          { path: 'create', component: FormPartsComponent }
        ] */
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShipsRoutingModule { }
