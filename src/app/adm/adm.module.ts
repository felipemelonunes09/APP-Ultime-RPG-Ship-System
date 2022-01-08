import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EmptyListBlankslateComponent } from "../static/empty-list-blankslate/empty-list-blankslate.component";
import { AdmComponent } from "./adm.component";
import { AdmRoutingModule } from "./adm.routing.module";
import { CannonsComponent } from "./cannons/cannons.component";
import { PartsComponent } from "./parts/parts.component";
import { ShipsComponent } from "./ships/ships.component";

@NgModule({
    imports: [
        CommonModule,
        AdmRoutingModule,
        BrowserModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [
        // components here
        AdmComponent,
        CannonsComponent,
        PartsComponent,
        ShipsComponent,
        EmptyListBlankslateComponent
    ],
    providers: []

})

export class AdmModule { }