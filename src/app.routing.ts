import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app/components/app.component';
import { EncoderComponent } from './app/components/encoder.component';
import { DecoderComponent } from './app/components/decoder.component';

const appRoutes:  Routes = [
	{
		path: 'encoder',
		component: EncoderComponent
	},
	{
		path: 'decoder',
		component: DecoderComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );