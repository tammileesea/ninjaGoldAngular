import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninjaGold';
  gold: number;
  actlog = [];
  constructor(private _httpService: HttpService){
    this.gold=0;
  }
  getHouse(){
    var gold = this._httpService.house();
    console.log("HOUSE GOLD:", gold)
    this.actlog.push(gold);
    this.gold += gold;
  }
  getCave(){
    var gold = this._httpService.cave();
    console.log("CAVE GOLD:", gold)
    this.actlog.push(gold);
    this.gold += gold;
  }
  getFarm(){
    var gold = this._httpService.farm();
    console.log("FARM GOLD:", gold)
    this.actlog.push(gold);
    this.gold += gold;
  }
  getCasino(){
    var gold = this._httpService.casino();
    console.log("CASINO GOLD:", gold)
    this.actlog.push(gold);
    this.gold += gold;
  }
}
