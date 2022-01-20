import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CannonsComponent } from './cannons.component';
const routes: Routes = [
    { 
        path: 'cannons', component: CannonsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CannonsRoutingModule { }
