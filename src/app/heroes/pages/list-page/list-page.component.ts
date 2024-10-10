import {Component, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/hero.interface";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent implements OnInit {

  public heores: Array<Hero> = [];


  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHero().subscribe({
      next: value => this.heores = value
    })
  }
}
