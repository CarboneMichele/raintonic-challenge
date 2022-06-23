import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/games/games.module').then((m: typeof import('./features/games/games.module')) => m.GamesModule),
    },
    {
        path: '404',
        loadChildren: () =>
            import('./features/not-found/not-found.module').then(
                (m: typeof import('./features/not-found/not-found.module')) => m.NotFoundModule
            ),
    },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
