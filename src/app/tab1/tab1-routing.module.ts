import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAsComponentComponent } from './page-as-component/page-as-component.component';
import { PageWithModulePage } from './page-with-module/page-with-module.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'page-with-module',
    loadChildren: () => import('./page-with-module/page-with-module.module').then( m => m.PageWithModulePageModule),
    data: {
      whatAmI: 'I am a page lazy loaded with loadChildren.'
    }
  },
  {
    path: 'direct-to-page-in-module',
    component: PageWithModulePage,
    data: {
      whatAmI: 'I am a page within a module, but loaded directly.'
    }
  },
  {
    path: 'page-as-component',
    component: PageAsComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
