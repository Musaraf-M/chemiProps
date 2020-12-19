import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchModelPage } from './search-model.page';

const routes: Routes = [
  {
    path: '',
    component: SearchModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchModelPageRoutingModule {}
