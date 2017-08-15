import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app/components/app.component';
import { EncoderComponent } from './app/components/encoder.component';

const appRoutes:  Routes = [
	{
		path: '',
		redirectTo: '/art_logic_app',
		pathMatch: 'full'
	},
	{
		path: 'art_logic_app',
		component: AppComponent
	},
	{
		path: 'encoder',
		component: EncoderComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );