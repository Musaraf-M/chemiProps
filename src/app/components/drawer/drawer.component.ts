import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Platform, GestureController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements AfterViewInit {

  @ViewChild('drawer', { read: ElementRef}) drawer: ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();

  isOpen = false;
  openHeight = 0;
  value: Number =0;
  symbol:any;
  details:any;
  detail:any;
  data:any;
  data2:any;
  app:any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private plt: Platform, private gestureCtrl: GestureController) {
    this.symbol = route.snapshot.params.symbol;

  let fetchResult = fetch("../../assets/element_details.json"); 
  fetchResult.then(res => 
      res.json()).then(e => { 
          this.data2 = e;
          this.getData(this.symbol);
      }) 
   }
  
  async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.plt.height() /100) * 76;

    const gesture = await this.gestureCtrl.create({
      el:drawer,
      gestureName:'swipe',
      direction: 'y',
      onMove: ev => {
        console.log(ev);
        if (ev.deltaY < -this.openHeight) return;
        drawer.style.transform = `translateY(${ev.deltaY}px)`
        
      },
      onEnd: ev => {
        
        if(ev.deltaY < -50 && !this.isOpen) {
          drawer.style.transistion = '.9s ease-out';
          drawer.style.transform = `translateY(${-this.openHeight}px)`;
          this.openState.emit(true);
          this.isOpen = true;
          
          
        }else if (ev.deltaY > 50 && this.isOpen){
          drawer.style.transistion = '.9s ease-out';
          drawer.style.transform = '';
          this.openState.emit(false);
          this.isOpen = false;
          gesture.enable(true);
        }
        
      }
    });
    gesture.enable(true);
    
    
  }

  toggleDrawer() {
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);

    if(this.isOpen) {
      drawer.style.transistion = '.9s ease-out';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.openState.emit(true);
      this.isOpen = true;
    }else {
      drawer.style.transistion = '.9s ease-out';
      drawer.style.transform = '';
      this.openState.emit(false);
      this.isOpen = false;
    }   

    
  }



  getData(tk){
    this.app = this.data2[tk].uses; 
    console.log(this.app);
    this.details = this.data2[tk].definition; 
  }

  segmentChanged(ev: any) {
    if(ev.detail.value === 'property'){
      this.value = 0;
    }
    else{
      this.value = 1;
    }
  }
  

}

