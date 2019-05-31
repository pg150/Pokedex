import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MethodCall } from '@angular/compiler';
import { elementAttribute } from '@angular/core/src/render3';
import { Pokemon } from './pokemon';
import { MyComponentComponent } from './my-component/my-component.component';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  afficher: boolean = false;
  
  constructor(private http: HttpClient, public lesPokemons: MyComponentComponent) { }

  /*getStats() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/1').subscribe(poke => {
      this.lesPokemons.pokemons[0].stats = [
                              [poke.stats[0].stat.name, poke.stats[0].base_stat], 
                              [poke.stats[1].stat.name, poke.stats[1].base_stat],
                              [poke.stats[2].stat.name, poke.stats[2].base_stat],
                              [poke.stats[3].stat.name, poke.stats[3].base_stat],
                              [poke.stats[4].stat.name, poke.stats[4].base_stat],
                              [poke.stats[5].stat.name, poke.stats[5].base_stat],
                              ];

      console.log(this.lesPokemons.pokemons[0]);
      });

    

    /*var valeur = 1;

    while (valeur < this.lesPokemons.pokemons.length) {
      this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + (valeur + 1)).subscribe(pokestat => {
        this.lesPokemons.pokemons[valeur].stats = [
          [pokestat.stats[0].stat.name, pokestat.stats[0].base_stat],
          [pokestat.stats[1].stat.name, pokestat.stats[1].base_stat],
          [pokestat.stats[2].stat.name, pokestat.stats[2].base_stat],
          [pokestat.stats[3].stat.name, pokestat.stats[3].base_stat],
          [pokestat.stats[4].stat.name, pokestat.stats[4].base_stat],
          [pokestat.stats[5].stat.name, pokestat.stats[5].base_stat],
          ];
          console.log(this.lesPokemons.pokemons[valeur])
      });
      valeur = valeur + 1;
    }
    this.afficher = true;

}*/
  getStatsss(p: Pokemon) {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + p.id).subscribe(poke => {
      this.lesPokemons.pokemons[p.id-1].stats = [
                              [poke.stats[0].stat.name, poke.stats[0].base_stat], 
                              [poke.stats[1].stat.name, poke.stats[1].base_stat],
                              [poke.stats[2].stat.name, poke.stats[2].base_stat],
                              [poke.stats[3].stat.name, poke.stats[3].base_stat],
                              [poke.stats[4].stat.name, poke.stats[4].base_stat],
                              [poke.stats[5].stat.name, poke.stats[5].base_stat],
                              ];

      console.log(this.lesPokemons.pokemons[p.id-1]);
      });
    }
}