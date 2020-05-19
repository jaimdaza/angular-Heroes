import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroesBuscados: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      console.log(this.termino);
      this.heroesBuscados = this._heroesService.buscarHeroe(this.termino);
    });
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
  }

}
