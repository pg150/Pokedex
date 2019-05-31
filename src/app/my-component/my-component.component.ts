import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeserviceService } from '../pokeservice.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  /*pokemons = [
    new Pokemon(1, 'Varanidae', ''),
    new Pokemon(2, 'Clebard', ''),
    new Pokemon(3, 'Maestro', ''),
    new Pokemon(4, 'Piaf', ''),
    new Pokemon(5, 'Varanoide', ''),
  ]*/

  constructor(public varibale: PokeserviceService) { }

  ngOnInit() {
    this.varibale.getPokemons();
    //console.log(this.pokemons)
  }

  pokemons: Pokemon[] = this.varibale.tablo2;



  filteredPokemons: Pokemon[];

  poke: Pokemon = new Pokemon(null, '', '', '', [], []);

  numero: number = this.poke.id;

  filterPokemons(event) {
    this.filteredPokemons = [];
    for (let i = 0; i < this.pokemons.length; i++) {
      let poke = this.pokemons[i];
      if (poke.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredPokemons.push(poke);
      }
    }
  }

  unPoke: boolean = false;
  unBouton: boolean = false;

  temp: Pokemon;

  affStats: boolean = false;

  go() {
    if (this.poke.name == '') {
      this.unPoke = false;
      alert("Veuillez choisir un Pokemon valide de la liste");
    }
    else if (this.poke instanceof Pokemon) {
      //this.varibale.getStatsss(this.poke);
      console.log("Il s'agit bien d'un Pokemon")
      this.temp = this.poke; 
      this.unPoke = true;
      this.affStats = false;
      this.varibale.getStatsss(this.poke);
      console.log(this.poke.stats);

    }
    else {
      this.unPoke = false;
      alert("Veuillez choisir un Pokemon valide de la liste");
    }
  }

  afficherStats() {
    if (this.affStats = true && this.unBouton == true) {
      this.affStats = false;
      this.unBouton = false;
    }
    else {
      this.affStats = true;
      this.unBouton = true;
      console.log(this.poke.stats);
    }
  }
}