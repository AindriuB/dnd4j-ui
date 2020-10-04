import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { SpellsComponent } from './spells/spells.component';

const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'spells', component: SpellsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
