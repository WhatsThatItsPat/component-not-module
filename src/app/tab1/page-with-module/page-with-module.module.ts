import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageWithModulePageRoutingModule } from './page-with-module-routing.module';

import { PageWithModulePage } from './page-with-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageWithModulePageRoutingModule
  ],
  declarations: [PageWithModulePage]
})
export class PageWithModulePageModule {}
