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

  constructor(private route: ActivatedRoute, private http: HttpClient, private plt: Platform, private gestureCtrl: GestureController) {
    this.symbol = route.snapshot.params.symbol;
    let fetchRes = fetch("../../assets/data.json"); 
   fetchRes.then(res => 
       res.json()).then(d => { 
           this.data = d;
           this.details = this.data.filter(d => d.symbol == this.symbol);
           console.log(this.details);       
  })
   }
  
  async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.plt.height() /100) * 65;

    const gesture = await this.gestureCtrl.create({
      el:drawer,
      gestureName:'swipe',
      direction: 'y',
      onMove: ev => {
        //console.log(ev);
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

  property(){
    this.value = 0;
   
  }

  application() {
    this.value = 1;
  }
}

