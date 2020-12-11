import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHero( params.termino );
      console.log(this.heroes);
    });
  }

}
