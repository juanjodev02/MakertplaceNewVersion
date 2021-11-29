import {Component, Input} from '@angular/core';
import { Game } from '../../../core/models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  @Input()
  public games: Game[];

  constructor() { }

}
