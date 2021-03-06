import {Component} from 'angular2/core';
import {Hero} from './hero.ts';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-heroes',
    template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="#hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
  styles: [`
    .selected 
    {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes 
    {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li 
    {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover 
    {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover 
    {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text 
    {
      position: relative;
      top: -3px;
    }
    .heroes .badge 
    {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [HeroDetailComponent],
  providers: []
})

export class HeroesComponent implements OnInit 
{
  title = 'Tour of Heroes';
    public heroes: Hero[];
  selectedHero: Hero;

    ngOnInit() {
        this.getHeroes();
    }

    constructor(private _heroservice: HeroService) {
    }

    getHeroes() {
        this._heroservice.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}