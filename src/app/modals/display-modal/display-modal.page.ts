import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-modal',
  templateUrl: './display-modal.page.html',
  styleUrls: ['./display-modal.page.scss'],
})
export class DisplayModalPage implements OnInit {

  backdropVisible = false;

  property: any;
  data: any;
  details: any;
  symbol: any;
  name: any;
  groupBlock: any;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private changeDetectorRef: ChangeDetectorRef) {
    this.symbol = route.snapshot.params.symbol;
    this.name = route.snapshot.params.name;
    this.groupBlock = route.snapshot.params.groupBlock;
    let fetchRes = fetch("../../assets/data.json"); 
   fetchRes.then(res => 
       res.json()).then(d => { 
           this.data = d;
           this.property = this.data.filter(d => d.symbol == this.symbol);
  });
}


  ngOnInit() {

  }

  ionViewDidEnter() {

  }

  close() {

    let options: NavigationExtras = {
      replaceUrl: true
    };

    this.router.navigate(['home'], options);
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

   
}
