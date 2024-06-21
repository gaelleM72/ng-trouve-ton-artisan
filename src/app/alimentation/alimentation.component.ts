import { Component, OnInit } from '@angular/core';
import { ARTISANS } from '../artisan/artisan-list';
import { Artisan } from '../artisan/artisans';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrl: './alimentation.component.scss'
})
export class AlimentationComponent implements OnInit {
 
  artisanList: Artisan[] = ARTISANS;
  artisanSelected: Artisan|undefined;

  ngOnInit() {
    this.artisanList = ARTISANS.filter((Artisan: { category:string }) => Artisan.category === "Alimentation");
  }

}