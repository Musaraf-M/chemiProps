import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchModelPageRoutingModule } from './search-model-routing.module';

import { SearchModelPage } from './search-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchModelPageRoutingModule
  ],
  declarations: [SearchModelPage]
})
export class SearchModelPageModule {}
