import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EmptyListBlankslateComponent } from "../static/empty-list-blankslate/empty-list-blankslate.component";
import { EmptyListBlankslateModule } from "../static/empty-list-blankslate/empty-list-blankslate.module";
import { AdmComponent } from "./adm.component";
import { AdmRoutingModule } from "./adm.routing.module";
import { CannonsComponent } from "./cannons/cannons.component";
import { CannonsModule } from "./cannons/cannons.module";
import { PartsModule } from "./parts/parts.module";
import { ShipsComponent } from "./ships/ships.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        AdmRoutingModule,
        HttpClientModule,
        PartsModule,
        CannonsModule
    ],
    exports: [],
    declarations: [
        // components here
        AdmComponent, 
        ShipsComponent
    ],
    providers: []

})

export class AdmModule { }