import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PairNumbersService } from '../services/pair-numbers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  fg: FormGroup;
  error: string | null = '';
  constructor(
    private fb: FormBuilder,
    public pairNumbersService: PairNumbersService
  ) {
    this.fg = this.fb.group({
      description: [''],
      pairsNum: [''],
    });
  }

  public saveData() {
    console.log('saveData', this.fg.value);
    const res = this.pairNumbersService.addPair(
      this.fg.value.pairsNum.x,
      this.fg.value.pairsNum.y,
      this.fg.value.description
    );
    if (!res) {
      this.error = 'Pair already exists';
    }
  }
}
