import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

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
    slidesPerView: 1,
    initialSlide: -1,
    speed: 400, 
  };

  tabSlides = {
    slidesPerView: 3.5,
    slidesPerColumn: 2,
    initialSlide: -1,
    speed: 400,
  }


  data: any;
  total:Number = 1;
  currentIndex:Number = 0;
  currentSlide:Number ;
  details: any ;
  constructor(public modalController: ModalController, private router: Router) {
    let fetchRes = fetch("../../assets/data.json"); 
              fetchRes.then(res => 
                  res.json()).then(d => { 
                      this.data = d;
                      console.log(this.data);
                      this.metal('alkali metal');
                  }) 
  }
  
ngOnInit(): void {
    
  }

  slideChanged(slides: IonSlides) {
    slides.length().then((total: number) => {
      this.total = total;
      console.log(this.total);
      
    });
    slides.getActiveIndex().then((index: number) => {
      this.currentSlide = index;
     });
     this.progress(this.currentSlide,this.total);
  } 

  progress(a,b){
    this.currentIndex = a/b;
    console.log(a);
    
  }
  

  openModel() {
    this.modalController.create({component: SearchModelPage}).then((modalElement) => {
      modalElement.present();
    })
  }

  metal(name) {
    this.details = this.data.filter(d => d.groupBlock === name);
    console.log(this.details);
  }

  mouseClick(item1,item2,item3) {
    this.router.navigate(['display-modal/', item1,item2,item3]);
  }
}
