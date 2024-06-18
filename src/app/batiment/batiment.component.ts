import { Component, OnInit } from '@angular/core';
import { ARTISANS } from '../artisan/artisan-list';
import { Artisan } from '../artisan/artisans';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss'
})
export class BatimentComponent implements OnInit {
 
  artisanList: Artisan[] = ARTISANS;
  artisanSelected: Artisan|undefined;

  ngOnInit() {
    this.artisanList = ARTISANS.filter((Artisan: { category:string }) => Artisan.category === "Bâtiment");
  }

}
