import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayModalPage } from './display-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayModalPageRoutingModule {}
