import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    // autoplay: true
  };
  constructor(private storage: Storage, private router: Router) { }


  async finish() {
    await this.storage.set('introComplete', true);
    let options: NavigationExtras = {
      replaceUrl: true
    };
    this.router.navigate(['/'], options);
  }
  ngOnInit() {
  }

}
