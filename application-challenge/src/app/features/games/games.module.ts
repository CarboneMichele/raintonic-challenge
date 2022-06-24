import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { GameCardComponent } from './components/game-card/game-card.component';
import { RatingFieldComponent } from './components/rating-field/rating-field.component';
import { GamesComponent } from './pages/games/games.component';

@NgModule({
    declarations: [GameCardComponent, RatingFieldComponent, GamesComponent],
    imports: [CommonModule, GamesRoutingModule, SharedModule],
})
export class GamesModule {}
