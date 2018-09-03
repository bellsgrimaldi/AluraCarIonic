import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarroescolhidoPage } from '../carroescolhido/carroescolhido';


/**
 * Generated class for the ListagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-listagem',
 	templateUrl: 'listagem.html',
 })
 export class ListagemPage {

 	listaCarros: any;

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.listaCarros = [
 		'BMW 120i',
 		'Onix 1.6',
 		'Fiesta 2.0',
 		'C3 1.0',
 		'Uno Fire',
 		'Sentra 2.0',
 		'Astra Sedan',
 		'Vectra 2.0 Turbo',
 		'Hilux 4x4',
 		'Montana Cabine Dupla',
 		'Outlander 2.4',
 		'Fusca 1500'
 		];
 	}
 	openPage(page: string) {
        this.navCtrl.push(CarroescolhidoPage);
    }

 }
