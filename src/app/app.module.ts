import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material.module";
import { ArtListComponent } from "./art-list/art-list.component";
import { ArtSearchComponent } from "./art-search/art-search.component";
import { ArtDetailComponent } from "./art-detail/art-detail.component";
import { BusService } from "./shared/bus.service";
import { HttpClientModule } from "@angular/common/http";
import { ArtService } from "./shared/art.service";

@NgModule({
  declarations: [
    AppComponent,
    ArtListComponent,
    ArtSearchComponent,
    ArtDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [BusService, ArtService],
  bootstrap: [AppComponent]
})
export class AppModule {}
