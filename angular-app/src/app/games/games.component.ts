import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
  <h3>Juegos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = ''
  @Output() addFavoriteEvent = new EventEmitter<string>()

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName)
  }
  games = [{
    id: 1,
    name: 'Uncharted 4',
  },
  {
    id: 2,
    name: 'God of War'
  },
  {
    id: 3,
    name: 'Mortal Kombat'
  }
  ];
}
