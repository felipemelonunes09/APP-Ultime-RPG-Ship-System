import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './adm.component';
import { CannonsComponent } from './cannons/cannons.component';
import { CreatePartsComponent } from './parts/create-parts/create-parts.component';
import { ListPartsComponent } from './parts/list-parts/list-parts.component';
import { PartsComponent } from './parts/parts.component';
import { UpdatePartsComponent } from './parts/update-parts/update-parts.component';
import { ShipsComponent } from './ships/ships.component';
import { FormShipsComponent } from './ships/form-ships/form-ships.component';
import { ListShipsComponent } from './ships/list-ships/list-ships.component';
import { ListCannonsComponent } from './cannons/list-cannons/list-cannons.component';
import { FormCannonsComponent } from './cannons/form-cannons/form-cannons.component';
import { UpdateCannonsComponent } from './cannons/update-cannons/update-cannons.component';
import { CreateCannonsComponent } from './cannons/create-cannons/create-cannons.component';

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
          { path: 'cannons', component: CannonsComponent,
            children: [
              { path: 'list', component: ListCannonsComponent },
              { path: 'create', component: CreateCannonsComponent },
              { path: 'update', component: UpdateCannonsComponent }
            ]
          },
          { path: 'ships', component: ShipsComponent,
            children: [
              { path: 'list', component: ListShipsComponent },
              { path: 'create', component: FormShipsComponent }
            ]
          }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdmRoutingModule { }
