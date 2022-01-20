import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './adm.component';
import { CannonsComponent } from './cannons/cannons.component';
import { CreatePartsComponent } from './parts/create-parts/create-parts.component';
import { ListPartsComponent } from './parts/list-parts/list-parts.component';
import { PartsComponent } from './parts/parts.component';
import { UpdatePartsComponent } from './parts/update-parts/update-parts.component';
import { ShipsComponent } from './ships/ships.component';
const routes: Routes = [
    {
        path: 'adm',
        component: AdmComponent,
        children: [
          { path: 'parts', component: PartsComponent, 
            children: [
              { path: 'list', component: ListPartsComponent }, 
              { path: 'create', component: CreatePartsComponent },
              { path: 'update', component: UpdatePartsComponent }
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
