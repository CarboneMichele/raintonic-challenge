import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';

@Component({
    selector: 'apc-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent implements OnInit, OnDestroy {
    public gamesSubscription!: Subscription;
    public games!: Game[];

    constructor(private gamesService: GamesService) {}

    //
    // ─── LIFECYCLE METHODS ──────────────────────────────────────────────────────────
    //

    ngOnInit(): void {
        this.getGames();
    }

    //
    // ─── GAMES LIST METHODS ─────────────────────────────────────────────────────────
    //

    getGames(): void {
        this.gamesService.getGames();
        this.gamesSubscription = this.gamesService.updatedGamesList$.subscribe((games: Game[]) => {
            this.games = games;
        });
    }

    updateGames(updatedGame: Game): void {
        const updatedGameIndex = this.games.findIndex((game: Game) => {
            return game.id === updatedGame.id;
        });
        const updatedGames = [...this.games];
        updatedGames[updatedGameIndex] = updatedGame;
        this.gamesService.updateGamesList(updatedGames);
    }

    trackById(index: number, item: Game): number {
        return item.id;
    }

    //
    // ─── ON DESTROY ─────────────────────────────────────────────────────────────────
    //

    ngOnDestroy(): void {
        if (this.gamesSubscription) {
            this.gamesSubscription.unsubscribe();
        }
    }
}
