import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router ){}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  // handleHero( idx: number ): void {
  //   this.router.navigate( ['/hero', idx] );
  // }
}
