import { Component, OnInit } from '@angular/core';
import { ARTISANS } from '../artisan/artisan-list';
import { Artisan } from '../artisan/artisans';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  artisanList: Artisan[] = ARTISANS;
  artisanSelected: Artisan | undefined;

  ngOnInit() {
    this.artisanList = ARTISANS.filter(
      (Artisan: { top: boolean }) => Artisan.top === true
    );
  }
}
