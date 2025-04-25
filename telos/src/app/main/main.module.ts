import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PairNumbersComponent } from '../components/pair-numbers/pair-numbers.component';

@NgModule({
  exports: [],
  declarations: [MainComponent, PairNumbersComponent],
  imports: [CommonModule, MainRoutingModule, FormsModule, ReactiveFormsModule],
})
export class MainModule {}
