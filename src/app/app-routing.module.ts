import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'search-model',
    loadChildren: () => import('./modals/search-model/search-model.module').then( m => m.SearchModelPageModule)
  },
  {
    path: 'display-modal/:symbol/:name/:groupBlock',
    loadChildren: () => import('./modals/display-modal/display-modal.module').then( m => m.DisplayModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
