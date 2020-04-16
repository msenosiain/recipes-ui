import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './@recipes/recipes.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const AngularMaterialModules = [MatDialogModule, MatToolbarModule, MatButtonModule, MatIconModule];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    [...AngularMaterialModules],
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      useHash: false,
      enableTracing: false,
      onSameUrlNavigation: 'reload'
    }),
    FlexLayoutModule,
    RecipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
