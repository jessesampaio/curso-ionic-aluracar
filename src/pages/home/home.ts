import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../modelos/carro';
import { HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Carro[];

  constructor(public navCtrl: NavController, 
    private _http: HttpClient,
    private _loadingCtrl: LoadingController,
    private _alertCrtl: AlertController) {

      let loading = this._loadingCtrl.create({
        content: 'Carregando carros...'
      });

      loading.present();

      this._http.get<Carro[]>('http://localhost:8080/api/carro/listaTodosx')
          .subscribe(
            (carros) => {
              this.carros = carros;
              loading.dismiss();
            }
          );
  }
}
