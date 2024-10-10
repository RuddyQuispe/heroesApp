import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Hero} from "../interfaces/hero.interface";
import {enviroments} from "../../../enviroments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private baseUrl: string = enviroments.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getHero = (): Observable<Array<Hero>> =>
    this.httpClient.get<Array<Hero>>(`${this.baseUrl}/heroes`);

  public getHeroById = (id: string): Observable<Hero | undefined> =>
    this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(e => of(undefined))
      );
}
