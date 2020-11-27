import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatIconModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {
}
