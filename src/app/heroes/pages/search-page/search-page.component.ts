import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Hero} from "../../interfaces/hero.interface";
import {HeroService} from "../../services/hero.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  protected searchInput: FormControl = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;


  constructor(private heroService: HeroService) {
  }

  public searchHero(): void {
    const value: string = this.searchInput.value || '';
    this.heroService.getSuggestions(value).subscribe({
      next: heroes => {
        this.heroes = heroes;
      }
    })
  }

  onSelectedOption(optionSelected: MatAutocompleteSelectedEvent): void {
    console.log(optionSelected);
    if (!optionSelected.option.value)
      return;
    this.selectedHero = optionSelected.option.value;
    this.searchInput.setValue(this.selectedHero!.superhero)
  }
}
