import { Component, OnInit } from '@angular/core';
import { ARTISANS } from '../artisan/artisan-list';
import { Artisan } from '../artisan/artisans';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss'
})
export class FabricationComponent implements OnInit {
 
  artisanList: Artisan[] = ARTISANS;
  artisanSelected: Artisan|undefined;
  ARTISANS: any[] = [];

  constructor(private router: Router) {}

  goToArtisan(artisan: Artisan) {
    this.router.navigate(['/artisan', artisan.id]);
  }

  getARTISANS(): any[] {
    return this.ARTISANS;
  }

  ngOnInit() {
    this.artisanList = ARTISANS.filter((Artisan: { category:string }) => Artisan.category === "Fabrication");
  }

  selectArtisan(artisanId: string) {
    const artisan: Artisan|undefined = this.artisanList.find(artisan => artisan.id == +artisanId);
    if(artisan) {
      console.log(`vous avez sélectionné l'artisan ${artisan.name}`);
      this.artisanSelected = artisan;
    } else {
      console.log(`vous avez demandé un artisan qui n'est pas référencé.`);
      this.artisanSelected = artisan;
    }  
  }
}

