import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PotDetailComponent } from './pots/pot-detail/pot-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/pot-detail', pathMatch: 'full' },
  { path: 'pot-detail', component: PotDetailComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
