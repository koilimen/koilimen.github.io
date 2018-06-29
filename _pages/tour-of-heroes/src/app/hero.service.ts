import { Injectable } from '@angular/core';
import {Hero} from "./Hero";
import {HEROES} from "./mock_heroes";
import {Observable, of} from "rxjs/index";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
