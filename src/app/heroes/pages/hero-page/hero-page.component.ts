import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, switchScan} from "rxjs";
import {Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(private heroService: HeroService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.heroService.getHeroById(id))
    ).subscribe((hero: Hero | undefined) => {
      if (!hero) return this.router.navigate(['/heroes/list'])
      this.hero = hero;
      return;
    })
  }

  goBack() {
    this.router.navigateByUrl('/heroes/list');
  }
}
