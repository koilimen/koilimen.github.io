import { Injectable } from '@angular/core';
import {Hero} from "./Hero";
import {HEROES} from "./mock_heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
    return HEROES;
  }
}
