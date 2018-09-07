import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {

                path: '',
                redirectTo:'modulo4',
                pathMatch: 'full'  
                
            },
            
            {

                path: 'modulo1',
                data: { pageTitle: 'Modulo1', roles: ['modulo1'] },
                loadChildren: '../app/modulo1/modulo1.module#Modulo1Module'
            },
            {
                path: 'modulo2',
                data: { pageTitle: 'Modulo2', roles: ['modulo2'] },
                loadChildren: '../app/modulo2/modulo2.module#Modulo2Module'
            },
            {
            path: 'modulo4',
            data: { pageTitle: 'Modulo4', roles: ['modulo4'] },
            loadChildren: '../app/modulo4/modulo4.module#Modulo4Module'
        }
        ]
    },
    { path: '**', redirectTo: '' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });