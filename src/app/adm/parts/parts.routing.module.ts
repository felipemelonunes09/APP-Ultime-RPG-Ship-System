import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartsComponent } from './parts.component';
const routes: Routes = [
    { 
        path: 'parts', component: PartsComponent,
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

export class PartsRoutingModule { }
