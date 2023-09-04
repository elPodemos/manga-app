import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Manga } from '../entities';
import { MangaService } from '../manga.service';



@Component({
  selector: 'app-manga-details',
  templateUrl: `manga-details.component.html`
})
export class MangaDetailsComponent {
  
  constructor(
    private route: ActivatedRoute,
    private service:MangaService
    ) {}

  manga!: Manga;
  id: number = Number(this.route.snapshot.paramMap.get('id'));
  mangaSelect: Manga = this.getMangaById(this.id);

  ngOnInit(): void {

}

getMangaById(id : number){
  this.manga = this.service.fetchById(id);
  return this.manga;
}

}
