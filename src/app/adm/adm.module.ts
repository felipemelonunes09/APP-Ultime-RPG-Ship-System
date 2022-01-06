import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdmComponent } from "./adm.component";
import { AdmRoutingModule } from "./adm.routing.module";
import { CannonsComponent } from "./cannons/cannons.component";
import { PartsComponent } from "./parts/parts.component";
import { ShipsComponent } from "./ships/ships.component";

@NgModule({
    imports: [
        CommonModule,
        AdmRoutingModule
    ],
    exports: [],
    declarations: [
        // components here
        AdmComponent,
        CannonsComponent,
        PartsComponent,
        ShipsComponent
    ],
    providers: []

})

export class AdmModule { }