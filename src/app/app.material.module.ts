import { 
  MatCommonModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDatepickerModule
} from '@angular/material';

import { NgModule } from '@angular/core';

const MODULES = [
  MatCommonModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDatepickerModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class MaterialModule { }