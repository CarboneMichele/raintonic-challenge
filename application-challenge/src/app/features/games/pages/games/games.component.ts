import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotificationsService } from 'src/app/core/services/notifications.service';
import { GamesService } from '../../services/games.service';

import { Game } from '../../models/game.model';
import { Constants } from 'src/app/core/constants/constants';

@Component({
    selector: 'apc-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent implements OnInit, OnDestroy {
    public gamesSubscription!: Subscription;
    public games!: Game[];

    constructor(private gamesService: GamesService, private notificationsService: NotificationsService) {}

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
        this.notificationsService.openSnackBar(Constants.SUCCESS_EDIT, undefined, false);
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
