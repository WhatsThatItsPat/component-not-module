import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageWithModulePage } from './page-with-module.page';

const routes: Routes = [
  {
    path: '',
    component: PageWithModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWithModulePageRoutingModule {}
