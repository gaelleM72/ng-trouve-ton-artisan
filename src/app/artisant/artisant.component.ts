import { Component, OnInit } from '@angular/core';
import { ARTISANTS } from './artisant-list';
import { Artisant } from './artisants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisant',
  templateUrl: './artisant.component.html',
  styleUrl: './artisant.component.scss'
})

export class ArtisantComponent implements OnInit {
  artisantList: Artisant[] = ARTISANTS;
  artisantSelected: Artisant|undefined;

ngOnInit() {
  console.table(this.artisantList);
}

}
