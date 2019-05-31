import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { MyComponentComponent } from '../my-component/my-component.component';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats-component.component.html',
  styleUrls: ['./stats-component.component.css']
})
export class StatsComponentComponent implements OnInit {

  ngOnInit() {
    //this.lesStats.getStats();
    //this.lesStats.getStatsss(this.lesPokes.poke);
  }
  data: any;

  constructor(private lesStats: StatsService, private lesPokes: MyComponentComponent) {
      this.data = {
          /*datasets: [{
              data: [
                  45,
                  65,
                  65,
                  49,
                  49,
                  45
              ],*/
              datasets: [{
                data: [
                    this.lesPokes.poke.stats[0][1],
                    this.lesPokes.poke.stats[1][1],
                    this.lesPokes.poke.stats[2][1],
                    this.lesPokes.poke.stats[3][1],
                    this.lesPokes.poke.stats[4][1],
                    this.lesPokes.poke.stats[5][1]
                ],
              backgroundColor: [
                  "#FF6384",
                  "#4BC0C0",
                  "#FFCE56",
                  "#E7E9ED",
                  "#36A2EB",
                  "#36R8EB"
              ],
              label: 'My dataset'
          }],
          labels: [
              "Vitesse",
              "Défense spé",
              "Attaque spé",
              "Défense",
              "Attaque",
              "PV"
          ]
      }
      //console.log(this.lesStats.lesPokemons.pokemons[0]);
      //console.log(this.lesPokes.poke);
      /*console.log(this.lesPokes.poke.stats)
      console.log(this.lesPokes.poke.stats[0])
      console.log(this.lesPokes.poke.stats[0][1])
      console.log(this.lesPokes.poke.stats[1][1])*/


  }


}