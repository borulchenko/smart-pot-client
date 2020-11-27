import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PotDetailComponent } from './pots/pot-detail/pot-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'pot-detail', component: PotDetailComponent },
  { path: '',   redirectTo: '/pot-detail', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
