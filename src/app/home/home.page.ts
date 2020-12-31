import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { SearchModelPage } from '../modals/search-model/search-model.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  @ViewChild('slides', { static: true }) slides:IonSlides; 

  slideOpts = {
    slidesPerView: 1.3,
    initialSlide: -1,
    speed: 400,
  };

  tabSlides = {
    slidesPerView: 4.5,
    slidesPerColumn: 2,
    initialSlide: -1,
    speed: 400,
  }

  value:1;
  data: any;
  details: any ;
  constructor(public modalController: ModalController, private router: Router, public loadingController: LoadingController) {
    let fetchRes = fetch("../../assets/data.json"); 
              fetchRes.then(res => 
                  res.json()).then(d => { 
                      this.data = d;
                      console.log(this.data);
                      this.metal('alkali metal','1');
                  }) 
  }
  
  ionViewWillEnter() {
  this.presentLoadingWithOptions();
}
  
 

  openModel() {
    this.modalController.create({component: SearchModelPage}).then((modalElement) => {
      modalElement.present();
    })
  }

  metal(name,val) {
    this.details = this.data.filter(d => d.groupBlock === name);
    this.value = val;
  }

  mouseClick(item1,item2,item3) {
    this.router.navigate(['display-modal/', item1,item2,item3]);
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      cssClass: "loading-spinner",
      spinner: "lines",
      duration: 500,
      message: 'Mining...',
      translucent: true
    });
    return await loading.present();
  }
}
