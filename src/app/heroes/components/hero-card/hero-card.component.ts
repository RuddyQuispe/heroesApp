import {Component, input, InputSignal, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss'
})
export class HeroCardComponent implements OnInit {
  public hero: InputSignal<Hero> = input.required()

  public ngOnInit(): void {
    if (!this.hero) throw Error('hero no exists')
  }
}
