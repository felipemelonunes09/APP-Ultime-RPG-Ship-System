import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AdmComponent } from "./adm.component";
import { AdmRoutingModule } from "./adm.routing.module";
import { CannonsComponent } from "./cannons/cannons.component";
import { PartsComponent } from "./parts/parts.component";
import { ShipsComponent } from "./ships/ships.component";

@NgModule({
    imports: [
        CommonModule,
        AdmRoutingModule,
        HttpClientModule
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