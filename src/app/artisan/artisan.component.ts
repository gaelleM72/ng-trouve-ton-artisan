import { Component, OnInit } from '@angular/core';
import { ARTISANS } from './artisan-list';
import { Artisan } from './artisans';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})

export class ArtisanComponent implements OnInit {
  artisanList: Artisan[] = ARTISANS;
  artisanSelected: Artisan|undefined;

ngOnInit() {
  console.table(this.artisanList);
}

}
