import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-modal',
  templateUrl: './display-modal.page.html',
  styleUrls: ['./display-modal.page.scss'],
})
export class DisplayModalPage implements OnInit {

  backdropVisible = false;

  data: any;
  details: any;
  symbol: any;
  name: any;
  groupBlock: any;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private changeDetectorRef: ChangeDetectorRef) { 
    this.symbol = route.snapshot.params.symbol;
    this.name = route.snapshot.params.name;
    console.log(this.name);
    
    this.groupBlock = route.snapshot.params.groupBlock;
  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    
  
  }

  close(){
    this.router.navigate(['home']);
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }
}
