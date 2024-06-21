import { Component, OnInit } from '@angular/core';
import { ARTISANS } from '../artisan/artisan-list';
import { Artisan } from '../artisan/artisans';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
 
  artisanList: Artisan[] = ARTISANS;
  artisanSelected: Artisan|undefined;

  ngOnInit() {
    this.artisanList = ARTISANS.filter((Artisan: { category:string }) => Artisan.category === "Services");
  }

}
