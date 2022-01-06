import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './adm.component';
import { CannonsComponent } from './cannons/cannons.component';
import { PartsComponent } from './parts/parts.component';
import { ShipsComponent } from './ships/ships.component';
const routes: Routes = [
    {
        path: 'adm',
        component: AdmComponent,
        children: [
          { path: 'cannons', component: CannonsComponent },
          { path: 'parts', component: PartsComponent },
          { path: 'ships', component: ShipsComponent }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdmRoutingModule { }
