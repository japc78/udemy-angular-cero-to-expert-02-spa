import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() idx: number;

  @Output() heroSelected: EventEmitter<number>;

  constructor(
    private router: Router) {
      this.heroSelected = new EventEmitter();
    }

  ngOnInit(): void {
  }

  handleHero() {
    // console.log(this.idx);
    this.router.navigate( ['/hero', this.idx] );

    // this.heroSelected.emit(this.idx);
  }
}
