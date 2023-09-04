import { Injectable } from '@angular/core';

import { Mangas } from './mock-manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }

  fetchAll(){
    return Mangas;
  }

  fetchById(id: number){
    return Mangas[id-1];
  }
}
