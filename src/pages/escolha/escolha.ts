import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../modelos/carro';

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

  public carro: Carro;
  public acessorios: [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {

      this.carro = this.navParams.get('carroSelecionado');
      this.acessorios = [
        { nome: 'Freios ABS', preco: 800 },
        { nome: 'Ar-condicionado', preco: 1000 },
        { nome: 'MP3 Player', preco: 500 }
      ];
  }

}