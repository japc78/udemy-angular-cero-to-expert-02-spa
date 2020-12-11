import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero: any = { };


  constructor(
    private activateRoute: ActivatedRoute,
    private heroesService: HeroesService) {
      this.activateRoute.params.subscribe( params => {
        this.hero = this.heroesService.getHero( params.id);
        console.log(this.hero);
    });
  }

}
