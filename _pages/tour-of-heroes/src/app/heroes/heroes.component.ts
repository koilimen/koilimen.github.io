import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero.class'
import {HEROES} from '../mock_heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  hero: Hero = { 
  	id: 12, 
  	name: 'Windstorm' 
  };
  constructor() { }

  ngOnInit() {
  }

}
