import { Component, OnInit } from '@angular/core';

import { Manga } from '../entities';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: `manga-list.component.html`
})
export class MangaListComponent {

  constructor(
    private service:MangaService,
  ){}

  mangaList: Manga[] = [];
  manga!: Manga;

  ngOnInit(): void {
    console.log(this.getMangas());
  }


  getMangas(){
    this.mangaList = this.service.fetchAll();
    return this.mangaList;
  }

  getMangasById(id : number){
    this.manga = this.service.fetchById(id);
    return this.manga;
  }

}
