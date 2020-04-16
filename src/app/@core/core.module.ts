import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const AngularMaterialModules = [MatDialogModule, MatToolbarModule, MatButtonModule, MatIconModule];
@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, ...AngularMaterialModules]
})
export class CoreModule {}
