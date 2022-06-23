import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';

import { Constants } from 'src/app/core/constants/constants';
import { Game } from '../models/game.model';

@Injectable({
    providedIn: 'root',
})
export class GamesService {
    public gamesListSource = new BehaviorSubject<Game[]>([]);
    public updatedGamesList$ = this.gamesListSource.asObservable();

    constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {}

    getGames(): void {
        const storedGames = this.localStorageService.getItem(Constants.LOCAL_STORAGE_DATA_GAMES);
        if (storedGames && storedGames.length) {
            this.updateGamesList(storedGames);
        } else {
            this.fetchGamesFromApi().subscribe((games: Game[]) => {
                this.updateGamesList(games);
                this.localStorageService.setItem({ itemKey: Constants.LOCAL_STORAGE_DATA_GAMES, content: games });
            });
        }
    }

    fetchGamesFromApi(): Observable<Game[]> {
        return this.httpClient.get<Game[]>('/api/games?platform=pc').pipe(
            map((games: Game[]) => {
                return games.map((game: Game) => {
                    return { ...game, isFavorite: false, rating: 0 };
                });
            }),
            catchError(() => of([]))
        );
    }

    updateGamesList(games: Game[]): void {
        this.gamesListSource.next(games);
        this.localStorageService.setItem({ itemKey: Constants.LOCAL_STORAGE_DATA_GAMES, content: games });
    }
}
