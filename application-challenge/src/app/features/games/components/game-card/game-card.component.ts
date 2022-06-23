import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
    selector: 'apc-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
    @Input() game!: Game;
    @Output() gameEdit = new EventEmitter<Game>();

    constructor() {}

    ngOnInit(): void {
        console.log();
    }

    updateRating(rating: number): void {
        this.emitGameEditEvent({
            ...this.game,
            rating: rating,
        });
    }

    toggleFavorite(isFavorite: boolean): void {
        this.emitGameEditEvent({
            ...this.game,
            isFavorite: !isFavorite,
        });
    }

    emitGameEditEvent(game: Game): void {
        this.gameEdit.emit(game);
    }
}
