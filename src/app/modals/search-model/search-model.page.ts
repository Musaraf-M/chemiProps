import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { IonSearchbar } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-model',
  templateUrl: './search-model.page.html',
  styleUrls: ['./search-model.page.scss'],
})
export class SearchModelPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;

  private searchedItem: any;
  list: any;
  constructor(public modalController: ModalController, private http: HttpClient, private router: Router) { }

  ngOnInit() {
   let fetchRes = fetch("../../assets/data.json"); 
   fetchRes.then(res => 
       res.json()).then(d => { 
           this.list = d;
           this.searchedItem = this.list;
  })
  }

  closeModal() {
    this.modalController.dismiss();
  }


  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    });
  }

  _ionChange(event) {
    const val = event.target.value;


    this.searchedItem = this.list;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    // this.search.getInputElement().then(item => console.log(item))


  }

  mouseClick(item1,item2,item3) {
      this.router.navigate(['display-modal/', item1,item2,item3]);
      this.closeModal();
    }
  
  }
