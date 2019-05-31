import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MethodCall } from '@angular/compiler';
import { elementAttribute } from '@angular/core/src/render3';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {

  constructor(private http: HttpClient) { }

  ready: boolean;

  tablo: any[] = [];
  tablo2: Pokemon[] = [];


  getPokemons() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokedex/1').subscribe(poke => {
      //console.log(poke);
      poke.pokemon_entries.forEach(element => {
        this.tablo.push(element);
      });

      for (var i = 0; i < this.tablo.length; i++) {
        var temp = new Pokemon(this.tablo[i].entry_number, this.tablo[i].pokemon_species.name,
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(i+1)+'.png',
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'+(i+1)+'.png',
           [], []);
        this.tablo2.push(temp)
      }
      this.ready = true;
    });

  
    /*this.http.get<any>('https://pokeapi.co/api/v2/pokemon/1').subscribe(poke => {
      this.tablo2[0].stats = [[poke.stats[0].stat.name, poke.stats[0].base_stat], 
                              [poke.stats[1].stat.name, poke.stats[1].base_stat],
                              [poke.stats[2].stat.name, poke.stats[2].base_stat],
                              [poke.stats[3].stat.name, poke.stats[3].base_stat],
                              [poke.stats[4].stat.name, poke.stats[4].base_stat],
                              [poke.stats[5].stat.name, poke.stats[5].base_stat],
                              ];

      console.log(this.tablo2[0]);
    });*/
    
    /*var valeur = 0;

    while (valeur < this.tablo2.length) {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + (valeur + 1)).subscribe(pokestat => {
      this.tablo2[valeur].stats = [[pokestat.stats[0].stat.name, pokestat.stats[0].base_stat], 
                              [pokestat.stats[1].stat.name, pokestat.stats[1].base_stat],
                              [pokestat.stats[2].stat.name, pokestat.stats[2].base_stat],
                              [pokestat.stats[3].stat.name, pokestat.stats[3].base_stat],
                              [pokestat.stats[4].stat.name, pokestat.stats[4].base_stat],
                              [pokestat.stats[5].stat.name, pokestat.stats[5].base_stat],
                              ];
    });
    valeur = valeur + 1;
    }*/

  }

  getStatsss(p: Pokemon) {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + p.id).subscribe(poke => {
      this.tablo2[p.id-1].stats = [
                              [poke.stats[0].stat.name, poke.stats[0].base_stat], 
                              [poke.stats[1].stat.name, poke.stats[1].base_stat],
                              [poke.stats[2].stat.name, poke.stats[2].base_stat],
                              [poke.stats[3].stat.name, poke.stats[3].base_stat],
                              [poke.stats[4].stat.name, poke.stats[4].base_stat],
                              [poke.stats[5].stat.name, poke.stats[5].base_stat],
                              ];
      for (var z = 0; z < poke.types.length; z ++) {
        this.tablo2[p.id-1].types.push(poke.types[z].type.name.toUpperCase());
      }

      console.log(poke.types[0].type.name);
      console.log(this.tablo2[p.id-1].types);
      });
    }
};

