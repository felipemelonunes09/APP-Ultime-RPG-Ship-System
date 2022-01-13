import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './adm.component';
import { CannonsComponent } from './cannons/cannons.component';
import { FormPartsComponent } from './parts/form-parts/form-parts.component';
import { ListPartsComponent } from './parts/list-parts/list-parts.component';
import { PartsComponent } from './parts/parts.component';
import { ShipsComponent } from './ships/ships.component';
const routes: Routes = [
    {
        path: 'adm',
        component: AdmComponent,
        children: [
          { path: 'parts', component: PartsComponent, 
            children: [
              { path: 'list', component: ListPartsComponent }, 
              { path: 'create', component: FormPartsComponent }
            ]
          },
          { path: 'cannons', component: CannonsComponent },
          { path: 'ships', component: ShipsComponent }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdmRoutingModule { }
