import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PairNumbersService } from 'src/app/services/pair-numbers.service';

@Component({
  selector: 'app-pair-numbers',
  templateUrl: './pair-numbers.component.html',
  styleUrls: ['./pair-numbers.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PairNumbersComponent),
      multi: true,
    },
  ],
})
export class PairNumbersComponent {
  @Input() maxX: number = 0;
  @Input() maxY: number = 0;
  x: number = 0;
  y: number = 0;

  errorX: string | null = null;
  errorY: string | null = null;

  constructor(private pairNumberService: PairNumbersService) {}

  private onChange = (value: any) => {
    console.log('onChange', value);
  };
  private onTouched = () => {
    console.log('onTouched');
  };

  writeValue(value: any): void {
    if (value) {
      this.x = value.x ?? 0;
      this.y = value.y ?? 0;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate() {
    this.errorX = null;
    this.errorY = null;
    let found = false;
    if (this.x == 0) {
      this.errorX = 'X must be greater than 0';
      found = true;
    }
    if (this.y == 0) {
      this.errorY = 'Y must be greater than 0';
      found = true;
    }
    if (this.x > this.maxX) {
      this.errorX = `X must be less than or equal to ${this.maxX}`;
      found = true;
    }
    if (this.y > this.maxY) {
      this.errorY = `Y must be less than or equal to ${this.maxY}`;
      found = true;
    }

    if (!found) {
      this.errorX = null;
      this.errorY = null;
      this.onChange({ x: this.x, y: this.y });
    }
    this.onTouched();
  }
}
